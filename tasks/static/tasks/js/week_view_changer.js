function toggleWeek() {
    const button = document.querySelector(".view-button");

    const saturdayColumn = document.querySelector(".saturday-column");
    const sundayColumn = document.querySelector(".sunday-column");

    button.classList.toggle("active-button")

    saturdayColumn.classList.toggle("hide");
    sundayColumn.classList.toggle("hide");
}