import Header from "../components/Header.jsx";
import Entry from "../components/Entry.jsx";

import travelData from "../data.js";
/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

const data = travelData.map((location) => {
  return <Entry
            img={location.img}
            title={location.title}
            dates={location.dates}
            country={location.country}
            googleMapsLink={location.googleMapsLink}
            text={location.text}
         />;
})
export default function App() {
  return (
    <>
      <Header/>
      <main className="container">
        {data}
      </main>
    </>
  )
}