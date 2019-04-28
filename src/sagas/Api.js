import axios from "axios";

function* getTextFromApi(quantity) {
  const response = yield axios.get(
    `https://baconipsum.com/api/?type=all-meat&paras=${quantity}&start-with-lorem=1&format=array`
  );
  const { data } = response;
  return data;
}

function* addTextFromApi(quantity) {
  const response = yield axios.get(
    `https://baconipsum.com/api/?type=all-meat&paras=${quantity}&start-with-lorem=1&format=array`
  );
  const { data } = response;
  return data;
}

export const API = {
  getTextFromApi,
  addTextFromApi
};
