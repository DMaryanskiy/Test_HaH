from django.urls import path
from .views import (
        UserCreate,
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
    path("users", UserCreate.as_view()),
    path("favourites/<product_id>", favourite_api_detail),
    path("purchase/<product_id>", purchase_api_detail),
]
