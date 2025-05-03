import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Outfit, Newsreader } from "next/font/google"
import Script from "next/script"

// Load a more subdued serif font - Newsreader with optimized loading
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'serif']
})

// Load Outfit for headings with optimized loading
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif']
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
    <html lang="en" className="css-loaded">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script src="/fix-image-paths.js" strategy="beforeInteractive" />
        <Script src="/preload-styles.js" strategy="beforeInteractive" />
        <link 
          rel="stylesheet" 
          href="/critical.css" 
          precedence="high"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          /* Ensure content is visible immediately with system fonts */
          body {
            font-family: Georgia, serif;
            background-color: #F6F8FA;
            color: #1A2A48;
            visibility: visible;
            opacity: 1;
          }
          
          h1, h2, h3, h4, h5, h6, .font-sans, nav {
            font-family: Arial, sans-serif;
          }
          
          .btn-celestial {
            background-color: #1A2A48;
            color: #E8EAED;
            display: inline-block;
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            font-weight: 500;
          }
          
          .celestial-card {
            background: linear-gradient(145deg, #f8f9fa, #eaeaea);
            box-shadow: 0 4px 20px rgba(26, 42, 72, 0.08);
            border: 1px solid rgba(232, 234, 237, 0.6);
          }
          
          /* Hide moon image until fully loaded to avoid layout shifts */
          img[src*="moon8.png"] {
            content-visibility: auto;
          }
        `}} />
      </head>
      <body className={`${newsreader.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  )
}
