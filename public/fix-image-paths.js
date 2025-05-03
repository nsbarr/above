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
  
  // Check all images on the page
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && src.startsWith('/') && !src.startsWith(basePath)) {
        img.setAttribute('src', `${basePath}${src}`);
      }
    });
    
    // Also fix background images in CSS
    const styles = document.querySelectorAll('style');
    styles.forEach(style => {
      if (style.textContent) {
        style.textContent = style.textContent.replace(
          /url\(['"]?\/((?!http)[^'")]+)['"]?\)/g, 
          `url('${basePath}/$1')`
        );
      }
    });
  });
})(); 