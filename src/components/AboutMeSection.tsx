import SectionHeader from "./SectionHeader";
import separator from "../assets/separator.svg";
export default function AboutMeSection() {
  return (
    <div className="w-full">
      <SectionHeader sectionName="About Me" id="about-me" />
      <div className="flex flex-col gap-y-8">
        <p className="mx-auto max-w-3/4 font-family-tertiary leading-6 font-light text-black lg:w-1/2">
          Hi, I’m a Frontend Developer who loves crafting responsive and
          engaging web experiences with React.js. My focus is on creating
          smooth, scalable applications that put the user first.
        </p>
        <p className="mx-auto max-w-3/4 font-family-tertiary leading-6 font-light text-black lg:w-1/2">
          I work with tools like React Query, React Hook Form, and Tailwind CSS,
          and I’m experienced in integrating REST APIs and managing state
          efficiently. From design to deployment, I’m all about clean code,
          thoughtful architecture, and great teamwork.
        </p>
      </div>
      <div className="flex w-full justify-center pt-5">
        <img src={separator} alt="separator" />
      </div>
    </div>
  );
}
