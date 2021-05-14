from rest_framework import serializers, status
from rest_framework.generics import ListAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import (
        ProductsSerializer,
        FavouriteSerializer,
        PurchaseSerializer,
    )
from .models import (
        Products,
        Favourite,
        Purchase,
        User,
    )


class ProductsListView(ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

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
