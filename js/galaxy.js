$(function () {
	$('[data-action="rotate_1"]').each(function () {
		var $item = $(this),
			$inner = $('<div class="inner">').appendTo($item),
			$dot = $('<div class="dot"><p>СНИМУ В КИНО</p>').appendTo($item),
			dims = {
				W: this.clientWidth,
				H: this.clientHeight
			},
			center = {
				X: dims.W / 2,
				Y: dims.H / 2
			},
			ratio = dims.W / dims.H,
			rotate = $item.data('rotate'),
			angle = 0,
			start = 7,
			time = [20, 5],
			interval = time[0],
			process;
			$dot
				.on('mouseenter', function () {
					interval = time[1];
					clearTimeout(process);
				})
				.on('mouseleave', function () {
					interval = time[0];
					animation();
				});
			$dot
				.on('click', function () {
					$(".ellipse-6 .dot").toggleClass("open");
					setTimeout( 'location="http://advance-club.ru/chumy_b_kuho/";', 500 );
				})
		if (rotate) {
			rotate = rotate.split('*');

			if (rotate[1] !== undefined) {
				angle = Math.PI * parseInt(rotate[0]) / 180;
				$inner.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			} else {
				$item.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			}
		}

		animation();

		function animation() {
			var x = center.X * Math.sin(start),
				y = center.Y * Math.cos(start),
				X = x * Math.cos(angle) - y * Math.sin(angle),
				Y = x * Math.sin(angle) + y * Math.cos(angle);

			$dot.css({
				top: center.Y + Y,
				left: center.X + X
			});
			start += .014;

			process = setTimeout(animation, interval);
		}
	});
});


$(function () {
	$('[data-action="rotate_2"]').each(function () {
		var $item = $(this),
			$inner = $('<div class="inner">').appendTo($item),
			$dot = $('<div class="dot"><p>дизайн</p>').appendTo($item),
			dims = {
				W: this.clientWidth,
				H: this.clientHeight
			},
			center = {
				X: dims.W / 2,
				Y: dims.H / 2
			},
			ratio = dims.W / dims.H,
			rotate = $item.data('rotate'),
			angle = 0,
			start = 32,
			time = [20, 5],
			interval = time[0],
			process;
			$dot
				.on('mouseenter', function () {
					interval = time[1];
					clearTimeout(process);
				})
				.on('mouseleave', function () {
					interval = time[0];
					animation();
				});
			$dot
				.on('click', function () {
					$(".ellipse-5 .dot").toggleClass("open");
					setTimeout( 'location="arhive.html";', 500 );
				})
			if (rotate) {
			rotate = rotate.split('*');
			if (rotate[1] !== undefined) {
				angle = Math.PI * parseInt(rotate[0]) / 180;
				$inner.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			} else {
				$item.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			}
		}
		animation();
		function animation() {
			var x = center.X * Math.sin(start),
				y = center.Y * Math.cos(start),
				X = x * Math.cos(angle) - y * Math.sin(angle),
				Y = x * Math.sin(angle) + y * Math.cos(angle);
			$dot.css({
				top: center.Y + Y,
				left: center.X + X
			});
			start += .019;
			process = setTimeout(animation, interval);
		}
	});
});

$(function () {
	$('[data-action="rotate_3"]').each(function () {
		var $item = $(this),
			$inner = $('<div class="inner">').appendTo($item),
			$dot = $('<div class="dot"><p>о лейбле</p>').appendTo($item),
			dims = {
				W: this.clientWidth,
				H: this.clientHeight
			},
			center = {
				X: dims.W / 2,
				Y: dims.H / 2
			},
			ratio = dims.W / dims.H,
			rotate = $item.data('rotate'),
			angle = 0,
			start = 56,
			time = [20, 5],
			interval = time[0],
			process;
			$dot
				.on('mouseenter', function () {
					interval = time[1];
					clearTimeout(process);
				})
				.on('mouseleave', function () {
					interval = time[0];
					animation();
				});
			$dot
				.on('click', function () {
					$(".ellipse-4 .dot").toggleClass("open");
					setTimeout( 'location="arhive.html";', 500 );
				})
			if (rotate) {
			rotate = rotate.split('*');
			if (rotate[1] !== undefined) {
				angle = Math.PI * parseInt(rotate[0]) / 180;
				$inner.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			} else {
				$item.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			}
		}
		animation();
		function animation() {
			var x = center.X * Math.sin(start),
				y = center.Y * Math.cos(start),
				X = x * Math.cos(angle) - y * Math.sin(angle),
				Y = x * Math.sin(angle) + y * Math.cos(angle);
			$dot.css({
				top: center.Y + Y,
				left: center.X + X
			});
			start += .01;
			process = setTimeout(animation, interval);
		}
	});
});

