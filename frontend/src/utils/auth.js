export const BASE_URL = "http://127.0.0.1:8000";

export const register = ({ username, number, email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, number, email, password }),
    }).then((res) => checkResponse(res));
};

const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};
