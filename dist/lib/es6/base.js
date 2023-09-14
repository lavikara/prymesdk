var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import axios from "axios";
var baseUrl = "https://a305b949-cbce-4763-8546-70504b5e4fe9.mock.pstmn.io";
export var post = function (endpoint, body, apiKey, options) {
    var url = "".concat(baseUrl).concat(endpoint);
    var headers = {
        "Content-Type": "application/json",
        "api-key": apiKey,
    };
    var config = __assign(__assign({}, options), { headers: headers });
    return axios.post(url, body, config).then(function (response) {
        if (response) {
            console.log(response);
            var data = response.data.data;
            var ifrm = document.createElement("iframe");
            ifrm.setAttribute("src", "https://meek-kleicha-c9a51c.netlify.app/depositestatus/".concat(data.reference));
            ifrm.setAttribute("id", "pryme--frame-id");
            ifrm.setAttribute("allowfullscreen", "true");
            ifrm.setAttribute("frameborder", "0");
            ifrm.setAttribute("title", "pryme payment");
            ifrm.setAttribute("sandbox", "allow-forms allow-scripts allow-same-origin allow-top-navigation-by-user-activation allow-popups");
            ifrm.setAttribute("allow", "camera");
            ifrm.setAttribute("allowusermedia", "true");
            ifrm.style.width = "100%";
            ifrm.style.height = "100%";
            ifrm.style.zIndex = "999999999";
            ifrm.style.position = "fixed";
            ifrm.style.top = "0";
            ifrm.style.left = "0";
            ifrm.style.overflow = "hidden";
            ifrm.style.zIndex = "999999999";
            document.body.appendChild(ifrm);
        }
        else
            throw new Error();
    });
};
export var get = function (endpoint, apiKey, options) {
    var url = "".concat(baseUrl).concat(endpoint);
    var headers = {
        "Content-Type": "application/json",
        "api-key": apiKey,
    };
    var config = __assign(__assign({}, options), { headers: headers });
    return axios.get(url, config).then(function (response) {
        return response;
    });
};
