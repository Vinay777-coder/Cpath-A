'use client'

import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface AuthenticatedLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

export function AuthenticatedLink({ href, className, children }: AuthenticatedLinkProps) {
  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <Button className={className} disabled>
        Loading...
      </Button>
    )
  }

  if (!isSignedIn) {
    return (
      <Link href="/sign-in" className={className}>
        {children}
      </Link>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}