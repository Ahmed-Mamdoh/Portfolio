import { useState } from "react";
import { motion } from "motion/react";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const navItems = [
    { name: "About me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact me", href: "#contact-me" },
  ];

  return (
    <nav className="pt-10 pl-30 lg:pl-25">
      <ul
        onMouseLeave={() => setPosition({ ...position, opacity: 0 })}
        className="relative flex flex-row flex-wrap items-end justify-center gap-y-4 pr-3 lg:flex-row lg:flex-nowrap xl:gap-x-3"
      >
        {navItems.map((item, index) => (
          <NavBarItem
            key={index}
            item={item}
            index={index}
            setPosition={setPosition}
          />
        ))}
        <motion.li
          animate={position}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
          className="absolute z-0 h-10 w-36 translate-y-[10%] rounded-full bg-white"
        ></motion.li>
      </ul>
    </nav>
  );
}
