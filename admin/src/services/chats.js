import axios from "axios";

export const chatsList = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/chats/api/get-chats-list`,
        data
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};

export const getAllChats = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/chats/api/get-all-chats`, data)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response));
  });
};