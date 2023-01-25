import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "preact-router";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

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
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
};
