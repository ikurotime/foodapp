import { prisma } from '@/prismaClient';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  if (slug === 'all') {
    const recetas = await prisma.recetas.findMany({
      include: { user: true, _count: { select: { Likes: true } } },
    });
    return NextResponse.json(recetas);
  }
  return NextResponse.redirect('/api/recetas/' + slug);
}
