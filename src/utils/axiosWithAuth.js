import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseUrl: "http://nanny-api.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};
