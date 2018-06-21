var sliderIndex = {
		1:{img: 'slide1.jpg'},
		2:{img: 'slide2.jpg'},
		3:{img: 'slide3.jpg'},
		4:{img: 'slide4.jpg'},
		5:{img: 'slide5.jpg'}	
	}
window.onload = function(){
	for(var i =0; i< 100; i++){
		for(var key in sliderIndex){ $('.slider_main').append('<img src="img/'+sliderIndex[key].img+'">');}
	}

$('.left_button').on('click', function(){
	var slidePosition = $('.slider_main').position();
	$('.slider_main').css('left',(-(400-slidePosition.left)) +'px');
	console.log(-(400-slidePosition.left));
	});
$('.right_button').on('click', function(){
	var slidePosition = $('.slider_main').position();
	$('.slider_main').css('left',((400+slidePosition.left)) +'px');
		console.log(400+slidePosition.left);
	});

}

