import { ArchetypeCard } from "entities/archetype";
import { ScrollWrapper } from "widgets/scroll-wrapper";

export default function Initializer() {
  return (
    <ScrollWrapper>
      <ArchetypeCard title="Rest API" description="hu" />
      <ArchetypeCard title="Telegram Bot" description="hu" />
      <ArchetypeCard title="Worker" description="hu" />
      <ArchetypeCard title="GraphQL" description="hu" />
      <ArchetypeCard title="Real-Time WebSocket" description="hu" />
      <ArchetypeCard title="Command Line Interface" description="hu" />
    </ScrollWrapper>
  );
}
