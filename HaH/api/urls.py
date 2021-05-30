from django.urls import path

from .views import (
        UserCreate,
        UserLogin,
        UserLogout,
        ProductsListView,
        FavouriteListView,
        PurchaseListView,
        favourite_api_detail,
        purchase_api_detail,
    )


urlpatterns = [
    path("", ProductsListView.as_view()),
    path("favourites", FavouriteListView.as_view()),
    path("purchases", PurchaseListView.as_view()),
    path("signup", UserCreate.as_view()),
    path("login", UserLogin.as_view()),
    path("logout", UserLogout.as_view()),
    path("favourites/<product_id>", favourite_api_detail),
    path("purchase/<product_id>", purchase_api_detail),
]
