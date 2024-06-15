import axios from "axios";


export const login = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/admin/api/login`, data)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const updateProfile = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/admin/api/update-profile`, data)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};
