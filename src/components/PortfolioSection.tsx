import SectionHeader from "./SectionHeader";
import portfolioBG from "../assets/portfolioBG.jpg";
import gameChanger from "../assets/game-changer.png";
import gameChanger2 from "../assets/game-changer-2.png";
import gameChanger3 from "../assets/game-changer-3.jpg";
import gameChanger4 from "../assets/game-changer-4.jpg";
import foodDash1 from "../assets/food-dash-1.jpg";
import foodDash2 from "../assets/food-dash-2.jpg";
import foodDash3 from "../assets/food-dash-3.jpg";
import foodDash4 from "../assets/food-dash-4.png";
import omnifood1 from "../assets/omni-food-1.png";
import omnifood2 from "../assets/omni-food-2.png";
import omnifood3 from "../assets/omni-food-3.png";
import theWildOasis1 from "../assets/the-wild-oasis-1.jpg";
import theWildOasis2 from "../assets/the-wild-oasis-2.jpg";
import theWildOasis3 from "../assets/the-wild-oasis-3.jpg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import typescript from "../assets/typescript.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
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
          src={[gameChanger, gameChanger2, gameChanger3, gameChanger4]}
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
          projectDescription="A React-based PC game discovery web app powered by the IGDB API and GamePower API."
          githubHref="https://github.com/Ahmed-Mamdoh/Game-Changer"
        />
        <PortfolioProject
          href="https://food-dash-nine.vercel.app/"
          src={[foodDash1, foodDash2, foodDash3, foodDash4]}
          projectName="Food Dash"
          projectDescription="An E-commerce food website for browsing, ordering, and managing food items online."
          technologies={[html, css, js, react, tailwindcss, reactRouter, vite]}
          githubHref="https://github.com/Ahmed-Mamdoh/FoodDash"
        />
        <PortfolioProject
          href="https://omnifood-mamdoh.netlify.app/"
          src={[omnifood1, omnifood2, omnifood3]}
          projectName="Omnifood"
          projectDescription="A modern food delivery website (Omnifood) built using HTML, CSS, and JavaScript"
          technologies={[html, css, js]}
          githubHref="https://github.com/Ahmed-Mamdoh/omnifood-landing-page"
        />
        <PortfolioProject
          href="https://the-wild-oasis-beta-liard.vercel.app/"
          src={[theWildOasis1, theWildOasis2, theWildOasis3]}
          projectName="The Wild Oasis"
          projectDescription="Hotel management dashboard with bookings, guests, and Supabase integration."
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
          githubHref="https://github.com/Ahmed-Mamdoh/the-wild-oasis"
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
