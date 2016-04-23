/* code is pretty jank, just a concept */
/* transition out of animation state? */
$(document).ready(function() {
	var $toggle = $('button');
	var $header = $('header');
	
	$toggle.on('click', function() {
		$header.toggleClass('is-toggled');
	})
});