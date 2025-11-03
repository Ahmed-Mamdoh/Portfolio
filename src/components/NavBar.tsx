export default function NavBar() {
  return (
    <nav className="pt-7 pl-35 lg:pl-25">
      <ul className="flex flex-col items-end gap-3 pr-3 lg:flex-row lg:gap-x-7">
        <li>
          <a
            href="#about-me"
            className="font-family-secondary text-lg font-bold text-nowrap text-white md:text-base lg:text-lg"
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="font-family-secondary text-lg font-bold text-nowrap text-white md:text-base lg:text-lg"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="font-family-secondary text-lg font-bold text-nowrap text-white md:text-base lg:text-lg"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contactMe"
            className="rounded-full font-family-secondary text-lg font-bold text-nowrap text-white md:text-base lg:bg-white lg:px-4 lg:py-2 lg:text-lg lg:text-black"
          >
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  );
}
