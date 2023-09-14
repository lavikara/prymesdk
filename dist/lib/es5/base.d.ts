export declare const post: (endpoint: string, body: object, apiKey: string, options?: object) => Promise<void>;
export declare const get: (endpoint: string, apiKey: string, options?: object) => Promise<import("axios").AxiosResponse<any, any>>;
