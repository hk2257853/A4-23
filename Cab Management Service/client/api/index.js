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

export const getManagerDatas = () => API.get("/manager");
export const createManagerData = (newManagerData) => API.post("/manager", newManagerData);
export const deleteManagerData = (id) => API.delete(`/manager/${id}`);
export const updateManagerData = (id, updatedData) => API.patch(`/manager/${id}`, updatedData);

export const getDriverDatas = () => axios.create({ baseURL: "http://localhost:1300" }).get("/driver");
export const getCbDatas = () => axios.create({ baseURL: "http://localhost:1002" }).get("/manager");
