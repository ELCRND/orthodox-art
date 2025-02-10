"use client";

import { useState } from "react";
//@ts-expect-error Next.js does not yet correctly use the `package.json#exports` field
import { signIn } from "next-auth/react";

import GoogleBtn from "./googleBtn/GoogleBtn";
import YandexBtn from "./yandexBtn/YandexBtn";
import LoginForm from "./loginForm/LoginForm";

import styles from "./login.module.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const signInWithGoogle = () => {
    signIn("google", { redirectTo: "/profile" });
  };
  const signInWithYandex = () => {
    signIn("yandex", { redirectTo: "/profile" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{isSignUp ? "Sign Up" : "Log in"}</h1>

        <GoogleBtn handleClick={signInWithGoogle} />
        <YandexBtn handleClick={signInWithYandex} />

        <div className={styles.or}>
          <div></div>
          <span>or</span>
          <div></div>
        </div>

        <LoginForm isSignUp={isSignUp} />
      </div>

      <p>
        <span>
          {isSignUp ? "Already have an account" : "Don’t Have an account?"}{" "}
        </span>
        <button onClick={() => setIsSignUp((p) => !p)}>
          {isSignUp ? "Log In" : "Signup Now."}
        </button>
      </p>
    </div>
  );
};

export default Login;
