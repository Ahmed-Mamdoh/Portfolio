type SkillProps = {
  skillIcon: string;
  skillName: string;
  className?: string;
};
export default function Skill({ skillIcon, skillName, className }: SkillProps) {
  return (
    <div className="flex w-44 flex-col items-center gap-y-4">
      <div className="flex h-24 w-24 items-end justify-center">
        <img src={skillIcon} alt="" className={`w-24 ${className}`} />
      </div>
      <p className="font-family-secondary text-2xl">{skillName}</p>
    </div>
  );
}
