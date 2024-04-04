import { ReactNode } from "react";

export const ScrollWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-[100svh] overflow-hidden">
      <div className="z-[100] absolute top-0 left-[50svw] origin-top-left w-[30svw] h-[40svh] bg-gradient-to-t from-primary to-secondary rounded-b-full scale-x-[5] translate-y-[-20svh] -translate-x-[250%]" />
      <div className="flex h-full items-center overflow-x-scroll no-scrollbar gap-[20px] px-[20px]">
        {children}
      </div>
      <div className="z-[100] absolute bottom-0 left-[50svw] origin-top-left w-[30svw] h-[40svh] bg-gradient-to-b from-primary to-secondary rounded-t-full scale-x-[5] translate-y-[20svh] -translate-x-[250%]" />
    </div>
  );
};
