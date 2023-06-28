import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: 'bg-[#F5835E] hover:bg-[#F5905E]',
          footerActionLink: 'text-[#F5835E] hover:text-[#F5905E]'
        }
      }}
    />
  )
}
