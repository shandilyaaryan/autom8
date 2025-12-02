import type { Metadata } from "next";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "sonner";
import { Inter, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "autom8",
  description: "Superpower workflow automation",
};

const inter = Inter({
  weight: "500"
})

const poppins = Poppins({
  weight: "300",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter} ${inter} antialiased`}>
        <TRPCReactProvider>
          {children}
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
