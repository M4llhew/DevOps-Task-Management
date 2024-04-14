function createTask() {
        const task_container = document.querySelector('main .create-task')
        const create_btn = document.querySelector('main header .advanced .container .right-side .create')
        task_container.classList.toggle('hide')
        create_btn.classList.toggle('colourful')
        create_btn.classList.toggle('active-button')
}