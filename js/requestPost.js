(function () {
	if (dependencies.indexOf('requestPost') > -1) {
 		run();
 	}
	function run() {
		$.urlParam = function (name) {
			var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
			return results[1] || 0;
		}
		//Instanciate showdown
		var converter = new showdown.Converter();
		converter.setOption('noHeaderId', true);
		//Making the request
		var request = $.ajax('posts/' + $.urlParam('id') + '/post.md')
			.done(function () {
				document.getElementsByClassName('sp-article')[0].innerHTML = converter.makeHtml(request.responseText);
				var title = document.querySelector('article > h1');
				document.title = title.innerHTML;
			})
			.fail(function () {
				var article = document.getElementsByClassName('sp-article')[0];
				var msg = document.createElement('h1');
				msg.innerHTML = 'Sorry, something is wrong. Post not available.';
				article.appendChild(msg);
				console.error('Cannot reach the file or server.');
			});
	}
})();
