class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    buyProduct({ id, category, title, price, image }) {
        return fetch(`${this._baseUrl}/purchases/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ category, title, price, image }),
        }).then(this._checkResponse);
    }

    /*
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
        }).then(this._checkResponse);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
        }).then(this._checkResponse);
    }

    editInfo({ name, about }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({ name, about }),
        }).then(this._checkResponse);
    }

    addCard(data) {
        return fetch(`${this._baseUrl}/cards `, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            }),
        }).then(this._checkResponse);
    }

    removeCard(id) {
        return fetch(`${this._baseUrl}/cards/${id} `, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._checkResponse);
    }

    //TODO: замени в changeLikeCardStatus на add/removeLike
    addLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: "PUT",
            headers: this._headers,
        }).then(this._checkResponse);
    }

    removeLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._checkResponse);
    }

    changeLikeCardStatus(id, isLiked) {
        if (isLiked) {
            return fetch(`${this._baseUrl}/cards/likes/${id}`, {
                method: "PUT",
                headers: this._headers,
            }).then(this._checkResponse);
        } else {
            return fetch(`${this._baseUrl}/cards/likes/${id}`, {
                method: "DELETE",
                headers: this._headers,
            }).then(this._checkResponse);
        }
    }

    updateAvatar(link) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: link,
            }),
        }).then(this._checkResponse);
    } */

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
}

export const api = new Api({
    baseUrl: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json",
    },
});
