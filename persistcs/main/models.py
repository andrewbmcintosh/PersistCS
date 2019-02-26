from django.db import models

# Create your models here.


class Restaurant(models.Model):
    # restaurant_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    # weekly_expected = models.CharField(max_length=100)
    # weekly_actual = models.CharField(max_length=100)
    total_sales = models.CharField(max_length=100)
    total_hours = models.CharField(max_length=100)


class Worker(models.Model):
    restaurant = models.ForeignKey(
        "Restaurant", on_delete=models.CASCADE, related_name='worker_restaurant', default='')
    # worker_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    job_title = models.CharField(max_length=100)
    total_hours = models.CharField(max_length=100)
    total_tip = models.CharField(max_length=100)
    total_sales = models.CharField(max_length=100)


class TimeSheet(models.Model):
    # time_sheet_id = models.AutoField(primary_key=True)
    time_sheet_pos_id = models.CharField(max_length=100)
    worker = models.ForeignKey(
        "Worker", on_delete=models.CASCADE, related_name='timesheet_worker', default='')
    start_time = models.CharField(max_length=100)
    end_time = models.CharField(max_length=100)
    hours = models.CharField(max_length=100)
    hourly_rate = models.CharField(max_length=100)
    declared_tips = models.CharField(max_length=100)
    adjusted_tips = models.CharField(max_length=100)
    total_tips = models.CharField(max_length=100)
    sales = models.CharField(max_length=100)
