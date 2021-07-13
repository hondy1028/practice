'use strict'

$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 500
    }, 50000,"easeInOutQuint");
    return false;
});


function slideAnime(){
		$('.leftAnime').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				$(this).addClass("slideAnimeLeftRight"); 
				$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  
			}else{
				$(this).removeClass("slideAnimeLeftRight");
				$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
			}
		});	
	}
	
	
	$(window).scroll(function (){
		slideAnime();
	});


function FixedAnime() {
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){
			$('#header').addClass('fixed');
		}else{
			$('#header').removeClass('fixed');
		}
}

$(window).scroll(function () {
	FixedAnime();
});


var bar = new ProgressBar.Line(splash_text, {
	easing: 'easeInOut',
	duration: 1000,
	strokeWidth: 0.2,
	color: '#555',
	trailWidth: 0.2,
	trailColor: '#bbb',
	text: {   
	  style: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		padding: '0',
		margin: '-30px 0 0 0',
		transform:'translate(-50%,-50%)',
		'font-size':'1rem',
		color: '#fff',
	  },
	  autoStyleContainer: false 
	},
	step: function(state, bar) {
	  bar.setText(Math.round(bar.value() * 100) + ' %'); 
	}
  });
  
 
  bar.animate(1.0, function () {
	$("#splash").delay(500).fadeOut(800);
  });  
  
  
  