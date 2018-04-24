jQuery(document).ready(function($) {

// Menu toggle
	$('#menu-main .menu-group ul').slideUp(0);
	$('#menu-main .menu-group h3').click(function() {
		var $self = $(this).siblings('ul');
		if ( $self.hasClass('menu-open') ) {
			$self.slideUp(400).removeClass('menu-open');
		} else {
			$('.menu-open').slideUp(400).removeClass('menu-open');
			$self.slideDown(400).addClass('menu-open');
		}
	});

// Sidebar nav
	// for each link, determine position of id
		// Get ids
		// get body offsets
		// assign to attr
		// On browser resize, recalc offsets
	// animate scroll to with offset 
	// once scrolled to id, the link hovers
$("#sidebar-nav a").click(function(e){
	e.preventDefault();
	var target = $("[name=" + this.href.split("#")[1] + "]").offset().top;
	var headerOffset = 120;
	$("body,html").animate({"scroll-top" : target - headerOffset}, 800);
});

// Scrolling functions
	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

	// Body BG Parallax
		$('body').css({
			'background-position-y' : '-' + (wScroll / 5) + 'px'
		});

	});

// Accordion up/down toggle
	$('.accordion-list dd').slideUp(0);
	$('.accordion-list dt').click(function() {
		$(this).toggleClass('accordion-open').next('dd').slideToggle(400);
	});


// Sticky Footer stop
		/*
	var docHeight = $(document).height();
	var winHeight = $(window).height();
	var footHeight = $('#footer').height();

	if ( ( docHeight - footHeight ) > winHeight ) {
		
		
		$('#sticky-foot').css({'position' : 'fixed'});

		var stickyStop = docHeight - footHeight - winHeight;
		
		$(window).scroll(function(){

			var wScroll = $(this).scrollTop();
			// Sticky message stop
				if ( wScroll > stickyStop ) {
					$('#sticky-foot').css({'position' : 'static'});
				} else {
					$('#sticky-foot').css({'position' : 'fixed'});
				}

		});

	}
		//*/


});