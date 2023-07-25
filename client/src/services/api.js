import axios from "axios";

const API_URI = "";
export const uploadFile = async (data) => {
  try {
    const response = await axios.post(
      `https://filefly-be.onrender.com/upload`,
      data
    );
    return response.data;
  } catch (error) {
    console.log("Error while calling the API ", error.message);
  }
};
