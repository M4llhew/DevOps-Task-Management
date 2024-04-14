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