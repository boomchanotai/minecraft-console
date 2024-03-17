import Container from "@/components/Container";
import Console from "@/components/dashboard/console";
import InfoCard from "@/components/dashboard/infoCard";
import { Button } from "@/components/ui/button";
import { useStartServer } from "@/hook/mutation/useStartServer";
import { useStopServer } from "@/hook/mutation/useStopServer";
import { usePlayers } from "@/hook/queries/usePlayers";
import useServerOnlineStatus from "@/hook/queries/useServerOnlineStatus";
import MainLayout from "@/layouts/mainLayout";

const Home = () => {
  const { data: serverOnlineStatus, isLoading } = useServerOnlineStatus();
  const { data: players, isLoading: isPlayersLoading } = usePlayers();
  const { mutate: startServer } = useStartServer();
  const { mutate: stopServer } = useStopServer();

  return (
    <>
      <Container className="grid grid-cols-3 gap-8">
        <InfoCard title="Status" description="Server Status">
          {isLoading ? (
            <div>Loading...</div>
          ) : serverOnlineStatus?.status ? (
            <div className="text-green-500 font-bold">Online</div>
          ) : (
            <div className="text-red-500 font-bold">Offline</div>
          )}
        </InfoCard>
        <InfoCard title="Players" description="Online Players">
          {isPlayersLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {players?.players} / {players?.maxPlayers}
            </div>
          )}
        </InfoCard>
        <InfoCard title="Action">
          <div className="flex flex-row gap-4">
            <Button
              className="w-full"
              disabled={isLoading || serverOnlineStatus?.status}
              onClick={() => startServer()}
            >
              Start
            </Button>
            <Button
              className="w-full"
              disabled={isLoading || !serverOnlineStatus?.status}
              onClick={() => stopServer()}
            >
              Stop
            </Button>
          </div>
        </InfoCard>
      </Container>
      <Container>
        <Console />
      </Container>
    </>
  );
};

export default Home;

// Layout
export const Layout = MainLayout;
