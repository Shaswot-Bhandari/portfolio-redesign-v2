import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Shaswot Bhandari | Latent Space",
  description: "Portfolio of Shaswot Bhandari. Designer & Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${jetbrains.variable} antialiased selection:bg-accent selection:text-white relative bg-dot-grid`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Preloader />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
