import { useState } from "react";
import { motion } from "motion/react";

export default function NavBar() {
  const [hoveredIndex, setHoveredIndex] = useState(3); // Initialize with 'Contact me' index

  const navItems = [
    { name: "About me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact me", href: "#contact-me" },
  ];

  return (
    <nav className="pt-10 pl-30 lg:pl-25">
      <ul className="flex flex-row flex-wrap items-end justify-center gap-y-4 pr-3 lg:flex-row lg:flex-nowrap xl:gap-x-3">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(3)} // Reset to 'Contact me'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <motion.a
              href={item.href}
              className={`relative z-10 block rounded-full px-4 py-2 font-family-secondary text-lg font-bold text-nowrap md:text-base lg:text-lg ${hoveredIndex === index ? "text-black" : "text-white"} ${index === navItems.length - 1 ? "px-24 lg:px-4" : ""}`}
            >
              {item.name}
            </motion.a>
            <motion.div
              className="absolute inset-0 rounded-full bg-white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: hoveredIndex === index ? 1 : 0,
                opacity: hoveredIndex === index ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                duration: 0.3,
              }}
            />
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
