const buildOption = (data) => {
  const options = {};
  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "content-type": "application/json",
    };
  }

  const storageData =JSON.parse(localStorage.getItem("authData"))

  console.log(storageData);
  if (storageData?.state.accessToken) {
    options.headers = {
      ...options.headers,
      "content-type": "application/json",
      "X-Authorization": storageData.state.accessToken
    };
  }
  console.log(options.headers);
  return options;
};

const request = async (method, url, data) => {
  const response = await fetch(url, {
    method,
    ...buildOption(data),
  });

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
