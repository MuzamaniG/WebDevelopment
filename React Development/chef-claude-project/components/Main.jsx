
import { useState } from "react";


export default function Main() {

    const [ingredients, setIngredients] = useState([]);
    const ingredientListItems = ingredients.map(ingredient =>
        <li key={ingredient}>{ingredient}</li>
    )

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
            <ul>
                {ingredientListItems}
            </ul>

        </main>

    )
}