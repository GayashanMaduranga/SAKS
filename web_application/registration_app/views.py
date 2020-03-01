from django.shortcuts import render
from django.contrib import messages
from django.template.context_processors import csrf
from registration_app.models import User

# Create your views here.
def index(request):
    if request.method == 'POST':
        full_name = request.POST['full_name']
        email = request.POST['email']
        user_name = request.POST['user_name']
        phone_number = request.POST['phone_number']
        present_address = request.POST['present_address']
        permanent_address = request.POST['permanent_address']
        nid_number = request.POST['nid_number']

        user = User.objects.get_or_create(full_name=full_name,email=email,user_name=user_name,
        phone_number=phone_number,present_address=present_address,permanent_address=permanent_address,
        nid_number=nid_number)
        # user.save()
        print('method is posted' + full_name)
        messages.error(request,'TESTing Error message !!!!')

    context = {}
    context.update(csrf(request))
    return render(request,'registration_app/index.html',context)