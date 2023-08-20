import { apiClient } from "./axios";
import requests from "./requests";

export const fetchBanner = () => {
  return apiClient({
    method: "GET",
    url: requests["Netflix Originals"],
  });
};
export const fetchMovies = ({ url }) => {
  return apiClient({
    method: "GET",
    url,
  });
};
