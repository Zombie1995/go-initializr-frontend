import { AnimatedBackground } from "shared/ui/animated-background";

interface Props {
  title: string;
  description: string;
  onClick?: any;
  onBack?: any;
}

export const ArchetypeCard = (props: Props) => {
  return (
    <>
      <button
        onMouseDown={() => {
          props.onClick && props.onClick();
        }}
        className="relative lg:min-w-[30svw] lg:w-[30svw] sm:min-w-[50svw] sm:w-[50svw] min-w-[80svw] w-[80vw] h-[100svh] shadow-md flex flex-col justify-center"
      >
        <div className="z-[-1] bg-white/60 backdrop-blur-sm dark:bg-[url('/src/shared/assets/dark-archetype-bg.jpg')] bg-cover absolute top-0 w-full h-full">
          <AnimatedBackground />
        </div>
        <p className="absolute bottom-[51%] text-left w-full font-medium text-[36px] leading-9 px-4">
          {props.title}
        </p>
        <div className="absolute bottom-0 text-left h-[50%] bg-white/60 dark:bg-black/40 backdrop-blur-sm w-full px-4 py-2">
          <p className="whitespace-pre-wrap text-[12px] break-words">
            {props.description}
          </p>
        </div>
      </button>
      {/* <div
        onClick={() => {
          props.onBack && props.onBack();
        }}
        className="z-[200] fixed top-0 right-0 bg-black w-[60svw] h-screen"
      /> */}
    </>
  );
};
