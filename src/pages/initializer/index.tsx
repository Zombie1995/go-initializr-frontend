import { useUnit } from "effector-react";
import { ArchetypeCard } from "entities/archetype";
import {
  $archetypeStore,
  setSelectedArchetype,
} from "entities/archetype/model";
import { ScrollWrapper } from "widgets/scroll-wrapper";

export default function Initializer() {
  const [archetypeStore, onSelectedArchetype] = useUnit([
    $archetypeStore,
    setSelectedArchetype,
  ]);

  return (
    <>
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
          />
        ))}
      </ScrollWrapper>
    </>
  );
}
