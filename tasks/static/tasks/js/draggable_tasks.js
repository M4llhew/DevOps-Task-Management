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
    const dropTarget = event.target.closest(".column");
    if (dropTarget && dropTarget.querySelector(".column-content")) {
        dropTarget.querySelector(".column-content").appendChild(draggedElement);
    }
}