const menu = document.querySelector('#mobile-menu'); // Hamburger button
const menuLinks = document.querySelector('.navbar_menu'); // Navigation menu

menu.addEventListener('click', function () {
    this.classList.toggle('is-active'); // Toggle on the button itself
    menuLinks.classList.toggle('active'); // Toggle the menu visibility
});

document.addEventListener('click', function (event) {
    const isMenuOpen = menu.classList.contains('is-active');
    if (isMenuOpen && !menu.contains(event.target) && !menuLinks.contains(event.target)) {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
});

    menuLinks.addEventListener('click', function (event) {
        event.stopPropagation(); 
});
