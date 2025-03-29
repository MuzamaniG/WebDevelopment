import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import Main from "../components/Main.jsx"
import Navbar from "../components/Navbar.jsx"

const root = createRoot(document.getElementById("root"));
root.render (
  <>
    <App />
  </>
)


