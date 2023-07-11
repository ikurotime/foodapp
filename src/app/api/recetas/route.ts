import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const body = await request.json();
  const receta = await prisma.recetas.create({
    data: {
      nombre: body.nombre,
      descripcion: body.descripcion,
      alergenos: '',
      ingredientes: '',
      tiempoPreparacion: 0,
    },
  });
  return NextResponse.json(receta);
  //return NextResponse.redirect(`/recetas/${receta.id}`) TODO: redirect to receta
}
