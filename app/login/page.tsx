import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Login from "../components/login/Login";

const LoginPage = async () => {
  const session = await auth();
  if (session?.user) redirect("/profile");
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
