/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 *
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 *
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */

export default function Entry() {
    return (
        <article>
            <div className="entry-image">
                <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fuji" className="location-image"/>
            </div>

            <div className="entry">

                <div className="country-header">
                    <h2><img src="../src/assets/marker.png" alt="marker" className="icon"/>JAPAN</h2>
                </div>

                <div className="map">
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View in Google Maps</a>
                </div>

                <div className="location"><h1>Mount Fuji</h1></div>

                <div className="dates"><h2>12 Jan, 2021 - 24 Jan, 2021</h2></div>

                <div className="description"><p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p></div>
            </div>
        </article>
    )
}