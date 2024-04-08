import { useUnit } from "effector-react";
import { ArchetypeCard } from "entities/archetype";
import {
  $archetypeStore,
  setSelectedArchetype,
} from "entities/archetype/model";
import useEscapeKeyListener from "shared/model/useEscapeKeyListener";
import { Parameterizer } from "widgets/parameterizer";
import { ScrollWrapper } from "widgets/scroll-wrapper";
import { childSelected } from "widgets/scroll-wrapper/model";

export default function Initializer() {
  const [archetypeStore, onSelectedArchetype] = useUnit([
    $archetypeStore,
    setSelectedArchetype,
  ]);

  useEscapeKeyListener(() => {
    onSelectedArchetype(-1);
  });

  return (
    <div className="relative overflow-hidden">
      <ScrollWrapper
        selectedChildIndex={archetypeStore.selectedArchetypeIndex}
        onChildClick={onSelectedArchetype}
      >
        {archetypeStore.archetypes.map((archetype, index) => (
          <ArchetypeCard
            key={index}
            title={archetype.title}
            description={archetype.description}
            onClick={() => {
              onSelectedArchetype(index);
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
          onBack={() => {
            onSelectedArchetype(-1);
          }}
        />
      </div>
    </div>
  );
}
