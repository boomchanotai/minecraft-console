import { serverOnlineStatus } from "@/api/rcon";
import { useQuery } from "@tanstack/react-query";

const useServerOnlineStatus = () => {
  return useQuery({
    queryKey: ["serverOnlineStatus"],
    queryFn: () => serverOnlineStatus(),
    refetchInterval: 10000,
  });
};

export default useServerOnlineStatus;
