import { post, get } from "../base";
export var fundWithVirtualAccount = function (apiKey, body, options) {
    return post("/virtual-accounts/deposit", body, apiKey, options);
};
export var getDepositStatus = function (apiKey, options) {
    return get("/virtual-accounts/status?reference=29F83ND82JD0", apiKey, options);
};
