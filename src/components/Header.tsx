import HeaderLogo from '@/img/HeaderLogo'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className='flex mx-auto mt-8 w-full max-w-[1000px] justify-between items-center'>
      <Link href='/'>
        <HeaderLogo />
      </Link>
      <UserButton afterSignOutUrl='/' />
    </nav>
  )
}
