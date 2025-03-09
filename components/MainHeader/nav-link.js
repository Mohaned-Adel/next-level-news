"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, text }) {
  const pathname = usePathname();
  return (
    <Link href={href} className={pathname.startsWith(href) ? "active" : ""}>
      {text}
    </Link>
  );
}
