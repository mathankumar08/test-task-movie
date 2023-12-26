import { axiosInstance } from ".";

export const getMovieList = async () => {
    try {
      const res = await axiosInstance.get(`/movies`);
      console.log(res, "res")
      if (res.status === 200 || res.status === 201) {
        return res.data.data;
      }
      return {};
    } catch (e) {
      console.error(e);
      return null;
    }
};