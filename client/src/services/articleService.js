import * as request from "./request";

const baseUrl = "http://localhost:3030/data/articles";

export const getAll = async () => {
  const result = await request.get(baseUrl);
  return result;
};

export const getOne = async (articleId) => {
  const result = await request.get(`${baseUrl}/${articleId}`);
  return result;
};

export const getLatest = async () => {
  const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc`);
  return result;
};

export const create = async (articleData) => {
  const result = await request.post(baseUrl, articleData);
  return result;
};

export const edit = async (articleId, articleData) => {
  const result = await request.put(`${baseUrl}/${articleId}`, articleData);
  return result;
};

export const remove = async (articleId) => {
  return request.remove(`${baseUrl}/${articleId}`);
};
