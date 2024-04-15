from django.urls import path
# from .views import main
from .views import RoomView
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    # path('home', main),
    # path('', main),
    # path('room/<str:room_id>', RoomView.as_view()),
    path('home', RoomView.as_view()),
]