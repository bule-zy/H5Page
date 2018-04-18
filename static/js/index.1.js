$(function(){
	mySlide();
});

function mySlide() {
	$('.swiper-slide').each(function() {
		var _this = $(this);
		if($(this).hasClass('swiper-slide-active')) {
			_this.find('.img').animate({opacity:'1'},200,function(){
				_this.find('.img02').addClass('animated zoomInDown').animate({width:'11.4rem'},400,function(){
					_this.find('.img03').animate({opacity:"1"},300).addClass('animated shake');
				});
			});	
			_this.find('.img04').addClass('animated zoomInDown').animate({top:'2.8rem',opacity:'1'},400,function(){
				_this.find('.img08').animate({opacity:'1'},300,function(){
					_this.find('.img06').animate({opacity:'1'},200,function(){
						_this.find('.img07').animate({top:"3rem"},300,function(){
							_this.find('.img09-box').addClass('animated shake').animate({left:"0"},300,function(){
								_this.find('.img05').animate({opacity:'0'},100).animate({opacity:'1',top:'0'},100).addClass('animated tada');
							});
						});
					});
				});
			});
			_this.find('.img14-box').addClass('animated fadeInLeftBig').animate({opacity:'1'},300,function(){
				_this.find('.img14').animate({opacity:'0'},200).animate({opacity:'1'},200,function(){
					_this.find('.img15').animate({top:"6rem",opacity:'1'},400,function(){
						_this.find('.img17').addClass('animated fadeInLeftBig');
						_this.find('.img18').animate({opacity:"1"},5000);
						_this.find('.img20').addClass('animated fadeInRightBig');
					})
				})
				_this.find('.img25').animate({top:"7rem",opacity:"1"},500);
				_this.find('.img22').animate({top:"6rem",opacity:"1"},500);
			});	
			
			_this.find('.img30').animate({opacity:'1'},400,function(){
				_this.find('.img29').addClass('animated bounceIn').animate({opacity:"1"},200,function(){
					_this.find('.img27-box').animate({opacity:"1",bottom:'0'},300,function(){
						_this.find('.img28').addClass('animated shake').animate({opacity:"1",bottom:'0'},300);
					});
				});
				
			});
		}else{
			_this.find('.img').animate({opacity:'0'},0,function(){
				_this.find('.img02').removeClass('animated zoomInDown').animate({width:'0'},0,function(){
					_this.find('.img03').animate({opacity:"0"},0).removeClass('animated shake');
				});
			});	
		}
	})
}