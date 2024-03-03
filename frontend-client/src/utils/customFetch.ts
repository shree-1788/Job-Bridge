import axios, { AxiosInstance } from "axios";

export const customFetch: AxiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/"
})

