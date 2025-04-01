import { createRoot } from "react-dom/client";
import Header from "../components/Header.jsx"

const root = createRoot(document.getElementById("root"));

export default function App() {
  return (
    <>
      <Header/>
    </>
  )
}