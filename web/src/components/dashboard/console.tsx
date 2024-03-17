import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { useSendCommand } from "@/hook/mutation/useSendCommand";

interface CommandForm {
  command: string;
}

const Console = () => {
  const { register, handleSubmit, reset } = useForm<CommandForm>();
  const { mutate } = useSendCommand();

  const onSubmit = useCallback(
    (data: CommandForm) => {
      mutate(data.command);
      reset();
    },
    [mutate, reset]
  );

  return (
    <div className="space-y-4">
      <div className="bg-slate-800 rounded font-jetBrains text-white p-4 max-h-96 overflow-auto">
        <div className="font-jetBrains">dasd</div>
        <div className="font-jetBrains">dasd</div>
        <div className="font-jetBrains">dasd</div>
        <div className="font-jetBrains">dasd</div>
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
