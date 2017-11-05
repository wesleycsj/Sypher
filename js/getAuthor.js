 (function () {
 	if (dependencies.indexOf('getAuthor') > -1) {
 		run();
 	}

 	function run() {
 		var request = $.ajax('posts/author.json')
 			.done(function () {
 				var authorData = JSON.parse(request.responseText);
 				var authorParagraphColletion = document.getElementsByClassName('sp-author-name');
 				var authorSubtitleColletion = document.getElementsByClassName('sp-author-subtitle');
 				var i = 0;
 				while (i < authorParagraphColletion.length) {
 					authorParagraphColletion[i].innerHTML = authorData.author;
 					authorSubtitleColletion[i].innerHTML = authorData.message;
 					i++;
 				}
 			})
 			.fail(function () {
 				console.error('Cannot reach the author info file or server.');
 			});
 	}
 })();
