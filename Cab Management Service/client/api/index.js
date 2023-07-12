import axios from "axios";

const createAxiosInstance = (baseURL) => {
  const instance = axios.create({ baseURL });

  instance.interceptors.request.use((req) => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (profile) {
      req.headers.Authorization = `Bearer ${profile.response.token}`;
    }
    return req;
  });

  return instance;
};

const DriverAPI = createAxiosInstance("http://localhost:1000/driver");
const CabAPI = createAxiosInstance("http://localhost:1000/cab");
const API = createAxiosInstance("http://localhost:1000/manage");

export const getManagerDatas = () => API.get("/manager");
export const createManagerData = (newManagerData) => API.post("/manager", newManagerData);
export const deleteManagerData = (id) => API.delete(`/manager/${id}`);

export const getDriverDatas = () => DriverAPI.get("/driver");

export const getCbDatas = () => CabAPI.get("/cab");
