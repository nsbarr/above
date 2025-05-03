import Image, { ImageProps } from 'next/image'

type GitHubImageProps = ImageProps & {
  // No additional props needed at this time
}

export default function GitHubImage(props: GitHubImageProps) {
  const { src, ...rest } = props;
  
  // For production (GitHub Pages), we rely on the prefixed paths already in HTML
  // This component now mainly serves as documentation that this image
  // has been properly handled for GitHub Pages deployment
  return (
    <Image
      src={src}
      {...rest}
    />
  )
} 