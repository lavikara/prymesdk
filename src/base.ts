import axios from "axios";

const baseUrl = "https://a305b949-cbce-4763-8546-70504b5e4fe9.mock.pstmn.io";

export const post = (
  endpoint: string,
  body: object,
  apiKey: string,
  options?: object
) => {
  const url = `${baseUrl}${endpoint}`;
  const headers = {
    "Content-Type": "application/json",
    "api-key": apiKey,
  };
  const config = {
    ...options,
    headers,
  };

  return axios.post(url, body, config).then((response) => {
    if (response) {
      console.log(response);
      const { data } = response.data;
      var ifrm = document.createElement("iframe");
      ifrm.setAttribute(
        "src",
        `https://meek-kleicha-c9a51c.netlify.app/depositestatus/${data.reference}`
      );
      ifrm.setAttribute("id", "pryme--frame-id");
      ifrm.setAttribute("allowfullscreen", "true");
      ifrm.setAttribute("frameborder", "0");
      ifrm.setAttribute("title", "pryme payment");
      ifrm.setAttribute(
        "sandbox",
        "allow-forms allow-scripts allow-same-origin allow-top-navigation-by-user-activation allow-popups"
      );
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
    } else throw new Error();
  });
};

export const get = (endpoint: string, apiKey: string, options?: object) => {
  const url = `${baseUrl}${endpoint}`;
  const headers = {
    "Content-Type": "application/json",
    "api-key": apiKey,
  };
  const config = {
    ...options,
    headers,
  };
  return axios.get(url, config).then((response) => {
    return response;
  });
};
