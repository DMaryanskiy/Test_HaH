export const BASE_URL = "http://127.0.0.1:8000";

export const register = ({ username, phone, email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, phone, email, password }),
    }).then((res) => checkResponse(res));
};

export const login = ({ password, username }) => {
    return fetch(`${BASE_URL}/login/token/login/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, username }),
    }).then((res) => checkResponse(res));
};

export const logout = () => {
    return fetch(`${BASE_URL}/login/token/logout/`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then((res) => checkResponse(res));
};

const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};
