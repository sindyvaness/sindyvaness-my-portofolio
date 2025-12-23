import contactImg from "../assets/images/contact.jpg";
import ContactForm from "./utils/RecaptchaForm";

const Contact = () => {
    return(
        <div className="contact" id="contact">
            <img src={contactImg} className="contact-image" alt="..." />
            <div className="contact-info">
                <p><i class="bi bi-telephone-fill"></i>  +1(604)562-4980</p>
                <p><i class="bi bi-envelope-at-fill"></i>  sindyvaness@gmail.com</p>
                <p><i class="bi bi-geo-alt-fill"></i>  Vancouver, British Columbia, Canada</p>
                <ContactForm buttonText = "Send"></ContactForm>
            </div>
        </div>
    )
};

export default Contact;