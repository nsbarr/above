import Image, { ImageProps } from 'next/image'

type GitHubImageProps = ImageProps & {
  // No additional props needed at this time
}

export default function GitHubImage(props: GitHubImageProps) {
  const { src, ...rest } = props;
  
  // Determine if we're in production (GitHub Pages)
  const isProd = process.env.NODE_ENV === 'production';
  
  // Adjust the src path for GitHub Pages
  const imageSrc = typeof src === 'string' && src.startsWith('/') && isProd
    ? `/above${src}`
    : src;
  
  return (
    <Image
      src={imageSrc}
      {...rest}
    />
  )
} 