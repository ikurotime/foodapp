'use client';
import HeaderLogo from '@/img/HeaderLogo';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  const { isSignedIn } = useUser();
  return (
    <nav className='sticky top-0 m-auto flex h-24 w-full max-w-6xl items-center justify-between bg-[#fff9f4] p-8'>
      <div className='flex w-full justify-between'>
        <Link href={isSignedIn ? '/dashboard' : '/'}>
          <HeaderLogo />
        </Link>
        <div className='flex h-full items-center gap-4'>
          <Link
            className='flex items-center rounded-md bg-[#F5835E] px-5 py-2 text-center text-white'
            href='/dashboard/recetas/new'
          >
            Crear Receta
          </Link>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </nav>
  );
}
