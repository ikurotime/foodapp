import { SignIn, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <UserButton afterSignOutUrl='/' />
    </main>
  )
}
