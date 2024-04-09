import { useState } from "react";
import useKeyListener from "shared/model/useKeyListener";
import { Messages } from "../messages";

export const Recommendations = () => {
  const [show, setShow] = useState(false);

  useKeyListener("Escape", () => {
    setShow(false);
  });

  return (
    <div
      className={`${
        show ? "min-h-[100svh] min-w-[100svw] backdrop-blur-sm bg-black/60" : ""
      } transition-colors duration-1000 relative`}
      onClick={() => {
        setShow(false);
      }}
    >
      {show ? (
        <Messages setShow={setShow} />
      ) : (
        <button
          className="backdrop-blur-sm bg-[#242d36]/60 dark:bg-white/90 absolute bottom-10 left-1/2 -translate-x-1/2 min-h-[50px] min-w-[250px] rounded-full"
          onClick={(e) => {
            setShow(true);
            e.stopPropagation();
          }}
        >
          <p className="text-white dark:text-dark font-medium -translate-y-[1px]">
            Получить рекомендации
          </p>
        </button>
      )}
    </div>
  );
};
