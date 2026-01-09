import SectionHeader from "./SectionHeader";
import separator from "../assets/separator.svg";
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

export default function AboutMeSection() {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="w-full"
      >
        <motion.div variants={itemVariants}>
          <SectionHeader sectionName="About Me" id="about-me" />
        </motion.div>

        <motion.div
          className="flex flex-col gap-y-8"
          variants={containerVariants}
        >
          <motion.p
            className="mx-auto max-w-3/4 font-family-tertiary leading-6 font-light text-black lg:w-1/2"
            variants={itemVariants}
          >
            Hi, I'm a Frontend Developer who loves crafting responsive and
            engaging web experiences with React.js. My focus is on creating
            smooth, scalable applications that put the user first.
          </motion.p>

          <motion.p
            className="mx-auto max-w-3/4 font-family-tertiary leading-6 font-light text-black lg:w-1/2"
            variants={itemVariants}
          >
            I work with tools like React Query, React Hook Form, and Tailwind
            CSS, and I'm experienced in integrating REST APIs and managing state
            efficiently. From design to deployment, I'm all about clean code,
            thoughtful architecture, and great teamwork.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex w-full justify-center pt-5"
          variants={itemVariants}
        >
          <motion.img
            src={separator}
            alt="separator"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.5,
            }}
          />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}
