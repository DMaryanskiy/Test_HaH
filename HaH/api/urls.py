from django.urls import path
from .views import ProductsListView, favourite_api_detail, FavouriteListView


urlpatterns = [
    path("", ProductsListView.as_view()),
    path("favourites", FavouriteListView.as_view()),
    path("favourites/<product_id>", favourite_api_detail),
]
