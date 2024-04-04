import { useUnit } from "effector-react";
import { setScrollFixed } from "entities/scroll-wrapper/model";
import { AnimatedBackground } from "shared/ui/animated-background";

interface Props {
  title: string;
  description: string;
}

export const ArchetypeCard = ({ title, description }: Props) => {
  const onScrollFixed = useUnit(setScrollFixed);

  return (
    <button
      onMouseDown={() => {
        onScrollFixed(true);
      }}
      className="relative lg:min-w-[30svw] lg:w-[30svw] sm:min-w-[50svw] sm:w-[50svw] min-w-[80svw] w-[80vw] h-[100svh] shadow-md flex flex-col justify-center"
    >
      <div className="z-[-1] bg-[url('https://catherineasquithgallery.com/uploads/posts/2021-03/1614724659_55-p-foni-dlya-lendinga-62.jpg')] bg-cover absolute top-0 w-full h-full">
        <AnimatedBackground />
      </div>
      <div className="z-[200] absolute top-[45%] p-4 text-left">
        <p className="font-medium text-[36px] text-white leading-9">{title}</p>
        <div className="h-[10px]" />
        <p className="whitespace-pre-wrap text-[12px] text-white break-words">
          {description}
        </p>
      </div>
    </button>
  );
};
