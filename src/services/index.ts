import Axios from "axios";
import { constants } from "../constants";

export const axiosInstance = Axios.create({
    baseURL: constants.baseUrl
});