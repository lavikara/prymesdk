import { VirtualAccountBody } from "./types";
export declare const fundWithVirtualAccount: (apiKey: string, body: VirtualAccountBody, options?: any) => Promise<void>;
export declare const getDepositStatus: (apiKey: string, options?: any) => Promise<import("axios").AxiosResponse<any, any>>;
