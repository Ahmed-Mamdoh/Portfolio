import { useRef } from "react";

export default function NavBarItem({
  item,
  index,
  setPosition,
}: {
  item: { name: string; href: string };
  index: number;
  setPosition: (position: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (ref.current) {
          const { width } = ref.current.getBoundingClientRect();
          setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
        }
      }}
      key={index}
      className="relative z-10 block text-white mix-blend-difference"
    >
      <a
        href={item.href}
        className={`rounded-full px-4 py-2 font-family-secondary text-lg font-bold text-nowrap md:text-base lg:text-lg`}
      >
        {item.name}
      </a>
    </li>
  );
}
