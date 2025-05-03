'use client'

import { useEffect, useRef, useState } from 'react'

// Debug counter
let substackRenderCount = 0;

export default function SubstackEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Debug logging
  useEffect(() => {
    substackRenderCount++;
    console.log(`[DEBUG] SubstackEmbed render #${substackRenderCount}`);
    
    return () => {
      console.log(`[DEBUG] SubstackEmbed unmounting after ${substackRenderCount} renders`);
    };
  }, []);
  
  useEffect(() => {
    const applySubstackStyling = () => {
      if (!iframeRef.current) return
      
      try {
        const iframe = iframeRef.current
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
        
        if (!iframeDoc) return
        
        // Create a style element to inject custom CSS only once
        if (!iframeDoc.getElementById('substack-custom-styles')) {
          const styleEl = document.createElement('style')
          styleEl.id = 'substack-custom-styles'
          styleEl.textContent = `
            .subscribe-btn.button-VFSdkv.buttonBase-GK1x3M {
              background-color: var(--midnight-blue, #1A2A48) !important;
              color: var(--moonlight-silver, #E8EAED) !important;
              transition: all 0.3s ease !important;
              border: none !important;
            }
            
            .subscribe-btn.button-VFSdkv.buttonBase-GK1x3M:hover {
              background-color: #283b64 !important;
              box-shadow: 0 0 15px rgba(255, 223, 126, 0.4) !important;
            }
          `
          
          iframeDoc.head.appendChild(styleEl)
          setIsLoaded(true)
        }
      } catch (e) {
        console.warn('Could not style Substack iframe:', e)
      }
    }

    // Try to apply styling after iframe loads
    const iframe = iframeRef.current
    if (iframe) {
      if (iframe.contentDocument?.readyState === 'complete') {
        applySubstackStyling()
      } else {
        const handleLoad = () => {
          applySubstackStyling()
          iframe.removeEventListener('load', handleLoad)
        }
        iframe.addEventListener('load', handleLoad)
        return () => {
          iframe.removeEventListener('load', handleLoad)
        }
      }
    }
  }, [])

  return (
    <iframe 
      src="https://polytrope.substack.com/embed" 
      width="600" 
      height="150" 
      style={{
        border: '1px solid #EEE',
        background: 'white',
        width: '100%',
        maxWidth: '600px'
      }} 
      frameBorder="0" 
      scrolling="no"
      title="Newsletter subscription form"
      className="rounded-md"
      ref={iframeRef}
      suppressHydrationWarning={true}
    />
  )
} 