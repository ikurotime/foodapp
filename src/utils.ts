import { prisma } from './prismaClient';

export async function getAllRecipes({ id }: { id: number }) {
  const data = await prisma.recetas.findMany({
    include: {
      user: true,
      _count: { select: { Likes: true, comentarios: true } },
    },
    where: {
      NOT: {
        id,
      },
    },
    take: 3,
  });
  return data;
}
export async function getRecipeDataAndComments({ id }: { id: number }) {
  const data = await prisma.recetas.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      comentarios: {
        select: { id: true, texto: true, user: true, created_at: true },
      },
      _count: { select: { Likes: true, comentarios: true } },
    },
  });
  return data;
}
