from django.shortcuts import render, HttpResponse

from tasks.forms import TaskForm


def create_task(request):
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse('<p> Task Created </p>')
        else:
            return HttpResponse('<p> Information is invalid </p>')
    else:
        form = TaskForm
        context = {
            'form': form,
        }
        return render(request, 'tasks/create_task.html', context)

# Create your views here.
