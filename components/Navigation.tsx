'use client'

import Link from "next/link"
import { SunMoon } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"

// Debug render counter
let navRenderCount = 0;

export default function Navigation() {
  const pathname = usePathname()
  const [isClicked, setIsClicked] = useState<string | null>(null)
  const renderCountRef = useRef(0);
  
  // Debug rendering
  useEffect(() => {
    navRenderCount++;
    renderCountRef.current = navRenderCount;
    console.log(`[DEBUG] Navigation render #${navRenderCount}, pathname: ${pathname}`);
    
    return () => {
      console.log(`[DEBUG] Navigation unmounting after ${renderCountRef.current} renders`);
    };
  }, [pathname]);
  
  const handleClick = (href: string) => {
    setIsClicked(href)
    // Reset after 300ms to remove active state
    setTimeout(() => setIsClicked(null), 300)
  }
  
  return (
    <header className="container mx-auto px-4 py-6 relative">
      <nav className="flex flex-col md:flex-row md:items-center justify-between font-sans">
        <div className="flex items-center">
          <Link 
            href="/" 
            className="flex items-center group"
            onClick={() => handleClick('/')}
            style={{ transform: isClicked === '/' ? 'scale(0.97)' : 'scale(1)' }}
          >
            <div className="mr-2 transition-transform duration-100">
              <SunMoon className="h-12 w-12 text-midnight" />
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">Moon Above Coaching<span className="text-gray-400"></span></div>
            </div>
          </Link>
        </div>

        <div className="flex items-center mt-4 md:mt-0 space-x-4 md:space-x-6 text-base">
          <Link 
            href="/enneagram" 
            className={`px-3 py-2 font-medium hover:text-clarity transition-colors ${pathname === '/enneagram' ? 'text-clarity underline' : 'hover:underline'} active:opacity-70`}
            onClick={() => handleClick('/enneagram')}
            style={{ transform: isClicked === '/enneagram' ? 'scale(0.97)' : 'scale(1)' }}
          >
            Enneagram
          </Link>
          <Link 
            href="/for-teams" 
            className={`px-3 py-2 font-medium hover:text-clarity transition-colors ${pathname === '/for-teams' ? 'text-clarity underline' : 'hover:underline'} active:opacity-70`}
            onClick={() => handleClick('/for-teams')}
            style={{ transform: isClicked === '/for-teams' ? 'scale(0.97)' : 'scale(1)' }}
          >
            For Teams
          </Link>
          <Link 
            href="/resources" 
            className={`px-3 py-2 font-medium hover:text-clarity transition-colors ${pathname === '/resources' ? 'text-clarity underline' : 'hover:underline'} active:opacity-70`}
            onClick={() => handleClick('/resources')}
            style={{ transform: isClicked === '/resources' ? 'scale(0.97)' : 'scale(1)' }}
          >
            Resources
          </Link>
          <Link 
            href="/about" 
            className={`px-3 py-2 font-medium hover:text-clarity transition-colors ${pathname === '/about' ? 'text-clarity underline' : 'hover:underline'} active:opacity-70`}
            onClick={() => handleClick('/about')}
            style={{ transform: isClicked === '/about' ? 'scale(0.97)' : 'scale(1)' }}
          >
            About
          </Link>
          <Link 
            href="/clarity-quiz" 
            className={`px-3 py-2 font-medium hover:text-clarity transition-colors ${pathname === '/clarity-quiz' ? 'text-clarity underline' : 'hover:underline'} active:opacity-70`}
            onClick={() => handleClick('/clarity-quiz')}
            style={{ transform: isClicked === '/clarity-quiz' ? 'scale(0.97)' : 'scale(1)' }}
          >
            Clarity Quiz
          </Link>
          <Link 
            href="/clarity-sprint" 
            className={`btn-celestial px-5 py-2 rounded-full font-medium ${pathname === '/clarity-sprint' ? 'active' : ''} active:opacity-70 active:scale-95 transition-transform duration-75`}
            onClick={() => handleClick('/clarity-sprint')}
            style={{ transform: isClicked === '/clarity-sprint' ? 'scale(0.97)' : 'scale(1)' }}
          >
            Clarity Sprint
          </Link>
        </div>
      </nav>
    </header>
  )
} 