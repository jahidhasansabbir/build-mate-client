import axios from "axios";
import useAuth from "./useAuth";
const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER}`,
});

const useAxiosSecure = () => {
 
  const { user } = useAuth();
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
