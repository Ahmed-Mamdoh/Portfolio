import SectionHeader from "./SectionHeader";
import separator from "../assets/separator.svg";
import ContactMeForm from "./ContactMeForm";
import { motion, MotionConfig } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ContactMeSection() {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <motion.div
        className="mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <SectionHeader sectionName="Contact Me" id="contact-me" />
        </motion.div>
        <motion.p
          className="mx-auto mb-6 px-10 text-center font-family-tertiary md:text-lg lg:w-2/4"
          variants={itemVariants}
        >
          I’d love to hear from you. Whether you have a project in mind, a
          question, or just want to say hi — feel free to reach out.
        </motion.p>
        <motion.img
          src={separator}
          alt="separator"
          className="mx-auto mb-32"
          variants={itemVariants}
        />
        <motion.div variants={itemVariants}>
          <ContactMeForm />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}
