import { Navbar } from "../components/navbar";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="container mx-auto p-3">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default RootLayout;
