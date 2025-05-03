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

// Critical CSS directly inlined (no file system needed)
const criticalCSS = `
:root {
  --midnight-blue: #1A2A48;
  --moonlight-silver: #E8EAED;
  --celestial-gold: #FFDF7E;
  --cosmic-bg: #F6F8FA;
  --text-primary: #1A2A48;
}

body {
  font-family: Georgia, serif;
  background-color: var(--cosmic-bg, #F6F8FA);
  color: var(--text-primary, #1A2A48);
  margin: 0;
  opacity: 0;
  transition: opacity 0.2s ease-in;
}

html.css-loaded body {
  opacity: 1;
}

.btn-celestial {
  background-color: var(--midnight-blue, #1A2A48);
  color: var(--moonlight-silver, #E8EAED);
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  text-decoration: none;
}

/* Hide until loaded fully */
img[src*="moon8.png"] {
  content-visibility: auto;
}
`;

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
        {/* Inline critical CSS directly */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Anti-FOUC and path fixing scripts */}
        <Script id="prevent-fouc" strategy="beforeInteractive">{`
          // Add class to html element as early as possible to prevent FOUC
          document.documentElement.classList.add('css-loaded');
        `}</Script>
        
        {/* Github Pages path fixing */}
        <Script src="/fix-image-paths.js" strategy="beforeInteractive" />
      </head>
      <body className={`${newsreader.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  )
}
