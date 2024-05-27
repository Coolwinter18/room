from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room
from django.http import HttpResponse

# Create your views here.

def main(request):
    return HttpResponse("<h1>This is the main page of the app.</h1>")

""" 
class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer """

class CreateRoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class ListRoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

# PUT request to update room
class UpdateRoomView(generics.UpdateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    lookup_field = 'code'
# get room view by code
class GetRoomView(generics.RetrieveAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    lookup_field = 'code'

