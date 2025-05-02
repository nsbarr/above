"use client"

import Image from "next/image"
import Link from "next/link"
import { CirclePlus,ArrowUpFromLine } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  const testimonials = [
    {
      id: 0,
      quote: "Nick has played a key role in my personal and career development over the last year. He is excellent at understanding both founder/startup challenges and personal challenges, and he is able to connect the dots between these two worlds. Thanks to Nick, I have discovered some deep realizations about myself that have helped me push the boundaries of what I am capable of doing and craft a sustainable lifestyle that I have always dreamed of.",
      name: "Filip Stollár",
      title: "Co-founder at Deepnote",
      image: "/placeholder-user.jpg"
    },
    {
      id: 1,
      quote: "Nick has the uncanny ability to create a safe, solid ground for digging and exploration of what's possible whilst gently pushing you to peek over the edge and see beyond the confines of your current circumstances. In my coaching sessions with him, I could feel his belief in me, which is critical when you are seeking change. My work with Nick has been truly transformational for me as a leader and a mom!",
      name: "Annetta Seecharran",
      title: "Executive Director of Chhaya",
      image: "/placeholder-user.jpg"
    },
    {
      id: 2,
      quote: "Working with Nick Barr has been truly transformative. As an Enneagram 3, I've always pushed myself hard, often at the expense of balance. Nick helped me not only understand the deeper motivations driving me, but also how to create a healthier relationship with my ambition. Through our work together, I've learned how to better command my energy, prioritize what really matters, and find more balance. I'm showing up more grounded, focused, and fulfilled—both professionally and personally. Highly recommend!",
      name: "Jordan Frank",
      title: "Founder, CEO of Courageous HQ",
      image: "/placeholder-user.jpg"
    }
  ]
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2">
              <ArrowUpFromLine className="h-8 w-8" />
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">Above the Line<span className="text-gray-400">®</span></div>
              <div className="font-normal  text-md leading-tight">
                Founder Coaching
              </div>
            </div>
          </div>

          <div className="flex items-center mt-4 md:mt-0 space-x-6 text-sm">
            <Link href="#" className="hover:opacity-70">
              Enneagram
            </Link>
            <Link href="#" className="hover:opacity-70">
              For Teams
            </Link>
            <Link href="#" className="hover:opacity-70">
              Resources
            </Link>
            <Link href="#" className="hover:opacity-70">
              About
            </Link>
            <Link href="#" className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800">
              Clarity Sprint
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight">Turn Chaos into Clarity</h1>

<p className="mb-6 text-base">
Startup founders face high-stakes decisions every day: 
<br />
<br />
<i>Raise or bootstrap? Hire or stay lean? Pivot or persevere?</i> 
</p>

<p className="mb-6 text-base">
These aren't just strategic questions - they're deeply personal. So data alone won't get you the right answer. You need to understand what's driving you and where you truly want to go. 
</p>

<p className="mb-6 text-base">
We believe that <b>self-knowledge is the foundation of great leadership.</b> Above the Line offers resources, community, and personal coaching to help founders look inward so that they can reconnect with clarity and joy in their startup journey.
</p>

