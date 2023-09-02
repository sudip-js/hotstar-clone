import { baseURL } from "../services/axios";
import requests from "../services/requests";
import { store } from "../redux/store";
import { setAllMovies } from "../redux/features/movieSlice";
import swal from "sweetalert";

const apiUrls = Object.values(requests);
export const fetchDataFromUrls = (urls) => {
  return Promise.allSettled(
    urls.map(async (url) => {
      try {
        const response = await fetch(`${baseURL}${url}`);
        const data = await response.json();
        return { status: "fulfilled", data };
      } catch (error) {
        return { status: "rejected", reason: error };
      }
    })
  );
};

export const handleFetchDataFromUrls = async () => {
  try {
    const response = await fetchDataFromUrls(apiUrls);
    store.dispatch(setAllMovies(response));
  } catch (error) {
    swal({
      type: "danger",
      text: error?.message ?? "Something went wrong!",
      icon: "error",
      timer: 3000,
    });
  }
};
