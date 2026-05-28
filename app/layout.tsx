import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeBackground from "@/components/ThemeBackground";
import SplashCursorWrapper from "@/components/SplashCursorWrapper";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-oswald",
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-source-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shaswotbhandari.com.np"),
  title: "Shaswot Bhandari | Designer & Developer",
  description:
    "Portfolio of Shaswot Bhandari — web developer and designer based in Nepal. Explore my projects, skills, and get in touch.",
  openGraph: {
    title: "Shaswot Bhandari | Designer & Developer",
    description:
      "Portfolio of Shaswot Bhandari — web developer and designer based in Nepal. Explore my projects, skills, and get in touch.",
    url: "https://shaswotbhandari.com.np",
    siteName: "Shaswot Bhandari",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shaswot Bhandari | Designer & Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaswot Bhandari | Designer & Developer",
    description:
      "Portfolio of Shaswot Bhandari — web developer and designer based in Nepal. Explore my projects, skills, and get in touch.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${oswald.variable} ${sourceSans.variable} font-sans antialiased selection:bg-accent selection:text-white relative bg-background`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SplashCursorWrapper />
          <ThemeBackground />
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shaswot Bhandari",
              url: "https://shaswotbhandari.com.np",
              jobTitle: "Web Developer & Designer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kathmandu",
                addressCountry: "NP",
              },
              sameAs: [
                "https://github.com/ShaswotBh",
                "https://www.linkedin.com/in/shaswot-bhandari-508b73283",
                "https://www.behance.net/shaswotbhandari",
              ],
            }),
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
