import { getToken } from "./authUtils";

export const backend_url = process.env.REACT_APP_BACKEND_URL;
export const STORED_TOKEN = getToken();
