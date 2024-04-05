import { useUnit } from "effector-react";
import { ArchetypeCard } from "entities/archetype";
import {
  $scrollWrapperStore,
  setScrollFixed,
} from "entities/scroll-wrapper/model";
import { ScrollWrapper } from "widgets/scroll-wrapper";

const archetypes = [
  {
    title: "Rest API",
    description:
      "Тут жесткое описаниеТут жесткое описаниеТут жесткое описаниеddddddddsssssssssssssssТут жесткое описаниеТут жесткое описаниеТут жесткое описаниеТут жесткое описаниеТут жесткое описаниеТут жесткое описание",
  },
  {
    title: "Telegram Bot",
    description: "Тут жесткое описание",
  },
  {
    title: "Worker",
    description: "Тут жесткое описание",
  },
  {
    title: "GraphQL",
    description: "Тут жесткое описание",
  },
  {
    title: "Real-Time WebSocket",
    description: "Тут жесткое описание",
  },
  {
    title: "Command Line Interface",
    description: "Тут жесткое описание",
  },
];

export default function Initializer() {
  const [scrollWrapperStore, onScrollFixed] = useUnit([
    $scrollWrapperStore,
    setScrollFixed,
  ]);

  return (
    <ScrollWrapper scrollFixed={scrollWrapperStore.scrollFixed}>
      {archetypes.map((archetype, index) => (
        <ArchetypeCard
          key={index}
          title={archetype.title}
          description={archetype.description}
          onClick={() => {
            onScrollFixed(true);
          }}
          onBack={() => {
            onScrollFixed(false);
          }}
        />
      ))}
    </ScrollWrapper>
  );
}
