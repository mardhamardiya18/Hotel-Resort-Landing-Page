let menu = document.querySelector("#menu")
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

$(document).ready(function () {
    $('.nav-link').click(function () {
        $('.nav-link').removeClass("active");
        $(this).addClass("active");
    });
});

$(window).on("scroll", function (e) {
    if ($(window).scrollTop() > 70) {
        $(".header").addClass("show");
    } else {
        $(".header").removeClass("show");
    }
    e.preventDefault()
});
