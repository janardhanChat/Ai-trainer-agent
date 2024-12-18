import { TAVUS_API_KEY } from "@/config";
import { API_BASE_URL } from "./constantsKey";
import axios from "axios";

export const getPersona = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/persona/getPersona`);
    if (!response?.data?.success) {
        console.log("🚀 ~ endConversation ~ response:", response);
        throw new Error("Failed to end conversation");
    }

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
