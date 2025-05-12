export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white'
    }
    return (
        <button className="die" onClick={props.onClick} style={styles}>
            {props.value}
        </button>
    )
}