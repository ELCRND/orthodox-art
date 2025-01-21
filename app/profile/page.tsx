import { auth } from "@/auth";
import { Metadata } from "next";
import React from "react";
import Profile from "../components/profile/Profile";

const ProfilePage = async () => {
  const session = await auth();
  return (
    <>
      <Profile session={session} />
    </>
  );
};

export default ProfilePage;

export const metadata: Metadata = {
  title: "Профиль",
};
