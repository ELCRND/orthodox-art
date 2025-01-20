"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{"Log In"}</h1>

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

          <button type="submit">{"Log in"}</button>
          <button type="button">Forget Password?</button>
        </form>
      </div>

      <p>
        <span>Don’t Have an account? </span>
        <button>Signup Now.</button>
      </p>
    </div>
  );
};

export default Login;
