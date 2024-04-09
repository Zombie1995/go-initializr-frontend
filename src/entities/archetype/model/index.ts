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
    title: "Rest API Archetype",
    description:
      "REST API Archetype:(Representational State Transfer) является архитектурным стилем для распределенных систем, который обычно используется для построения веб-сервисов. REST API Archetype представляет собой шаблон проектирования и реализации веб-сервиса, который следует принципам REST.",
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
    title: "Telegram Bot Archetype",
    description:
      "Telegram Bot Archetype - это шаблон проектирования и разработки ботов для мессенджера Telegram. Telegram предоставляет API для создания ботов, которые могут выполнять различные задачи, такие как обработка сообщений от пользователей, отправка уведомлений, доступ к внешним сервисам и т. д.",
    params: [
      {
        showTitle: "Database",
        title: "database",
        variants: ["PostgreSQL"],
        optional: false,
        chosenVariant: 0,
      },
    ],
  },
  {
    title: "gRPC Archetype",
    description:
      "gRPC Archetype - это высокопроизводительный RPC (Remote Procedure Call) фреймворк, разработанный Google. gRPC Archetype представляет собой шаблон проектирования и реализации распределенных систем, использующих gRPC для обмена данными и вызова удаленных процедур.",
    params: [
      {
        showTitle: "Database",
        title: "database",
        variants: ["PostgreSQL"],
        optional: false,
        chosenVariant: 0,
      },
      {
        showTitle: "Message Broker",
        title: "message_broker",
        variants: ["RabbitMQ"],
        optional: true,
        chosenVariant: -1,
      },
    ],
  },
  {
    title: "GraphQL Archetype",
    description:
      "GraphQL API Archetype - это язык запросов и среда выполнения, разработанные Facebook для работы с клиент-серверными приложениями. GraphQL API Archetype - это шаблон проектирования и реализации веб-сервисов, использующих GraphQL для определения и выполнения запросов от клиентов.",
    params: [
      {
        showTitle: "Database",
        title: "database",
        variants: ["PostgreSQL"],
        optional: false,
        chosenVariant: 0,
      },
    ],
  },
  {
    title: "Command Line Interface Archetype",
    description:
      "CLI Tool Archetype представляет собой шаблон проектирования и реализации командной строки (CLI) утилиты, которая выполняет определенные задачи или операции. CLI - это интерфейс, который позволяет пользователям взаимодействовать с приложением через текстовую командную строку.",
    params: [
      {
        showTitle: "Database",
        title: "database",
        variants: ["None"],
        optional: false,
        chosenVariant: 0,
      },
    ],
  },
];

const initialStore: initialStoreType = {
  selectedArchetypeIndex: -1,
  lastSelectedArchetypeIndex: 0,
  archetypes: initialArchetypes,
};

export const fetchArchetypesFromLocalStorage = createEffect(async () => {
  const data = localStorage.getItem(LOCALSTORAGE_ARCHETYPES);
  return initialArchetypes;
  // return data ? JSON.parse(data) : initialArchetypes;
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
