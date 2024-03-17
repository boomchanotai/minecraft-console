import { startServer } from "@/api/spigot";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const useStartServer = () => {
  return useMutation({
    mutationFn: () => startServer(),
    onSuccess: () => {
      toast("Starting Server.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export { useStartServer };
