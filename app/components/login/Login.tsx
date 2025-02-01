"use client";

// @ts-expect-error: Let's ignore a compile error like this unreachable code
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styles from "./login.module.css";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Login = () => {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (state) {
        setLoading(true);
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data.email, password: data.password }),
          credentials: "omit",
        });

        if (res.status === 400) {
          toast((await res.json()).warningMessage);
        } else if (res.status === 201) {
          toast("Пользователь успешно создан");
        }
      } else {
        signIn("credentials", { ...data, redirect: false }).then((res) => {
          if (!res?.error) {
            toast("Вход успешно выполнен");
            router.replace("/profile");
          } else toast("Логин или пароль не совпадают");
        });
      }
    } catch (error) {
      throw new Error(error as string).message;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{state ? "Sign Up" : "Log in"}</h1>

        <button onClick={() => signIn("google", { redirectTo: "/" })}>
          <span>
            <Image src={"/google.svg"} alt="google" width={22} height={22} />
          </span>
          <span>Continue with Google</span>
        </button>
        <button disabled={true}>
          <span>
            <Image src={"/yandex.svg"} alt="yandex" width={22} height={22} />
          </span>
          <span>Continue with Yandex</span>
        </button>

        <div className={styles.or}>
          <div></div>
          <span>or</span>
          <div></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            required
            placeholder="Email Address"
            {...register("email", {
              required: true,
            })}
          />
          <input
            type="password"
            required
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
          />
          {state && (
            <input
              type="password"
              required
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                validate: (value) => value === getValues("password"),
                required: true,
              })}
            />
          )}

          {errors.confirmPassword && (
            <span className={styles.passwordError}>
              Пароли должны совпадать
            </span>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Wait" : state ? "Sign Up" : "Log In"}
          </button>
          <button type="button">Forget Password?</button>
        </form>
      </div>

      <p>
        <span>
          {state ? "Already have an account" : "Don’t Have an account?"}{" "}
        </span>
        <button onClick={() => setState((p) => !p)}>
          {state ? "Log In" : "Signup Now."}
        </button>
      </p>
    </div>
  );
};

export default Login;
