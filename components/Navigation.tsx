'use client'

import Link from "next/link"
import { SunMoon } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()
  
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex flex-col md:flex-row md:items-center justify-between font-sans">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="mr-2">
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
            className={`px-3 py-2 font-medium hover:text-clarity transition-colors ${pathname === '/enneagram' ? 'text-clarity underline' : 'hover:underline'}`}
          >
            Enneagram
          </Link>
          <Link 
            href="/for-teams" 
            className={`px-3 py-2 font-medium hover:text-clarity transition-colors ${pathname === '/for-teams' ? 'text-clarity underline' : 'hover:underline'}`}
          >
            For Teams
          </Link>
          <Link 
            href="/resources" 
            className={`px-3 py-2 font-medium hover:text-clarity transition-colors ${pathname === '/resources' ? 'text-clarity underline' : 'hover:underline'}`}
          >
            Resources
          </Link>
          <Link 
            href="/about" 
            className={`px-3 py-2 font-medium hover:text-clarity transition-colors ${pathname === '/about' ? 'text-clarity underline' : 'hover:underline'}`}
          >
            About
          </Link>
          <Link 
            href="/clarity-sprint" 
            className={`btn-celestial px-5 py-2 rounded-full font-medium ${pathname === '/clarity-sprint' ? 'active' : ''}`}
          >
            Clarity Sprint
          </Link>
        </div>
      </nav>
    </header>
  )
} 