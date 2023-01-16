import { AuthForm } from "@/components/auth-form";
import { title } from "@/lib/messages";
import Link from "next/link";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-2">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="bg-white text-gray-800 w-full max-w-sm rounded-md p-4 mt-4 drop-shadow">
        <h2 className="text-2xl font-bold">login</h2>
        <AuthForm />
      </div>
      <div className="mt-2 text-sm">
        no account yet?{" "}
        <Link href="/register" className="underline">
          register
        </Link>
      </div>
    </div>
  );
};

export default Register;
