from rest_framework import routers
from .api import RestaurantViewSet, TimeSheetViewSet, WorkerViewSet

router = routers.DefaultRouter()
router.register('api/restaurant', RestaurantViewSet, 'restaurant')
router.register('api/timesheet', TimeSheetViewSet, 'timesheet')
router.register('api/worker', WorkerViewSet, 'worker')

urlpatterns = router.urls
