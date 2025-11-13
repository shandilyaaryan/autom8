import { inngest } from "./client";
import { openai } from "@ai-sdk/openai";
import * as Sentry from "@sentry/nextjs";
import { anthropic } from "@ai-sdk/anthropic";
import { google } from "@ai-sdk/google";

import { generateText } from "ai";

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ step }) => {
    console.warn("Hey this is a warning! Careful!");
    console.error("This is error is meant for testing the Sentry logs");
    Sentry.logger.info("User triggered test log", {
      log_source: "sentry_test",
    });
    const { steps: openaisteps } = await step.ai.wrap(
      "openai-generate-text",
      generateText,
      {
        model: openai("gpt-4o-mini"),
        system: "You are a very helpful assisstant",
        prompt: "Hey how are you doing my man? A QQ what is 2+2?",
        experimental_telemetry: {
          isEnabled: true,
          recordInputs: true,
          recordOutputs: true,
        },
      }
    );

    const { steps: geministeps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        model: google("gemini-2.5-flash"),
        system: "You are a very helpful assisstant",
        prompt: "Hey how are you doing my man? A QQ what is 2+2?",
        experimental_telemetry: {
          isEnabled: true,
          recordInputs: true,
          recordOutputs: true,
        },
      }
    );

    const { steps: anthropicsteps } = await step.ai.wrap(
      "anthropic-generate-text",
      generateText,
      {
        model: anthropic("claude-sonnet-4-0"),
        system: "You are a very helpful assisstant",
        prompt: "Hey how are you doing my man? A QQ what is 2+2?",
        experimental_telemetry: {
          isEnabled: true,
          recordInputs: true,
          recordOutputs: true,
        },
      }
    );
    return {
      openaisteps,
      geministeps,
      anthropicsteps,
    };
  }
);
