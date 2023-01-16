type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-2">
      <h2 className="text-2xl font-bold">scrolller</h2>
      {children}
    </div>
  );
};

export default AuthLayout;
