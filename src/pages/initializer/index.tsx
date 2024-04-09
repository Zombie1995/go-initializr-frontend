import { useUnit } from "effector-react";
import { ArchetypeCard } from "entities/archetype";
import {
  $archetypeStore,
  fetchArchetypesFromLocalStorage,
  setSelectedArchetype,
} from "entities/archetype/model";
import { Recommendations } from "entities/recommendations";
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
      <div className="z-[100] absolute bottom-0 left-1/2 -translate-x-1/2">
        <Recommendations />
      </div>
    </div>
  );
}
