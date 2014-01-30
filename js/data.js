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
			},
			"image": "backinthefields.png"
		},
		{
			"name": "Bergenfest",
			"location": "Bergen",
			"date": "June",
			"links": {
				"website": "http://bergenfest.no/",
				"facebook": "https://www.facebook.com/bergenfest"
			},
			"image": "bergenfest.png"
		},
		{
			"name": "Blastfest",
			"genre": "metal",
			"location": "Bergen",
			"date": "February",
			"links": {
				"website": "http://www.blastfest.no/",
				"facebook": "https://www.facebook.com/blastfestival"
			},
			"image": "blastfest.png"
		},
		{
			"name": "Bukta",
			"location": "Tromsø",
			"date": "July",
			"links": {
				"website": "http://bukta.no/",
				"facebook": "https://www.facebook.com/buktafestivalen"
			},
			"image": "bukta.png"
		},
		{
			"name": "by:Larm",
			"location": "Oslo",
			"date": ["February", "March"],
			"links": {
				"website": "http://www.bylarm.no/",
				"facebook": "https://www.facebook.com/bylarm"
			},
			"image": "bylarm.png"
		},
		{
			"name": "Canal Street",
			"location": "Arendal",
			"date": "July",
			"links": {
				"website": "http://www.canalstreet.no/",
				"facebook": "https://www.facebook.com/csarendal"
			},
			"image": "canalstreet.png"
		},
		{
			"name": "Eikerapen Roots Festival",
			"location": "Åserål",
			"date": "August",
			"links": {
				"website": "http://eikerapen.com/",
				"facebook": "https://www.facebook.com/eikerapenroots"
			},
			"image": "eikerapen.png"
		},
		{
			"name": "Hovefestivalen",
			"location": "Arendal",
			"date": ["June", "July"],
			"links": {
				"website": "http://www.hovefestival.com/",
				"facebook": "https://www.facebook.com/Hovefestivalen"
			},
			"image": "hove.jpg"
		},
		{
			"name": "Ilios",
			"location": "Harstad",
			"date": ["January", "February"],
			"links": {
				"website": "http://www.ilios.no/"
			},
			"image": "ilios.png"
		},
		{
			"name": "Inferno",
			"genre": "metal",
			"location": "Oslo",
			"date": "April",
			"links": {
				"website": "http://www.infernofestival.net/",
				"facebook": "https://www.facebook.com/InfernoMetalFestival"
			},
			"image": "inferno.jpg"
		},
		{
			"name": "Jærnåttå",
			"location": "Bryne",
			"date": "May",
			"links": {
				"website": "http://www.jaerdagen.no/",
				"facebook": "https://www.facebook.com/jaerdagen"
			},
			"image": "jaernatta.jpg"
		},
		{
			"name": "Karmøygeddon",
			"genre": "metal",
			"location": "Haugesund",
			"date": "May",
			"links": {
				"website": "http://karmoygeddon.no/"
			},
			"image": "karmoygeddon.png"
		},
		{
			"name": "Landskappleiken",
			"genre": "folk",
			"location": "Geilo",
			"date": "June",
			"links": {
				"website": "http://www.landskappleiken.no/",
				"facebook": "https://www.facebook.com/Landskappleiken"
			},
			"images": "landskappleiken.png"
		},
		{
			"name": "Maijazz",
			"genre": "jazz",
			"location": "Stavanger",
			"date": "May",
			"links": {
				"website": "http://www.maijazz.no/",
				"facebook": "https://www.facebook.com/maijazz"
			},
			"image": "maijazz.png"
		},
		{
			"name": "Måkeskrik",
			"location": "Kristiansand",
			"date": "July",
			"links": {
				"website": "http://www.maakeskrik.no/",
				"facebook": "https://www.facebook.com/maakeskriket"
			},
			"image": "maakeskrik.png"
		},
		{
			"name": "Månefestivalen",
			"location": "Østfold",
			"date": "July",
			"links": {
				"website": "http://www.maanefestivalen.no/",
				"facebook": "https://www.facebook.com/maanefestivalen"
			},
			"image": "maanefestivalen.png"
		},
		{
			"name": "Nattjazz",
			"genre": "jazz",
			"location": "Bergen",
			"date": "May",
			"links": {
				"website": "http://www.nattjazz.no/",
				"facebook": "https://www.facebook.com/nattjazz"
			},
			"image": "nattjazz.png"
		},
		{
			"name": "Notodden Bluesfestival",
			"genre": "blues",
			"location": "Notodden",
			"date": ["July", "August"],
			"links": {
				"website": "http://www.bluesfest.no/",
				"facebook": "https://www.facebook.com/pages/Notodden-Blues-Festival/124652855699"
			},
			"image": "notoddenbluesfestival.png"
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
			},
			"image": "overoslo.png"
		},
		{
			"name": "PolarJazz",
			"genre": "jazz",
			"location": "Svalbard",
			"date": "February",
			"links": {
				"website": "http://www.polarjazz.no/",
				"facebook": "https://www.facebook.com/Polarjazz"
			},
			"image": "polarjazz.png"
		},
		{
			"name": "Rjukan Rockfestival",
			"genre": "rock",
			"location": "Rjukan",
			"date": "June",
			"links": {
				"website": "http://www.rjukan-rockfestival.no/",
				"facebook": "https://www.facebook.com/Rjukanrock"
			},
			"image": "rjukanrockfestival.png"
		},
		{
			"name": "Rock Mot Rus",
			"genre": "rock",
			"location": "Andenes",
			"date": "April",
			"links": {
				"website": "http://rockmotrus.no",
				"facebook": "https://www.facebook.com/rockmotrus1"
			},
			"image": "rockmotrus.png"
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
			},
			"image": "sonisphere.png"
		},
		{
			"name": "Spydeberg Rock",
			"genre": "rock",
			"location": "Spydeberg",
			"date": "May",
			"links": {
				"website": "http://www.spydebergrock.no/",
				"facebook": "https://www.facebook.com/SpydebergRock"
			},
			"image": "spydebergrock.png"
		},
		{
			"name": "Stavernfestivalen",
			"location": "Stavern",
			"date": "July",
			"links": {
				"website": "http://www.stavernfestivalen.no/",
				"facebook": "https://www.facebook.com/pages/Stavernfestivalen/194523477224"
			},
			"image": "stavernfestivalen.png"
		},
		{
			"name": "Steinkjerfestivalen",
			"location": "Steinkjer",
			"date": "June",
			"links": {
				"website": "http://steinkjerfestivalen.no/"
			},
			"image": "steinkjerfestivalen.png"
		},
		{
			"name": "Til Dovre Faller",
			"location": "Dombås",
			"date": "September",
			"links": {
				"facebook": "https://www.facebook.com/tildovrefaller"
			},
			"image": "tildovrefaller.png"
		},
		{
			"name": "Tons of Rock",
			"genre": "rock",
			"location": "Halden",
			"date": "June",
			"links": {
				"website": "http://tonsofrock.no/",
				"facebook": "https://www.facebook.com/TonsOfRockFestival"
			},
			"image": "tonsofrock.jpeg"
		},
		{
			"name": "Tradjazzweekend",
			"genre": "jazz",
			"location": "Stavanger",
			"date": ["January", "February"],
			"links": {
				"website": "http://www.tradjazzweekend.no/"
			},
			"image": "tradjazz.png"
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
			},
			"image": "trondheimcalling.png"
		},
		{
			"name": "Trondheim Metal Fest",
			"genre": "metal",
			"location": "Trondheim",
			"date": "March",
			"links": {
				"website": "http://trondheimmetalfest.no/",
				"facebook": "https://www.facebook.com/TrondheimMetalFest"
			},
			"image": "trondheimmetalfest.jpg"
		},
		{
			"name": "Trænafestivalen",
			"location": "Træna",
			"date": "July",
			"links": {
				"website": "http://www.trena.net/",
				"facebook": "https://www.facebook.com/Trenafestivalen"
			},
			"image": "trenafestivalen.png"
		},
		{
			"name": "Vinjerock",
			"location": "Jotunheimen",
			"date": "July",
			"links": {
				"website": "http://www.vinjerock.no/",
				"facebook": "https://www.facebook.com/vinjerock"
			},
			"image": "vinjerock.png"
		},
		{
			"name": "Vossa Jazz",
			"genre": "jazz",
			"location": "Voss",
			"date": "April",
			"links": {
				"website": "http://www.vossajazz.no/",
				"facebook": "https://www.facebook.com/vossajazz"
			},
			"image": "vossajazz.png"
		},
		{
			"name": "Øya Festival",
			"location": "Oslo",
			"date": "August",
			"links": {
				"website": "http://oyafestivalen.com/",
				"facebook": "https://www.facebook.com/oyafestivalen"
			},
			"image": "oya.jpg"
		}
	];

	// Export
	if (window) {
		window.festivals = festivals;
	}
})();
