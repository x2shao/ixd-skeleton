$(document).ready(() => {
	console.log("maps loaded");

	var map = new GMaps({
		el: '#map',
		lat: 32.8801,
		lng: -117.2340
	});
})