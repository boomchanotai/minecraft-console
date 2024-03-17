import Container from "@/components/Container";
import Console from "@/components/dashboard/console";
import MainLayout from "@/layouts/mainLayout";

const ConsolePage = () => {
  return (
    <>
      <Container>
        <Console />
      </Container>
    </>
  );
};

export default ConsolePage;

// Layout
export const Layout = MainLayout;
