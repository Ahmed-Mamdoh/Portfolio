import arrowUp from "../assets/arrow-up.svg";

export default function Footer() {
  return (
    <div className="flex h-52 w-full flex-col items-center gap-y-20 bg-[#1A1A1A] py-12">
      <a
        href="#hero"
        className="flex items-center gap-2 font-family-secondary text-lg font-bold text-white"
      >
        <img src={arrowUp} alt="arrow up" className="h-6 w-6" />
        Back to top
      </a>
      <p className="font-family-tertiary text-lg font-bold text-white">
        &copy; 2025 Ahmed Mamdoh.
      </p>
    </div>
  );
}
