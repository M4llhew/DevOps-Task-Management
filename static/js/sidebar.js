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
const menuButton = document.querySelector('.header svg.feather-menu');
const closeButton = document.querySelector('.header svg.feather-x')
menuButton.addEventListener('click', toggleSidebar);
closeButton.addEventListener('click', toggleSidebar);