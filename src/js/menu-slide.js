const menuIcon = document.querySelector('#menu-icon');
const menuClose = document.querySelector('#close-icon');
const menuSlide = document.querySelector('#menu-slide');

menuIcon.addEventListener('click', () => {
    anime({
        targets: menuSlide,
        right: 0,
        duration: 500,
        easing: 'easeInOutExpo'
    })
})

menuClose.addEventListener('click', () => {
    anime({
        targets: menuSlide,
        right: -300,
        duration: 500,
        easing: 'easeInOutExpo'
    })
})


