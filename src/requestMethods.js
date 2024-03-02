import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTk5ZTA1ZjBiN2NhZDQwY2I5ODRmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDQ5Mjc3NCwiZXhwIjoxNjk0NzUxOTc0fQ.lnCE0uOtWAvIvvrjer2F6pK6yiHBA00xeD1REjJWl2A"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`
    },
});
