import { AuthForm } from "@/components/auth-form";
import { useRegisterMutation } from "@/hooks/useMutation";
import AuthLayout from "@/layouts/auth";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <AuthLayout>
      <div className="bg-white text-gray-800 w-full max-w-sm rounded-md p-4 mt-4 drop-shadow">
        <h2 className="text-2xl font-bold">register</h2>
        <AuthForm hook={useRegisterMutation} />
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
