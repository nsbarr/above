import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Outfit, Newsreader } from "next/font/google"
import Script from "next/script"
import fs from 'fs'
import path from 'path'

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

// Read critical CSS at build time
let criticalCSS = ''
try {
  const cssPath = path.join(process.cwd(), 'public', 'inline-critical.css')
  criticalCSS = fs.readFileSync(cssPath, 'utf8')
} catch (e) {
  console.error('Could not load critical CSS:', e)
}

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
        
        {/* Anti-FOUC script */}
        <Script id="prevent-fouc" strategy="beforeInteractive">{`
          // Add class to html element as early as possible
          document.documentElement.classList.add('css-loaded');
          // Hide body until ready
          document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
              document.body.classList.remove('no-fouc');
            }, 0);
          });
        `}</Script>
        
        {/* Github Pages path fixing */}
        <Script src="/fix-image-paths.js" strategy="beforeInteractive" />
      </head>
      <body className={`${newsreader.variable} ${outfit.variable} no-fouc`}>
        {children}
      </body>
    </html>
  )
}
