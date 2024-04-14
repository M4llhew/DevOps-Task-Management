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