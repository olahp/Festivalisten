(function() {
	"use strict";

	// List of festivals
	var festivals = [
		{
			"name": "Back in the Fields",
			"genre": "rock",
			"location": "Ålesund",
			"date": "August",
			"links": {
				"website": "http://www.bitf.no/",
				"facebook": "https://www.facebook.com/BackInTheFieldsRockFestival?hc_location=stream"
			}
		},
		{
			"name": "Bergenfest",
			"location": "Bergen",
			"date": "June",
			"links": {
				"website": "http://bergenfest.no/",
				"facebook": "https://www.facebook.com/bergenfest"
			}
		},
		{
			"name": "Blastfest",
			"genre": "metal",
			"location": "Bergen",
			"date": "February",
			"links": {
				"website": "http://www.blastfest.no/",
				"facebook": "https://www.facebook.com/blastfestival"
			}
		},
		{
			"name": "Bukta",
			"location": "Tromsø",
			"date": "July",
			"links": {
				"website": "http://bukta.no/",
				"facebook": "https://www.facebook.com/buktafestivalen"
			}
		},
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
			"name": "Canal Street",
			"location": "Arendal",
			"date": "July",
			"links": {
				"website": "http://www.canalstreet.no/",
				"facebook": "https://www.facebook.com/csarendal"
			}
		},
		{
			"name": "Eikerapen Roots Festival",
			"location": "Åserål",
			"date": "August",
			"links": {
				"website": "http://eikerapen.com/",
				"facebook": "https://www.facebook.com/eikerapenroots"
			}
		},
		{
			"name": "Hovefestivalen",
			"location": "Arendal",
			"date": ["June", "July"],
			"links": {
				"website": "http://www.hovefestival.com/",
				"facebook": "https://www.facebook.com/Hovefestivalen"
			}
		},
		{
			"name": "Ilios",
			"location": "Harstad",
			"date": ["January", "February"],
			"links": {
				"website": "http://www.ilios.no/"
			}
		},
		{
			"name": "Inferno",
			"genre": "metal",
			"location": "Oslo",
			"date": "April",
			"links": {
				"website": "http://www.infernofestival.net/",
				"facebook": "https://www.facebook.com/InfernoMetalFestival"
			}
		},
		{
			"name": "Jærnåttå",
			"location": "Bryne",
			"date": "May",
			"links": {
				"website": "http://www.jaerdagen.no/",
				"facebook": "https://www.facebook.com/jaerdagen"
			}
		},
		{
			"name": "Karmøygeddon",
			"genre": "metal",
			"location": "Haugesund",
			"date": "May",
			"links": {
				"website": "http://karmoygeddon.no/"
			}
		},
		{
			"name": "Landskappleiken",
			"genre": "folk",
			"location": "Geilo",
			"date": "June",
			"links": {
				"website": "http://www.landskappleiken.no/",
				"facebook": "https://www.facebook.com/Landskappleiken"
			}
		},
		{
			"name": "Maijazz",
			"genre": "jazz",
			"location": "Stavanger",
			"date": "May",
			"links": {
				"website": "http://www.maijazz.no/",
				"facebook": "https://www.facebook.com/maijazz"
			}
		},
		{
			"name": "Måkeskrik",
			"location": "Kristiansand",
			"date": "July",
			"links": {
				"website": "http://www.maakeskrik.no/",
				"facebook": "https://www.facebook.com/maakeskriket"
			}
		},
		{
			"name": "Månefestivalen",
			"location": "Østfold",
			"date": "July",
			"links": {
				"website": "http://www.maanefestivalen.no/",
				"facebook": "https://www.facebook.com/maanefestivalen"
			}
		},
		{
			"name": "Nattjazz",
			"genre": "jazz",
			"location": "Bergen",
			"date": "May",
			"links": {
				"website": "http://www.nattjazz.no/",
				"facebook": "https://www.facebook.com/nattjazz"
			}
		},
		{
			"name": "Notodden Bluesfestival",
			"genre": "blues",
			"location": "Notodden",
			"date": ["July", "August"],
			"links": {
				"website": "http://www.bluesfest.no/",
				"facebook": "https://www.facebook.com/pages/Notodden-Blues-Festival/124652855699"
			}
		},
		{
			"name": "Operafestukene",
			"genre": "opera",
			"location": "Kristiansund",
			"date": ["January", "February"],
			"links": {
				"website": "http://www.oik.no/",
				"facebook": "https://www.facebook.com/operaen.kristiansund"
			}
		},
		{
			"name": "Over Oslo",
			"location": "Oslo",
			"date": "June",
			"links": {
				"website": "http://overoslo.no/",
				"facebook": "https://www.facebook.com/OverOslo"
			}
		},
		{
			"name": "PolarJazz",
			"genre": "jazz",
			"location": "Svalbard",
			"date": "February",
			"links": {
				"website": "http://www.polarjazz.no/",
				"facebook": "https://www.facebook.com/Polarjazz"
			}
		},
		{
			"name": "Rjukan Rockfestival",
			"genre": "rock",
			"location": "Rjukan",
			"date": "June",
			"links": {
				"website": "http://www.rjukan-rockfestival.no/",
				"facebook": "https://www.facebook.com/Rjukanrock"
			}
		},
		{
			"name": "Rock Mot Rus",
			"genre": "rock",
			"location": "Andenes",
			"date": "April",
			"links": {
				"website": "http://rockmotrus.no",
				"facebook": "https://www.facebook.com/rockmotrus1"
			}
		},
		{
			"name": "Skånevik Bluesfestival",
			"genre": "blues",
			"location": "Skånevik",
			"date": "July",
			"links": {
				"website": "http://www.skaanevik-blues.com/"
			}
		},
		{
			"name": "Sonisphere",
			"genre": "metal",
			"location": "Oslo",
			"date": "June",
			"links": {
				"website": "http://sonispherefestivals.com/",
				"facebook": "https://www.facebook.com/sonispherefestival"
			}
		},
		{
			"name": "Spydeberg Rock",
			"genre": "rock",
			"links": {
				"website": "http://www.spydebergrock.no/"
			}
		},
		{
			"name": "Stavernfestivalen",
			"location": "Stavern",
			"date": "July",
			"links": {
				"website": "http://www.stavernfestivalen.no/",
				"facebook": "https://www.facebook.com/pages/Stavernfestivalen/194523477224"
			}
		},
		{
			"name": "Steinkjerfestivalen",
			"location": "Steinkjer",
			"date": "June",
			"links": {
				"website": "http://steinkjerfestivalen.no/"
			}
		},
		{
			"name": "Til Dovre Faller",
			"location": "Dombås",
			"date": "September",
			"links": {
				"facebook": "https://www.facebook.com/tildovrefaller"
			}
		},
		{
			"name": "Tons of Rock",
			"genre": "rock",
			"location": "Halden",
			"date": "June",
			"links": {
				"website": "http://tonsofrock.no/",
				"facebook": "https://www.facebook.com/TonsOfRockFestival"
			}
		},
		{
			"name": "Tradjazzweekend",
			"genre": "jazz",
			"location": "Stavanger",
			"date": ["January", "February"],
			"links": {
				"website": "http://www.tradjazzweekend.no/"
			}
		},
		{
			"name": "Trollrock",
			"genre": "rock",
			"location": "Beitostølen",
			"date": "July",
			"links": {
				"website": "http://www.trollrock.no/",
				"facebook": "https://www.facebook.com/pages/Trollrock/291258074229055"
			}
		},
		{
			"name": "Trondheim Calling",
			"location": "Trondheim",
			"date": ["January", "February"],
			"links": {
				"website": "http://www.trondheimcalling.no/",
				"facebook": "https://www.facebook.com/trondheimcalling"
			}
		},
		{
			"name": "Trondheim Metal Fest",
			"genre": "metal",
			"location": "Trondheim",
			"date": "March",
			"links": {
				"website": "http://trondheimmetalfest.no/",
				"facebook": "https://www.facebook.com/TrondheimMetalFest"
			}
		},
		{
			"name": "Trænafestivalen",
			"location": "Træna",
			"date": "July",
			"links": {
				"website": "http://www.trena.net/",
				"facebook": "https://www.facebook.com/Trenafestivalen"
			}
		},
		{
			"name": "Vinjerock",
			"location": "Jotunheimen",
			"date": "July",
			"links": {
				"website": "http://www.vinjerock.no/",
				"facebook": "https://www.facebook.com/vinjerock"
			}
		},
		{
			"name": "Vossa Jazz",
			"genre": "jazz",
			"location": "Voss",
			"date": "April",
			"links": {
				"website": "http://www.vossajazz.no/",
				"facebook": "https://www.facebook.com/vossajazz"
			}
		},
		{
			"name": "Øya Festival",
			"location": "Oslo",
			"date": "August",
			"links": {
				"website": "http://oyafestivalen.com/",
				"facebook": "https://www.facebook.com/oyafestivalen"
			}
		}
	];

	// Export
	if (window) {
		window.festivals = festivals;
	}
})();
