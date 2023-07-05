import Image from 'next/image'
import Link from 'next/link'
import { getAllRecipes } from '@/app/dashboard/recetas/[slug]/page'

type Props = { recipe: Awaited<ReturnType<typeof getAllRecipes>>[0] }

export default function Recipe({ recipe }: Props) {
  return (
    <Link
      href={`/dashboard/recetas/${recipe.id}`}
      className='flex items-center text-3xl border rounded-md bg-cream min-w-[350px] p-5 min-h-[150px]'
    >
      <div className='flex flex-row margin-auto w-full'>
        <div className=' flex justify-center items-center min-w-[30%]'>
          <Image
            width={70}
            height={70}
            src={recipe.portraitImage || ''}
            alt='imagen de comida'
          />
        </div>
        <div className='flex-1 items-start flex flex-col margin-auto w-full'>
          <div className='flex gap-2'>
            <h2>{recipe.nombre}</h2>
            <p className='text-[#A5A5A5]'>@{recipe.user?.username}</p>
          </div>
          <span>{recipe.descripcion}</span>
          <div className='flex justify-between text-2xl'>
            <span>Min:{recipe.tiempoPreparacion}</span>
            <div>
              <span className='text-base'>❤️:</span>
              <span> {recipe._count.Likes}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
