import axios from "axios";
export const axiosConsumer = async <T>(URL: string) => {
  const response = await axios.get<T>(URL);
  return response.data;
};
