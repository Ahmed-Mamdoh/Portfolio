type SectionHeaderProps = {
  sectionName: string;
  id: string;
};
export default function SectionHeader({ sectionName, id }: SectionHeaderProps) {
  return (
    <div className="w-full pt-36 pb-16" id={id}>
      <p className="mx-auto w-fit border-8 border-black px-10 py-3.5 text-center font-family-secondary text-2xl font-bold tracking-[0.5rem] text-black sm:px-20 sm:py-7 sm:text-3xl">
        {sectionName.toUpperCase()}
      </p>
    </div>
  );
}
