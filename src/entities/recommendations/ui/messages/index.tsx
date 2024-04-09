import { useUnit } from "effector-react";
import {
  $recommendationStore,
  pushMessage,
} from "entities/recommendations/model";
import { useCallback, useEffect, useRef } from "react";
import useKeyListener from "shared/model/useKeyListener";
import { MessageCard } from "../message";

interface Props {
  setShow?: (show: boolean) => void;
}

export const Messages = ({ setShow }: Props) => {
  const recommendationsStore = useUnit($recommendationStore);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(() => {
    if (!inputRef.current) return;
    pushMessage({ own: true, text: inputRef.current.value });
    inputRef.current.value = "";
  }, []);

  useKeyListener("Enter", () => {
    handleSubmit();
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  /////////Scroll logic/////////
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevScrollHeightRef = useRef<number>(0);

  useEffect(() => {
    if (!scrollRef.current) return;

    if (
      recommendationsStore.messages[recommendationsStore.messages.length - 1]
        .own
    ) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      prevScrollHeightRef.current = scrollRef.current.scrollHeight;
    } else {
      if (prevScrollHeightRef.current < window.innerHeight * 0.75) return;
      scrollRef.current.scrollBy(0, 300);
    }
  }, [recommendationsStore.messages]);
  //////////////////////////////

  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 lg:w-[50svw] sm:w-[60svw] w-[95svw]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="outline outline-white bg-gradient-to-tl from-[#93a5b8] dark:from-[#1f272f] to-[#b7c4d0] dark:to-[#384655] h-[75svh] w-full rounded-xl p-[15px] pb-10">
        <div
          ref={scrollRef}
          className="bg-white h-full w-full flex flex-col gap-2 rounded-sm py-2 overflow-y-scroll"
        >
          {recommendationsStore.messages.map((message, index) => (
            <MessageCard key={index} own={message.own}>
              {message.text}
            </MessageCard>
          ))}
          <p className="text-[#545658] font-medium">
            {recommendationsStore.loading && (
              <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• • • Печатает</>
            )}
          </p>
          <div />
        </div>
      </div>
      <div className="h-[10px]" />
      <div className="outline outline-white bg-gradient-to-l from-[#93a5b8] dark:from-[#1f272f] to-[#b7c4d0] dark:to-[#384655] min-h-[7svh] w-full p-[10px] rounded-xl flex items-center justify-center">
        <input ref={inputRef} className="h-full w-full p-2 rounded-sm" />
        <button className="h-full ml-[10px]" onClick={handleSubmit}>
          <svg
            className="fill-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.51 6.03L11.02 9.25L3.5 8.25L3.51 6.03ZM11.01 14.75L3.5 17.97V15.75L11.01 14.75ZM1.51 3L1.5 10L16.5 12L1.5 14L1.51 21L22.5 12L1.51 3Z"
              fill="current"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center p-2">
        <button
          onClick={() => {
            setShow && setShow(false);
          }}
        >
          <p className="text-white">Отменить</p>
        </button>
      </div>
    </div>
  );
};
