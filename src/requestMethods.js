import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzExMzZlZDY0ZTZhYWQwNzEyNWEyMCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzQ4MDA2NTYsImV4cCI6MTYzNTA1OTg1Nn0.NokwDGA6tyKAQmYGheUWOtncg-z0iaJsMYVfu9bFgV4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
