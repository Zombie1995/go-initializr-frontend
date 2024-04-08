import { useEffect, useState } from "react";
import { CardButton } from "../../button/ui";

interface Props {
  listName?: string;
  titles?: Array<string>;
  only?: "optional" | "required" | "none";
  onClick?: (selected: Set<number>) => void;
  chosen?: Set<number>;
}

export const ButtonList = ({
  listName = "",
  titles = [],
  only = "none",
  onClick = () => {},
  chosen,
}: Props) => {
  const [chosenButtonIndices, setChosenButtonIndices] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    chosen && setChosenButtonIndices(chosen);
  }, [chosen]);

  useEffect(() => {
    if (only === "required") {
      setChosenButtonIndices(new Set<number>().add(0));
    }
  }, [only]);

  const handleClick = (index: number) => {
    let newButtonIndices = chosenButtonIndices;

    if (chosenButtonIndices.has(index)) {
      if (only !== "required") {
        chosenButtonIndices.delete(index);
        newButtonIndices = new Set(chosenButtonIndices);
      }
    } else {
      if (only !== "none") {
        newButtonIndices = new Set<number>().add(index);
      } else {
        newButtonIndices = new Set(chosenButtonIndices.add(index));
      }
    }

    setChosenButtonIndices(newButtonIndices);
    onClick(newButtonIndices);
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
