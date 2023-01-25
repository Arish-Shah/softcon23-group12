import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "preact-router";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Logout } from "./pages/logout";
import { Post } from "./pages/post";
import { Register } from "./pages/register";
import { Saved } from "./pages/saved";
import { Sub } from "./pages/sub";
import { UpdatePassword } from "./pages/update-password";
import { UpdateUser } from "./pages/update-user";

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
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
};
