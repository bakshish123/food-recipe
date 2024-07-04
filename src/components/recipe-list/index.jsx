import React from 'react'
import {
  Card,
  CardContent
} from "@/components/ui/card"
import Link from 'next/link'


const RecipeList = ({recipeList}) => {
  console.log(recipeList)
  return (
    <div>
      <div className='p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full'>
        <h2 className='text-4xl font-bold text-gray-800 mb-12'>Recipes</h2>
        <Link href={'/'}>go home</Link>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {
            recipeList && recipeList.length >0 ?
            recipeList.map (recipe =>
              <Link href={`/recipe-list/${recipe.id}`}>
              <Card>
                <CardContent className='bg-white rounded-md overflow-hidden shadow-md cursor-pointer transition-all hover:scale-[1.1]'>
                  <div className='w-full aspect-w-16 aspect-h-8 lg:h-80'>
                  <img
                  src={recipe.image}
                  alt={recipe.name}
                  className='h-full w-full object-cover object-top'>
                  </img>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-lg font-bold'>
                      {recipe.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
              </Link>
            )
            :null
          }
        </div>
      </div>
    </div>
  )
}

export default RecipeList