"use client"

import Link from "next/link"
import { ArrowUpFromLine } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Navigation from '../../components/Navigation'
import GlobalStyles from '../../components/GlobalStyles'

export default function ClarityQuiz() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState<number>(800)
  
  // Handle iframe height adjustment based on content
  useEffect(() => {
    let lastHeight = 0;
    const handleMessage = (event: MessageEvent) => {
      try {
        // Only process messages that contain height data and avoid processing the same height multiple times
        if (event.data && typeof event.data === 'object' && 
            'height' in event.data && 
            typeof event.data.height === 'number' && 
            event.data.height > 0 &&
            event.data.height !== lastHeight) {
          
          lastHeight = event.data.height;
          setIframeHeight(event.data.height + 50); // Add padding
        }
      } catch (e) {
        // Silently handle any errors to prevent crashes
        console.error('Error processing iframe message:', e);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []); // Only run once on mount

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
            Once I get your response, I'll generate a report and send it your way along with some suggested next steps. There's no commitment on your end to sign up or pay for anything.</p>
          <p className="mb-6 text-lg">
          AI & DATA DISCLOSURE: I use Claude to help me generate the report. The questions themselves and the scoring system were created with AI assistance. Your personal information (name, email, company) will not be shared with any people or AI systems.
          </p>
          
          <div className="celestial-card p-6 rounded-lg mb-10">
            {/* Tally.so Embed */}
            <div className="w-full">
              <iframe
                ref={iframeRef}
                src="https://tally.so/embed/mB6OKQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height={`${iframeHeight}px`}
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Founder Clarity Quiz"
                style={{ width: '100%', border: 'none' }}
                allow="camera; microphone; autoplay; encrypted-media; fullscreen; payment"
              ></iframe>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/clarity-sprint"
              className="inline-flex items-center text-clarity font-medium hover:underline active:opacity-70"
            >
              Learn about the Clarity Sprint program <ArrowUpFromLine className="h-4 w-4 ml-2 transform rotate-90" />
            </Link>
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