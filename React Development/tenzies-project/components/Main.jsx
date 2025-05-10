import Header from "../components/Header.jsx"
import Dice from "../components/Dice.jsx"

export default function Main() {
    return (
        <div className="box">
            <div className="container">
                <main>
                    <Header/>
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                    <Dice />
                    <button id="roll-button">Roll</button>
                </main>

            </div>
        </div>
    )
}