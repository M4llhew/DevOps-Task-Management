from django.shortcuts import render, HttpResponse
from django.views.generic import TemplateView

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
            'show_sidebar': True,
        }
        return render(request, 'tasks/create_task.html', context)


class SidebarView(TemplateView):
    def get_context_data(self, *args, **kwargs):
        context = super(SidebarView, self).get_context_data(*args, **kwargs)
        context['show_sidebar'] = True  # or any value you want to pass
        return context


class HomeView(SidebarView):
    template_name = "tasks/home.html"  # specify your template name here


class CalendarView(SidebarView):
    template_name = 'calendar.html'
