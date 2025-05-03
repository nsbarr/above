// Script to fix image paths for GitHub Pages
(function() {
  // Only run in production environment
  if (window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1') {
    return;
  }
  
  // Extract the base path from the current URL pathname
  const pathname = window.location.pathname;
  const match = pathname.match(/^\/[^/]+/);
  if (!match || match[0] === '/') {
    return; // No base path or just '/'
  }
  
  const basePath = match[0];
  
  // Fix only image elements on the page
  document.addEventListener('DOMContentLoaded', () => {
    // Fix image sources, but only for actual images (not CSS, JS, etc.)
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && src.startsWith('/') && !src.startsWith(basePath) && 
          /\.(png|jpg|jpeg|gif|webp|svg|ico)$/.test(src)) {
        img.setAttribute('src', `${basePath}${src}`);
      }
    });
    
    // Don't attempt to fix CSS as it causes more problems
  });
})(); 