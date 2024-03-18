"use client";
import Link from "next/link";

export const Anchor = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link href={href} className={`text-blue-800 ${className}`}>
      {children}
    </Link>
  );
};
