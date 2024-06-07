function toggleMenu() {
    var menu = document.getElementById('popup-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

window.onclick = function(event) {
    var menu = document.getElementById('popup-menu');
    if (event.target !== menu && !menu.contains(event.target) && event.target.className !== 'menu-icon') {
        menu.style.display = 'none';
    }
}
