import { axiosInstance } from ".";

type loginPaylaod = {
  email: string
  password: string
}

export const login = async (payload: loginPaylaod) => {
  try {
    const res = await axiosInstance.post(`/login`, payload);
    if (res.status === 200 || res.status === 201) {
      return res.data.token;
    }
    return {};
  } catch (e) {
    console.error(e);
    return null;
  }
};