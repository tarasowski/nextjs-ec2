import Navigation from "@/components/navigation/Navigation"
import Form from "@/components/form/Form"
import ContactText from "@/components/text/Contact"
import Footer from "@/components/Footer"

export default function Contact() {
    // name, email, nachricht, button
    return (
        <div className="form-contact" style={{}}>
            <Navigation />
            <ContactText
                bgColor="red"
                headline="Willkommen in meiner App!!!!!" 
                text="Information v2 - Hier ist mein Text. Willkommen hier 👇👇"
                />
            <Form />
            <Footer />
        </div>
    )
}