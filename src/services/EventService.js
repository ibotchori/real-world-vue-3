import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/koregeo/My-JSON-Server",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  //Added new call
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
