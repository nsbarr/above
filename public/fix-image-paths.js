// Simple script to fix image paths on GitHub Pages
(function() {
  // Only run in production environment
  if (window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1') {
    return;
  }
  
  // Extract the base path from the URL
  const basePath = window.location.pathname.match(/^\/[^/]+/) || [''];
  
  // Lower priority of animated PNG to avoid blocking rendering
  window.addEventListener('DOMContentLoaded', function() {
    // Add base path to image sources if needed
    document.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src');
      if (src && src.startsWith('/') && !src.startsWith(basePath[0])) {
        img.setAttribute('src', basePath[0] + src);
      }
      
      // Set lower priority for the animated PNG
      if (src && src.includes('moon8.png')) {
        img.loading = 'lazy';
        img.fetchPriority = 'low';
      }
    });
  });
})(); 