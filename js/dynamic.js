$(document).ready(function() {
	$('.lb .share > div, .rb .sale div h5 em, .catalog > div > div h5 em, .crb .product .info .options h5 em, .crb .tabs ul').append('<span></span>');
	$('.popup').append('<button class="close"></button>');
	$('.slider').slides({
		pagination: true,
		generateNextPrev: false,
		container: 'container',
		effect: 'slide',
		slideSpeed: 250,
		play: 7500,
		pause: 2500
	});
	$('.rb .sale > div').slides({
		pagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 250,
		play: 10000,
		pause: 2500
	});
	$('.crb .tabs .form h4 a').click(function() {
		$(this).parents('.form').find('.more').slideToggle(0);
		return false;
	});
	$('.lb .nav.drop h3').click(function() {
		$(this).parent().children('ul').slideToggle(0);
		$(this).parent().toggleClass('active');
		return false;
	});
	$('.lb .filter > div h5').click(function() {
		$(this).parent().find('ul div').slideToggle(0);
		$(this).toggleClass('active');
		return false;
	});
	$('.rb .sort ul li:first-child').addClass('active');
	$('.rb .sort ul li a').click(function() {
		$(this).parents('ul').find('li').removeClass('active');
		$(this).parents('li').addClass('active');
		return false;
	});
	$('select').selectbox();
	$('input[type="radio"], input[type="checkbox"]').uniform();
	$('.range').slider({
		min: 0,
		max: 60000,
		values: [5000,30000],
		range: true,
		step: 1000,
		stop: function(event, ui) {
			$('input.min').val($('.range').slider('values',0));
			$('input.max').val($('.range').slider('values',1));
		},
		slide: function(event, ui){
			$('.min').val($('.range').slider('values',0));
			$('.max').val($('.range').slider('values',1));
		}
	});
	$('input.min').change(function(){
		var value1=$('input.min').val();
		var value2=$('input.max').val();
		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$('input.min').val(value1);
		}
		$('.range').slider('values',0,value1);	
	});
	$('input.max').change(function(){
		var value1=$('input.min').val();
		var value2=$('input.max').val();
		if (value2 > 60000) { value2 = 60000; $('input.max').val(60000)}
		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$('input.max').val(value2);
		}
		$('.range').slider('values',1,value2);
	});
	$('.minus').click(function () {
		var $input = $(this).parents('li').find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
    $('.plus').click(function () {
		var $input = $(this).parents('li').find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
	$('.articles > div').has('img').addClass('photo');
	var gallery = $('.crb .product .gallery .main img');
	$('.crb .product .gallery .preview li a').click(function () {
		gallery.hide();
		gallery.filter(this.hash).stop(true, true).show(0);
		$('.crb .product .gallery .preview li').removeClass('active');
		$(this).parent().addClass('active');
		return false;
	}).filter(':first').click();
	var tabs = $('.crb .tabs > div > div');
	$('.crb .tabs ul li a').click(function () {
		tabs.hide();
		tabs.filter(this.hash).stop(true, true).show(0);
		$('.crb .tabs ul li').removeClass('active');
		$(this).parent().addClass('active');
		return false;
	}).filter(':first').click();
	$('input').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('.panel > div > ul li a.enter').click(function() {
		$('.popup.enter, .fade').fadeIn(150);
		return false;
	});
	$('.panel > div > ul li a.registration').click(function() {
		$('.popup.registration, .fade').fadeIn(150);
		return false;
	});
	$('.popup button.close').click(function() {
		$(this).parent().fadeOut(150);
		$('.fade').fadeOut(150);
		return false;
	});
	$('.fade').click(function() {
		$('.fade, .popup').fadeOut(150);
		return false;
	});
	$(this).keydown(function(eventObject){
        if (eventObject.which == 27)
        $('.popup, .fade').fadeOut(150);
    });
	$('.rb .popular ul:last-child, .articles > div:last-child, .crb .delivery ul li:last-child, .crb .similar ul:last-child').css({'padding-bottom': '0', 'margin-bottom': '0', 'background': 'none'});
	$('.rb > table th:last-child, .crb .tabs table.compare th:last-child').css({'border-right': '1px solid #e9e9e9'});
	$('.rb > table th:last-child span').css({'padding-right': '19px'});
	$('.crb .tabs table.compare tr:last-child, .crb .step2 .view .info p:last-child, .crb .step3 .form .info p:last-child, .crb .step3 .description > p:last-child').css({'background': 'none'});
	$('.footer .info > ul > li:last-child').css({'float': 'right', 'width': '155px', 'margin-left': '0'});
});