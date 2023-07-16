import Editor from '@/components/Editor';
import { prisma } from '@/prismaClient';
import { currentUser, useAuth } from '@clerk/nextjs';
export default function page() {
  async function addRecipe(data: any) {
    'use server';
    const user = await currentUser();
    const newData = Object.fromEntries(data.entries());
    const nuevaReceta = await prisma.recetas.create({
      data: {
        userId: user!.id,
        alergenos: newData.alergenos,
        descripcion: newData.editor,
        ingredientes: newData.ingredientes,
        nombre: newData.Titulo,
        tiempoPreparacion: Number(newData.tiempoPreparacion),
      },
    });
    return nuevaReceta;
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <div className='m-auto flex h-[90vh] rounded-lg bg-white p-8'>
        <form action={addRecipe} className='flex w-full flex-col gap-3'>
          <label>Titulo de la receta</label>
          <input
            placeholder='Mi deliciosa receta'
            className='rounded-md border-2 border-black  p-3'
            name='Titulo'
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
