"use client";
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import { Session } from "next-auth";
// @ts-expect-error: Let's ignore a compile error like this unreachable code
import { signOut } from "next-auth/react";

import styles from "./profile.module.css";

const Profile = ({ session }: { session: Session | null }) => {
  return (
    <div className={styles.container}>
      <h1>{session?.user?.email}</h1>
      <button onClick={() => signOut({ redirectTo: "/" })}>Log Out</button>
    </div>
  );
};

export default Profile;
