import { createEvent, createStore } from "effector";

type Archetype = {
  title: string;
  description: string;
};

type initialStoreType = {
  selectedArchetypeIndex: number;
  archetypes: Array<Archetype>;
};

const initialStore: initialStoreType = {
  selectedArchetypeIndex: -1,
  archetypes: [
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
  ],
};

export const setSelectedArchetype = createEvent<number>();

export const $archetypeStore = createStore(initialStore).on(
  setSelectedArchetype,
  (state, archetypeIndex) => ({
    ...state,
    selectedArchetypeIndex: archetypeIndex,
  })
);
