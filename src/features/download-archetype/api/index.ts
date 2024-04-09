import axios from "axios";
import { BASE_URL } from "shared/api/baseUrl";
import { ArchetypeParam } from "shared/model/types";
import { getDownloadArchetypeRequest } from "../model";

export const fetchDownloadArchetype = (
  archetypeName: string,
  params: Array<ArchetypeParam>
) => {
  let url = "";

  switch (archetypeName) {
    case "Rest API Archetype":
      url = `${BASE_URL}/rest-api-archetype`;
      break;
    case "Telegram Bot Archetype":
      url = `${BASE_URL}/telegram-bot`;
      break;
    case "gRPC Archetype":
      url = `${BASE_URL}/grpc`;
      break;
    case "GraphQL Archetype":
      url = `${BASE_URL}/graphql`;
      break;
    case "Command Line Interface Archetype":
      url = `${BASE_URL}/cli`;
      break;
  }

  axios
    .post(url, getDownloadArchetypeRequest(params), {
      responseType: "blob",
    })
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
};
