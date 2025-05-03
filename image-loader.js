// This custom loader helps with GitHub Pages deployments
export default function customImageLoader({ src, width, quality }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? '/above' : '';
  const url = `${baseUrl}${src}`;
  
  // For absolute URLs (starting with http/https), don't modify the path
  if (src.startsWith('http')) {
    return src;
  }
  
  return url;
} 