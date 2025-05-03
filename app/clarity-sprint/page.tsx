"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpFromLine } from "lucide-react"
import GitHubImage from "@/components/ui/github-image"
import Navigation from '../../components/Navigation'
import GlobalStyles from '../../components/GlobalStyles'

export default function ClaritySprint() {
  return (
    <div className="min-h-screen bg-cosmic-bg">
      <GlobalStyles />
      
      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight font-sans">
              The Clarity Sprint
            </h1>

            <p className="mb-6 text-lg">
              A Clarity Sprint is a focused 8-week experience designed specifically for founders and leaders who want to make decisions from a place of deeper self-awareness.
            </p>

            <p className="mb-6 text-lg">
              Whether you're facing a pivotal decision, feeling stuck in reactivity, or simply wanting to lead with more clarity, this program offers a structured path to reconnect with your authentic leadership style.
            </p>

            <div className="mb-10 p-6 rounded-lg bg-gray-50 border border-gray-100">
              <h3 className="text-xl font-bold mb-4">The Next Cohort Starts Soon</h3>
              <p className="mb-4">Join a small group of like-minded founders and leaders for an 8-week journey to clarity.</p>
              <ul className="list-disc pl-5 mb-6">
                <li className="mb-2">Weekly group sessions (90 minutes)</li>
                <li className="mb-2">Personalized leadership assessment</li>
                <li className="mb-2">Private Slack community</li>
                <li className="mb-2">Tailored leadership frameworks and tools</li>
              </ul>
              <Link
                href="#"
                className="inline-block btn-celestial px-6 py-3 rounded-full font-sans font-medium"
              >
                Apply for the Next Cohort
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <GitHubImage
                src="/clarity-sprint.jpg"
                alt="Leaders in a discussion circle"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
            
            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">What Past Participants Say</h3>
              <blockquote className="border-l-4 border-clarity-teal pl-4 py-2 mb-4">
                <p className="italic text-gray-700">"The Clarity Sprint gave me the framework I needed to make decisions that aligned with my core values, not just what seemed urgent at the moment."</p>
                <footer className="text-sm font-medium mt-2">— Sarah K., Founder & CEO</footer>
              </blockquote>
              <blockquote className="border-l-4 border-clarity-teal pl-4 py-2">
                <p className="italic text-gray-700">"I came in feeling overwhelmed and left with a renewed sense of purpose. The tools I gained have been invaluable for both my business and personal growth."</p>
                <footer className="text-sm font-medium mt-2">— Miguel R., CTO & Co-founder</footer>
              </blockquote>
            </div>
          </div>
        </div>
        
        {/* Program Details Section */}
        <section className="py-16 mt-16 bg-midnight rounded-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="stars absolute w-full h-full"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12 section-heading text-moonlight">How the Clarity Sprint Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-celestial-gold rounded-full mb-4">
                  <span className="text-midnight font-bold">1</span>
                </div>
                <h3 className="text-moonlight text-xl font-bold mb-3">Assess Your Leadership</h3>
                <p className="text-moonlight/90">
                  Begin with a comprehensive leadership assessment to identify your patterns, strengths, and areas for growth. Discover your Enneagram type and leadership profile.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-celestial-gold rounded-full mb-4">
                  <span className="text-midnight font-bold">2</span>
                </div>
                <h3 className="text-moonlight text-xl font-bold mb-3">Learn & Practice</h3>
                <p className="text-moonlight/90">
                  Engage in weekly sessions combining teaching, discussion, and practical exercises. Apply new frameworks to real challenges you're facing in your leadership.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center bg-celestial-gold rounded-full mb-4">
                  <span className="text-midnight font-bold">3</span>
                </div>
                <h3 className="text-moonlight text-xl font-bold mb-3">Integrate & Implement</h3>
                <p className="text-moonlight/90">
                  Receive personalized support as you implement new leadership approaches. Build lasting connections with fellow leaders and establish sustainable clarity practices.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="#" className="inline-block px-8 py-3 bg-celestial-gold text-midnight font-medium rounded-full hover:bg-white transition-colors">
                Download Full Program Details
              </Link>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 section-heading">Common Questions</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="celestial-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Who is the Clarity Sprint for?</h3>
                <p className="text-gray-700">
                  The program is designed for founders, entrepreneurs, and leaders who want to make decisions with greater clarity and lead from self-awareness. It's especially valuable if you're navigating significant changes, feeling stuck in reactive patterns, or seeking more alignment between your leadership and personal values.
                </p>
              </div>
              
              <div className="celestial-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">What's the time commitment?</h3>
                <p className="text-gray-700">
                  The program runs for 8 weeks and includes a 90-minute group session each week, plus 2-3 hours of individual practice and application between sessions. The total time commitment is approximately 4-5 hours per week.
                </p>
              </div>
              
              <div className="celestial-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">How is this different from other leadership programs?</h3>
                <p className="text-gray-700">
                  The Clarity Sprint combines leadership development with personal growth in a way that few programs do. We focus on the inner work that drives outer results, using the Enneagram and other frameworks to help you understand your unique patterns and develop leadership practices tailored to your specific challenges.
                </p>
              </div>
              
              <div className="celestial-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">What's the investment?</h3>
                <p className="text-gray-700">
                  The program investment is $3,200, which includes all materials, assessments, group sessions, and access to the private community. Payment plans are available. Some founders use their professional development budget or business education funds for this program.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="#" className="inline-block btn-celestial px-8 py-3 rounded-full font-medium">
                Apply for the Clarity Sprint
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Consent Management */}
      <div className="fixed bottom-4 right-4">
        <button className="btn-celestial text-xs px-3 py-1 rounded">Manage consent</button>
      </div>


    </div>
  )
} 