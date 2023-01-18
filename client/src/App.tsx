import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Post from "./pages/post";
import Register from "./pages/register";
import Sub from "./pages/sub";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/r/:name", element: <Sub />, loader: ({ params }) => params.name },
  {
    path: "/post/:id",
    element: <Post />,
    loader: ({ params }) => params.id,
  },
]);

const App = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
      <Toaster />
    </Fragment>
  );
};

export default App;
