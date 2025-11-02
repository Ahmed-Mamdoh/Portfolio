import myPhoto from "../assets/myPhoto4.png";
import github from "../assets/Github.png";
import linkedin from "../assets/LinkedIn.png";
import githubWhite from "../assets/Github-White.png";
import linkedinWhite from "../assets/LinkedIn-White.png";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isSmallScreen)
    return (
      <div className="h-dvh overflow-hidden bg-black">
        <div className="relative flex h-full w-full items-end justify-end">
          <img
            src={myPhoto}
            alt="Ahmed Mamdoh"
            className="max-h-[85vh] min-w-fit translate-x-[30%] sm:max-h-[90vh] sm:translate-x-[10%]"
          />
        </div>
        <div className="absolute top-0 right-0 z-10 flex h-full w-full items-end bg-linear-170 from-transparent from-70% to-black/56 to-70% px-8 pb-11">
          <div className="flex w-full items-center justify-between gap-x-2.5">
            <div>
              <p className="font-family-hero text-xl font-bold text-white">
                Hi, I am
              </p>
              <h1 className="font-family-hero text-4xl font-bold text-white [@media(max-width:300px)]:text-xl [@media(max-width:400px)]:text-2xl">
                Ahmed Mamdoh
              </h1>
              <p className="font-family-hero text-sm font-bold text-white">
                Front-end Developer
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-7">
              <img src={githubWhite} alt="" />
              <img src={linkedinWhite} alt="" />
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex h-screen items-center justify-center bg-linear-100 from-primary from-50% to-black to-50%">
      <div className="flex w-full justify-between pl-10 lg:pl-15 2xl:pl-40">
        <div className="flex h-screen flex-col items-start justify-center">
          <p className="sm pb-14 font-family-hero text-4xl font-bold sm:text-5xl">
            Hi,I am
          </p>
          <h1 className="font-family-hero text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
            Ahmed Mamdoh
          </h1>
          <p className="pb-32 font-family-hero text-xl font-extrabold text-[#909090] md:text-2xl">
            Front-End Developer
          </p>
          <div className="flex items-center gap-x-8">
            <a
              href="https://github.com/Ahmed-Mamdoh"
              target="_blank"
              className="rounded-sm bg-[#C4C4C4] p-2.5 drop-shadow-md drop-shadow-black/50 transition-all duration-300 ease-in-out hover:scale-110"
            >
              <img src={github} alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/eng-ahmed-mamdoh"
              target="_blank"
              className="rounded-sm bg-[#C4C4C4] p-2.5 drop-shadow-md drop-shadow-black/50 transition-all duration-300 ease-in-out hover:scale-110"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col items-end justify-between lg:items-start xl:pr-10 2xl:pr-25">
        <NavBar />
        <img src={myPhoto} alt="Ahmed Mamdoh Photo" className="w-330" />
      </div>
    </div>
  );
}
