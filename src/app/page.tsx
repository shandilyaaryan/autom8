import { caller } from "@/trpc/server";
import React from "react";

const page = async () => {
  const users = await caller.getUsers();
  return <div>{JSON.stringify(users)}</div>;
};

export default page;
