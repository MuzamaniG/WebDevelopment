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

export default function Entry(props) {
    return (
        <article>
            <div className="entry-image-container">
                <img
                    className="location-image"
                    src={props.img.src}
                    alt={props.img.alt}
                />
            </div>

            <div className="entry">
                <img src="../src/assets/marker.png" alt="marker" className="icon"/>
                <span className="country-header">{props.country}</span>

                <a href={props.googleMapsLink} className="map">View in Google Maps</a>

                <h2 className="location">{props.title}</h2>

                <h2 className="dates">{props.dates}</h2>

                <p className="description">{props.text}</p>
            </div>
        </article>
    )
}