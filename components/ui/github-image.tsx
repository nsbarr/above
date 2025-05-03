import Image, { ImageProps } from 'next/image'

type GitHubImageProps = ImageProps & {
  // No additional props needed at this time
}

export default function GitHubImage(props: GitHubImageProps) {
  const { src, ...rest } = props;
  
  // Get the base path directly from the window location in production
  // This is more reliable than trying to use environment variables at build time
  let basePath = '';
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    const match = pathname.match(/^\/[^/]+/);
    if (match && match[0] !== '/') {
      basePath = match[0];
    }
  }
  
  // Adjust the src path
  let imageSrc = src;
  if (typeof src === 'string' && src.startsWith('/') && basePath) {
    // Only add the base path if it's not already included in the src
    if (!src.startsWith(basePath)) {
      imageSrc = `${basePath}${src}`;
    }
  }
  
  return (
    <Image
      src={imageSrc}
      {...rest}
    />
  )
} 