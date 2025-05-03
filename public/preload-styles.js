// Script to preload CSS and prevent layout shifts
(function() {
  // Function to preload CSS assets and fonts
  function preloadAssets() {
    // Create fallback styles that apply immediately
    const tempStyles = document.createElement('style');
    tempStyles.textContent = `
      /* Apply system fonts immediately to avoid FOUC */
      body {
        font-family: Georgia, serif !important;
        visibility: visible !important;
        opacity: 1 !important;
      }
      
      h1, h2, h3, h4, h5, h6, .font-sans, nav {
        font-family: Arial, sans-serif !important;
        visibility: visible !important;
      }
      
      .btn-celestial {
        background-color: #1A2A48 !important;
        color: #E8EAED !important;
        display: inline-block !important;
        visibility: visible !important;
      }

      /* Ensure the moon image doesn't block rendering */
      img[src*="moon8.png"] {
        content-visibility: auto;
        contain-intrinsic-size: 500px;
      }
    `;
    document.head.appendChild(tempStyles);
    
    // Preload critical images with lower priority
    function preloadImages() {
      // Create a low-priority image loader
      setTimeout(() => {
        const imageUrls = [
          '/moon8.png',
          '/filip.webp',
          '/annetta.webp',
          '/jordan.jpeg',
          '/nb-headshot.jpg'
        ];
        
        imageUrls.forEach(url => {
          const img = new Image();
          const basePath = window.location.pathname.match(/^\/[^\/]+/) || [''];
          img.src = basePath[0] + url;
          // Set loading priority
          img.loading = url.includes('moon8.png') ? 'lazy' : 'eager';
          img.fetchPriority = url.includes('moon8.png') ? 'low' : 'high';
        });
      }, 100); // Small delay to prioritize CSS and fonts first
    }
    
    // Apply styles to buttons immediately
    document.addEventListener('DOMContentLoaded', function() {
      // Apply button styles immediately
      document.querySelectorAll('.btn-celestial').forEach(btn => {
        btn.style.display = 'inline-block';
        btn.style.backgroundColor = '#1A2A48';
        btn.style.color = '#E8EAED';
        btn.style.visibility = 'visible';
      });
      
      // Preload images after DOM is ready
      preloadImages();
    });
  }
  
  // Run immediately
  preloadAssets();
})(); 