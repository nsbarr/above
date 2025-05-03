import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Outfit, Newsreader } from "next/font/google"
import Script from "next/script"

// Load fonts with display:swap for better font loading
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Moon Above Leadership Coaching",
  description: "Founder coaching to help you lead from a place of clarity and joy.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="/fix-image-paths.js" strategy="beforeInteractive" />
        <style dangerouslySetInnerHTML={{ __html: `
          /* Fallback fonts to prevent FOUC */
          body {
            font-family: Georgia, serif;
          }
          
          h1, h2, h3, h4, h5, h6, .font-sans, nav {
            font-family: Arial, sans-serif;
          }
        `}} />
      </head>
      <body className={`${newsreader.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  )
}
