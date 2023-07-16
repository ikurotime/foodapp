import { prisma } from '@/prismaClient';
import { getRecipeDataAndComments } from '@/utils';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

type Props = {
  post: Awaited<ReturnType<typeof getRecipeDataAndComments>>;
  recipeId: number;
};

export default function CommentSection({ post, recipeId }: Props) {
  async function comment(e: FormData) {
    'use server';
    const user = await currentUser();

    await prisma.comentario.create({
      data: {
        texto: e.get('comment')?.toString() || '',
        userId: user?.id,
        recetaId: recipeId,
      },
    });
    redirect(`/dashboard/recetas/${recipeId}`);
  }

  return (
    <div className='flex flex-col gap-5 py-5'>
      <span>Comentarios:</span>
      <form action={comment as unknown as string}>
        <input
          className='w-full rounded-md border border-slate-900 p-2'
          name='comment'
          type='text'
        />
      </form>
      {post?.comentarios
        ?.sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
        .map((item) => (
          <div
            key={item?.id}
            className='flex gap-3 rounded-md border border-zinc-700 bg-cream px-2'
          >
            <span>{item?.user?.username}</span>
            <span>{item?.texto}</span>
          </div>
        ))}
    </div>
  );
}
