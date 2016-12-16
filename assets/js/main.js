(function($) {

	/*=====Main Slider=============*/

	$('.example-animation').DrSlider({
		showNavigation: false,
		transition: 'wave-right',
		showProgress: false,
		height: 650,
		width: 1340,
		duration: 3000,
		transitionSpeed: 800,
		controlBackgroundColor: 'transparent'
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

	/*===========Section Team=============*/

	var slider = $('.mis-stage').miSlider({
  
        slidesOnStage: 3,
        slidePosition: 'center',
        stageHeight: 600,
        slideStart: 'mid',
        slideScaling: 130,
        offsetV: 0,
        centerV: true,
        navButtons: false,
    });

})(jQuery);