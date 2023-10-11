export default function Input(props) {
    return (
        <input 
        style={{
            padding: "0.5rem",
            borderRadius: "10px",
            fontSize: "1rem",
            backgroundColor: "white",
        }}
        type="text" placeholder={props.placeholder} />
    )
}