$(function () {
	$('[data-action="rotate_4"]').each(function () {
		var $item = $(this),
			$inner = $('<div class="inner">').appendTo($item),
			$dot = $('<div class="dot" id="social"><p>соцсети</p>').appendTo($item),
			dims = {
				W: this.clientWidth,
				H: this.clientHeight
			},
			center = {
				X: dims.W / 2,
				Y: dims.H / 2
			},
			ratio = dims.W / dims.H,
			rotate = $item.data('rotate'),
			angle = 0,
			start = 41,
			time = [20, 5],
			interval = time[0],
			process;
			$dot
				.on('mouseenter', function () {
					interval = time[1];
					clearTimeout(process);
				})
				.on('mouseleave', function () {
					interval = time[0];
					animation();
				});
			$dot
				.on('click', function () {
					$(".galaxy").toggleClass("open_social");
					$(".social-icons").toggleClass("open_social");
					$("i.fa.fa-times").toggleClass("open_social");
				})
				$(".fa-times").click(function () {
					$("i.fa.fa-times").toggleClass("open_social");
					$(".social-icons").toggleClass("open_social");	
					$(".galaxy").toggleClass("open_social");
				});
			if (rotate) {
			rotate = rotate.split('*');
			if (rotate[1] !== undefined) {
				angle = Math.PI * parseInt(rotate[0]) / 180;
				$inner.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			} else {
				$item.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			}
		}
		animation();
		function animation() {
			var x = center.X * Math.sin(start),
				y = center.Y * Math.cos(start),
				X = x * Math.cos(angle) - y * Math.sin(angle),
				Y = x * Math.sin(angle) + y * Math.cos(angle);
			$dot.css({
				top: center.Y + Y,
				left: center.X + X
			});
			start += .005;
			process = setTimeout(animation, interval);
		}
	});
});

$(function () {
	$('[data-action="rotate_5"]').each(function () {
		var $item = $(this),
			$inner = $('<div class="inner">').appendTo($item),
			$dot = $('<div class="dot"><p>музыка</p>').appendTo($item),
			dims = {
				W: this.clientWidth,
				H: this.clientHeight
			},
			center = {
				X: dims.W / 2,
				Y: dims.H / 2
			},
			ratio = dims.W / dims.H,
			rotate = $item.data('rotate'),
			angle = 0,
			start = 68,
			time = [20, 5],
			interval = time[0],
			process;
			$dot
				.on('mouseenter', function () {
					interval = time[1];
					clearTimeout(process);
				})
				.on('mouseleave', function () {
					interval = time[0];
					animation();
				});
			$dot
				.on('click', function () {
					$(".ellipse-2 .dot").toggleClass("open");
					setTimeout( 'location="arhive.html";', 500 );
				})
			if (rotate) {
			rotate = rotate.split('*');
			if (rotate[1] !== undefined) {
				angle = Math.PI * parseInt(rotate[0]) / 180;
				$inner.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			} else {
				$item.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			}
		}
		animation();
		function animation() {
			var x = center.X * Math.sin(start),
				y = center.Y * Math.cos(start),
				X = x * Math.cos(angle) - y * Math.sin(angle),
				Y = x * Math.sin(angle) + y * Math.cos(angle);
			$dot.css({
				top: center.Y + Y,
				left: center.X + X
			});
			start += .017;
			process = setTimeout(animation, interval);
		}
	});
});

$(function () {
	$('[data-action="rotate_6"]').each(function () {
		var $item = $(this),
			$inner = $('<div class="inner">').appendTo($item),
			$dot = $('<div class="dot"><p>архив</p>').appendTo($item),
			dims = {
				W: this.clientWidth,
				H: this.clientHeight
			},
			center = {
				X: dims.W / 2,
				Y: dims.H / 2
			},
			ratio = dims.W / dims.H,
			rotate = $item.data('rotate'),
			angle = 0,
			start = 45,
			time = [20, 5],
			interval = time[0],
			process;
			$dot
				.on('mouseenter', function () {
					interval = time[1];
					clearTimeout(process);
				})
				.on('mouseleave', function () {
					interval = time[0];
					animation();
				});
			$dot
				.on('click', function () {
					$(".ellipse-1 .dot").toggleClass("open");
					setTimeout( 'location="arhive.html";', 500 );
				})
			if (rotate) {
			rotate = rotate.split('*');
			if (rotate[1] !== undefined) {
				angle = Math.PI * parseInt(rotate[0]) / 180;
				$inner.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			} else {
				$item.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			}
		}
		animation();
		function animation() {
			var x = center.X * Math.sin(start),
				y = center.Y * Math.cos(start),
				X = x * Math.cos(angle) - y * Math.sin(angle),
				Y = x * Math.sin(angle) + y * Math.cos(angle);
			$dot.css({
				top: center.Y + Y,
				left: center.X + X
			});
			start += .013;
			process = setTimeout(animation, interval);
		}
	});
});
