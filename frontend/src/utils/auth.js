export const BASE_URL = "http://127.0.0.1:8000";

export const register = ({ password, email }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, email }),
    }).then((res) => checkResponse(res));
};

const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};
