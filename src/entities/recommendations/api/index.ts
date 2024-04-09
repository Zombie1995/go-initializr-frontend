import axios from "axios";

export const fetchReccomendation = async (message: { message: string }) => {
  const data = (
    await axios.post("http://go-initializr.ru/api/v1/recommendation", message)
  ).data;

  return data;
};
