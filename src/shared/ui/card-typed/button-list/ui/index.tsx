import { useEffect, useState } from "react";
import { CardButton } from "../../button/ui";

interface Props {
  listName?: string;
  titles?: Array<string>;
  only?: "optional" | "required" | "none";
}

export const ButtonList = ({
  listName = "",
  titles = [],
  only = "none",
}: Props) => {
  const [chosenButtonIndices, setChosenButtonIndices] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    if (only === "required") {
      setChosenButtonIndices(new Set<number>().add(0));
    }
  }, [only]);

  const handleClick = (index: number) => {
    if (chosenButtonIndices.has(index)) {
      if (only !== "required") {
        chosenButtonIndices.delete(index);
        setChosenButtonIndices(new Set(chosenButtonIndices));
      }
    } else {
      if (only !== "none") {
        setChosenButtonIndices(new Set<number>().add(index));
      } else {
        setChosenButtonIndices(new Set(chosenButtonIndices.add(index)));
      }
    }
  };

  return (
    <div>
      {listName && <p className="text-[30px] font-light">{listName}</p>}
      <div className="h-[10px]" />
      <div className="flex flex-wrap gap-6">
        {titles.map((title, index) => (
          <CardButton
            key={index}
            title={title}
            onClick={() => handleClick(index)}
            chosen={chosenButtonIndices.has(index)}
          />
        ))}
      </div>
    </div>
  );
};
