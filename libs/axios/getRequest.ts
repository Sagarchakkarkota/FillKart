import axios from "axios";

export const globalGetRequest = async (endpoints: string) => {
  try {
    const response = await axios(endpoints);
    const data = await response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};
