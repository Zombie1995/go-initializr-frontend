interface Props {
  archetypeName: string;
  params: any;
}

export const DownloadArchetype = ({ archetypeName, params }: Props) => {
  return (
    <button
      className="size-[256px]"
      // onClick={() => fetchDownloadArchetype(archetypeName, params)}
    >
      <svg
        className="fill-[#21ac4a] dark:fill-[#a1f859]"
        width="256"
        height="256"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM17 11L15.59 9.59L13 12.17V4H11V12.17L8.41 9.59L7 11L12 16L17 11Z"
          fill="current"
        />
      </svg>
      <p className="font-medium text-[24px] text-[#21ac4a] dark:text-[#a1f859] -translate-y-10">
        Скачать
      </p>
    </button>
  );
};
