import { Link } from "react-router-dom";

export const Navbar = () => {
  const isAuth = false;

  const links = isAuth ? (
    <>
      <Link to="/saved" className="hover:underline mr-4">
        saved
      </Link>
      <Link to="/logout" className="hover:underline mr-4">
        logout
      </Link>
      <Link to="/" className="hover:underline font-bold">
        u/luke
      </Link>
    </>
  ) : (
    <Link to="/login" className="hover:underline">
      login
    </Link>
  );

  return (
    <nav className="p-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        scrolller
      </Link>
      <div className="flex">{links}</div>
    </nav>
  );
};
