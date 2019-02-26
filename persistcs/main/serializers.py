from rest_framework import serializers
from main.models import Restaurant, TimeSheet, Worker


class TimeSheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeSheet
        fields = ("id", "worker", "time_sheet_pos_id", "start_time", "end_time", "hours",
                  "hourly_rate", "declared_tips", "adjusted_tips", "total_tips", "sales")


class WorkerSerializer(serializers.ModelSerializer):
    timesheet_worker = TimeSheetSerializer(many=True, read_only=True)

    class Meta:
        model = Worker
        fields = ("id", "name", "restaurant", "job_title", "total_hours",
                  "total_tip", "total_sales", "timesheet_worker")


class RestaurantSerializer(serializers.ModelSerializer):
    worker_restaurant = WorkerSerializer(many=True, read_only=True)

    class Meta:
        model = Restaurant
        fields = ("id", "name", "total_sales",
                  "total_hours", "worker_restaurant")
