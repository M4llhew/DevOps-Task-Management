

function toggleSidebar() {
    var toggleVisuallyHidden = document.getElementsByClassName('needs-hiding');
    for(var i = 0; i < toggleVisuallyHidden.length; i++) {
    // Do something with each element, for example, hide it
    toggleVisuallyHidden[i].classList.toggle('visually-hidden')
    }

    const sidebarContent = document.querySelector('.sidebar-content');
    const sidebarContainer = document.querySelector('.sidebar-container');

    console.log('Toggle Sidebar called'); // Check if this log appears in the console
    console.log("clicked");
//    expandedSidebar.classList.toggle('hide');
//    collapsedSidebar.classList.toggle('hide');
    sidebarContainer.classList.toggle('collapsed-size');
    sidebarContent.classList.toggle('sidebar-collapsed');
    sidebarContent.classList.toggle('sidebar-expanded');
}


document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.querySelector('.sidebar-closed-button');
    const closeButton = document.querySelector('.sidebar-opened-button');
    console.log(openButton, closeButton, "Test")
    openButton.addEventListener('click', toggleSidebar);
    openButton.addEventListener('touchstart', toggleSidebar);
    closeButton.addEventListener('click', toggleSidebar);
    closeButton.addEventListener('touchstart', toggleSidebar);
});