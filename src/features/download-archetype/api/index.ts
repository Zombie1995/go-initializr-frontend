import axios from "axios";
import { ArchetypeParam } from "shared/model/types";
import { getDownloadArchetypeRequest } from "../model";

export const fetchDownloadArchetype = (
  archetypeName: string,
  params: Array<ArchetypeParam>
) => {
  let url = "";

  switch (archetypeName) {
    case "Rest API Archetype":
      url = "http://go-initializr.ru/api/v1/rest-api-archetype";
      break;
    case "Telegram Bot Archetype":
      url = "http://go-initializr.ru/api/v1/telegram-bot";
      break;
    case "gRPC Archetype":
      url = "http://go-initializr.ru/api/v1/grpc";
      break;
    case "GraphQL Archetype":
      url = "http://go-initializr.ru/api/v1/graphql";
      break;
    case "Command Line Interface Archetype":
      url = "http://go-initializr.ru/api/v1/cli";
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
