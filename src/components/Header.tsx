'use client'
import HeaderLogo from '@/img/HeaderLogo'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

export default function Header() {
  const { isSignedIn } = useUser()
  return (
    <nav className='flex mx-auto mt-8 w-full max-w-[1000px] justify-between items-center'>
      {' '}
      <Link href={isSignedIn ? '/dashboard' : '/'}>
        <HeaderLogo />
      </Link>
      <UserButton afterSignOutUrl='/' />
    </nav>
  )
}
