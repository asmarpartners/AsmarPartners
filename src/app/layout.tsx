import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Asmar Partners | Secure AI Adoption Starts with the Workflow",
  description:
    "Asmar Partners helps professional-services firms identify repetitive internal work, apply AI safely, and launch controlled workflow pilots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
