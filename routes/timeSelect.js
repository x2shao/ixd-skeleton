var dt = new Date();
/*
 * GET home page.
 */

exports.view = function(req, res){
	res.render('timeSelect', {
		'currentTime':( ("0"+dt.getHours()).slice(-2) + ":" +("0"+dt.getMinutes()).slice(-2))
	});
};
