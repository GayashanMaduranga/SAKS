from django.shortcuts import render,redirect
from django.contrib import messages
from django.template.context_processors import csrf
from registration_app.models import User

# Create your views here.
def index(request):
    context = {}
    context.update(csrf(request))

    if request.method == 'POST':
        full_name = request.POST['full_name']
        email = request.POST['email']
        user_name = request.POST['user_name']
        phone_number = request.POST['phone_number']
        present_address = request.POST['present_address']
        permanent_address = request.POST['permanent_address']
        nid_number = request.POST['nid_number']

        if User.objects.filter(user_name=user_name).exists():
            messages.error(request,'User Name is Already Taken')
            return redirect('registration')
            
        if User.objects.filter(nid_number=nid_number).exists():
            messages.error(request,'nid number is Already registered')
            return redirect('registration')

        if User.objects.filter(email=email).exists():
            messages.error(request,'email is Already registered')
            return redirect('registration')

        user = User.objects.get_or_create(full_name=full_name,email=email,user_name=user_name,
        phone_number=phone_number,present_address=present_address,permanent_address=permanent_address,
        nid_number=nid_number)
        # user.save()
        # print('method is posted' + full_name)
        messages.info(request,'You have successfully registered')


    return render(request,'registration_app/index.html',context)