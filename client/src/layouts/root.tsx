import { Navbar } from "../components/navbar";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="p-3">{children}</div>
    </div>
  );
};

export default RootLayout;
