import axios from "axios";

export const propertyList = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${
          import.meta.env.VITE_REACT_APP_API_BASE_URL
        }/property/api/property-list`,
        data
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const decactivateProperty = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_API_BASE_URL
        }/property/api/decactivate-property`,
        data
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const deleteProperty = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_API_BASE_URL
        }/property/api/delete-property`,
        data
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const addProperty = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_API_BASE_URL
        }/property/api/add-property`,
        data
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const updateProperty = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${
          import.meta.env.VITE_REACT_APP_API_BASE_URL
        }/property/api/update-property`,
        data
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};