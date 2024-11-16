import ContactForm from "./parts/contactForm/index";
import Heading from "../../components/heading";
import Text from "../../components/text/index";
import "./index.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__content">
          <Heading level={2}>Contact</Heading>
          <Text>
            Questions or concerns? Just fill out the form below and our support
            team will get back to you within 24 hours
          </Text>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
