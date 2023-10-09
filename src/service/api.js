import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  },
});

export { api };
