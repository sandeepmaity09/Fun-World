$(document).ready(function(){
	$(".container").on({
	mouseenter:function(){
		$(this).css("background-color","lightgrey");
	},
	mouseleave:function(){
		$(this).css("background-color","lightblue");
	},
	click:function(){
		$(this).css("background-color","lightpink");
	}
	});

	/*$('#draw-circle').click(function(){
		$('.math-drawing-item').addClass('circle').animate({left:'200px'});
	});

	$('#draw-rectangle').click(function(){
		$('.math-drawing-item').removeClass('circle').addClass('rectangle').animate({left:'200px'});
	});

	$('#draw-pentagon').click(function(){
		$('.math-drawing-item').removeClass('rectangle').addClass('pentagon').animate({left:'200px'});
	});*/

	$('#draw-circle').click(function(){
		$('#math-drawing-circle').toggleClass("circle");
	});

	$('#draw-rectangle').click(function(){
		$('#math-drawing-rectangle').toggleClass('rectangle');
	});

	$('#draw-pentagon').click(function(){
		$('#math-drawing-pentagon').toggleClass('pentagon');
	});

	$('#draw-heart').click(function(){
		$('#math-drawing-heart').toggleClass('heart');
	});

	$('#draw-hexagon').click(function(){
		$('#math-drawing-hexagon').toggleClass('hexagon');
	});

	/*
	$('#draw-circle').click(function(){
		$($('#math-drawing-item').attr('class')).removeClass();
		$('#math-drawing-item').addClass("circle");
	});

	$('#draw-rectangle').click(function(){
		$($('#math-drawing-item').attr('class')).removeClass();
		$('#math-drawing-item').addClass('rectangle');
	});
	*/


});