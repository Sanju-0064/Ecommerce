import axios from "axios";


export const dashboard = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/admin/api/dashboard`, data)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};