"use client"

import Image from "next/image"
import Link from "next/link"
import { CirclePlus,ArrowUpFromLine, SunMoon, Moon } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  const testimonials = [
    {
      id: 0,
      quote: "Nick has played a key role in my personal and career development over the last year. He is excellent at understanding both founder/startup challenges and personal challenges, and he is able to connect the dots between these two worlds. Thanks to Nick, I have discovered some deep realizations about myself that have helped me push the boundaries of what I am capable of doing and craft a sustainable lifestyle that I have always dreamed of.",
      name: "Filip Stollár",
      title: "Co-founder at Deepnote",
      image: "/filip.webp"
    },
    {
      id: 1,
      quote: "Nick has the uncanny ability to create a safe, solid ground for digging and exploration of what's possible whilst gently pushing you to peek over the edge and see beyond the confines of your current circumstances. In my coaching sessions with him, I could feel his belief in me, which is critical when you are seeking change. My work with Nick has been truly transformational for me as a leader and a mom!",
      name: "Annetta Seecharran",
      title: "Executive Director of Chhaya",
      image: "/annetta.webp"
    },
    {
      id: 2,
      quote: "Working with Nick Barr has been truly transformative. As an Enneagram 3, I've always pushed myself hard, often at the expense of balance. Nick helped me not only understand the deeper motivations driving me, but also how to create a healthier relationship with my ambition. Through our work together, I've learned how to better command my energy, prioritize what really matters, and find more balance. I'm showing up more grounded, focused, and fulfilled—both professionally and personally. Highly recommend!",
      name: "Jordan Frank",
      title: "Founder, CEO of Courageous HQ",
      image: "/jordan.jpeg"
    }
  ]
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }
  
  return (
    <div className="min-h-screen bg-cosmic-bg">
      <style jsx global>{`
        :root {
          --midnight-blue: #1A2A48;
          --moonlight-silver: #E8EAED;
          --celestial-gold: #FFDF7E;
          --clarity-teal: #2C6D7A;
          --twilight-purple: #634B7F;
          --cosmic-bg: #F6F8FA;  /* Light blue-gray background */
          --text-primary: #1A2A48; /* Same as midnight-blue for primary text */
          --text-secondary: #2D3748; /* Darker gray for better contrast */
        }

        body {
          font-family: var(--font-serif);
          font-size: 1.125rem;
          background-color: var(--cosmic-bg);
          color: var(--text-primary);
        }
        
        h1, h2, h3, h4, h5, h6, .font-sans, nav {
          font-family: var(--font-sans);
          color: var(--midnight-blue);
        }
        
        p {
          font-family: var(--font-serif);
          margin-bottom: 1.5rem;
          line-height: 1.7;
          font-size: 1.125rem;
          color: var(--text-secondary);
        }
        
        .text-base {
          font-size: 1.125rem;
        }
        
        .text-lg {
          font-size: 1.25rem;
        }
        
        blockquote {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          line-height: 1.6;
        }
        
        .highlight-moon {
          background-color: rgba(255, 223, 126, 0.3);
          padding: 0 0.25rem;
        }

        /* Celestial button styles */
        .btn-celestial {
          background-color: var(--midnight-blue);
          color: var(--moonlight-silver);
          transition: all 0.3s ease;
        }
        
        .btn-celestial:hover {
          background-color: #283b64;
          box-shadow: 0 0 15px rgba(255, 223, 126, 0.4);
        }

        /* Section styles */
        .bg-midnight {
          background-color: var(--midnight-blue);
          color: var(--moonlight-silver);
        }
        
        .bg-twilight {
          background-color: var(--twilight-purple);
          color: white;
        }

        .text-celestial {
          color: var(--celestial-gold);
        }
        
        .text-clarity {
          color: var(--clarity-teal);
        }

        .celestial-card {
          background: linear-gradient(145deg, #f8f9fa, #eaeaea);
          box-shadow: 0 4px 20px rgba(26, 42, 72, 0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(232, 234, 237, 0.6);
        }
        
        .celestial-card:hover {
          box-shadow: 0 8px 30px rgba(26, 42, 72, 0.12), 0 0 10px rgba(255, 223, 126, 0.2);
          transform: translateY(-5px);
        }
        
        .avatar-glow {
          box-shadow: 0 0 15px rgba(255, 223, 126, 0.3);
        }

        h1, h2, h3, h4, h5, h6 {
          letter-spacing: 0.02em;
        }
        
        h1, h2 {
          text-shadow: 0 0 1px rgba(255, 223, 126, 0.1);
        }
        
        .section-heading {
          position: relative;
          display: inline-block;
        }
        
        .section-heading::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, rgba(44, 109, 122, 0.8), rgba(255, 223, 126, 0.8));
          border-radius: 3px;
        }

        /* Ensure "Above the Line" section text is visible */
        .bg-midnight h2, 
        .bg-midnight p {
          color: var(--moonlight-silver);
        }
        
        .bg-midnight .section-heading::after {
          background: linear-gradient(90deg, rgba(255, 223, 126, 0.8), rgba(232, 234, 237, 0.8));
        }
        
        .bg-midnight .text-celestial {
          color: var(--celestial-gold);
        }
        
        .bg-midnight .text-moonlight {
          color: var(--moonlight-silver);
        }
      `}</style>
      
      {/* Navigation Bar */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex flex-col md:flex-row md:items-center justify-between font-sans">
          <div className="flex items-center">
            <div className="mr-2">
              <SunMoon className="h-12 w-12 text-midnight" />
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">Moon Above Coaching<span className="text-gray-400"></span></div>
            </div>
          </div>

          <div className="flex items-center mt-4 md:mt-0 space-x-4 md:space-x-6 text-sm">
            <Link href="#" className="px-2 py-1 hover:text-clarity transition-colors">
              Enneagram
            </Link>
            <Link href="#" className="px-2 py-1 hover:text-clarity transition-colors">
              For Teams
            </Link>
            <Link href="#" className="px-2 py-1 hover:text-clarity transition-colors">
              Resources
            </Link>
            <Link href="#" className="px-2 py-1 hover:text-clarity transition-colors">
              About
            </Link>
            <Link href="#" className="btn-celestial px-5 py-2 rounded-full font-medium">
              Clarity Sprint
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 leading-tight font-sans">
            Find Clarity Above the Chaos
          </h1>

<p className="mb-6 text-lg">
<i>Raise or bootstrap? Hire or stay lean? Pivot or persevere?</i> 
</p>

<p className="mb-6 text-lg">
Startup founders face high-stakes decisions every day. To make the right call, you need more than data. You need clarity about what's driving you and where you truly want to go. 
</p>

<p className="mb-6 text-lg">
Moon Above offers tools, community, and coaching to help founders lead from self-knowledge so that they can reconnect with clarity and joy in their startup journey.
</p>

<p className="mb-6 text-lg">
<b>Ready to invest in your leadership?</b> Take the 5-minute Clarity Quiz and start your path today.
</p>


          <Link
            href="#"
            className="inline-block btn-celestial px-6 py-3 rounded-full font-sans font-medium"
          >
            Take the Clarity Quiz
          </Link>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative overflow-hidden">
            <Image
              src="/moon8.png"
              alt="Animated illustration of a moon"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Three Modules Section */}
      <section className="py-16 bg-gray-50 mt-16 rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 section-heading">How We Can Help</h2>
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
              <Link href="#" className="text-clarity font-medium hover:underline inline-flex items-center">
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
              <Link href="#" className="text-clarity font-medium hover:underline inline-flex items-center">
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
              <Link href="#" className="text-clarity font-medium hover:underline inline-flex items-center">
                Book a Session <ArrowUpFromLine className="h-4 w-4 ml-2 transform rotate-90" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* What is Above the Line Section */}
      <section className="py-16 mt-16 bg-midnight rounded-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="stars absolute w-full h-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 section-heading text-moonlight">What is it Like to Lead Above the Line?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6 text-moonlight">
                The concept of "Above the Line" comes from The Conscious Leadership Group and centers around a fundamental question that leaders must continuously ask themselves: "Where am I?"
              </p>
              <p className="text-lg mb-6 text-moonlight">
                Are you operating <span className="text-celestial font-medium">above the line</span> — in a state of openness, curiosity, and commitment to learning? Or <span className="text-moonlight font-medium">below the line</span> — in a state of defensiveness, closed-mindedness, and commitment to being right? <b>Hint: about 90% of leaders spend 90% of their time below the line.</b>
              </p>
              <p className="text-lg mb-6 text-moonlight">
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
          <h2 className="text-3xl font-bold text-center mb-12 section-heading">What Our Clients Say</h2>
          
          {/* Carousel Container */}
          <div className="relative mx-auto max-w-5xl">
            <div className="overflow-hidden px-8 md:px-12">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${activeTestimonial * 33.333}%)`,
                  width: '300%'
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id} 
                    className="w-1/3 px-4 flex-shrink-0 flex justify-center"
                  >
                    <div 
                      className={`celestial-card rounded-lg overflow-hidden p-8 w-full md:w-4/5 transition-all duration-500 ${
                        activeTestimonial === index 
                          ? 'opacity-100 scale-100 shadow-lg'
                          : 'opacity-40 scale-95'
                      }`}
                    >
                      <blockquote className="text-xl md:text-2xl font-medium mb-6">
                        <span className="text-gray-500">"</span>
                        {testimonial.quote.split('.').map((sentence, sentIndex, array) => {
                          // Highlight key phrases for Filip's testimonial (first testimonial)
                          if (sentIndex === 1 && index === 0) {
                            const parts = sentence.split('connect the dots between these two worlds');
                            return (
                              <span key={sentIndex}>
                                {parts[0]}
                                <span className="highlight-moon">connect the dots between these two worlds</span>
                                {parts[1]}
                                {sentIndex !== array.length - 1 ? '.' : ''}
                              </span>
                            );
                          } else if (sentIndex === 2 && index === 0) {
                            const parts = sentence.split('helped me push the boundaries of what I am capable of');
                            return (
                              <span key={sentIndex}>
                                {parts[0]}
                                <span className="highlight-moon">helped me push the boundaries of what I am capable of</span>
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
                                <span className="highlight-moon">safe, solid ground</span>
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
                                <span className="highlight-moon">truly transformational for me as a leader and a mom</span>
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
                                <span className="highlight-moon">truly transformative</span>
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
                                <span className="highlight-moon">create a healthier relationship with my ambition</span>
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
                      
                      <div className="flex items-center mt-6">
                        <div className="mr-6">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={124}
                            height={124}
                            className="rounded-full h-24 w-24 object-cover avatar-glow"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{testimonial.name}</h3>
                          <p className="text-gray-600 text-sm">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Arrows on sides */}
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-midnight flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors z-10"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ArrowUpFromLine className="h-5 w-5 transform -rotate-90 text-moonlight" />
            </button>
            
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-midnight flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors z-10"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ArrowUpFromLine className="h-5 w-5 transform rotate-90 text-moonlight" />
            </button>
            
            {/* Navigation Dots */}
            <div className="flex items-center justify-center mt-8 space-x-3">
              {testimonials.map((testimonial, index) => (
                <button 
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer border border-midnight ${
                    index === activeTestimonial ? "bg-celestial" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* About Your Coach Section */}
      <section className="py-16 mt-16 bg-gray-50 rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 section-heading">About Nick Barr</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-6 text-lg">
                I'm <a href="https://www.linkedin.com/in/nsbarr/" className="text-black font-medium hover:underline">Nick Barr</a>, a 2x-founder and Upbuild-certified leadership coach.
              </p>
              <p className="mb-6 text-lg">
                I help startup founders lead from clarity — not reactivity — so they can build companies that are aligned, sustainable, and genuinely meaningful to them.
              </p>
              <p className="mb-6 text-lg">
                Before becoming a coach, I spent 15 years as a founder and product leader at venture-backed and nonprofit startups, including Khan Academy. I've also advised and mentored founders in the Union Square Ventures, Betaworks, and Techstars communities.
              </p>
              <p className="mb-6 text-lg">
                This work is personal for me. I have lived the emotional complexity of solo founding: the ambiguity, the isolation, the self-questioning. I know how hard it can be to lead when your inner and outer worlds are in chaos — and how powerful it is to lead when you're grounded and clear.
              </p>
              <Link href="https://www.nsbarr.com/" className="text-clarity font-medium hover:underline inline-flex items-center">
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
      <button className="btn-celestial text-xs px-3 py-1 rounded">Manage consent</button>
    </div>

    <style jsx>{`
      .stars {
        background-image: radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
        background-repeat: repeat;
        background-size: 200px 200px;
      }
    `}</style>
  </div>
)
}
