import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSendCommand } from "@/hook/mutation/useSendCommand";

interface CommandForm {
  command: string;
}

const Console = () => {
  const { register, handleSubmit, reset } = useForm<CommandForm>();
  const { mutate } = useSendCommand();

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
  }, []);

  useEffect(() => {
    if (consoleRef.current && logs.length > 0) {
      const element = consoleRef.current as HTMLDivElement;

      if (element.lastChild) {
        (element.lastChild as HTMLDivElement).scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [consoleRef, logs.length]);

  return (
    <div className="space-y-4">
      <div
        ref={consoleRef}
        className="bg-slate-800 rounded font-jetBrains text-white p-4 max-h-96 overflow-auto"
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
