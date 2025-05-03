// Simple script to improve image loading
(function() {
  // Add the loaded class to indicate CSS is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      document.documentElement.classList.add('loaded');
    });
  } else {
    document.documentElement.classList.add('loaded');
  }
  
  // Lower priority of moon8.png to avoid blocking
  window.addEventListener('load', function() {
    const moonImages = document.querySelectorAll('img[src*="moon8.png"]');
    moonImages.forEach(img => {
      img.loading = 'lazy';
    });
  });
})(); 