import { useUnit } from "effector-react";
import { ArchetypeCard } from "entities/archetype";
import {
  $archetypeStore,
  fetchArchetypesFromLocalStorage,
  setSelectedArchetype,
} from "entities/archetype/model";
import { useEffect } from "react";
import useKeyListener from "shared/model/useKeyListener";
import { Parameterizer } from "widgets/parameterizer";
import { ScrollWrapper } from "widgets/scroll-wrapper";
import { childSelected } from "widgets/scroll-wrapper/model";

export default function Initializer() {
  const archetypeStore = useUnit($archetypeStore);

  useEffect(() => {
    fetchArchetypesFromLocalStorage();
  }, []);

  useKeyListener("Escape", () => {
    setSelectedArchetype(-1);
  });

  return (
    <div className="relative overflow-hidden">
      <ScrollWrapper
        selectedChildIndex={archetypeStore.selectedArchetypeIndex}
        onChildClick={setSelectedArchetype}
      >
        {archetypeStore.archetypes.map((archetype, index) => (
          <ArchetypeCard
            key={index}
            title={archetype.title}
            description={archetype.description}
            onClick={() => {
              setSelectedArchetype(index);
            }}
            selected={index === archetypeStore.selectedArchetypeIndex}
          />
        ))}
      </ScrollWrapper>
      <div
        className={`${
          childSelected(archetypeStore.selectedArchetypeIndex)
            ? "translate-x-[0%]"
            : "translate-x-[110%]"
        } z-[200] transition-all duration-1000 absolute top-0 right-0`}
      >
        <Parameterizer
          archetype={
            archetypeStore.archetypes[archetypeStore.lastSelectedArchetypeIndex]
          }
          onBack={() => {
            setSelectedArchetype(-1);
          }}
        />
      </div>
      {/* <div className="z-[100] absolute bottom-[7svh] left-1/2 -translate-x-1/2">
        <div className="bg-black h-[75svh] w-[40svw] rounded-xl"></div>
        <div className="h-[10px]" />
        <div className="bg-black h-[7svh] w-[40svw] p-[10px] rounded-xl flex items-center justify-center">
          <input className="h-full w-full p-2 rounded-sm" />
          <button className="h-full ml-[10px]">
            <svg
              className="fill-black dark:fill-white"
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
        <p>Написать</p>
      </div> */}
    </div>
  );
}
