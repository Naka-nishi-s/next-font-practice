import type { Metadata } from "next";
import { Merriweather } from "next/font/google";

const Merriweather400 = Merriweather({
  weight: "400",
  preload: false,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={Merriweather400.className}>{children}</body>
    </html>
  );
}
