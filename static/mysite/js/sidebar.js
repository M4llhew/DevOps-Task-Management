const expandedSidebar = document.querySelector('.sidebar-expanded');
const collapsedSidebar = document.querySelector('.sidebar-collapsed');
const SidebarContainer = document.querySelector('.sidebar-container');

// Function to toggle between expanded and collapsed sidebars
function toggleSidebar() {
    console.log('Toggle Sidebar called'); // Check if this log appears in the console
    expandedSidebar.classList.toggle('translate-x');
    collapsedSidebar.classList.toggle('translate-x');
    // SidebarContainer.classList.toggle('move-bar');
    SidebarContainer.classList.toggle('large-bar');
    SidebarContainer.classList.toggle('small-bar');
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
    const menuButton = document.querySelector('svg.feather-menu');
    const closeButton = document.querySelector('svg.feather-x')
    menuButton.addEventListener('click', toggleSidebar);
    menuButton.addEventListener('touchstart', toggleSidebar);
    closeButton.addEventListener('click', toggleSidebar);
    closeButton.addEventListener('touchstart', toggleSidebar);
});