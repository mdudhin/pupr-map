import { API } from "..";
import { LoginSchema } from "./form";
import axios from "axios";

export const postLogin = async (payload: LoginSchema) => {
  try {
    const response = await API.post(`/api/auth/login`, payload);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Login failed");
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};
