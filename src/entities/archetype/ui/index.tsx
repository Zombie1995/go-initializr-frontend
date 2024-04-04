import { AnimatedBackground } from "shared/ui/animated-background";

interface Props {
  title: string;
  description: string;
}

export const ArchetypeCard = ({ title, description }: Props) => {
  return (
    <button className="relative lg:min-w-[30svw] lg:w-[30svw] sm:min-w-[50svw] sm:w-[50svw] min-w-[80svw] w-[508vw] h-[100svh] shadow-md flex flex-col justify-center">
      <div className="z-[-1] bg-[url('https://catherineasquithgallery.com/uploads/posts/2021-03/1614724659_55-p-foni-dlya-lendinga-62.jpg')] bg-cover absolute top-0 w-full h-full">
        <AnimatedBackground />
      </div>
      <div className="absolute top-[45%] p-4 text-left">
        <p className="font-medium text-[36px] text-white">{title}</p>
        <p className="whitespace-pre-wrap text-white break-words">
          {description}
        </p>
      </div>
    </button>
  );
};
