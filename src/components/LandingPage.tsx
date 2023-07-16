import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className='m-auto flex min-h-screen  flex-col items-center '>
      <section className='flex h-[90vh] items-start justify-start py-8 '>
        <div className='flex max-w-6xl flex-col-reverse items-center md:flex-row'>
          <div className='flex items-center gap-8 px-10 text-center md:flex-row md:text-left'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-6xl md:text-7xl lg:text-8xl xl:text-8xl'>
                Comparte y descubre tus recetas preferidas
              </h2>
              <div className='flex gap-5 self-center text-2xl text-white md:self-start'>
                <button className='rounded-md bg-[#332C45] px-8 py-2 '>
                  Ver recetas
                </button>
                <Link
                  href='/sign-in'
                  className='rounded-md bg-[#F5835E] px-8 py-2'
                >
                  Empieza ahora
                </Link>
              </div>
            </div>
          </div>
          <Image
            className='w-[300px] md:w-[400px] lg:w-[400px]'
            width={500}
            height={500}
            src='/hombre_feliz.png'
            alt='Persona con comida'
          />
        </div>
        <svg
          className='absolute -bottom-0 left-0 -z-10'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#F5835E'
            fill-opacity='1'
            d='M0,160L80,144C160,128,320,96,480,112C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          ></path>
        </svg>
      </section>
      <section className='relative z-0 flex min-h-[70vh] w-full justify-between'>
        <div className='flex w-full flex-col gap-12  bg-[#F5835E]  px-10 py-10 text-white md:flex-row md:pl-32 md:pr-10'>
          <div className='m-auto flex w-full self-start'>
            <Image
              className='min-w-md relative z-10 mx-auto w-full max-w-lg'
              width={500}
              height={200}
              src='/donut_coffe.png'
              alt='Una imagen de un donut y un café'
            />
          </div>
          <div className='max-w-[70 ch] relative z-10 flex h-full flex-col items-center justify-start gap-10'>
            <h2 className='text-7xl'>¡Descubre las mejores recetas!</h2>
            <p className='text-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <svg
          className='absolute bottom-0 left-0 '
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#332C45'
            fill-opacity='1'
            d='M0,128L60,128C120,128,240,128,360,149.3C480,171,600,213,720,213.3C840,213,960,171,1080,170.7C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
      </section>

      <section className='relative flex min-h-[60vh] w-full flex-row-reverse justify-between'>
        <div className='flex w-full flex-col gap-12  bg-[#332C45] px-10 py-10 text-white md:flex-row-reverse md:pl-10 md:pr-32'>
          <div className='m-auto flex w-full '>
            <Image
              className='mx-auto w-full max-w-lg'
              width={500}
              height={200}
              src='/oranges.png'
              alt='Una imagen de un donut y un café'
            />
          </div>
          <div className='flex max-w-[70ch] flex-col items-center justify-start gap-10'>
            <h2 className='text-7xl'>Comparte las recetas de la abuela</h2>
            <p className='text-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
