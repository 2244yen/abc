(function($) {

	/*=====Main Slider=============*/

	$('.example-animation').DrSlider({
		'showNavigation': false,
		'transition': 'wave-right'
	});

	/*===========Section Projects=============*/

	$(".projects-slider").slick({
		dots: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		prevArrow: '',
		nextArrow: '<img src="assets/img/projects/more.png" alt="" class="more-btn">'
	});

	/*===========Section Clients=============*/

	$('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        customPaging: function(slider, i) {
            return '<span class="sprites-icons"></span>';
        },
    });

})(jQuery);