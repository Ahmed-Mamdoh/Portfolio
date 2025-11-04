import SectionHeader from "./SectionHeader";
import Skill from "./Skill";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import reactQueryIcon from "../assets/reactQuery.png";
import reduxIcon from "../assets/redux.png";
import viteIcon from "../assets/vite.png";
import reactHookFormIcon from "../assets/reactHookForm.png";
import npmIcon from "../assets/NPM.png";
import supabaseIcon from "../assets/supabase.png";
import typescriptIcon from "../assets/typescript.png";
import vercelIcon from "../assets/vercel.png";
import tailwindIcon from "../assets/tailwind.png";
import git from "../assets/git.png";
import reactRouterIcon from "../assets/reactRouter.png";
import githubIcon from "../assets/githubIcon.png";
import egyptIcon from "../assets/egypt.png";
import englishIcon from "../assets/english.png";

export default function SkillsSection() {
  return (
    <div className="w-full">
      <SectionHeader sectionName="Skills" id="skills" />
      <div className="mx-auto flex flex-col gap-y-24 px-12 xl:w-8/12">
        <div className="flex flex-col gap-y-12">
          <p className="font-family-secondary text-3xl font-bold">USING NOW:</p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-16 md:gap-x-10">
            <Skill skillIcon={htmlIcon} skillName="HTML" />
            <Skill skillIcon={cssIcon} skillName="CSS" />
            <Skill skillIcon={jsIcon} skillName="JavaScript" />
            <Skill skillIcon={typescriptIcon} skillName="TypeScript" />

            <Skill skillIcon={reactIcon} skillName="React.js" />
            <Skill skillIcon={reactRouterIcon} skillName="React Router" />
            <Skill skillIcon={reactQueryIcon} skillName="React Query" />
            <Skill skillIcon={reactHookFormIcon} skillName="React Form" />
            <Skill skillIcon={reduxIcon} skillName="Redux" />

            <Skill skillIcon={tailwindIcon} skillName="Tailwind" />

            <Skill skillIcon={viteIcon} skillName="Vite" />
            <Skill skillIcon={npmIcon} skillName="NPM" />

            <Skill skillIcon={supabaseIcon} skillName="Supabase" />

            <Skill skillIcon={git} skillName="Git" />
            <Skill skillIcon={githubIcon} skillName="Github" />
            <Skill skillIcon={vercelIcon} skillName="Vercel" />
          </div>
        </div>
        <div className="flex flex-col gap-y-12">
          <p className="font-family-secondary text-3xl font-bold">
            OTHER SKILLS:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-16 md:gap-x-10">
            <Skill
              skillIcon={egyptIcon}
              className="h-24 w-24 rounded-full"
              skillName="Arabic C2"
            />
            <Skill
              skillIcon={englishIcon}
              className="h-24 w-24 rounded-full"
              skillName="English B2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
