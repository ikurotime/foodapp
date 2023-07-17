import Editor from '@/components/Editor';
import { prisma } from '@/prismaClient';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
export default function page() {
  async function addRecipe(data: any) {
    'use server';
    const newData = Object.fromEntries(data.entries());
    const newRecipe = await prisma.recetas.create({
      data: {
        userId: (await currentUser())?.id,
        alergenos: newData.alergenos,
        descripcion: newData.descripcion,
        content: newData.editor,
        ingredientes: newData.ingredientes,
        nombre: newData.Titulo,
        portraitImage: newData.image_url,
        tiempoPreparacion: Number(newData.tiempoPreparacion),
      },
    });
    redirect(`/dashboard/recetas/${newRecipe.id}`);
  }

  return (
    <div className='flex min-h-screen w-full  flex-col'>
      <div className='m-auto flex h-[90vh] w-full max-w-6xl rounded-lg bg-white p-8'>
        <form action={addRecipe} className='flex w-full flex-col gap-3'>
          <label>Titulo de la receta</label>
          <input
            placeholder='Mi deliciosa receta'
            className='rounded-md border-2 border-black  p-3'
            name='Titulo'
            type='text'
          />
          <label>Descripción</label>
          <input
            placeholder='Esta receta es de mis favoritas....'
            className='rounded-md border-2 border-black  p-3'
            name='descripcion'
            type='text'
          />
          <label>URL de imagen</label>
          <input
            placeholder='https://miimagen.com'
            className='rounded-md border-2 border-black  p-3'
            name='image_url'
            type='text'
          />
          <label>Contenido</label>
          <Editor />
          <div className='grid grid-cols-2 gap-5'>
            <div className='flex flex-col'>
              <label>Ingredientes</label>
              <input
                name='ingredientes'
                placeholder='Harina,Huevo...'
                className='rounded-md border-2 border-black  p-3'
              />
            </div>
            <div className='flex flex-col'>
              <label>Tiempo de preparacion en minutos</label>
              <input
                name='tiempoPreparacion'
                type='number'
                className='rounded-md border-2 border-black  p-3'
              />
            </div>
            <div className='flex flex-col'>
              <label>Alergenos</label>
              <input
                name='alergenos'
                placeholder=''
                className='rounded-md border-2 border-black  p-3'
              />
            </div>
          </div>
          <button className='bg-slate-900 px-5 py-3 text-xl text-white'>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
