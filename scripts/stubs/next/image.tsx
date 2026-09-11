import type { ImgHTMLAttributes } from "react";
export default function Image({ src, alt, width, height, priority: _p, ...rest }: ImgHTMLAttributes<HTMLImageElement> & { src: string; priority?: boolean }) {
  return <img src={src} alt={alt ?? ""} width={width} height={height} {...rest} />;
}
