"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const Logout = async () => {
  return <Button onClick={() => authClient.signOut()}>Logout</Button>;
};

export default Logout;
