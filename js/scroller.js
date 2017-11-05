/*
 *	Sypher JS - A very simple minimalist static blog system.
 *	Author: WesleyCSJ - wesleyjr10@gmail.com
 */
(function () {
	if (dependencies.indexOf('scroller') > -1) {
 		run();
 	}
	function run() {
		var scroll = document.getElementsByClassName('footer-scrollTop')[0];
		scroll.addEventListener('click', function () {
			var windowY = window.scrollY;
			var scrollInterval = setInterval(function () {
				if (windowY > 0) {
					window.scrollTo(0, windowY);
					windowY = windowY - 15;
				} else {
					clearInterval(scrollInterval);
				}
			}, 1);
		});
	}
})();
