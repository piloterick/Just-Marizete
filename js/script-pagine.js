function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icona-menu').src = "../sources/images/menu-list.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icona-menu').src = "../sources/images/close-menu.png";
    }
}