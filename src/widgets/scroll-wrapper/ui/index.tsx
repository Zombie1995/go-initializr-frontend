import React, { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children?: ReactNode;
  scrollFixed?: boolean;
}

export const ScrollWrapper = ({ children, scrollFixed = false }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [clickedChild, setClickedChild] = useState(-1);

  const scrollToChild = (index: number) => {
    const childElement = scrollRef.current?.children[index];
    if (childElement) {
      childElement.scrollIntoView({ behavior: "auto", inline: "start" });
    }
  };

  useEffect(() => {
    if (clickedChild > -1) {
      scrollToChild(clickedChild);
    }
  }, [clickedChild]);

  useEffect(() => {
    if (!scrollFixed) {
      setClickedChild(-1);
    }
  }, [scrollFixed]);

  return (
    <div className="relative flex flex-col h-[100svh] overflow-hidden">
      <div className="z-[100] absolute top-0 left-[50svw] origin-top-left w-[30svw] h-[40svh] bg-gradient-to-t from-primary to-secondary rounded-b-full scale-x-[5] translate-y-[-20svh] -translate-x-[250%]" />
      <div
        ref={scrollRef}
        className={`${
          scrollFixed ? "overflow-x-hidden" : "overflow-x-scroll"
        } flex h-full items-center no-scrollbar gap-[20px] pl-[20px]`}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} onMouseDown={() => setClickedChild(index)}>
            {child}
          </div>
        ))}
        <div>
          {clickedChild > -1 && <div className="min-w-[80svw] w-[80svw]" />}
          <div
            className={`${
              clickedChild > -1 ? "min-w-[80svw] w-[80svw]" : "min-w-0 w-0"
            } transition-width duration-500 ease-in-out`}
          />
        </div>
      </div>
      <div className="z-[100] absolute bottom-0 left-[50svw] origin-top-left w-[30svw] h-[40svh] bg-gradient-to-b from-primary to-secondary rounded-t-full scale-x-[5] translate-y-[20svh] -translate-x-[250%]" />
    </div>
  );
};
