import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:1003" }); // server url

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).response.token
      }`;
    }
    return req;
});

export const getCabDatas = () => API.get("/cab");
export const createCabData = (newCabData) => API.post("/cab", newCabData);
export const deleteCabData = (id) => API.delete(`/cab/${id}`);
export const updateCabData = (id, updatedData) => API.patch(`/cab/${id}`, updatedData);

export const getDriverDatas = () => axios.create({ baseURL: "http://localhost:1300" }).get("/driver");
export const getCbDatas = () => axios.create({ baseURL: "http://localhost:1002" }).get("/cab");
