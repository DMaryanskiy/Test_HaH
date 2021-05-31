from django.contrib.auth import authenticate

from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from .models import Products, Favourite, Purchase, User


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())],
    )
    phone = serializers.CharField(required=False, default="")
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())],
    )
    password = serializers.CharField(min_length=8)

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data["username"],
            phone=validated_data["phone"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
        return user
    
    class Meta:
        model = User
        fields = ("id", "username", "phone", "email", "password")

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

class PurchaseSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    product = ProductsSerializer(read_only=True)

    class Meta:
        model = Purchase
        fields = "__all__"
