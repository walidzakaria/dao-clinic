from django.shortcuts import render


# Create your views here.
from django.views.decorators.csrf import csrf_exempt


def home(request):
    return render(request, 'index.html', {})


def auth(request, uid, token):
    return render(request, 'index.html', {})


def session(request, session_id):
    return render(request, 'index.html', {})


@csrf_exempt
def pay(request):
    if request.method == 'POST':
        print('posted')
        print('request is: ', request)
        return render(request, 'index.html', {})