<p className="mb-6 text-base">
<b>Are you ready to invest in your leadership?</b> Take the 5-minute Clarity Quiz to begin your path to reconnecting with joy and clarity in your startup journey.
</p>


            <Link
              href="#"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800"
            >
              Take the Clarity Quiz
            </Link>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/moon2.jpg?height=500&width=500"
              alt="Illustration of a person surrounded by different emotional faces representing saboteurs"
              width={500}
              height={500}
              className="w-full"
              priority
            />
          </div>
        </div>
        
        {/* Three Modules Section */}
        <section className="py-16 bg-gray-50 mt-16 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How We Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Module 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Discover How You're Leading</h3>
                <p className="text-gray-600 mb-4">
                  Take our assessment to identify your leadership patterns and discover your unique strengths and blind spots.
                </p>
                <Link href="#" className="text-black font-medium hover:underline inline-flex items-center">
                  Take Assessment <ArrowUpFromLine className="h-4 w-4 ml-2 transform rotate-90" />
                </Link>
              </div>
              
              {/* Module 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Join a Founder Circle</h3>
                <p className="text-gray-600 mb-4">
                  Connect with like-minded founders in a confidential space to share challenges, insights, and grow together.
                </p>
                <Link href="#" className="text-black font-medium hover:underline inline-flex items-center">
                  Learn More <ArrowUpFromLine className="h-4 w-4 ml-2 transform rotate-90" />
                </Link>
              </div>
              
              {/* Module 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Go Deeper with 1:1 Support</h3>
                <p className="text-gray-600 mb-4">
                  Work directly with a coach to address your specific challenges and accelerate your leadership growth.
                </p>
                <Link href="#" className="text-black font-medium hover:underline inline-flex items-center">
                  Book a Session <ArrowUpFromLine className="h-4 w-4 ml-2 transform rotate-90" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* What is Above the Line Section */}
        <section className="py-16 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What is it Like to Lead Above the Line?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6">
                  The concept of "Above the Line" comes from The Conscious Leadership Group and centers around a fundamental question that leaders must continuously ask themselves: "Where am I?"
                </p>
                <p className="text-lg mb-6">
                  Are you operating above the line — in a state of openness, curiosity, and commitment to learning? Or below the line — in a state of defensiveness, closed-mindedness, and commitment to being right? <b>Hint: about 90% of leaders spend 90% of their time below the line.</b>
                </p>
                <p className="text-lg mb-6">
                  Learning to recognize where you are in relation to the line and developing the ability to shift your state is a transformative practice for founders and leaders.
                </p>
              </div>
              <div className="aspect-video">
                <iframe 
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/fLqzYDZAqCI" 
                  title="What is Above the Line?" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            
            {/* Carousel Container */}
            <div className="relative mx-auto max-w-6xl">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${activeTestimonial * (100 / testimonials.length)}%)`,
                    width: `${testimonials.length * 100}%`
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={testimonial.id} 
                      className="w-full md:w-1/3 px-4 flex-shrink-0"
                      style={{ 
                        opacity: Math.abs(activeTestimonial - index) < 1.5 ? 1 : 0.3,
                        transform: `scale(${activeTestimonial === index ? 1 : 0.9})`,
                        transition: 'all 500ms ease'
                      }}
                    >
                      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                          <div className="p-8">
                            <blockquote className="text-lg md:text-xl font-medium mb-6">
                              <span className="text-gray-500">"</span>
                              {testimonial.quote.split('.').map((sentence, sentIndex, array) => {
                                // Highlight key phrases for Filip's testimonial (first testimonial)
                                if (sentIndex === 1 && index === 0) {
                                  const parts = sentence.split('connect the dots between these two worlds');
                                  return (
                                    <span key={sentIndex}>
                                      {parts[0]}
                                      <span className="bg-blue-100 px-1">connect the dots between these two worlds</span>
                                      {parts[1]}
                                      {sentIndex !== array.length - 1 ? '.' : ''}
                                    </span>
                                  );
                                } else if (sentIndex === 2 && index === 0) {
                                  const parts = sentence.split('helped me push the boundaries of what I am capable of');
                                  return (
                                    <span key={sentIndex}>
                                      {parts[0]}
                                      <span className="bg-blue-100 px-1">helped me push the boundaries of what I am capable of</span>
                                      {parts[1]}
                                      {sentIndex !== array.length - 1 ? '.' : ''}
                                    </span>
                                  );
                                } else if (sentIndex === 0 && index === 1) {
                                  // Highlight "safe, solid ground" in Annetta's testimonial
                                  const parts = sentence.split('safe, solid ground');
                                  return (
                                    <span key={sentIndex}>
                                      {parts[0]}
                                      <span className="bg-blue-100 px-1">safe, solid ground</span>
                                      {parts[1]}
                                      {sentIndex !== array.length - 1 ? '.' : ''}
                                    </span>
                                  );
                                } else if (sentIndex === array.length - 2 && index === 1) {
                                  // Highlight "truly transformational for me as a leader and a mom" in Annetta's testimonial
                                  const parts = sentence.split('truly transformational for me as a leader and a mom');
                                  return (
                                    <span key={sentIndex}>
                                      <><br /><br /></>
                                      {parts[0]}
                                      <span className="bg-blue-100 px-1">truly transformational for me as a leader and a mom</span>
                                      {parts[1]}
                                      {sentIndex !== array.length - 1 ? '.' : ''}
                                    </span>
                                  );
                                } else if (sentIndex === 0 && index === 2) {
                                  // Highlight "truly transformative" in Jordan's testimonial
                                  const parts = sentence.split('truly transformative');
                                  return (
                                    <span key={sentIndex}>
                                      {parts[0]}
                                      <span className="bg-blue-100 px-1">truly transformative</span>
                                      {parts[1]}
                                      {sentIndex !== array.length - 1 ? '.' : ''}
                                    </span>
                                  );
                                } else if (sentIndex === 2 && index === 2) {
                                  // Highlight "create a healthier relationship with my ambition" in Jordan's testimonial
                                  const parts = sentence.split('create a healthier relationship with my ambition');
                                  return (
                                    <span key={sentIndex}>
                                      {parts[0]}
                                      <span className="bg-blue-100 px-1">create a healthier relationship with my ambition</span>
                                      {parts[1]}
                                      {sentIndex !== array.length - 1 ? '.' : ''}
                                    </span>
                                  );
                                } else {
                                  return (
                                    <span key={sentIndex}>
                                      {sentIndex > 0 && sentIndex === array.length - 2 ? <><br /><br /></> : null}
                                      {sentence}
                                      {sentIndex !== array.length - 1 ? '.' : ''}
                                    </span>
                                  );
                                }
                              })}
                              <span className="text-gray-500">"</span>
                            </blockquote>
                            
                            <div>
                              <h3 className="text-xl font-bold">{testimonial.name}</h3>
                              <p className="text-gray-600 text-sm">{testimonial.title}</p>
                            </div>
                          </div>
                          <div className="bg-gray-300">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={300}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Controls - Below the Cards */}
              <div className="flex items-center justify-center mt-8 space-x-6">
                <div 
                  className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400"
                  onClick={prevTestimonial}
                >
                  <ArrowUpFromLine className="h-4 w-4 transform -rotate-90" />
                </div>
                
                <div className="flex space-x-3">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={testimonial.id}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full cursor-pointer ${
                        index === activeTestimonial ? "bg-gray-800" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
                
                <div 
                  className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400"
                  onClick={nextTestimonial}
                >
                  <ArrowUpFromLine className="h-4 w-4 transform rotate-90" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Your Coach Section */}
        <section className="py-16 mt-16 bg-gray-50 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Your Coach</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">About Nick Barr</h3>
                <p className="mb-4 text-base">
                  I'm <a href="https://www.linkedin.com/in/nsbarr/" className="text-black font-medium hover:underline">Nick Barr</a>, a 2x-founder and Upbuild-certified leadership coach.
                </p>
                <p className="mb-4 text-base">
                  I help startup founders lead from clarity — not reactivity — so they can build companies that are aligned, sustainable, and genuinely meaningful to them.
                </p>
                <p className="mb-4 text-base">
                  Before becoming a coach, I spent 15 years as a founder and product leader at venture-backed and nonprofit startups, including Khan Academy. I've also advised and mentored founders in the Union Square Ventures, Betaworks, and Techstars communities.
                </p>
                <p className="mb-4 text-base">
                  This work is personal for me. I have lived the emotional complexity of solo founding: the ambiguity, the isolation, the self-questioning. I know how hard it can be to lead when your inner and outer worlds are in chaos — and how powerful it is to lead when you're grounded and clear.
                </p>
                <Link href="https://www.nsbarr.com/" className="text-black font-medium hover:underline inline-flex items-center">
                  Learn more about my 1:1 coaching and org support <ArrowUpFromLine className="h-4 w-4 ml-2 transform rotate-90" />
                </Link>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/nb-headshot.jpg"
                  alt="Nick Barr, Leadership Coach"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Consent Management */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-black text-white text-xs px-3 py-1 rounded">Manage consent</button>
      </div>
    </div>
  )
}
