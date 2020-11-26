from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, 'index.html', {})


def temp_chat(request):
    return render(request, 'chatroom.html', {})