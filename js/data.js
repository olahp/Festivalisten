(function() {
	"use strict";

	// List of festivals
	var festivals = [
		{
			"name": "by:Larm",
			"location": "Oslo",
			"date": ["February", "March"],
			"links": {
				"website": "http://www.bylarm.no/",
				"facebook": "https://www.facebook.com/bylarm"
			}
		},
		{
			"name": "Inferno",
			"location": "Oslo",
			"date": "April",
			"genre": "metal",
			"links": {
				"website": "http://www.infernofestival.net/",
				"facebook": "https://www.facebook.com/InfernoMetalFestival"
			}
		},
		{
			"name": "Maijazz",
			"location": "Stavanger",
			"date": "May",
			"genre": "jazz",
			"links": {
				"website": "http://www.maijazz.no/",
				"facebook": "https://www.facebook.com/maijazz"
			}
		}
	];

	// Export
	if (window) {
		window.festivals = festivals;
	}
})();
