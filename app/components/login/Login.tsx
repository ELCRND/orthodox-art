"use client";
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  const [state, setState] = useState(false);
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
        <button>
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

        <form action="">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {state && (
            <input
              type="password"
              name="password"
              placeholder="Confirm your password"
              required
            />
          )}

          <button type="submit">{state ? "Sign Up" : "Log In"}</button>
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
