import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className='flex min-h-screen flex-col items-center'>
      <section className='flex min-h-[90vh] flex-col-reverse items-center justify-center md:flex-row'>
        <div className='flex max-w-5xl flex-col items-center justify-center gap-5 px-10 text-center md:text-left'>
          <h2 className='text-6xl md:text-7xl lg:text-8xl xl:text-8xl'>
            Comparte y descubre <br /> tus recetas preferidas
          </h2>
          <div className='flex gap-5 text-2xl text-white'>
            <button className='rounded-md bg-[#332C45] px-8 py-2 '>
              Ver recetas
            </button>
            <Link href='/sign-in' className='rounded-md bg-[#F5835E] px-8 py-2'>
              Empieza ahora
            </Link>
          </div>
        </div>
        <img
          className='w-[300px] md:w-[400px] lg:w-[500px] '
          src='/persona_feliz.png'
          alt='Persona con comida'
        />
      </section>
      <section className='relative flex min-h-[60vh] w-full justify-between'>
        <div className='absolute -left-80 -top-14 -z-10 h-[700px] w-[1200px] rounded-full bg-[#f5845E] opacity-20'></div>
        <div className=' w-full '>
          <Image
            className='mx-auto w-full max-w-lg'
            width={500}
            height={200}
            src='/donut_coffe.png'
            alt='Una imagen de un donut y un café'
          />
        </div>
        <div className='flex max-h-[50%] w-full max-w-[50%] flex-col gap-12 rounded-lg bg-[#F5835E] py-10 pl-32 pr-10 text-white'>
          <h2 className='text-7xl'>¡Descubre las mejores recetas!</h2>
          <p className='text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      <section className='relative my-40 flex min-h-[60vh] w-full flex-row-reverse justify-between'>
        <div className='absolute -right-80 -top-14 -z-10 h-[700px] w-[1200px] rounded-full bg-[#332C45] opacity-20'></div>
        <div className=' w-full '>
          <Image
            className='mx-auto w-full max-w-lg'
            width={500}
            height={200}
            src='/oranges.png'
            alt='Una imagen de un donut y un café'
          />
        </div>
        <div className='flex max-h-[50%] w-full max-w-[50%] flex-col gap-12 rounded-lg bg-[#332C45] py-10 pl-10 pr-32 text-white'>
          <h2 className='text-7xl'>Comparte las recetas de la abuela</h2>
          <p className='text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </div>
  );
}
