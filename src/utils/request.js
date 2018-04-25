import axios from "axios";
import localforage from "localforage";
import { setupCache } from "axios-cache-adapter";

const store = localforage.createInstance({ name: "ovh-ux" });
const giturl = "http://api.github.com";

export const cache = setupCache({
    maxAge: 60 * 60 * 1000,
    limit: 30,
    store,
    exclude: {
        query: false
    }
});

export const api = axios.create({
    adapter: cache.adapter,
    baseURL: giturl,
    method: "get",
    headers: {
        Accept: "application/vnd.github.mercy-preview+json"
    }
});

export const local = axios.create({
    baseURL: "/static/api/",
    method: "get"
});
