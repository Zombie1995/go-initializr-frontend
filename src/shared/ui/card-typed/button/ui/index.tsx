interface Props {
  title?: string;
  chosen?: boolean;
  onClick?: () => void;
}

export const CardButton = ({
  title = "",
  chosen = false,
  onClick = () => {},
}: Props) => {
  return (
    <button
      className={`${
        chosen
          ? "outline outline-2 outline-gray-400 dark:outline-white outline-offset-2 bg-gradient-to-tl from-[#f9f9f9] dark:from-[#333333] via-[#f9f9f9] dark:via-[#333333] to-[#f9f9f9] dark:to-[#5c5c5c]"
          : "bg-[#e4e4e4] dark:bg-[#2d2d2d] hover:bg-[#f9f9f9] dark:hover:bg-[#414141] "
      } rounded-[10px] min-h-[100px] min-w-[100px] w-min min-p-4 ring-2 ring-[rgba(224,224,224,0.2)] ring-offset-2 ring-offset-[rgba(179,179,179,0.2)] flex items-center justify-center`}
      onMouseDown={onClick}
    >
      <p className="font-semibold text-[20px]">{title}</p>
    </button>
  );
};
