import RecipeDetailsItem from "@/components/recipe-details"
async function fetchDetails(id){
    try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`)
        const data = await res.json()
        return data
    } catch (e) {
        throw new Error(e)
    }
}

export default async function RecipeDetails({params}){
    const details = await fetchDetails(params.details)
return(
    
    <div>
        <RecipeDetailsItem details={details}></RecipeDetailsItem>
    </div>
)
}