import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex margin-auto justify-center items-center min-h-[90vh]'>
      <div className='flex w-full max-w-4xl'>
        <div className='flex flex-row-reverse h-full w-auto m-auto md:w-full shadow-lg bg-orange-300 rounded-2xl md:bg-login-background bg-contain bg-no-repeat'>
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: 'bg-[#F5835E] hover:bg-[#F5905E]',
                footerActionLink: 'text-[#F5835E] hover:text-[#F5905E]'
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}
