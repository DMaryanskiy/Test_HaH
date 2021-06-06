from django.urls import path

from .views import (
        UserCreate,
        ProductsListView,
        FavouriteListView,
        UserByTokenView,
        OrderListView,
        purchase_api_list,
        favourite_api_detail,
        purchase_api_detail,
        order_api_detail,
    )


urlpatterns = [
    path("", ProductsListView.as_view()),
    path("favourites", FavouriteListView.as_view()),
    path("purchases/<username>", purchase_api_list),
    path("signup", UserCreate.as_view()),
    path("users/me", UserByTokenView.as_view()),
    path("orders", OrderListView.as_view()),
    path("purchases/<username>/orders/create", order_api_detail),
    path("favourites/<product_id>", favourite_api_detail),
    path("purchase/<product_id>", purchase_api_detail),
]
