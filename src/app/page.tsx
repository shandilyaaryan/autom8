"use client";
import Logout from "./logout";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const Page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const testAi = useMutation(trpc.testAI.mutationOptions());

  const create = useMutation(trpc.createWorkflows.mutationOptions({
    onSuccess: () => {
      toast.success("Job queued")
    }
  }))
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      Protected Server Component
      <div>{JSON.stringify(testAi.data, null, 2)}</div>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>Create Workflow</Button>
      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>Test AI</Button>
      <Logout />
    </div>
  );
};

export default Page;
