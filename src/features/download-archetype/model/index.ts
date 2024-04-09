import { ArchetypeParam } from "shared/model/types";

export const getDownloadArchetypeRequest = (params: Array<ArchetypeParam>) => {
  const result = params.reduce(
    (acc: any, { title, variants, optional, chosenVariant }) => {
      acc[title] = {
        type: chosenVariant > -1 ? variants[chosenVariant] : "",
      };
      if (optional) {
        acc[title].is_used = chosenVariant > -1;
      }
      return acc;
    },
    {}
  );

  return result;
};
