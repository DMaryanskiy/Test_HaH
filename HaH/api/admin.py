from django.contrib import admin
from .models import Products, Category, Favourite

@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "title",
        "category",
        "price",
        "image",
    )

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "title",
    )

@admin.register(Favourite)
class FavouriteAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "user",
        "product",
    )
