from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()

class Category(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Products(models.Model):
    title = models.CharField(max_length=100)
    category = models.ForeignKey("Category", on_delete=models.CASCADE)
    price = models.PositiveIntegerField()
    image = models.ImageField(upload_to="products/")
    description = models.TextField(default="")

    def __str__(self):
        return self.title

class Favourite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_favourite")
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name="product_favourite")
