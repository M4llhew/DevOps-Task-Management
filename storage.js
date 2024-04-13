        function validateTask() {
            console.log("validated")
            console.log("task creation")
            const task_container = document.querySelector('main .create-task')
        }


        function createTask() {
            console.log("task creation")
            const task_container = document.querySelector('main .create-task')
            const create_btn = document.querySelector('main header .advanced .container .right-side .create')


            task_container.classList.toggle('hide')
            create_btn.classList.toggle('colourful')
            create_btn.classList.toggle('active-button')

        }

        document.addEventListener('DOMContentLoaded', function () {








            const currentDate = new Date()
            console.log(currentDate)
            const currentDateElement = document.querySelector('.date-selector p')
            currentDateElement.innerText = getMondayDate(currentDate)
            updateDateHeaders(currentDate)
            console.log(currentDate, "date")

            const prevMonth = document.querySelector('.prev-month')
            const prevWeek = document.querySelector('.prev-week')
            const nextWeek = document.querySelector('.next-week')
            const nextMonth = document.querySelector('.next-month')

            prevMonth.addEventListener('click', function () {
                currentDate.setMonth(currentDate.getMonth() - 1)
                updateText(currentDate)
            })

            prevWeek.addEventListener('click', function () {
                currentDate.setDate(currentDate.getDate() - 7)
                updateText(currentDate)
            })

            nextWeek.addEventListener('click', function () {
                currentDate.setDate(currentDate.getDate() + 7)
                updateText(currentDate)
            })

            nextMonth.addEventListener('click', function () {
                currentDate.setMonth(currentDate.getMonth() + 1)
                updateText(currentDate)
            })

            function updateText(currentDate) {
                currentDateElement.innerText = getMondayDate(currentDate)
                updateDateHeaders(currentDate)
            }

            function getMondayDate(today) {
                const dayOfWeek = today.getDay();
                const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
                const monday = new Date(today.setDate(diff));
                console.log({
                    "day": diff,
                    "monday": monday
                })
                const options = { day: 'numeric', year: 'numeric', month: 'long' };
                const formattedMonday = monday.toLocaleDateString('en-GB', options);
                console.log(formattedMonday, "formatted")
                return formattedMonday;
            }

            function setFirstDayOfMonth(today) {
                today.setDate(1);
                const options = { day: 'numeric', year: 'numeric', month: 'long' };
                const firstOfMonthFormatted = today.toLocaleDateString('en-GB', options);
                return firstOfMonthFormatted
            }

            function updateDateHeaders(targetDate) {
                const date = new Date(targetDate)
                const today = new Date()
                const weekHeaders = [
                    document.querySelector(".monday-header"),
                    document.querySelector(".tuesday-header"),
                    document.querySelector(".wednesday-header"),
                    document.querySelector(".thursday-header"),
                    document.querySelector(".friday-header"),
                    document.querySelector(".saturday-header"),
                    document.querySelector(".sunday-header")
                ]

                for (let i = 0; i < 7; i++) {

                    const formattedDate = new Intl.DateTimeFormat('en-GB', {
                        weekday: 'long',
                    }).format(date) + ' ' + formatDayWithSuffix(date);

                    console.log(today.toDateString(), "=", date.toDateString())

                    if (today.toDateString() == date.toDateString()) {
                        console.log("true")
                        weekHeaders[i].classList.add("today")
                    } else {
                        weekHeaders[i].classList.remove("today")
                    }

                    weekHeaders[i].innerText = formattedDate;
                    date.setDate(date.getDate() + 1);
                }
            }

            function formatDayWithSuffix(date) {
                const day = date.getDate();
                const suffix = (day >= 11 && day <= 13) ? 'th' : ['st', 'nd', 'rd', 'th'][(day - 1) % 10] || 'th';
                return day + suffix;
            }
        });



        function toggleWeek() {
            console.log("Done")

            const button = document.querySelector(".view-button");

            const saturdayColumn = document.querySelector(".saturday-column");
            const sundayColumn = document.querySelector(".sunday-column");

            const saturdayHeader = document.querySelector(".saturday-header");
            const sundayHeader = document.querySelector(".sunday-header");

            button.classList.toggle("active-button")

            saturdayColumn.classList.toggle("hide");
            sundayColumn.classList.toggle("hide");

            saturdayHeader.classList.toggle("hide");
            sundayHeader.classList.toggle("hide");

        }


        function allowDrop(event) {
            event.preventDefault();
        }

        function drag(event) {
            event.dataTransfer.setData("text/plain", event.target.id);
        }

        function drop(event) {
            event.preventDefault();
            const data = event.dataTransfer.getData("text/plain");
            const draggedElement = document.getElementById(data);
            const dropTarget = event.target;

            // Check if the drop target is a valid column
            if (dropTarget.classList.contains("column")) {
                dropTarget.appendChild(draggedElement);
            }
        }