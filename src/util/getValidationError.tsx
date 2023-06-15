import { TypeWithKey } from "./types/typeWithKey";

export const getValidationErrors = (error: any) => {
  const matchError: TypeWithKey<string> = {
    ERR_NETWORK: "network error",
  };
  return matchError[error];
};
