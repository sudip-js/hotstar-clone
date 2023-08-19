import { apiClient } from "./axios";
import requests from "./requests";

export const fetchBanner = () => {
  return apiClient({
    method: "GET",
    url: requests?.fetchNetFlixOriginals,
  });
};
export const fetchMovies = ({ url }) => {
  return apiClient({
    method: "GET",
    url,
  });
};
