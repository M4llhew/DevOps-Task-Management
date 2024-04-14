document.addEventListener('DOMContentLoaded', function () {
        const currentDate = new Date()
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