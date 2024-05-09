document.addEventListener('DOMContentLoaded', function() {
    const sidebarContent = document.querySelector('.sidebar-content');
    const openButton = document.querySelector('.sidebar-closed-button');
    const closeButton = document.querySelector('.sidebar-opened-button');

    function toggleSidebar() {
        sidebarContent.classList.toggle('sidebar-collapsed');
        sidebarContent.classList.toggle('sidebar-expanded');
    }

    openButton.addEventListener('click', toggleSidebar);
    openButton.addEventListener('touchstart', toggleSidebar);
    closeButton.addEventListener('click', toggleSidebar);
    closeButton.addEventListener('touchstart', toggleSidebar);
});