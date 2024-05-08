const expandedSidebar = document.querySelector('.sidebar-expanded');
const collapsedSidebar = document.querySelector('.sidebar-collapsed');
const SidebarContainer = document.querySelector('.sidebar-container');

function toggleSidebar() {
    console.log('Toggle Sidebar called'); // Check if this log appears in the console
    console.log("clicked")
    expandedSidebar.classList.toggle('hide');
    collapsedSidebar.classList.toggle('hide');
    SidebarContainer.classList.toggle('collapsed-size');
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