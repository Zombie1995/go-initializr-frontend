import { ReactNode } from "react";

interface Props {
  own?: boolean;
  children?: ReactNode;
}

export const MessageCard = ({ own = false, children }: Props) => {
  return (
    <div className={`${own ? "" : "flex-row-reverse"} flex`}>
      <div className="grow" />
      <div
        className={`${
          own ? "bg-[#4385f5] rounded-tr-none" : "bg-[#eef0f1] rounded-tl-none"
        } min-h-[30px] min-w-[100px] sm:max-w-[45%] max-w-[60%] px-4 py-1 rounded-xl shadow-md`}
      >
        <p className={`${own ? "text-white" : "text-[#545658]"} leading-2`}>
          {children}
        </p>
      </div>
      <svg
        className={`${
          own
            ? "fill-[#4385f5] stroke-[#4385f5]"
            : "fill-[#eef0f1] stroke-[#eef0f1] -scale-x-50 translate-x-[100%]"
        } scale-50 origin-top-left translate-x-[-1px]`}
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          transform="rotate(-45.0354 2.32612 3.48957)"
          stroke="current"
          id="svg_5"
          height="24.77697"
          width="35.79165"
          y="-8.89892"
          x="-15.5697"
          fill="current"
        />
      </svg>
    </div>
  );
};
