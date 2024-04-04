import { ArchetypeCard } from "entities/archetype";
import { ScrollWrapper } from "widgets/scroll-wrapper";

export default function Initializer() {
  return (
    <ScrollWrapper>
      <ArchetypeCard title="Rest API" description="Тут жесткое описание" />
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
