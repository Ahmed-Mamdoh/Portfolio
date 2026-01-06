import GlareHover from "./GlareHover";

type SkillProps = {
  skillIcon: string;
  skillName: string;
  className?: string;
};
export default function Skill({ skillIcon, skillName, className }: SkillProps) {
  return (
    <div className="flex w-36 flex-col items-center gap-y-4 md:w-44">
      <GlareHover
        glareColor="#ededed"
        width=""
        height=""
        background="transparent"
        borderRadius="0"
        borderColor="transparent"
        glareOpacity={0.6}
        className="cursor-default!"
        glareAngle={-30}
        glareSize={300}
        transitionDuration={1100}
        playOnce={false}
      >
        <div className="flex h-24 w-24 items-end justify-center">
          <img src={skillIcon} alt="" className={`w-24 ${className}`} />
        </div>
      </GlareHover>
      <p className="font-family-secondary text-lg md:text-2xl">{skillName}</p>
    </div>
  );
}
