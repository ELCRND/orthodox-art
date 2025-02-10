//@ts-expect-error Next.js does not yet correctly use the `package.json#exports` field
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

export const handleSignIn = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "omit",
    });

    if (res.status === 400) {
      toast.error((await res.json()).errorMessage);
    } else if (res.status === 200) {
      signIn("credentials", { ...data, redirectTo: "/profile" }).then(() => {
        toast.success("Вход успешно выполнен");
      });
    }
  } catch (error) {
    toast.error("Произошла ошибка при входе");
    console.error(error);
  }
};
