import axios from "axios";

export const globalGetRequest = async ({ url }: { url: string }) => {
  try {
    const response = await axios(url);
    const data = await response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};
