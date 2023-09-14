"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDepositStatus = exports.fundWithVirtualAccount = void 0;
var base_1 = require("../base");
var fundWithVirtualAccount = function (apiKey, body, options) {
    return (0, base_1.post)("/virtual-accounts/deposit", body, apiKey, options);
};
exports.fundWithVirtualAccount = fundWithVirtualAccount;
var getDepositStatus = function (apiKey, options) {
    return (0, base_1.get)("/virtual-accounts/status?reference=29F83ND82JD0", apiKey, options);
};
exports.getDepositStatus = getDepositStatus;
