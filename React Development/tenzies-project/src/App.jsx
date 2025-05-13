import './style.css'
import Header from "../components/Header.jsx"
import Die from "../components/Die.jsx"
import { useState } from "react"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'


export default function App() {

  const { width, height } = useWindowSize()

  function generateAllNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      let rand = Math.ceil(Math.random() * 6);
      let newDie = {value: rand, isHeld: false, id: nanoid()}
      diceArray.push(newDie)
    }
    return diceArray;
  }

  const [dice, setDice] = useState(() => generateAllNewDice())

  const gameWon = dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value)

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} onClick={() => hold(die.id)}/>)

  function rollDice() {
    setDice(prevDice => dice.map(die => {
      return die.isHeld === false ? {...die, value: Math.ceil(Math.random() * 6)} : die
    }))
  }

  function hold(id) {
    setDice(prevDice => dice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  return (
    <div className="box">
      <div className="container">
        <main>
          <Header/>
          <div className="dice">
            {diceElements}
          </div>
          <button id="roll-button" onClick={!gameWon ? rollDice : () => setDice(generateAllNewDice())}>{gameWon ? 'New Game' : 'Roll'}</button>
          {gameWon ? <Confetti width={width} height={height}/> : null}
        </main>
      </div>
    </div>
  )
}

