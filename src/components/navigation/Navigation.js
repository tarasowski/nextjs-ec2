import Button from "@/components/buttons/Button"

export default function Navigation() {
    return (
        <div style={{
            border: "2px solid red",
            padding: "1rem"
        }}>
            <Button href="/" label="Home" />
            <Button href="/" label="Open" />
            <Button href="/" label="Closed" />
            <Button href="/contact" label="Contact" />
        </div>
    )
}