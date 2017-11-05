/*
 *	Sypher JS - A very simple minimalist static blog system.
 *	Author: WesleyCSJ - wesleyjr10@gmail.com
 */
(function () {
	if (dependencies.indexOf('paginator') > -1) {
		run();
	}

	function run() {
		'use strict';
		var Paginator = {
			nextPage: nextIndex,
			previousPage: previousIndex
		};
		window.Paginator = Paginator;
		var items = [],
			index = 0,
			step = 6;
		var ajax = $.ajax('posts/postlist.json')
			.done(function () {
				var parsed = JSON.parse(ajax.responseText);
				items = parsed;
				items = items.reverse();
				fill();
			})
			.fail(function () {
				console.error('Error: JSON file invalid. Please, verify file syntax');
			});
		//Initializing first fill
		//fill();

		function fill() {
			var ul = document.getElementsByClassName('sp-list-posts')[0];
			clear();
			if (items.length === 0) {
				var p = document.createElement('li');
				p.innerHTML = 'There are not posts yet';
				ul.appendChild(p);
			} else {
				var i = index,
					j = 0;
				while (j < step) {
					if (items[i]) {
						var li = document.createElement('li'),
							a = document.createElement('a');
						a.innerHTML = items[i].title;
						a.setAttribute('href', 'post.html?id=' + items[i].folder);
						li.appendChild(a);
						ul.appendChild(li);
					}
					i = i + 1;
					j = j + 1;
				}
			}
		}

		function nextIndex() {
			if ((items.length > step) && (index < (items.length - step))) {
				index = index + step;
				fill();
			}
		}

		function previousIndex() {
			if ((items.length > step) && (index > 0)) {
				index = index - step;
				fill();
			}
		}

		function clear() {
			var ul = document.getElementsByClassName('sp-list-posts')[0];
			while (ul.firstChild) {
				ul.removeChild(ul.firstChild);
			}
		}
	}
})();
