import { sendCommand } from "@/api/rcon";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const useSendCommand = () => {
  return useMutation({
    mutationFn: (command: string) => sendCommand(command),
    onSuccess: () => {
      toast("Command Sent!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export { useSendCommand };
