import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const prisma = new PrismaClient()
  const slug = params.slug
  console.log(slug)
  if (slug === 'all') {
    const recetas = await prisma.recetas.findMany()

    return NextResponse.json(recetas)
  }
  return new Response(`Hello ${slug}!`)
}
