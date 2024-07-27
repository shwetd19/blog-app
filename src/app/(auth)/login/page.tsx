import LoginForm from "@/components/LoginForm/LoginForm";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Login Page",
  description: "Login description",
};

const LoginPage: React.FC = async () => {
  const session = await auth();

  // Redirect to /addpost if the user has a valid session
  if (session) {
    redirect("/addpost");
  }

  return <LoginForm />;
};

export default LoginPage;
