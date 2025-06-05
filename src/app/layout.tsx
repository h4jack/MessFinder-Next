import type { Metadata } from "next";
import "@/styles/index.css";
import { Header, Footer } from "@/components/layout";
import brandInfo from "@/data/content/brandInfo";

export const metadata: Metadata = {
  title: brandInfo.name,
  description: brandInfo.details,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
