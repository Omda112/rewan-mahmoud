import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kanzaya — UI/UX Designer",
  description: "Kanzaya's UI/UX design portfolio featuring concept projects.",
  openGraph: {
    title: "Kanzaya — UI/UX Designer",
    description: "Kanzaya's UI/UX design portfolio featuring concept projects.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kanzaya — UI/UX Designer",
    description: "Kanzaya's UI/UX design portfolio featuring concept projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
