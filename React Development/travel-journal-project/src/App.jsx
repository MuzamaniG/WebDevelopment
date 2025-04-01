import { createRoot } from "react-dom/client";
import Header from "../components/Header.jsx";
import Entry from "../components/Entry.jsx";

const root = createRoot(document.getElementById("root"));

export default function App() {
  return (
    <>
      <Header/>
      <Entry/>
      <Entry/>
    </>
  )
}