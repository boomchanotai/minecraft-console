import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSendCommand } from "@/hook/mutation/useSendCommand";
import useServerOnlineStatus from "@/hook/queries/useServerOnlineStatus";

interface CommandForm {
  command: string;
}

const Console = () => {
  const { register, handleSubmit, reset } = useForm<CommandForm>();
  const { mutate } = useSendCommand();

  const { data: serverOnlineStatus, isLoading } = useServerOnlineStatus();

  const consoleRef = useRef(null);
  const [logs, setLogs] = useState<string[]>([]);

  const onSubmit = useCallback(
    (data: CommandForm) => {
      mutate(data.command);
      reset();
    },
    [mutate, reset]
  );

  useEffect(() => {
    if (isLoading || !serverOnlineStatus.status) return;

    const sse = new EventSource(
      `${import.meta.env.VITE_API_URL}/spigot/console`
    );

    function getRealtimeData(data: string[]) {
      setLogs((prev) => [...new Set([...prev, ...data])]);
    }

    sse.onmessage = (e) => getRealtimeData(JSON.parse(e.data));

    sse.onerror = () => {
      sse.close();
    };

    return () => {
      sse.close();
    };
  }, [isLoading, serverOnlineStatus]);

  useEffect(() => {
    if (consoleRef.current && logs.length > 0) {
      const element = consoleRef.current as HTMLDivElement;

      element.scrollTop = element.scrollHeight;
    }
  }, [consoleRef, logs.length]);

  return (
    <div className="space-y-4">
      <div
        ref={consoleRef}
        className="bg-slate-800 rounded font-jetBrains text-white p-4 max-h-96 overflow-auto scroll-smooth"
      >
        {logs.map((log, index) => (
          <div key={index} className="font-jetBrains">
            {log}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row gap-4">
        <Input
          type="text"
          placeholder="Command"
          {...register("command", {
            required: true,
          })}
        />
        <Button>Send</Button>
      </form>
    </div>
  );
};

export default Console;
