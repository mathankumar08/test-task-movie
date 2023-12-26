import { axiosInstance } from ".";

export const login = async () => {
    try {
      const res = await axiosInstance.get(`/login`);
      if (res.status === 200 || res.status === 201) {
        return res.data.data;
      }
      return {};
    } catch (e) {
      console.error(e);
      return null;
    }
};