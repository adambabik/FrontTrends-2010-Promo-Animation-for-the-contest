var baseId = 'content';
var handler;
var Engine = {
	author: "Adam Babik (dreame4) - http://designfortress.com",
	init: function() {
		handler = $('#'+baseId);
		this.start();
		this.title();
		this.where();
		this.clearWhere();
		this.when();
	},
	
	start: function() { // time: 2300
		var baseFontSize = '30em';
		var num;
		var placeNumber = function() {
			var h1 = handler.find('h1').css({
				fontSize: baseFontSize
			});
			num = parseInt(h1.text());
			num--;
			h1.text(num).animate({
				fontSize: "0"
			}, 500, function() {
				if (num > 0) {
					placeNumber();
				} else if(num == 0) {
					changeBg();
					
					return;
				};
			});
		};
		
		var changeBg = function() {
			var filler = handler.find('div.filler').animate({
				opacity: 0
			}, 300);
		};
		
		handler.html('<div class="filler start_bg"><h1>3</h1></div>').find('h1').animate({
			fontSize: "1px"
		}, 500, function() {
			placeNumber();
		});
	},
	
	title: function() { // time: 3800
		var code = function() {
			clearBase();
			
			handler.html('<div class="inner_title"><h1 class="front">Front</h1></div>').find('h1').animate({
				top: 0
			}, 400, function() {
				animateBounce($(this));
				
				setTimeout(animateTrends, 300);
			});
		};
		
		var animateTrends = function() {
			handler.find('div.inner_title').append('<h1 class="trends">Trends</h1>').find('h1.trends').animate({
				top: "0em"
			}, 400, function() {				
				animateBounce($(this));
				
				setTimeout(animateConference, 300);
			});
		};
		
		var animateConference = function() {
			handler.find('div.inner_title').append('<h2 class="conference">Conference</h2>').find('h2').animate({
				top: "-0.5em"
			}, 400, function() {
				animateBounce($(this));
				
				setTimeout(clearTitle, 1500);
			})
		};
		
		var clearTitle = function() {
			handler.find('div.inner_title').addClass('scale_title');
			
			setTimeout(clearBase, 500);
		};
		
		var animateBounce = function(elem) {
			$(elem).animate({
				top: "-=10px",
			}, 100).animate({
				top: "+=20px"
			}, 100).animate({
				top: "-=10px"
			}, 100);
		};
		
		setTimeout(code, 2100);
	},
	
	where: function() { // 2600
		var base;
		var code = function() {
			clearBase();
			
			base = handler.append('<div class="inner_where"></div>').find('div.inner_where');
			
			base.append('<h2 class="where">Where?</h2>').find('h2.where').animate({
				left: '1em'
			}, 800, 'easeInOutElastic', function() {
				$(this).addClass("rotate_text");
				
				setTimeout(addWarsaw, 500);
			});
		};
		
		var addWarsaw = function() {
			base.append('<h2 class="warsaw">Warsaw</h2>').find('h2.warsaw').animate({
				left: '1em'
			}, 1200, 'easeInOutElastic', function() {
				var warsaw = $(this).addClass("bg_white");
				base.append('<h2 class="poland">Poland</h2>').find('h2.poland').css({
					top: warsaw.position().top,
					left: warsaw.position().left
				});
				
				base.find('h2.poland').animate({
					top: '+=0.8em'
				}, 600, 'easeInOutElastic');
			});
		};
		
		setTimeout(code, 6200);
	},
	
	clearWhere: function() { //1000
		var code = function() {
			var clearer = handler.append('<div class="clearer"></div>').find('div.clearer');
			
			clearer.animate({
				width: "100%"
			}, 500);
			
			handler.find('h2.where').animate({
				left: '12em'
			}, 500);
			
			setTimeout(clearBase, 400);
		};
		
		setTimeout(code, 10400);
	},
	
	when: function() {
		var code = function() {
			handler.append('<div class="inner-when"><div class="date-day"><div class="day">21</div><div class="day back">22</div></div><div class="month">October</div></div>');
			
			handler.find('div.inner-when').animate({
				top: '0'
			}, 1200, 'easeInOutElastic', function() {
				$(this).find('.date-day').addClass('rotated');
				
				setTimeout(function() {
					handler.find('.date-day').removeClass('rotated');
				}, 1400);
				
				setTimeout(function() {
					var copy = handler.find('div.date-day').append('<div class="copy">22</div>').find('div.copy');
					handler.find('div.back').hide();
					handler.find('div.day:not(.back)').animate({
						left: '40%'
					}, 600, 'easeOutBounce');
					copy.animate({
						left: '60%'
					}, 600, 'easeOutBounce');
				}, 2000);
				
				setTimeout(slogan, 2600);
			});
		};
		
		var slogan = function() {
			var inner = handler.find('div.inner-when').append('<div class="slogan-inner"><span class="slogan s_where">where</span> <span class="slogan s_javascript">javascript</span> <span class="slogan s_meets">meets</span> <span class="slogan s_html5">html5,</span> <span class="slogan s_css">css</span> <span class="slogan s_and">and</span> <span class="slogan s_usability">usability</span><br /><span class="slogan"><a href="http://front-trends.com">Find out more</a></div>');
			
			
			inner.find('span.slogan:eq(0)').animate({
				top: 0
			}, 300);
			
			inner.find('span.slogan:eq(1)').show(0).delay(200).animate({
				top: 0
			}, 300);
			
			inner.find('span.slogan:eq(2)').show(0).delay(400).animate({
				top: 0
			}, 300);
			
			inner.find('span.slogan:eq(3)').show(0).delay(600).animate({
				top: 0
			}, 300);
			
			inner.find('span.slogan:eq(4)').show(0).delay(800).animate({
				top: 0
			}, 300);
			
			inner.find('span.slogan:eq(5)').show(0).delay(1000).animate({
				top: 0
			}, 300);
			
			inner.find('span.slogan:eq(6)').show(0).delay(1200).animate({
				top: 0
			}, 300);
			
			inner.find('span.slogan:eq(7)').show(0).delay(1800).animate({
				top: 0
			}, 300);
			
			setTimeout(function() {
				handler.append('<footer><a rel="license" href="http://creativecommons.org/licenses/by-nd/3.0/"><img alt="Licencja Creative Commons" style="border-width:0" src="http://i.creativecommons.org/l/by-nd/3.0/80x15.png" /></a><span class="right"><a href="http://designfortress.com">author: Adam Babik (dreame4)</a></span></footer>');
			}, 2200);
		};
		
		setTimeout(code, 11100)
	}
}

function clearBase() {
	handler.children().remove();
}

jQuery(document).ready(function($) {
	Engine.init();
});
