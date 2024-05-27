from django.urls import path
# from .views import main
from .views import ListRoomView, CreateRoomView, UpdateRoomView, GetRoomView
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = [
    path('room/new', CreateRoomView.as_view()),
    path('room/all', ListRoomView.as_view()),
    path('room/<str:code>', GetRoomView.as_view()),
    #path('room/<str:code>', UpdateRoomView.as_view()),
]