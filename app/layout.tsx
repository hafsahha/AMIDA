import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Cinzel } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Cursor } from "@/components/ui/cursor"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "AMIDA 谧 | Hafsah Hamidah Portfolio",
  description: "Software Engineer bridging AI, Data, and Creative Tech.",
  generator: "v0.app",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>谧</text></svg>',
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} ${cinzel.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Cursor />
          <div className="grain-overlay" />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
