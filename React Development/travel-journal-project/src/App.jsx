import Header from "../components/Header.jsx";
import Entry from "../components/Entry.jsx";

import travelData from "../data.js";

const entryList = travelData.map((entryElement) => {
  return <Entry
            key={entryElement.id}
            entry={entryElement}
         />;
})
export default function App() {
  return (
    <>
      <Header/>
      <main className="container">
        {entryList}
      </main>
    </>
  )
}