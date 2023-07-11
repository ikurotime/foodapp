import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className='flex min-h-screen flex-col items-center'>
      <section className='flex min-h-[90vh] flex-col-reverse items-center justify-center md:flex-row'>
        <div className='flex max-w-5xl flex-col gap-5'>
          <h2 className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl'>
            Comparte y descubre <br /> tus recetas preferidas
          </h2>
          <div className='flex gap-5 text-4xl text-white'>
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
        <div></div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
}
