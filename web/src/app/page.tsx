import Container from "@/components/Container";
import Console from "@/components/dashboard/console";
import InfoCard from "@/components/dashboard/infoCard";
import MainLayout from "@/layouts/mainLayout";

const Home = () => {
  return (
    <>
      <Container className="grid grid-cols-3 gap-8">
        <InfoCard title="Status" description="Server Status">
          <div className="text-green-500">Online</div>
        </InfoCard>
        <InfoCard title="Players" description="Online Players">
          <div>10/50</div>
        </InfoCard>
        <InfoCard title="EET" description="Total Currency">
          <div>50$</div>
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
