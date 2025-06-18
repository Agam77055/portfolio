import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Multiple weights for flexibility
});

export const metadata: Metadata = {
  title: {
    default: "Agam Harpreet Singh | AI & Full-Stack Developer",
    template: "%s | Agam Harpreet Singh"
  },
  description:
    "I'm Agam Harpreet Singh, a 3rd-year AI & Data Science undergrad at IIT Jodhpur. Explore my projects in full-stack web development, machine learning, DevOps and more.",
  openGraph: {
    title: "Agam Harpreet Singh | AI & Full-Stack Developer",
    description:
      "I'm Agam Harpreet Singh, a 3rd-year AI & Data Science undergrad at IIT Jodhpur. Explore my projects in full-stack web development, machine learning, DevOps and more.",
    url: "https://agamhsingh.me",
    images: [
      {
        url: "/assets/images/IMG_7656.jpg",
        width: 1200,
        height: 630,
        alt: "Agam Harpreet Singh - AI & Full-Stack Developer"
      }
    ],
    siteName: "agamhsingh.me"
  },
  twitter: {
    card: "summary_large_image",
    title: "Agam Harpreet Singh | AI & Full-Stack Developer",
    description:
      "I'm Agam Harpreet Singh, a 3rd-year AI & Data Science undergrad at IIT Jodhpur. Explore my projects in full-stack web development, machine learning, DevOps and more.",
    creator: "@agamhsingh"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
