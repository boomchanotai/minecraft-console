import { getPlayers } from "@/api/rcon";
import { useQuery } from "@tanstack/react-query";

const usePlayers = () => {
  return useQuery({
    queryKey: ["players"],
    queryFn: () => getPlayers(),
    refetchInterval: 5000,
  });
};

export { usePlayers };
