import Recipe from '@/components/Recipe';
import { prisma } from '@/prismaClient';

async function getRecipes() {
  const recetas = await prisma.recetas.findMany({
    include: {
      user: true,
      _count: { select: { Likes: true, comentarios: true } },
    },
  });
  return recetas;
}

export default async function Dashboard() {
  const data = await getRecipes();
  return (
    <div className='flex h-full min-h-screen flex-col items-center justify-center py-2'>
      <div className='flex flex-1 flex-col justify-evenly text-center'>
        <div>
          <h2 className='m-3 text-6xl'>Todas las recetas</h2>
        </div>
        <main className='grid items-center justify-center gap-5 px-20 text-center lg:grid-cols-2 xl:grid-cols-3'>
          {data.length > 0 ? (
            data.map((recipe: any) => {
              return <Recipe key={recipe.id} recipe={recipe} />;
            })
          ) : (
            <p>No hay recetas</p>
          )}
        </main>
      </div>
    </div>
  );
}
