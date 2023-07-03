import HeaderLogo from '@/img/HeaderLogo'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex mx-auto mt-8 w-full max-w-[1000px]'>
      <Link href='/'>
        <HeaderLogo />
      </Link>
    </div>
  )
}
