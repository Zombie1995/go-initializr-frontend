import { createEffect, createEvent, createStore, sample } from "effector";
import { fetchReccomendation } from "../api";

export type Message = {
  own: boolean;
  text: string;
};

type initialStoreType = {
  loading: boolean;
  messages: Array<Message>;
};

const initialStore: initialStoreType = {
  loading: false,
  messages: [
    {
      own: false,
      text: "Напишите идею вашего приложения и мы подскажем реализацию бизнес логики и какой архитип лучше использовать!",
    },
  ],
};

export const getReccomendation = createEffect(async (message: string) => {
  return await fetchReccomendation({ message });
});

export const pushMessage = createEvent<Message>();

export const $recommendationStore = createStore(initialStore)
  .on(pushMessage, (state, message) => ({
    ...state,
    loading: true,
    messages: [...state.messages, message],
  }))
  .on(getReccomendation.doneData, (state, message) => ({
    ...state,
    loading: false,
    messages: [...state.messages, { own: false, text: message.message }],
  }));

sample({
  clock: pushMessage,
  source: $recommendationStore,
  fn: (_, message) => message.text,
  target: getReccomendation,
});
