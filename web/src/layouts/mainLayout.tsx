import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between gap-8">
        <div>
          <Navbar />
          <div className="my-8 space-y-8">{children}</div>
        </div>
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default MainLayout;
