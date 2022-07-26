document.addEventListener('DOMContentLoaded', () => {
    const mainSwiper = new Swiper('.main-swiper', {
        loop: true,
        containerModifierClass: 'gallery__slider-',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
    });
    const stocksSwiper = new Swiper('.stocks-swiper', {
        loop: true,
        containerModifierClass: 'gallery__slider-',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
    });

    const dropdownMenu = document.querySelector(".header-child__dropdown-menu");
    const closeButton = document.querySelector(".dropdown-menu__button-close");

    const closeOpenMenu = (e) => {
        if (dropdownMenu.classList.contains('menu_open') && !e.target.contains(dropdownMenu)) {
            dropdownMenu.classList.remove('menu_open')
            dropdownMenu.classList.add('menu_closed')
            document.removeEventListener( 'click', closeOpenMenu );
            e.stopPropagation()
        }
    }

    const OpenMenu = (e) => {
        document.addEventListener( 'click', closeOpenMenu);
        dropdownMenu.classList.remove('menu_closed');
        dropdownMenu.classList.add('menu_open');
        e.stopPropagation()
    }

    
    dropdownMenu.addEventListener('click', OpenMenu)
    dropdownMenu.addEventListener('touchend', OpenMenu)

    closeButton.addEventListener('click', closeOpenMenu)
    closeButton.addEventListener('touchend', closeOpenMenu)
});




