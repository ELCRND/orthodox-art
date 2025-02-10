"use client";
//@ts-expect-error Next.js does not yet correctly use the `package.json#exports` field
import { Session } from "next-auth";
//@ts-expect-error Next.js does not yet correctly use the `package.json#exports` field
import { signOut } from "next-auth/react";

import styles from "./profile.module.css";

const Profile = ({ session }: { session: Session | null }) => {
  return (
    <div className={styles.container}>
      <h1>{session?.user?.email}</h1>
      <button onClick={() => signOut({ redirectTo: "/login" })}>Log Out</button>
    </div>
  );
};

export default Profile;
