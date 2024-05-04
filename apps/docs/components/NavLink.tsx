'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({
  href,
  className,
  children,
  ...rest
}: {
  href: string
  className?: string | ((props: { isActive: boolean }) => string | undefined)
  children: React.ReactNode
}) {
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
