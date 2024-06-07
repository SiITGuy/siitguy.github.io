function toggleMenu() {
    var menu = document.getElementById('side-menu');
    if (menu.style.width === '250px') {
        menu.style.width = '0';
    } else {
        menu.style.width = '250px';
    }
}

window.onclick = function(event) {
    var menu = document.getElementById('side-menu');
    var menuIcon = document.querySelector('.menu-container');
    if (event.target !== menu && event.target !== menuIcon && !menu.contains(event.target)) {
        menu.style.width = '0';
    }
}
