import axios from "axios";

export const api = axios.create({
    baseUrl: `${process.env.API_URL}`,
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/vnd.github.mercy-preview+json"
    }
});
