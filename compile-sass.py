import subprocess

if __name__ == "__main__":
    command = ["sass", "--watch",
               "tasks/static/tasks/sass:tasks/static/tasks/css",
               "users/static/users/sass:users/static/users/css",
               "static/sass/:static/mysite/css/"
               ]
    subprocess.run(command, shell=True)
