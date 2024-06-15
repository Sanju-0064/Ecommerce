import axios from "axios";


export const usersList = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/admin/api/users-list`, data)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const decactivateUser = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/admin/api/decactivate-user`, data)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const deleteUser = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/admin/api/delete-user`, data)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};