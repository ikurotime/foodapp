import Image from 'next/image';
import Link from 'next/link';
import { getAllRecipes } from '@/utils';

type Props = { recipe: Awaited<ReturnType<typeof getAllRecipes>>[0] };

export default function Recipe({ recipe }: Props) {
  return (
    <Link
      href={`/dashboard/recetas/${recipe.id}`}
      className='flex min-h-[150px] min-w-[350px] items-center rounded-md border bg-cream p-5 text-xl'
    >
      <div className='margin-auto flex w-full flex-row gap-3'>
        <div className=' flex min-w-[30%] items-center justify-center '>
          <Image
            className='aspect-square w-full rounded-md object-cover lg:h-full'
            width={70}
            height={70}
            src={recipe.portraitImage || ''}
            alt='imagen de comida'
          />
        </div>
        <div className='margin-auto flex w-full flex-1 flex-col items-start'>
          <div className='flex gap-2'>
            <h2>{recipe.nombre}</h2>
            <p className='text-[#A5A5A5]'>@{recipe.user?.username}</p>
          </div>
          <span>{recipe.descripcion}</span>
          <div className='mt-auto flex justify-between gap-3 self-end text-2xl'>
            <span>🕓:{recipe.tiempoPreparacion}</span>
            <span> ❤️:{recipe._count.Likes}</span>

            <span>💬{recipe._count.comentarios}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
