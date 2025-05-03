
import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx"
import IngredientsList from "./IngredientsList.jsx"

export default function Main() {

    const [ingredients, setIngredients] = useState([]);
    const ingredientListItems = ingredients.map(ingredient =>
        <li key={ingredient}>{ingredient}</li>
    )

    // Adds ingredients given form data and ingredients array state
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients =>
            [...prevIngredients, newIngredient]
        )
    }

    const [recipeShown, setRecipeShown] = useState(false)

    function getRecipe() {
        setRecipeShown(prevShown =>
            !prevShown
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
                returnRecipe={getRecipe}
                numIngredients={ingredients.length}
            />
            : null}
            {/* placeholder recipe contents */}
            {recipeShown &&
                <ClaudeRecipe/>
            }
        </main>

    )
}