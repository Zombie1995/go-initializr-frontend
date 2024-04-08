import { createEffect, createEvent, createStore } from "effector";
import { ArchetypeParam } from "shared/model/types";

const LOCALSTORAGE_ARCHETYPES = "ARCHETYPES";

export type Archetype = {
  title: string;
  description: string;
  params: Array<ArchetypeParam>;
};

type initialStoreType = {
  selectedArchetypeIndex: number;
  lastSelectedArchetypeIndex: number;
  archetypes: Array<Archetype>;
};

const initialArchetypes = [
  {
    title: "Rest API",
    description:
      "Тут жесткое описаниеТут жесткое описаниеТут жесткое описаниеddddddddsssssssssssssssТут жесткое описаниеТут жесткое описаниеТут жесткое описаниеТут жесткое описаниеТут жесткое описаниеТут жесткое описание",
    params: [
      {
        showTitle: "Database",
        title: "database",
        variants: ["PostgreSQL", "MySQL"],
        optional: false,
        chosenVariant: 0,
      },
      {
        showTitle: "Cache",
        title: "cache",
        variants: ["Redis", "Memcached"],
        optional: true,
        chosenVariant: -1,
      },
      {
        showTitle: "Message Broker",
        title: "message_broker",
        variants: ["RabbitMQ", "Kafka"],
        optional: true,
        chosenVariant: -1,
      },
    ],
  },
  {
    title: "Telegram Bot",
    description: "Тут жесткое описание",
    params: [],
  },
  {
    title: "Worker",
    description: "Тут жесткое описание",
    params: [],
  },
  {
    title: "GraphQL",
    description: "Тут жесткое описание",
    params: [],
  },
  {
    title: "Real-Time WebSocket",
    description: "Тут жесткое описание",
    params: [],
  },
  {
    title: "Command Line Interface",
    description: "Тут жесткое описание",
    params: [],
  },
];

const initialStore: initialStoreType = {
  selectedArchetypeIndex: -1,
  lastSelectedArchetypeIndex: 0,
  archetypes: initialArchetypes,
};

export const fetchArchetypesFromLocalStorage = createEffect(async () => {
  const data = localStorage.getItem(LOCALSTORAGE_ARCHETYPES);
  return data ? JSON.parse(data) : initialArchetypes;
});

export const setSelectedArchetype = createEvent<number>();

export const setSelectedArchetypeParam = createEvent<ArchetypeParam>();

export const $archetypeStore = createStore(initialStore)
  .on(setSelectedArchetype, (state, archetypeIndex) => ({
    ...state,
    selectedArchetypeIndex: archetypeIndex,
    lastSelectedArchetypeIndex:
      archetypeIndex > -1 ? archetypeIndex : state.lastSelectedArchetypeIndex,
  }))
  .on(fetchArchetypesFromLocalStorage.doneData, (state, archetypes) => ({
    ...state,
    archetypes,
  }))
  .on(setSelectedArchetypeParam, (state, param) => {
    if (state.selectedArchetypeIndex < 0) return { ...state };

    const newArchetypes = [...state.archetypes];
    const params = newArchetypes[state.selectedArchetypeIndex].params;
    newArchetypes[state.selectedArchetypeIndex].params = params.map((p) => {
      if (p.title === param.title) {
        return { ...p, chosenVariant: param.chosenVariant };
      }
      return p;
    });

    localStorage.setItem(
      LOCALSTORAGE_ARCHETYPES,
      JSON.stringify(newArchetypes)
    );

    return {
      ...state,
      archetypes: newArchetypes,
    };
  });
