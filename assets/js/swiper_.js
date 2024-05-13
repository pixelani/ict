var swiper = new Swiper(".mySwiperN", {
	centeredSlides: false,
	slidesPerView: 1,
	loop: true,
	speed: 500,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
		clickable: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: { delay: 3000, disableOnInteraction: false },
});
