function menuShow(){

    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src ="img/img/img/menu-mobile_real.png";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src ="img/img/finally mobile/x-menu-mobile_real.png";
    }
}
