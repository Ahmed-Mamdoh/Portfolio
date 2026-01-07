import GlareHover from "./GlareHover";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type SkillProps = {
  skillIcon: string;
  skillName: string;
  className?: string;
};
export default function Skill({ skillIcon, skillName, className }: SkillProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="flex w-36 flex-col items-center gap-y-4 md:w-44"
      initial={{
        rotateX: 90,
        scale: 0.3,
        opacity: 0,
        y: 50,
      }}
      animate={{
        rotateX: isInView ? 0 : 90,
        scale: isInView ? 1 : 0.3,
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }}
      transition={{
        duration: 1.2,
        ease: [0.23, 1, 0.32, 1],
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      style={{ perspective: 1000 }}
    >
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
      <motion.p
        className="font-family-secondary text-lg md:text-2xl"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: isInView ? 1 : 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        {skillName}
      </motion.p>
    </motion.div>
  );
}
