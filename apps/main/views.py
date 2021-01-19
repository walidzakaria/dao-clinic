from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, 'index.html', {})


def auth(request, uid, token):
    return render(request, 'index.html', {})


def session(request, session_id):
    return render(request, 'index.html', {})
