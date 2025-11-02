
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SocialMediaLinkProps {
  href: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ href, src, width, height, alt, className }) => {
  return (
    <Link href={href}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className}
      />
    </Link>
  );
};

export default SocialMediaLink;
