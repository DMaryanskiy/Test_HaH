from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(unique=True, null=True)
    phone = models.CharField(max_length=12)

class Category(models.Model):
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.category

class Products(models.Model):
    title = models.CharField(max_length=100)
    category = models.ForeignKey("Category", on_delete=models.CASCADE, related_name="product_category")
    price = models.PositiveIntegerField()
    image = models.ImageField(upload_to="products/")
    description = models.TextField(default="")

    def __str__(self):
        return self.title

class Favourite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_favourite")
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name="product_favourite")

    def __str__(self):
        return self.product.title

class Purchase(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_purchase")
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name="product_purchase")

    def __str__(self):
        return self.product.title

class Order(models.Model):
    name = models.CharField(max_length=81)
    phone = models.CharField(max_length=12)
    city = models.CharField(max_length=81)
    street = models.CharField(max_length=81)
    house = models.CharField(max_length=81)
    flat = models.CharField(max_length=81)
    date = models.DateTimeField()
    commentary = models.TextField(null=True, blank=True)
    pay = models.CharField(max_length=81)
    products = models.ManyToManyField(Purchase, related_name="products_orders")
