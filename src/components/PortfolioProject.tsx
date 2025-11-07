import github from "../assets/Github-White.png";
type PortfolioProjectProps = {
  src: string[];
  href: string;
  projectName: string;
  projectDescription: string;
  technologies: string[];
  githubHref: string;
};
export default function PortfolioProject({
  src,
  href,
  projectName,
  projectDescription,
  technologies,
  githubHref,
}: PortfolioProjectProps) {
  return (
    <div className="group relative overflow-hidden">
      <a
        className="block h-full w-full cursor-pointer"
        href={href}
        target="_blank"
      >
        <figure className="hover-gallery h-full w-full transition-all duration-300">
          {src.map((item, index) => (
            <img key={index} src={item} alt="" className="block" />
          ))}
        </figure>
      </a>

      <div className="absolute right-0 bottom-0 left-0 flex h-1/3 flex-col gap-y-2 bg-black/50 px-12 py-3 transition-all duration-300 group-hover:translate-y-0 md:translate-y-full">
        <div>
          <h3 className="text-xl font-semibold text-white md:text-2xl">
            {projectName}
          </h3>
          <p className="hidden text-sm text-white md:inline-block">
            {projectDescription}
          </p>
        </div>
        <div className="hidden items-center justify-between md:flex">
          <div className="flex items-center gap-x-1">
            {technologies.map((item, index) => (
              <div
                key={index}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black"
              >
                <img src={item} alt="" className="h-auto w-3/5 object-center" />
              </div>
            ))}
          </div>
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 text-white underline transition-colors hover:text-gray-300"
            aria-label="View project on GitHub"
          >
            <img src={github} alt="" className="h-5 w-5" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
