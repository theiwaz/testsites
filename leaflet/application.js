		var map = L.map('map').setView([51.505, -0.09], 13);

		var imageUrl = 'myoverlay2.png',
	    	imageBounds = [[53.429,8.470], [50.729, 1.878]];

	    	L.marker([52.081, 5.104]).addTo(map);

	     L.imageOverlay(imageUrl, imageBounds).addTo(map);

		// create the tile layer with correct attribution
		var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
		var osmAttrib='Map data © OpenStreetMap contributors';
		var osm = new L.TileLayer(osmUrl, {minZoom: 4, maxZoom: 20, attribution: osmAttrib});		

		// start the map in South-East England
		map.setView(new L.LatLng(52.103, 5.170),7);
		map.addLayer(osm);
