import { AnimatedBackground } from "shared/ui/animated-background";

interface Props {
  title: string;
  description: string;
}

export const ArchetypeCard = ({ title, description }: Props) => {
  return (
    <button className="relative min-w-[30svw] h-[100svh] shadow-md flex flex-col justify-center items-start">
      <div className="absolute z-[-1] w-full h-full">
        <AnimatedBackground />
      </div>
      <div className="p-4 text-left">
        <p className="font-medium text-[36px] text-white">{title}</p>
        <p className="whitespace-pre-wrap text-white">{description}</p>
      </div>
    </button>
  );
};
