import axios from "axios";
import { BASE_URL } from "shared/api/baseUrl";

export const fetchReccomendation = async (message: { message: string }) => {
  const data = (await axios.post(`${BASE_URL}/recommendation`, message)).data;

  return data;
};
