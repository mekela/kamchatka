$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//bxslider
	$('.head_slider ul').bxSlider();

	$('.partners_slider ul').bxSlider({
	    slideWidth: 150,
	    minSlides: 1,
	    maxSlides: 20,
	    slideMargin: 0,
	    pager: false
	  });
});