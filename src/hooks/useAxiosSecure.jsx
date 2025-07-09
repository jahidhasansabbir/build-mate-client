import axios from "axios";
import useAuth from "./useAuth";
import { useEffect, useRef } from "react";
const axiosInstance = axios.create({
  baseURL: `http://localhost:3000`,
});

const useAxiosSecure = () => {
  const info = useAuth();
  const isInterceptorSet=useRef(false);
 useEffect(() => {
  if (info.user?.accessToken && !isInterceptorSet.current) {
    axiosInstance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${info.user.accessToken}`;
        return config;
      },
      (error) => Promise.reject(error)
    );
    isInterceptorSet.current = true;
  }
}, [info.user, isInterceptorSet]);
  
  return axiosInstance;
};

export default useAxiosSecure;
