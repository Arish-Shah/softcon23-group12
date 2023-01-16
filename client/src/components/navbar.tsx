import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="p-3 flex justify-between items-center">
      <h2 className="text-2xl font-bold">scrolller</h2>
      <Link to="/login" className="hover:underline">
        login
      </Link>
    </nav>
  );
};
