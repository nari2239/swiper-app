$(function() {
	setInterval(function(){
		$('#fadein-button').click(function() {
			$('#fadein-modal').fadeIn();
		});

		$('#fadeout-button').click(function() {
			$('#fadein-modal').fadeOut();
		});
	}, 1000);

});