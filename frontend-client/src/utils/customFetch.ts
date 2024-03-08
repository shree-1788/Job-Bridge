import axios, { AxiosInstance } from "axios";

// const token = localStorage.getItem("token");
export const customFetch: AxiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/",
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': token ? `Bearer ${token}` : ''
    //   }
})

