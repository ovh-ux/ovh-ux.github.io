import axios from "axios";
import localforage from "localforage";
import { setupCache } from "axios-cache-adapter";

const store = localforage.createInstance({ name: "ovh-ux" });

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
    baseURL: `${process.env.API_URL}`,
    method: "get",
    headers: {
        Accept: "application/vnd.github.mercy-preview+json"
    }
});
