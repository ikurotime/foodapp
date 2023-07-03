import { PrismaClient } from '@prisma/client'

async function getData({ id }: { id: number }) {
  const prisma = new PrismaClient()
  const data = await prisma.recetas.findUnique({
    where: {
      id
    }
  })
  return data
}
async function getAllData({ id }: { id: number }) {
  const prisma = new PrismaClient()
  const data = await prisma.recetas.findMany({
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
  const allData = await getAllData({ id: parseInt(params.slug) })
  return (
    <div className='flex justify-center items-center gap-3 min-h-screen'>
      <span className='text-8xl'>{data?.nombre}</span>
      <div>
        <span className='text-4xl'>Top comidas populares</span>
        <div className='grid grid-rows-3 gap-4'>
          {allData?.map((item) => (
            <div key={item.id} className='grid grid-cols-2 gap-4'>
              <span className='text-2xl'>{item?.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
