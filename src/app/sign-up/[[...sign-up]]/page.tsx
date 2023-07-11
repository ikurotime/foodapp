import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='margin-auto flex min-h-[90vh] items-center justify-center'>
      <div className='flex w-full max-w-4xl'>
        <div className='m-auto flex h-full w-auto flex-row-reverse rounded-2xl bg-orange-300 bg-contain bg-no-repeat shadow-lg md:w-full md:bg-login-background'>
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: 'bg-[#F5835E] hover:bg-[#F5905E]',
                footerActionLink: 'text-[#F5835E] hover:text-[#F5905E]',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
