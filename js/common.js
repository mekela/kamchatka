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

	$('.gallery_slider ul').bxSlider({
	    slideWidth: 313,
	    minSlides: 1,
	    maxSlides: 20,
	    slideMargin: 7,
	    pager: false
	  });

	//wow
	new WOW().init();

	//show hide route
	// $( ".routes_item dt" ).click(function() {
	//   $( this ).next().slideToggle();
	// });

	//form item
	$( ".js-order_btn" ).click(function() {
	   $(".js-hidden-tour").val($(this).attr('data-decription'));
	});
	
	//timer
	var countdown = new Countdown({
		selector: '#timer',
		msgBefore: "Скоро будет акция",
		msgAfter: "Акция закончилась!",
		msgPattern: "<span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>",
		dateStart    : new Date(),
     	dateEnd      : new Date('2016/02/14 10:54:00'),
		onStart: function() {
			//console.log('Акция!');
		},
		onEnd: function() {
			//console.log('Кончилася!');
		}
	});

});

//fixed header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(".head_menu").addClass("fixed");
    } else {
        $(".head_menu").removeClass("fixed");
    }
});