import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:1000/driver" }); // server url

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).response.token
      }`;
    }
    return req;
});

export const getDriverDatas = () => API.get("/driver"); // http://localhost:1300 + /driver concatinated
export const createDriverData = (newDriverData) => API.post("/driver", newDriverData);
export const deleteDriverData = (id) => API.delete(`/driver/${id}`);
export const updateDriverData = (id, updatedData) => API.patch(`/driver/${id}`, updatedData);
