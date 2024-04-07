import { useEffect, useState } from "react";
import { CardButton } from "../../button/ui";

interface Props {
  listName?: string;
  titles?: Array<string>;
  oneRequired?: boolean;
}

export const ButtonList = ({
  listName = "",
  titles = [],
  oneRequired = false,
}: Props) => {
  const [chosenButtonIndices, setChosenButtonIndices] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    if (oneRequired) {
      setChosenButtonIndices(new Set<number>().add(0));
    }
  }, [oneRequired]);

  const handleClick = (index: number) => {
    if (oneRequired) {
      setChosenButtonIndices(new Set<number>().add(index));
      return;
    }

    if (chosenButtonIndices.delete(index)) {
      setChosenButtonIndices(new Set(chosenButtonIndices));
    } else {
      setChosenButtonIndices(new Set(chosenButtonIndices.add(index)));
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
