import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className='flex flex-col min-h-screen items-center'>
      <section className='flex flex-col-reverse min-h-[90vh] justify-center items-center md:flex-row'>
        <div className='flex flex-col gap-5 max-w-5xl'>
          <h2 className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl'>
            Comparte y descubre <br /> tus recetas preferidas
          </h2>
          <div className='flex text-white text-4xl gap-5'>
            <button className='px-8 py-2 bg-[#332C45] rounded-md '>
              Ver recetas
            </button>
            <Link href='/sign-in' className='px-8 py-2 bg-[#F5835E] rounded-md'>
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
  )
}
