import { Link } from "react-router-dom";
import { AuthForm } from "../components/auth-form";
import AuthLayout from "../layouts/auth";
import { urls } from "../lib/constants";

const Register = () => {
  return (
    <AuthLayout>
      <div className="bg-white text-gray-800 w-full max-w-sm rounded-md p-4 mt-4 drop-shadow">
        <h2 className="text-2xl font-bold">register</h2>
        <AuthForm url={urls.REGISTER} />
      </div>
      <div className="mt-2 text-sm">
        already have an account?{" "}
        <Link to="/login" className="underline">
          login
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Register;
