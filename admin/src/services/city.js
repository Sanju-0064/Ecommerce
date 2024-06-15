import axios from "axios";

export const cityList = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/city/api/city-list`,
        data
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const decactivateCity = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_API_BASE_URL
        }/city/api/decactivate-city`,
        data
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const deleteCity = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/city/api/delete-city`,
        data
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const addCity = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/city/api/add-city`,
        data
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const updateCity = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/city/api/update-city`,
        data
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
}
