import { useState } from 'react'
import './style.css'
import Main from "../components/Main.jsx"
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Main/>
  )
}


