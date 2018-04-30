import axios from "axios";

const gitURL = "https://api.github.com";
const serverApi = "$URL";

export const api = axios.create({
    baseURL: gitURL,
    method: "get",
    headers: {
        Accept: "application/vnd.github.mercy-preview+json"
    }
});

export const proxy = axios.create({
    baseURL: serverApi.concat("/users/ovh-ux"),
    method: "get",
    headers: {
        Accept: "application/vnd.github.mercy-preview+json"
    }
});
