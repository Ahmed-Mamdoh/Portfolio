type SectionHeaderProps = {
  sectionName: string;
  id: string;
  pt?: string;
  pb?: string;
};
export default function SectionHeader({
  sectionName,
  id,
  pt = "144",
  pb = "64",
}: SectionHeaderProps) {
  return (
    <div
      className="w-full"
      id={id}
      style={{ paddingTop: `${pt}px`, paddingBottom: `${pb}px` }}
    >
      <p
        className={`mx-auto w-fit border-8 border-black px-10 py-3.5 text-center font-family-secondary text-2xl font-bold tracking-[0.5rem] text-black sm:px-20 sm:py-7 sm:text-3xl`}
      >
        {sectionName.toUpperCase()}
      </p>
    </div>
  );
}
