import Recipe from '@/components/Recipe'
import { prisma } from '@/prismaClient'

async function getRecipes() {
  const recetas = await prisma.recetas.findMany({
    include: { user: true, _count: { select: { Likes: true } } }
  })
  return recetas
}

export default async function Dashboard() {
  const data = await getRecipes()
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <main className='grid gap-5 items-center justify-center px-20 text-center grid-cols-2'>
        {data.map((recipe: any) => {
          return <Recipe key={recipe.id} recipe={recipe} />
        })}
      </main>
    </div>
  )
}
