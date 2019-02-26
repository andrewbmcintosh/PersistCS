from rest_framework import serializers
from main.models import Restaurant, TimeSheet, Worker

# Lead Serializer


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'


class TimeSheetSerializer(serializers.ModelSerializer):

    class Meta:
        model = TimeSheet
        fields = '__all__'


class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = '__all__'
