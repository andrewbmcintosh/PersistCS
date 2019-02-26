from main.models import Restaurant, TimeSheet, Worker
from rest_framework import viewsets, permissions
from .serializers import RestaurantSerializer, TimeSheetSerializer, WorkerSerializer

# Restaurant Viewset


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RestaurantSerializer

# TimeSheet Viewset


class WorkerViewSet(viewsets.ModelViewSet):
    queryset = Worker.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = WorkerSerializer

# Worker Viewset


class TimeSheetViewSet(viewsets.ModelViewSet):
    queryset = TimeSheet.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TimeSheetSerializer
