'use client';
import HeaderLogo from '@/img/HeaderLogo';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  const { isSignedIn } = useUser();
  return (
    <nav className='mx-auto mt-8 flex w-full max-w-[1000px] items-center justify-between'>
      {' '}
      <Link href={isSignedIn ? '/dashboard' : '/'}>
        <HeaderLogo />
      </Link>
      <UserButton afterSignOutUrl='/' />
    </nav>
  );
}
