import { Link } from "react-router-dom";
import { AuthForm } from "../components/auth-form";
import { useLoginMutation } from "../hooks/useMutation";
import AuthLayout from "../layouts/auth";

const Login = () => {
  return (
    <AuthLayout>
      <div className="bg-white text-gray-800 w-full max-w-sm rounded-md p-4 mt-4 drop-shadow">
        <h2 className="text-2xl font-bold">login</h2>
        <AuthForm hook={useLoginMutation} />
      </div>
      <div className="mt-2 text-sm">
        no account yet?{" "}
        <Link to="/register" className="underline">
          register
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
