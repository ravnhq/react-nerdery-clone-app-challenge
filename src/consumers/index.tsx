import { axiosConsumer } from "./axiosConsumer";

export const currentConsumer = <T,>(URL: string) => {
  return axiosConsumer<T>(URL);
};
