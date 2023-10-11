export default function Form() {
    return (
        <form style={{
            border: "2px solid blue"
        }}>
            <label>Your name</label>
            <br />
            <input type="text" placeholder="Deine name" />
            <br />
            <br />
            <label>Your email</label>
            <br />
            <input type="email" placeholder="Deine email" />
            <br />
            <br />
            <label>Your message</label>
            <br />
            <textarea></textarea>
            <br />
            <br />
            {/* we need here a field for a message but not an input field */}
            <button type="submit">Senden</button>
        </form>
    )
}