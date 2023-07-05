import Recipe from '@/components/Recipe'
import { prisma } from '@/prismaClient'

async function getData({ id }: { id: number }) {
  const data = await prisma.recetas.findUnique({
    where: {
      id
    },
    include: {
      user: true,
      comentarios: { select: { id: true, texto: true, user: true } },
      _count: { select: { Likes: true } }
    }
  })
  return data
}
export async function getAllRecipes({ id }: { id: number }) {
  const data = await prisma.recetas.findMany({
    include: { user: true, _count: { select: { Likes: true } } },
    where: {
      NOT: {
        id
      }
    },
    take: 3
  })
  return data
}
export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData({ id: parseInt(params.slug) })
  const allData = await getAllRecipes({ id: parseInt(params.slug) })

  return (
    <div className='flex justify-center items-center gap-3 min-h-screen'>
      <div className='flex flex-col flex-1 max-w-xl gap-5'>
        <div className='bg-cream flex-1 max-w-xl rounded-md p-5'>
          <div className='flex gap-3 text-4xl'>
            <span>{data?.nombre}</span>
            <span className='text-gray-500'>@{data?.user?.username}</span>
            <span>❤️: {data?._count.Likes}</span>
          </div>
          <span className='text-3xl'>{data?.descripcion}</span>
        </div>
        <div className='flex gap-3 text-2xl'>
          {data?.comentarios?.map((item) => (
            <div
              key={item.id}
              className='flex gap-3 border px-2 border-zinc-700 rounded-md bg-cream'
            >
              <span>{item?.user?.username}</span>
              <span>{item?.texto}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <span className='text-4xl'>Top comidas populares</span>
        <div className='grid grid-rows-3 gap-4'>
          {allData?.map((item) => (
            <Recipe key={item.id} recipe={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
