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
  title: "Shaswot Bhandari | Student Designer & Developer in Kathmandu",
  description:
    "Shaswot Bhandari is a student designer and developer based in Kathmandu, Nepal — exploring UI/UX design, graphic design, and web development. Open to freelance, part-time, and full-time opportunities.",
  keywords: [
    "UI/UX designer Nepal",
    "graphic designer Kathmandu",
    "web developer Nepal",
    "student designer developer Nepal",
    "freelance designer Kathmandu",
    "frontend developer Nepal",
  ],
  alternates: {
    canonical: "https://www.shaswotbhandari.com.np",
  },
  openGraph: {
    title: "Shaswot Bhandari | Student Designer & Developer in Kathmandu",
    description:
      "Shaswot Bhandari is a student designer and developer based in Kathmandu, Nepal — exploring UI/UX design, graphic design, and web development. Open to freelance, part-time, and full-time opportunities.",
    url: "https://shaswotbhandari.com.np",
    siteName: "Shaswot Bhandari",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaswot Bhandari | Student Designer & Developer in Kathmandu",
    description:
      "Shaswot Bhandari is a student designer and developer based in Kathmandu, Nepal — exploring UI/UX design, graphic design, and web development. Open to freelance, part-time, and full-time opportunities.",
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
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.shaswotbhandari.com.np/#person",
                  name: "Shaswot Bhandari",
                  jobTitle: "Student Designer & Developer",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Kathmandu",
                    addressCountry: "Nepal",
                  },
                  url: "https://www.shaswotbhandari.com.np",
                  sameAs: ["https://github.com/Shaswot-Bhandari"],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.shaswotbhandari.com.np/#website",
                  name: "Shaswot Bhandari Portfolio",
                  url: "https://www.shaswotbhandari.com.np",
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://www.shaswotbhandari.com.np/#profile-page",
                  name: "Shaswot Bhandari — Student Designer & Developer",
                  description:
                    "Portfolio of a student designer and developer from Kathmandu, Nepal, focused on UI/UX, graphic design, and web development",
                  url: "https://www.shaswotbhandari.com.np",
                  about: {
                    "@id": "https://www.shaswotbhandari.com.np/#person",
                  },
                  isPartOf: {
                    "@id": "https://www.shaswotbhandari.com.np/#website",
                  },
                },
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
