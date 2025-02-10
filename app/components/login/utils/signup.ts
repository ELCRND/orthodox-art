import { toast } from "react-toastify";

export const handleSignUp = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "omit",
    });

    if (res.status === 400) {
      toast((await res.json()).errorMessage);
    } else if (res.status === 201) {
      toast("Пользователь успешно создан");
    }
  } catch (error) {
    toast.error("Произошла ошибка при регистрации");
    console.error(error);
  }
};
