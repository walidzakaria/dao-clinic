from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, 'index.html', {})


def auth(request, uid, token):
    return render(request, 'index.html', {})
