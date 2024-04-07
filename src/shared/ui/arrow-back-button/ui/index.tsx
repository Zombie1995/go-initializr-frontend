interface Props {
  onClick?: () => void;
}

export const ArrowBackButton = ({ onClick = () => {} }: Props) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-white/60 bg-white/40 hover:dark:bg-black/60 dark:bg-black/40 rounded-full size-12 flex items-center justify-center"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className=" fill-dark dark:fill-white"
          d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
          // fill="black"
        />
      </svg>
    </button>
  );
};
