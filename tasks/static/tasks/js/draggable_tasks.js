console.log("loadeddd")

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
    const dropTarget = event.target.closest(".day-column");

    if (!dropTarget) return;

    const columnContent = dropTarget.querySelector(".column-content");
    if (!columnContent) return;

    columnContent.appendChild(draggedElement);

    if (dropTarget.querySelector(".today")) {
        draggedElement.classList.add("today");
        const childElements = draggedElement.children;

        for (let j = 0; j < childElements.length; j++) {
            childElements[j].classList.add("today");
        }
    }
}