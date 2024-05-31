'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  tabIndex?: number
  children: React.ReactNode
  className?: string | ((props: { isActive: boolean }) => string | undefined)
}
export default function NavLink({
  href,
  className,
  children,
  ...rest
}: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      {...rest}
      href={href}
      className={
        typeof className == 'function' ? className({ isActive }) : className
      }
    >
      {children}
    </Link>
  )
}
