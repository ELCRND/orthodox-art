import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { handleSignUp } from "../utils/signup";
import { handleSignIn } from "../utils/signIn";

import styles from "./loginForm.module.css";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const LoginForm = ({ isSignUp }: { isSignUp: boolean }) => {
  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    if (isSignUp) {
      await handleSignUp(data);
    } else {
      await handleSignIn(data);
    }
    setLoading(false);
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
      {isSignUp && (
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
        <span className={styles.passwordError}>Пароли должны совпадать</span>
      )}

      <button type="submit" disabled={loading}>
        {loading ? "Wait" : isSignUp ? "Sign Up" : "Log In"}
      </button>
      <button type="button">Forget Password?</button>
    </form>
  );
};

export default LoginForm;
