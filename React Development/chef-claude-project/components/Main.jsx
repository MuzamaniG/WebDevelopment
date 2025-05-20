
import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx"
import IngredientsList from "./IngredientsList.jsx"
import { getRecipeFromMistral } from "../ai.js";

export default function Main() {


    const [ingredients, setIngredients] = useState([]);
    const ingredientListItems = ingredients.map(ingredient =>
        <li key={ingredient}>{ingredient}</li>
    )

    const [recipe, setRecipe] = useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        console.log(recipe)
        setRecipe(recipeMarkdown)
    }

    // Adds ingredients given form data and ingredients array state
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients =>
            [...prevIngredients, newIngredient]
        )
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input
                    type="text"
                    placeholder="e.g. Oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 ?
            <IngredientsList
                listItems={ingredientListItems}
                getRecipe={getRecipe}
                numIngredients={ingredients.length}
            />
            : null}
            {/* placeholder recipe contents */}
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>

    )
}