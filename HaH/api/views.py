import django_filters
from django_filters.rest_framework import FilterSet, DjangoFilterBackend

from django.contrib.auth import login, logout
from django.shortcuts import get_object_or_404

from knox.models import AuthToken
from knox.views import LoginView as KnoxLoginView

from rest_framework import serializers, status, permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import (
        ProductsSerializer,
        FavouriteSerializer,
        PurchaseSerializer,
        UserSerializer,
    )
from .models import (
        Products,
        Favourite,
        Purchase,
    )


class UserLogin(KnoxLoginView):
    permission_classes = [permissions.AllowAny, ]

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        login(request, user)
        return super(UserLogin, self).post(request, format=None)

class UserLogout(APIView):
    def get(self, request):
        logout(request)
        return Response({"success": True}, status=status.HTTP_200_OK)

class UserCreate(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "user" : serializer.data,
                "token" : AuthToken.objects.create(user)[1]
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CategoryFilter(FilterSet):
    category = django_filters.CharFilter(field_name="category__category", lookup_expr="contains")

    class Meta:
        model = Products
        fields = ["category", ]

class ProductsListView(ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = CategoryFilter

class FavouriteListView(ListAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer

class PurchaseListView(ListAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer

@api_view(["POST", "DELETE"])
def favourite_api_detail(request, product_id):
    product = get_object_or_404(Products, pk=product_id)
    if request.method == "POST":
        serializer = FavouriteSerializer(data=request.data, context= {
                "request_user": request.user,
                "request_product": product,
            }
        )
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user, product=product)
        return Response({"success": True}, status=status.HTTP_201_CREATED)
    
    if request.method == "DELETE":
        get_object_or_404(
            Favourite,
            user=request.user,
            product=product
        ).delete()
        return Response({"success": True}, status=status.HTTP_204_NO_CONTENT)

@api_view(["POST", "DELETE"])
def purchase_api_detail(request, product_id):
    product = get_object_or_404(Products, pk=product_id)
    if request.method == "POST":
        serializer = PurchaseSerializer(data=request.data, context= {
                "request_user": request.user,
                "request_product": product,
            }
        )
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user, product=product)
        return Response({"success": True}, status=status.HTTP_201_CREATED)
    
    if request.method == "DELETE":
        get_object_or_404(
            Purchase,
            user=request.user,
            product=product
        ).delete()
        return Response({"success": True}, status=status.HTTP_204_NO_CONTENT)
