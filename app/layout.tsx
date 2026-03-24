import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { siteContent } from "@/data/site";
import { withBasePath } from "@/lib/site-path";

const headingFont = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.siteUrl),
  title: `${siteContent.name} | ${siteContent.headline}`,
  description: siteContent.intro,
  keywords: [
    "Data Recovery Engineer",
    "Software Engineer",
    "R&D Engineer",
    "Hardware Diagnostics",
    "Apple Device Recovery",
    "Technical Portfolio",
  ],
  openGraph: {
    title: `${siteContent.name} | ${siteContent.headline}`,
    description: siteContent.intro,
    type: "website",
    images: [`${siteContent.siteUrl}/og-image.svg`],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.name} | ${siteContent.headline}`,
    description: siteContent.intro,
    images: [`${siteContent.siteUrl}/og-image.svg`],
  },
  icons: {
    icon: withBasePath("/icon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${headingFont.variable} ${monoFont.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <div
            className="page-atmosphere"
            aria-hidden="true"
            style={{ "--page-bg-image": `url(${siteContent.pageBackgroundImage})` } as React.CSSProperties}
          />
          <Navbar items={siteContent.navigation} name={siteContent.name} />
          <main id="main-content">{children}</main>
          <Footer footerText={siteContent.footerText} />
        </div>
      </body>
    </html>
  );
}
