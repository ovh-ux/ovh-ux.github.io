import axios from 'axios';

export const api = axios.create({
  baseUrl: `${process.env.API_URL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/vnd.github.mercy-preview+json',
    'Authorization': 'token 836acefda004c23bb8f8773f043ae36baa7bf4b8'
  }
});