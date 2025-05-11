import Header from "../components/Header.jsx"
import Die from "../components/Die.jsx"
import { useState } from "react"

export default function Main() {

    function generateAllNewDice() {
        const diceArray = [];
        for (let i = 0; i < 10; i++) {
          let rand = Math.ceil(Math.random() * 6);
          let newDie = {value: rand, isHeld: false}
          diceArray.push(newDie)
        }
        return diceArray;
    }

    const [dice, setDice] = useState(generateAllNewDice())
    console.log(dice)

    const diceElements = dice.map(die => <Die value={die.value} />)

    function rollDice() {
        setDice(generateAllNewDice)
    }
    return (
        <div className="box">
            <div className="container">
                <main>
                    <Header/>
                    <div className="dice">
                        {diceElements}
                    </div>
                    <button id="roll-button" onClick={rollDice}>Roll</button>
                </main>

            </div>
        </div>
    )
}