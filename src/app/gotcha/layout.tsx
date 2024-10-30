import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gotcha",
  description: "You have been got!",
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
