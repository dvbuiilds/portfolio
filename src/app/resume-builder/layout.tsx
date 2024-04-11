import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Builder",
  description: "Build professional resume in one go <3",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
