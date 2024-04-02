import { ReactNode } from "react";

export const ScrollWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-[100svh] overflow-hidden">
      <div className="z-[100] absolute top-0 left-[50svw] origin-top-left w-[30svw] h-[20svw] bg-gradient-to-t from-blue to-violet rounded-b-full scale-x-[5] translate-y-[-10svw] -translate-x-[250%]" />
      <div className="flex h-full items-center overflow-x-scroll no-scrollbar gap-[2px]">
        {children}
      </div>
      <div className="z-[100] absolute bottom-0 left-[50svw] origin-top-left w-[30svw] h-[20svw] bg-gradient-to-b from-blue to-violet rounded-t-full scale-x-[5] translate-y-[10svw] -translate-x-[250%]" />
    </div>
  );
};
