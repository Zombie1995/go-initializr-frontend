import { useEffect, useState } from "react";
import { AnimatedBackground } from "shared/ui/animated-background";

interface Props {
  title: string;
  description: string;
  onClick?: any;
  selected?: boolean;
}

export const ArchetypeCard = (props: Props) => {
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (props.selected && !showDescription) {
      setShowDescription(true);
    }
  }, [props.selected, showDescription]);

  useEffect(() => {
    if (!props.selected) {
      setShowDescription(false);
    }
  }, [props.selected]);

  return (
    <button
      onClick={() => {
        props.onClick && props.onClick();
      }}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      className="relative lg:min-w-[30svw] lg:w-[30svw] sm:min-w-[50svw] sm:w-[50svw] min-w-[80svw] w-[80vw] h-[100svh] shadow-md flex flex-col justify-center"
    >
      <div className="z-[-1] bg-white/60 backdrop-blur-sm dark:bg-[url('/src/shared/assets/dark-archetype-bg-downgrade.jpg')] bg-cover absolute top-0 w-full h-full">
        <AnimatedBackground />
      </div>
      <p className="absolute bottom-[51%] text-left w-full font-medium text-[36px] leading-9 px-4">
        {props.title}
      </p>
      <div
        className={`${
          showDescription ? "min-h-[50%] h-[50%]" : "min-h-0 h-0"
        } transition-all duration-500 ease-out absolute bottom-0 text-left bg-white/60 dark:bg-black/40 backdrop-blur-sm w-full px-4 py-2`}
      >
        <p className="whitespace-pre-wrap text-[17px] break-words">
          {props.description}
        </p>
      </div>
    </button>
  );
};
