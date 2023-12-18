import * as request from "./request";

const baseUrl = "http://localhost:3030/data/comments";

export const create = async (data) => {
  const result = await request.post(baseUrl, data);
  return result;
};

export const getAll = async (articleId) => {
  const query = new URLSearchParams({
    where: `articleId="${articleId}"`,
  });

  const result = await request.get(`${baseUrl}?${query}`);
  return result;
};
