from rest_framework import serializers
from main.models import Restaurant, TimeSheet, Worker


class TimeSheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeSheet
        fields = ("id", "worker", "time_sheet_pos_id", "start_time", "end_time", "hours",
                  "hourly_rate", "declared_tips", "adjusted_tips", "total_tips", "sales")


class WorkerSerializer(serializers.ModelSerializer):
    worker_timesheet = TimeSheetSerializer(many=True)

    class Meta:
        model = Worker
        fields = ("id", "restaurant", "job_title", "total_hours",
                  "total_tip", "total_sales", "worker_timesheet")


class RestaurantSerializer(serializers.ModelSerializer):
    restaurant_worker = WorkerSerializer(many=True)

    class Meta:
        model = Restaurant
        fields = ("id", "name", "total_sales",
                  "total_hours", "restaurant_worker")
