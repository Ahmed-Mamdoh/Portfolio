import SectionHeader from "./SectionHeader";
import portfolioBG from "../assets/portfolioBG.jpg";
import gameChanger1 from "../assets/game-changer-1.webp";
import gameChanger2 from "../assets/game-changer-2.webp";
import gameChanger3 from "../assets/game-changer-3.webp";
import gameChanger4 from "../assets/game-changer-4.webp";
import theWildOasis from "../assets/the-wild-oasis-1.webp";
import theWildOasis2 from "../assets/the-wild-oasis-2.webp";
import theWildOasis3 from "../assets/the-wild-oasis-3.webp";
import theWildOasis4 from "../assets/the-wild-oasis-4.webp";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import next from "../assets/nextjs-icon.webp";
import react from "../assets/react.png";
// import redux from "../assets/redux.png";
import vite from "../assets/vite.png";
import supabase from "../assets/supabase.png";
import reactQuery from "../assets/reactQuery.png";
import reactRouter from "../assets/reactRouter.png";
import reactHookForm from "../assets/reactHookForm.png";
import tailwindcss from "../assets/tailwind.png";

import PortfolioProject from "./PortfolioProject";
export default function PortfolioSection() {
  return (
    <div className="pt-40">
      <div
        style={{ backgroundImage: `url(${portfolioBG})` }}
        className="bg-cover bg-center"
      >
        <SectionHeader
          sectionName="Portfolio"
          id="portfolio"
          pt="107"
          pb="107"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Row 1 */}
        <PortfolioProject
          href="https://game-changer-gg.vercel.app/"
          src={[gameChanger4, gameChanger1, gameChanger2, gameChanger3]}
          technologies={[
            html,
            css,
            js,
            react,
            tailwindcss,
            reactRouter,
            reactQuery,
            reactHookForm,
            supabase,
            vite,
          ]}
          projectName="Game Changer"
          projectDescription="A game discovery platform featuring personalized tracking, IGDB integration, and an AI-powered chatbot for smarter recommendations."
          githubHref="https://github.com/Ahmed-Mamdoh/Game-Changer"
        />

        <PortfolioProject
          href="https://the-wild-oasis-website-demo-drab.vercel.app/"
          src={[theWildOasis, theWildOasis2, theWildOasis3, theWildOasis4]}
          technologies={[html, css, js, react, next, tailwindcss, supabase]}
          projectName="The Wild Oasis"
          projectDescription="A premium full-stack cabin booking platform built with Next.js and Supabase,
          featuring secure Google OAuth, real-time availability tracking,
          and a guest dashboard for managing reservations."
          githubHref="https://github.com/Ahmed-Mamdoh/the-wild-oasis-website"
        />
      </div>
      <div className="flex items-center justify-center">
        <p className="w-full bg-[#1A1A1A] py-9 text-center font-family-secondary text-xl font-semibold text-white">
          And many more to come!
        </p>
      </div>
    </div>
  );
}
