import CommentSection from '@/components/CommentSection';
import LikesButton from '@/components/LikesButton';
import Recipe from '@/components/Recipe';
import { prisma } from '@/prismaClient';
import { getAllRecipes, getRecipeDataAndComments } from '@/utils';
import { currentUser } from '@clerk/nextjs';
import MarkdownIt from 'markdown-it';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

export default async function Page({ params }: { params: { slug: string } }) {
  const recipeId = Number(params.slug);
  const data = await getRecipeDataAndComments({ id: recipeId });
  const allData = await getAllRecipes({ id: recipeId });
  const md = new MarkdownIt();
  const user = await currentUser();
  async function handleLike() {
    'use server';
    try {
      const likeExists = await prisma.likes.findFirst({
        where: {
          recetaId: recipeId,
          userId: user?.id,
        },
      });
      if (likeExists) {
        await prisma.likes.delete({
          where: {
            id: likeExists.id,
          },
        });
        revalidatePath(`/dashboard/recetas/${recipeId}`);
      } else {
        await prisma.likes.create({
          data: {
            recetaId: recipeId,
            userId: user?.id,
          },
        });
        revalidatePath(`/dashboard/recetas/${recipeId}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex min-h-screen items-center justify-center gap-3'>
      <div className='sticky top-24 flex flex-col gap-5 self-start'>
        <form action={handleLike}>
          <LikesButton likes={data?._count.Likes || 0} />
        </form>
        <Link
          href='#comments'
          className='scroll transition-transform hover:scale-125 hover:cursor-pointer'
        >
          💬: {data?._count.comentarios}
        </Link>
      </div>

      <div className='flex max-w-xl flex-1 flex-col gap-5 self-start'>
        <div className='max-w-xl flex-1 rounded-md bg-cream p-5'>
          <div className='flex gap-3 text-xl'>
            <span className='text-gray-500'>@{data?.user?.username}</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-4xl'>{data?.nombre}</span>
            <span className='text-base '>{data?.descripcion}</span>
          </div>
          <br />
          <div
            className='prose'
            dangerouslySetInnerHTML={{
              __html: md.render(data?.content || ''),
            }}
          ></div>
        </div>
        <CommentSection post={data} recipeId={recipeId} />
      </div>
      <div className='sticky top-24  self-start'>
        <span className='text-4xl'>Top comidas populares</span>
        <div className='grid grid-rows-3 gap-4'>
          {allData?.map((item) => (
            <Recipe key={item.id} recipe={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
