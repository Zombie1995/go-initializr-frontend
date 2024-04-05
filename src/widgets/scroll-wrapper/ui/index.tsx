import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import { childSelected } from "../model";

interface Props {
  children?: ReactNode;
  selectedChildIndex?: number;
  onChildClick?: (index: number) => void;
}

export const ScrollWrapper = ({
  children,
  selectedChildIndex = -1,
  onChildClick = () => {},
}: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToChild = useCallback((index: number) => {
    const childElement = scrollRef.current?.children[index];
    if (childElement) {
      childElement.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }, []);

  useEffect(() => {
    if (childSelected(selectedChildIndex)) {
      scrollToChild(selectedChildIndex);
    }
  }, [scrollToChild, selectedChildIndex]);

  return (
    <div className="relative flex flex-col h-[100svh] overflow-hidden">
      <div className="z-[100] absolute top-0 left-[50svw] origin-top-left w-[30svw] h-[40svh] bg-gradient-to-t from-primary to-secondary dark:from-dark-primary dark:to-dark-secondary rounded-b-full scale-x-[5] translate-y-[-20svh] -translate-x-[250%]" />
      <div
        ref={scrollRef}
        className={`${
          childSelected(selectedChildIndex)
            ? "overflow-x-hidden"
            : "overflow-x-scroll"
        } overflow-y-hidden flex h-full items-center no-scrollbar gap-[20px] pl-[20px]`}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            onMouseDownCapture={() => {
              onChildClick(index);
            }}
          >
            {child}
          </div>
        ))}
        <div>
          {childSelected(selectedChildIndex) && (
            <div className="min-w-[80svw] w-[80svw]" />
          )}
          <div
            className={`${
              childSelected(selectedChildIndex)
                ? "min-w-[80svw] w-[80svw]"
                : "min-w-0 w-0"
            } transition-width duration-500 ease-in-out`}
          />
        </div>
      </div>
      <div className="z-[100] absolute bottom-0 left-[50svw] origin-top-left w-[30svw] h-[40svh] bg-gradient-to-b from-primary to-secondary dark:from-dark-primary dark:to-dark-secondary rounded-t-full scale-x-[5] translate-y-[20svh] -translate-x-[250%]" />
    </div>
  );
};
