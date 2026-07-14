import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-card">

        <p>
          <FaEnvelope className="contact-icon" />
           anshul.ch732@gmail.com
        </p>

        <p>
          <FaPhoneAlt className="contact-icon" />
          +91 8439511731
        </p>

        <p>
          <FaMapMarkerAlt className="contact-icon" />
          Dehradun, Uttarakhand
        </p>

      </div>
    </section>
  );
}

export default Contact;