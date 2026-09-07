import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Caveat, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const script = Caveat({ weight: "700", subsets: ["latin"], variable: "--font-script", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ weight: "400", subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sajadhussain.tech"),
  title: "Sajad Hussain Malla · Backend Engineer",
  description: "Backend engineering, cybersecurity, and AI-agentic systems. Sajad Hussain Malla (Jin), Software Engineer Intern at Nippon Toyota, CUSAT, and 12x national hackathon winner.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sajad Hussain Malla · Backend Engineer",
    description: "Production systems. Security research. AI & agentic tools. Explore selected work by Sajad Hussain Malla.",
    type: "website", locale: "en_IN", url: "/", siteName: "Sajad Hussain Malla",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#F0EDE8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${script.variable} ${body.variable} ${mono.variable}`}><body>{children}</body></html>;
}
