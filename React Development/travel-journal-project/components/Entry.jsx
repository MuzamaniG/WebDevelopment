
export default function Entry(props) {
    return (
        <article>
            <div className="entry-image-container">
                <img
                    className="location-image"
                    src={props.entry.img.src}
                    alt={props.entry.img.alt}
                />
            </div>

            <div className="entry">
                <img src="../src/assets/marker.png" alt="marker" className="icon"/>
                <span className="country-header">{props.entry.country}</span>

                <a href={props.entry.googleMapsLink} className="map">View in Google Maps</a>

                <h2 className="location">{props.entry.title}</h2>

                <h2 className="dates">{props.entry.dates}</h2>

                <p className="description">{props.entry.text}</p>
            </div>
        </article>
    )
}