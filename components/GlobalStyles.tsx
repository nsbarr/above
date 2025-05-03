export default function GlobalStyles() {
  return (
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
        /* Prevent layout shifts during scrolling */
        overflow-y: scroll;
      }
      
      /* Ensure elements with dynamic content have stable layout */
      .testimonial-card, .aspect-video, .bg-midnight, section {
        contain: layout paint;
        content-visibility: auto;
      }
      
      /* Prevent CLS (Cumulative Layout Shift) */
      img, iframe {
        aspect-ratio: attr(width) / attr(height);
      }
      
      /* Prevent iframe-based layout shifts */
      iframe {
        display: block;
        width: 100%;
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

      /* Active button style */
      .btn-celestial.active {
        background-color: var(--clarity-teal);
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
      
      /* Star pattern background */
      .stars {
        background-image: radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
                          radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
        background-repeat: repeat;
        background-size: 200px 200px;
      }
    `}</style>
  )
} 