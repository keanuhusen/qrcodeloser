import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IP",
  description: "IP address testing page.",
};

export default function GotchaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      {children}
    </section>
  );
}
