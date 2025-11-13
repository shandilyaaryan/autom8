import type { Metadata } from "next";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "autom8",
  description: "Superpower workflow automation",
};

const myFont = localFont({
  src: "./fonts/googlefont.ttf",
});

const poppins = Poppins({
  weight: "300"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins} ${poppins} antialiased`}>
        <TRPCReactProvider>
          {children}
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
