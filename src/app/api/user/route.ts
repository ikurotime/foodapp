import { prisma } from '@/prismaClient';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const user = await request.json();
  console.log(user.data.id);
  console.log(user.data.username);
  console.log(user.type);
  if (user.type === 'user.created') {
    await prisma.user.create({
      data: {
        username: (user.data.username || user.data.first_name) ?? 'user',
        clerkId: user.data.id,
      },
    });
  }
  if (user.type === 'user.deleted') {
    await prisma.user.delete({
      where: {
        clerkId: user.data.id,
      },
    });
    //return NextResponse.redirect(`/recetas/${receta.id}`) TODO: redirect to receta
  }
  return NextResponse.json({ message: 'ok' }, { status: 200 });
}
