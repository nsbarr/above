import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Outfit, Newsreader } from "next/font/google"
import Script from "next/script"
import Head from "next/head"

// Load a more subdued serif font - Newsreader
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

// Load Outfit for headings
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
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
        <Script src="/preload-styles.js" strategy="beforeInteractive" />
        <link 
          rel="stylesheet" 
          href="/critical.css" 
          precedence="high"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical CSS to prevent Flash of Unstyled Content */
          body {
            font-family: ui-serif, serif;
            background-color: #F6F8FA;
            color: #1A2A48;
            opacity: 0;
            animation: fadeIn 0.2s ease-in forwards;
          }
          
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          
          .btn-celestial {
            background-color: #1A2A48;
            color: #E8EAED;
            transition: all 0.3s ease;
            display: inline-block;
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            font-weight: 500;
          }
          
          .celestial-card {
            background: linear-gradient(145deg, #f8f9fa, #eaeaea);
            box-shadow: 0 4px 20px rgba(26, 42, 72, 0.08);
            transition: all 0.3s ease;
            border: 1px solid rgba(232, 234, 237, 0.6);
          }
        `}} />
      </head>
      <body className={`${newsreader.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  )
}
