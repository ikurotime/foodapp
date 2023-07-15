import { prisma } from './prismaClient';

export async function getAllRecipes({ id }: { id: number }) {
  const data = await prisma.recetas.findMany({
    include: { user: true, _count: { select: { Likes: true } } },
    where: {
      NOT: {
        id,
      },
    },
    take: 3,
  });
  return data;
}
