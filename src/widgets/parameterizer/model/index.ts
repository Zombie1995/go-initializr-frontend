export const getSelectedParameterOption = (indices: Set<number>) => {
  return indices.size > 0 ? Array.from(indices)[0] : -1;
};
