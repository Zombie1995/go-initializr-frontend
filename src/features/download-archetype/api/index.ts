import axios from "axios";
import { ArchetypeParam } from "shared/model/types";
import { getDownloadArchetypeRequest } from "../model";

export const fetchDownloadArchetype = (
  archetypeName: string,
  params: Array<ArchetypeParam>
) => {
  switch (archetypeName) {
    case "Rest API":
      axios
        .post(
          "http://de6igz.ru/v1/rest-api-archetype",
          getDownloadArchetypeRequest(params),
          {
            responseType: "blob",
          }
        )
        .then((response) => {
          const href = URL.createObjectURL(response.data);

          const link = document.createElement("a");
          link.href = href;
          link.setAttribute("download", "archetype.zip");
          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
          URL.revokeObjectURL(href);
        })
        .catch((e) => console.error(e));
      break;
  }
};
