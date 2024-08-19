const show = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

show.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});
