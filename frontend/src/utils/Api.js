class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    makeOrder(user, data) {
        return fetch(`${this._baseUrl}/purchases/${user}/orders/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user,
                data,
            }),
        }).then(this._checkResponse);
    }

    buyProduct(user, product) {
        const username = user.username;
        return fetch(`${this._baseUrl}/purchase/${product.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                product,
            }),
        }).then(this._checkResponse);
    }

    deleteProduct(user, product) {
        const username = user.username;
        return fetch(`${this._baseUrl}/purchase/${product.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                product,
            }),
        }).then((res) => {
            if (res.ok) {
                return res;
            }
            return Promise.reject(`Ошибка ${res.status}`);
        });
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`,
            },
        }).then(this._checkResponse);
    }

    getPurchase(username) {
        return fetch(`${this._baseUrl}/purchases/${username}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(this._checkResponse);
    }

    getAllProducts() {
        return fetch(`${this._baseUrl}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(this._checkResponse);
    }

    getProductByCategory(url) {
        return fetch(`${this._baseUrl}/${url}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
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
