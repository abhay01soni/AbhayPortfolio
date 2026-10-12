import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhay Soni | Full-Stack Developer (MERN)",
  description:
    "Abhay Soni - Computer Science Engineering student and aspiring full-stack developer passionate about building modern, scalable, and user-friendly web applications using the MERN stack.",
  keywords: [
    "Abhay Soni",
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "Portfolio",
    "Frontend Developer",
    "Software Engineer"
  ],
  authors: [{ name: "Abhay Soni" }],
  creator: "Abhay Soni",
  metadataBase: new URL("https://abhaysoni.dev"),
  openGraph: {
    title: "Abhay Soni | Full-Stack Developer Portfolio",
    description: "Turning ideas into digital experiences with MERN Stack & Next.js.",
    url: "https://abhaysoni.dev",
    siteName: "Abhay Soni Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Soni | Full-Stack Developer",
    description: "Turning ideas into digital experiences with MERN Stack & Next.js.",
    creator: "@abhaysoni_dev",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('portfolio-theme');
                  const theme = storedTheme || 'dark';
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-[var(--accent)] selection:text-[#F1EEFF]">
        {children}
      </body>
    </html>
  );
}
