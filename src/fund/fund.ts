import { post, get } from "../base";
import { VirtualAccountBody } from "./types";

export const fundWithVirtualAccount = (
  apiKey: string,
  body: VirtualAccountBody,
  options?
) => {
  return post(`/virtual-accounts/deposit`, body, apiKey, options);
};

export const getDepositStatus = (apiKey: string, options?) => {
  return get(
    `/virtual-accounts/status?reference=29F83ND82JD0`,
    apiKey,
    options
  );
};
