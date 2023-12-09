const buildOption = (method,data)=>{
  const options = {};
  if (data) {
    options.method = method
    options.body = JSON.stringify(data);
    options.headers = {
      "content-type": "application/json",
    };
  }

  const token = localStorage.getItem("accessToken");
  console.log(localStorage.getItem("accessToken"));
  if(token){
    options.headers = { ...options.headers, "X-Authorization": token };
  }
  return options;
}

const request = async (method,url,data) =>{
    const response = await fetch(url, {
      ...buildOption(method,data),
    });

    if (response.status === 204) {
      return {};
    }

  const result = await response.json();
  
  if(!response.ok){
    throw result;
  }

  return result;
}

export const get = request.bind(null,'GET')
export const post = request.bind(null,'POST')
export const put = request.bind(null,'PUT')
export const remove = request.bind(null,'DELETE')