import Recipe from '@/components/Recipe';
import { prisma } from '@/prismaClient';
import { getAllRecipes } from '@/utils';
import MarkdownIt from 'markdown-it';

async function getData({ id }: { id: number }) {
  const data = await prisma.recetas.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      comentarios: { select: { id: true, texto: true, user: true } },
      _count: { select: { Likes: true } },
    },
  });
  return data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData({ id: parseInt(params.slug) });
  const allData = await getAllRecipes({ id: parseInt(params.slug) });
  const md = new MarkdownIt();
  const result = md.render(
    '![ikuro](https://static-cdn.jtvnw.net/jtv_user_pictures/d2b75368-cf25-44ee-adfd-80f65b2da69b-profile_image-300x300.png)'
  );
  console.log(result);
  return (
    <div className='flex min-h-screen items-center justify-center gap-3'>
      <div className='flex max-w-xl flex-1 flex-col gap-5'>
        <div className='max-w-xl flex-1 rounded-md bg-cream p-5'>
          <div className='flex gap-3 text-4xl'>
            <span>{data?.nombre}</span>
            <span className='text-gray-500'>@{data?.user?.username}</span>
            <span>❤️: {data?._count.Likes}</span>
          </div>
          <span className='text-3xl'>{data?.descripcion}</span>
          <div dangerouslySetInnerHTML={{ __html: result }}></div>
        </div>
        <div className='flex gap-3 text-2xl'>
          {data?.comentarios?.map((item) => (
            <div
              key={item.id}
              className='flex gap-3 rounded-md border border-zinc-700 bg-cream px-2'
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
  );
}
