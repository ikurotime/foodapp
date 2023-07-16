'use client';
import HeaderLogo from '@/img/HeaderLogo';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  const { isSignedIn } = useUser();
  return (
    <nav className='m-auto flex h-24 w-full max-w-6xl items-center justify-between p-8'>
      <div className='flex w-full justify-between'>
        <Link href={isSignedIn ? '/dashboard' : '/'}>
          <HeaderLogo />
        </Link>
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  );
}
