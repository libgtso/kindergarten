$(document).ready(function() {
	$('.menu-show').click(function() {
		$('.menu-hidden').slideToggle(200);
		$('.menu-show').fadeOut(100);
		$('.menu-hide').fadeIn(100);
	});

	$('.menu-hide').click(function() {
		$('.menu-hidden').slideToggle(200);
		$('.menu-show').fadeIn(100);
		$('.menu-hide').fadeOut(100);
	});

	$('.adswindow-show').click(function() {
		$('.adswindow-link').css('overflow', 'visible');
		$('.adswindow-hide').fadeIn(200);
		$('.adswindow-show').fadeOut(50);
		$('.adswindow-hide').css('display', 'block');
	});
	$('.adswindow-hide').click(function() {
		$('.adswindow-link').css('overflow', 'hidden');
		$('.adswindow-show').fadeIn(200);
		$('.adswindow-hide').fadeOut(50);
	});

	$('.mainslider').owlCarousel({
		loop: true,
		items: 1,
		autoplay : true,
		mouseDrag: false
	});

	$('.accost-show').click(function(){
		$('.accost-list').slideToggle(200);
	});
	
	$('.newonsite-list__item-show').click(function() {
		$('.newonsite-list__item-hidden').slideToggle(500);
		$('.newonsite-list__item-show').fadeOut(100);
	});

	$(".accost-agree__doc").click(function() {
        $(".layer").css("display","block");
        $("html").css("overflow-y","hidden");
	});

	$('.cross').click(function() {
		$('.layer').css("display", "none");
        $("html").css("overflow-y","scroll");
	});

	var headerH = $('.header').height();
	$(document).on('scroll', function() {
		var documentScroll = $(this).scrollTop();
		if( documentScroll > headerH ) {
			$('.uplink').css('display', 'block');
		} else {
			$('.uplink').css('display', 'none');
		}
	});

	$('.uplink').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0}, 500);
	});

	$('.mainpopup-close, .mainpopup-away, .mainpopup-vote').click(function() {
		$('.popuplayer, .mainpopup, .mainpopup-vote').fadeOut(500);
		$.cookie('popup_cookie', '1', {
		expires: 1,
		path: '/'
		});
		});

		function show_popup() {
		if($.cookie('popup_cookie') != 1) {
		$('.popuplayer, .mainpopup, .mainpopup-vote').fadeIn(500);
		}
		}
		setTimeout(show_popup, 2000);

	$('#date2').DatePicker({
		flat: true,
		date: ['2008-07-31', '2008-07-28'],
		current: '2008-07-31',
		format: 'Y-m-d',
		calendars: 1,
		mode: 'multiple',
		onRender: function(date) {
			return {
				disabled: (date.valueOf() < now.valueOf()),
				className: date.valueOf() == now2.valueOf() ? 'datepickerSpecial' : false
			}
		},
		starts: 0
	});
});