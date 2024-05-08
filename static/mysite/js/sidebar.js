const expandedSidebar = document.querySelector('.sidebar-expanded');
const collapsedSidebar = document.querySelector('.sidebar-collapsed');
const SidebarContainer = document.querySelector('.sidebar-container');

// Function to toggle between expanded and collapsed sidebars
function toggleSidebar() {
    console.log('Toggle Sidebar called'); // Check if this log appears in the console
    console.log("clicked")
    expandedSidebar.classList.toggle('hide');
    collapsedSidebar.classList.toggle('hide');
}

// Add click event listener to the menu button or any other element triggering the toggle

//// For opening the sidebar
//menuButton.addEventListener('click', toggleSidebar);
//menuButton.addEventListener('touchstart', toggleSidebar);
//
//// For closing the sidebar
//closeButton.addEventListener('click', toggleSidebar);
//closeButton.addEventListener('touchstart', toggleSidebar);

document.addEventListener('DOMContentLoaded', function() {
    // Your code here
//    const menuButton = document.querySelector('.header-logo');


    const openButton = document.querySelector('.sidebar-closed-button');
    const closeButton = document.querySelector('.sidebar-opened-button');
    console.log(openButton, closeButton, "Test")
    openButton.addEventListener('click', toggleSidebar);
    openButton.addEventListener('touchstart', toggleSidebar);
    closeButton.addEventListener('click', toggleSidebar);
    closeButton.addEventListener('touchstart', toggleSidebar);
});