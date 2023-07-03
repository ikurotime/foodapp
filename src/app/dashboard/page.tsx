import { UserButton } from '@clerk/nextjs'

async function getRecipes() {
  const res = await fetch('http://localhost:3000/api/recetas/all')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Dashboard() {
  const data = await getRecipes()
  console.log(data)
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <main className='flex flex-col items-center justify-center flex-1 px-20 text-center'>
        {data.map((recipe: any) => {
          return (
            <div key={recipe.id}>
              <h2>{recipe.nombre}</h2>
              <p>{recipe.descripcion}</p>
              <p>{recipe.ingredientes}</p>
              <p>{recipe.tiempoPreparacion}</p>
              <p>{recipe.alergenos}</p>
            </div>
          )
        })}
      </main>
    </div>
  )
}
