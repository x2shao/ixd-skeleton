$(document).ready(() => {
	console.log("maps loaded");

	var map = new GMaps({
		el: '#map',
		lat: 32.8801,
		lng: -117.2340
    });
    
    map.addMarker({
        lat: 32.8801,
        lng: -117.2340,
        title: "You are here",
        icon: 'http://maps.google.com/mapfiles/ms/icons/'+ "green" +'.png'
    });
    map.addMarker({
        lat: 32.882464,
        lng: -117.233446,
        title: "destination"
    });
    map.drawRoute({
        origin: [32.8801, -117.2340],
        destination: [32.882464, -117.233446],
        travelMode: "walking",
        strokeColor: "#131540",
        strokeOpacity: 0.6,
        strokeWeight: 6
    });
})