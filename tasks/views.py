from django.shortcuts import render, HttpResponse
from django.views.generic import TemplateView
from tasks.models import Task
from tasks.forms import TaskForm
from django.template.loader import render_to_string


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
        context = super(SidebarView, self).get_context_data(**kwargs)
        context['show_sidebar'] = True  # or any value you want to pass
        context['first_name'] = self.request.user.first_name
        return context


class HomeView(SidebarView):
    template_name = "tasks/home.html"  # specify your template name here


class CalendarView(SidebarView):
    template_name = 'tasks/calendar.html'

    def get_context_data(self, *args, **kwargs):
        context = super(CalendarView, self).get_context_data(*args, **kwargs)

        all_tasks = Task.objects.all()
        draggable_tasks = []
        for index, task in enumerate(all_tasks, start=1):
            draggable_task_item = render_to_string('tasks/partials/draggable_task_item.html', {
                'task': task,
                'index': index,
            })
            draggable_tasks.append(draggable_task_item)
        context['draggable_tasks'] = draggable_tasks
        context['task_create_form'] = TaskForm()
        context['headers'] = [
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday',
        ]
        return context



