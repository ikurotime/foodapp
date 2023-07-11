import Recipe from '@/components/Recipe';
import { prisma } from '@/prismaClient';

async function getRecipes() {
  const recetas = await prisma.recetas.findMany({
    include: { user: true, _count: { select: { Likes: true } } },
  });
  return recetas;
}

export default async function Dashboard() {
  const data = await getRecipes();
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <main className='grid grid-cols-2 items-center justify-center gap-5 px-20 text-center'>
        {data.map((recipe: any) => {
          return <Recipe key={recipe.id} recipe={recipe} />;
        })}
      </main>
    </div>
  );
}
