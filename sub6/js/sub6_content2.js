window.onload = function () {
	var container = document.getElementById('head');
	var options = {
		center: new daum.maps.LatLng(37.5762378411838, 126.89866184232774),
		level: 2,
	};
	var map = new daum.maps.Map(container, options);
	var mapTypeControl = new daum.maps.MapTypeControl();
	map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);
	var zoomControl = new daum.maps.ZoomControl();
	map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
	var markerPosition = new daum.maps.LatLng(
		37.5762378411838,
		126.89866184232774
	);
	var marker = new daum.maps.Marker({
		position: markerPosition,
	});
	marker.setMap(map);
	var overlay = new daum.maps.CustomOverlay({
		map: map,
		position: marker.getPosition(),
	});

	//두번째 맵

	var container2 = document.getElementById('design');
	var options2 = {
		center: new daum.maps.LatLng(37.583697921916794, 126.9885090269862),
		level: 2,
	};
	var map2 = new daum.maps.Map(container2, options2);
	var mapTypeControl2 = new daum.maps.MapTypeControl();
	map2.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPRIGHT);
	var zoomControl2 = new daum.maps.ZoomControl();
	map2.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);
	var markerPosition2 = new daum.maps.LatLng(
		37.583697921916794,
		126.9885090269862
	);
	var marker2 = new daum.maps.Marker({
		position: markerPosition2,
	});
	marker2.setMap(map2);
	var overlay2 = new daum.maps.CustomOverlay({
		map: map2,
		position: marker2.getPosition(),
	});
};
