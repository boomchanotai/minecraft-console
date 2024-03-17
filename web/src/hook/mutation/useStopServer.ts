import { stopServer } from "@/api/spigot";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const useStopServer = () => {
  return useMutation({
    mutationFn: () => stopServer(),
    onSuccess: () => {
      toast("Stopping Server.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export { useStopServer };
