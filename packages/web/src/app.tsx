import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "preact-router";
import { Toaster } from "react-hot-toast";
import { Error } from "./pages/error";
import { Home } from "./pages/feed/home";
import { Login } from "./pages/auth/login";
import { Logout } from "./pages/auth/logout";
import { Post } from "./pages/post";
import { Register } from "./pages/auth/register";
import { Saved } from "./pages/feed/saved";
import { Sub } from "./pages/feed/sub";
import { UpdatePassword } from "./pages/me/update-password";
import { UpdateUser } from "./pages/me/update-user";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Register path="/register" />
        <Sub path="/sub/:name" />
        <Saved path="/saved" />
        <Post path="/post/:id" />
        <UpdateUser path="/me/update" />
        <UpdatePassword path="/me/password" />
        <Logout path="/me/logout" />
        <Error default />
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
};
