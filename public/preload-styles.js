// Script to preload CSS and prevent layout shifts
(function() {
  // Function to preload CSS assets
  function preloadCSS() {
    // Find all CSS links in the page
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    
    // Create a temporary div to hold styles while CSS loads
    const tempStyles = document.createElement('style');
    tempStyles.textContent = `
      body {
        visibility: visible !important;
        background-color: #F6F8FA !important;
        color: #1A2A48 !important;
      }
      
      .btn-celestial {
        background-color: #1A2A48 !important;
        color: #E8EAED !important;
      }
    `;
    document.head.appendChild(tempStyles);
    
    // Mark the document as loaded for CSS purposes immediately
    document.documentElement.classList.add('css-loaded');
    
    // Preload critical images
    function preloadImages() {
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
      });
    }
    
    // Preload images to avoid layout shifts
    preloadImages();
    
    // Handle any button styling that depends on image loading
    document.querySelectorAll('.btn-celestial').forEach(btn => {
      btn.style.display = 'inline-block';
      btn.style.backgroundColor = '#1A2A48';
      btn.style.color = '#E8EAED';
    });
  }
  
  // Run as soon as possible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCSS);
  } else {
    preloadCSS();
  }
})(); 