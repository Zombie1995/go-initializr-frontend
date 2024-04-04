import { useUnit } from "effector-react";
import { ArchetypeCard } from "entities/archetype";
import { $scrollWrapperStore } from "entities/scroll-wrapper/model";
import { ScrollWrapper } from "widgets/scroll-wrapper";

export default function Initializer() {
  const scrollWrapperStore = useUnit($scrollWrapperStore);

  return (
    <ScrollWrapper scrollFixed={scrollWrapperStore.scrollFixed}>
      <ArchetypeCard
        title="Rest API"
        description="Тут жесткое описаниеТут жесткое описаниеТут жесткое описаниеddddddddsssssssssssssssТут жесткое описаниеТут жесткое описаниеТут жесткое описаниеТут жесткое описаниеТут жесткое описаниеТут жесткое описание"
      />
      <ArchetypeCard title="Telegram Bot" description="Тут жесткое описание" />
      <ArchetypeCard title="Worker" description="Тут жесткое описание" />
      <ArchetypeCard title="GraphQL" description="Тут жесткое описание" />
      <ArchetypeCard
        title="Real-Time WebSocket"
        description="Тут жесткое описание"
      />
      <ArchetypeCard
        title="Command Line Interface"
        description="Тут жесткое описание"
      />
    </ScrollWrapper>
  );
}
