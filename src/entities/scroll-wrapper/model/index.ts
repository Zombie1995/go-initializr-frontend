import { createEvent, createStore } from "effector";

type initialStoreType = {
  scrollFixed: boolean;
};

const initialStore: initialStoreType = {
  scrollFixed: false,
};

export const setScrollFixed = createEvent<boolean>();

export const $scrollWrapperStore = createStore(initialStore).on(
  setScrollFixed,
  (state, scrollFixed) => ({
    ...state,
    scrollFixed: scrollFixed,
  })
);
