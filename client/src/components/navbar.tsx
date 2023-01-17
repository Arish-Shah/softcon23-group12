import { Link } from "react-router-dom";
import { useMeQuery } from "../hooks/useQuery";

export const Navbar = () => {
  const { data, isLoading } = useMeQuery();

  let links = null;
  if (isLoading) {
    links = skeleton;
  } else if (data?.ok) {
    links = (
      <div className="flex">
        <Link to="/saved" className="hover:underline mr-4">
          saved
        </Link>
        <Link to="/logout" className="hover:underline mr-4">
          logout
        </Link>
        <Link to="/" className="font-bold">
          u/{data.username}
        </Link>
      </div>
    );
  } else {
    links = (
      <Link to="/login" className="hover:underline">
        login
      </Link>
    );
  }

  return (
    <nav className="p-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        scrolller
      </Link>
      {links}
    </nav>
  );
};

const skeleton = (
  <div className="flex animate-pulse">
    <div className="w-16 h-2 bg-gray-600 rounded mr-4"></div>
    <div className="w-16 h-2 bg-gray-600 rounded"></div>
  </div>
);
