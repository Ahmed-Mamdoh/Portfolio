import SectionHeader from "./SectionHeader";
import separator from "../assets/separator.svg";
import ContactMeForm from "./ContactMeForm";

export default function ContactMeSection() {
  return (
    <div className="mx-auto">
      <SectionHeader sectionName="Contact Me" id="contact-me" />
      <p className="mx-auto mb-6 px-10 text-center font-family-tertiary md:text-lg lg:w-2/4">
        I’d love to hear from you. Whether you have a project in mind, a
        question, or just want to say hi — feel free to reach out.
      </p>
      <img src={separator} alt="separator" className="mx-auto mb-32" />
      <ContactMeForm />
    </div>
  );
}
