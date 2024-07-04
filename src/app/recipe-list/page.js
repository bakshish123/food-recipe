import RecipeList from "@/components/recipe-list"

async function fetchRecipeList(){
    try{
       const res =  await fetch('https://dummyjson.com/recipes')
       const data = await res.json()
       return data?.recipes
    }
    catch(e){
        throw new Error(e)
    }
}

export default async function recipes(){
    const recipeList = await fetchRecipeList()
    return(
        <div>
            <RecipeList recipeList={recipeList}></RecipeList>
        </div>
    )
}