
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoLinkProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  link: string;
}

const LogoLink: React.FC<LogoLinkProps> = ({
  src,
  width,
  height,
  alt,
  className,
  link="/",
}) => {
  return (
    <Link href={link}>
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

export default LogoLink;
