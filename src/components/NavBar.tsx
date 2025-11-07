import { useState } from "react";

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
          <li
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(3)} // Reset to 'Contact me'
          >
            <a
              href={item.href}
              className={`rounded-full px-4 py-2 font-family-secondary text-lg font-bold text-nowrap transition-colors duration-300 md:text-base lg:text-lg ${hoveredIndex === index ? "bg-white text-black" : "text-white"} ${index === navItems.length - 1 ? "px-24 lg:px-4" : ""}`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
