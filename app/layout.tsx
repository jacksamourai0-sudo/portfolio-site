import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ilyass Elharzli - Software Builder",
  description: "Building real solutions that work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dusty-white text-text-dark font-space-grotesk">
        {children}
      </body>
    </html>
  );
}