"use client"

import Link from "next/link"
import { ArrowUpFromLine } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Navigation from '../../components/Navigation'
import GlobalStyles from '../../components/GlobalStyles'

export default function ClarityQuiz() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState<number>(800)
  const lastHeightRef = useRef<number>(0)
  
  // Handle iframe height adjustment based on content
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'tally-height') {
        const newHeight = event.data.height
        if (newHeight !== lastHeightRef.current) {
          setIframeHeight(newHeight)
          lastHeightRef.current = newHeight
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div className="min-h-screen bg-cosmic-bg">
      <GlobalStyles />
      
      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight font-sans">
            Founder Clarity Quiz
          </h1>

          <p className="mb-6 text-lg">
            Here's the deal: This Clarity Quiz takes about 5 minutes to complete. Don't overthink it, don't rush it, don't worry about getting the "right answer." There are no right or wrong answers here. 
          </p>
          <p className="mb-6 text-lg">
            Once I get your response, I'll generate a report and send it your way along with some suggested next steps. There's no commitment on your end to sign up or pay for anything.
          </p>
          <p className="mb-6 text-lg">
            AI & DATA DISCLOSURE: I use Claude to help me generate the report. The questions themselves and the scoring system were created with AI assistance. Your personal information (name, email, company) will not be shared with any people or AI systems.
          </p>

          {/* Tally Form */}
          <div className="relative w-full">
            <iframe
              ref={iframeRef}
              src="https://tally.so/embed/mBpQEd?alignLeft=1&hideTitle=1&transparentBackground=1"
              width="100%"
              height={iframeHeight}
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Founder Clarity Quiz"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      </main>

      {/* Consent Management */}
      <div className="fixed bottom-4 right-4">
        <button className="btn-celestial text-xs px-3 py-1 rounded">Manage consent</button>
      </div>
    </div>
  )
} 