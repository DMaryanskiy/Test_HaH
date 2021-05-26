from django.contrib import admin
from .models import (
        Products,
        Category,
        Favourite,
        Purchase,
        User
    )

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
        "category",
    )

@admin.register(Favourite)
class FavouriteAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "user",
        "product",
    )

@admin.register(Purchase)
class PurchaseAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "user",
        "product",
    )

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "username",
        "email"
    )
