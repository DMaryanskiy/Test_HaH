from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Products, Favourite


class ProductsSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()

    class Meta:
        model = Products
        fields = "__all__"

class FavouriteSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    product = ProductsSerializer(read_only=True)

    class Meta:
        model = Favourite
        fields = "__all__"