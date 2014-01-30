(function() {
	"use strict";

	// List of festivals
	var festivals = [
		{
			"name": "1001 Watt",
			"genre": "metal",
			"location": "Skien",
			"date": "October",
			"links": {
				"website": "http://www.1001watt.net/"
			}
		},
		{
			"name": "2xH Festivalen",
			"genre": "hiphop",
			"location": "Trondheim",
			"date": "April",
			"links": {
				"website": "http://www.2xh.no/"
			}
		},
		{
			"name": "Afrikan History Week",
			"genre": "world",
			"location": "Oslo",
			"date": "October",
			"links": {
				"website": "http://www.afrikanhistoryweek.com/"
			}
		},
		{
			"name": "All Ears",
			"location": "Oslo",
			"date": "January",
			"links": {
				"website": "http://www.all-ears.no/"
			}
		},
		{
			"name": "Alta Soul & Blues Festival",
			"genre": "blues",
			"location": "Alta",
			"date": "June",
			"links": {
				"website": "http://altasoulogblues.no/"
			},
			"image": "altasoulandblues.png"
		},
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
			"name": "AnJazz",
			"genre": "jazz",
			"location": "Hamar",
			"date": "May",
			"links": {
				"website": "http://anjazz.no/"
			}
		},
		{
			"name": "Arctic Trombone Festival",
			"genre": "jazz",
			"location": "Tromsø",
			"date": "October",
			"links": {
				"website": "http://www.atlf.no/"
			}
		},
		{
			"name": "Aronnesrocken",
			"genre": "rock",
			"location": "Alta",
			"date": "August",
			"links": {
				"website": "http://www.aronnesrocken.no/"
			}
		},
		{
			"name": "Atlanterhavsrock",
			"genre": "rock",
			"location": "Averøy",
			"date": "June",
			"links": {
				"website": "http://www.atlanterhavsrock.com/"
			}
		},
		{
			"name": "Audunbakkenfestivalen",
			"location": "Skarnes",
			"date": "August",
			"links": {
				"website": "http://www.audunbakken.com/"
			}
		},
		{
			"name": "Backbeat",
			"location": "Kopervik",
			"date": "June",
			"links": {
				"website": "http://www.backbeat.no/"
			}
		},
		{
			"name": "Bakgården",
			"location": "Harstad",
			"date": "August",
			"links": {
				"website": "http://www.bakgaarden.no/"
			}
		},
		{
			"name": "Balejazz",
			"genre": "jazz",
			"location": "Balestrand",
			"date": "May",
			"links": {
				"website": "http://www.balejazz.no/"
			}
		},
		{
			"name": "Barentsjazz",
			"genre": "jazz",
			"location": "Tromsø",
			"date": "November",
			"links": {
				"website": "http://www.barentsjazz.no/"
			}
		},
		{
			"name": "Barents Spektakel",
			"location": "Kirkenes",
			"date": "February",
			"links": {
				"website": "http://www.barentsspektakel.no/"
			}
		},
		{
			"name": "Barokkfest",
			"location": "Trondheim",
			"date": "February",
			"links": {
				"website": "http://www.tidligmusikksenteret.no/barokkfest/"
			}
		},
		{
			"name": "Bergen Reggae Festival",
			"genre": "reggae",
			"location": "Bergen",
			"date": "November",
			"links": {
				"website": "http://www.bergenreggaefestival.no/"
			}
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
			"name": "Bjørkelangen Musikkfestival",
			"location": "Bjørkelangen",
			"date": ["August", "September"],
			"links": {
				"website": "http://www.bjorkelangen-musikkfestival.com/"
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
			},
			"image": "blastfest.png"
		},
		{
			"name": "Blow Out",
			"genre": "jazz",
			"location": "Oslo",
			"date": "August",
			"links": {
				"website": "http://blowoutoslo.blogspot.no/"
			}
		},
		{
			"name": "Blues i Vintermørket",
			"genre": "blues",
			"location": "Vardø",
			"date": "November",
			"links": {
				"website": "http://www.bluesivintermorket.no/"
			}
		},
		{
			"name": "Blues in Hell",
			"genre": "blues",
			"location": "Stjørdal",
			"date": "September",
			"links": {
				"website": "http://www.bluesinhell.no/"
			}
		},
		{
			"name": "Bluescamp",
			"genre": "blues",
			"location": "Fredrikstad",
			"date": "June",
			"links": {
				"website": "http://www.bluescamp.no/"
			}
		},
		{
			"name": "Blåe Tonar Under Breen",
			"location": "Jostedal",
			"date": "September",
			"links": {
				"website": "http://www.blaatonar.no/"
			}
		},
		{
			"name": "Blåfrostfestivalen",
			"location": "Rognan",
			"date": "February",
			"links": {
				"website": "http://www.blaafrost.no/"
			}
		},
		{
			"name": "Bob Dylan Festival",
			"genre": "Bob Dylan",
			"location": "Beitostølen",
			"date": "September",
			"links": {
				"website": "http://www.dylanfestival.com/"
			}
		},
		{
			"name": "Bodø Internasjonale Orgelfestival",
			"genre": "classical",
			"location": "Bodø",
			"date": "April",
			"links": {
				"website": "http://www.biof.no/"
			}
		},
		{
			"name": "Bodø Jazz Open",
			"genre": "jazz",
			"location": "Bodø",
			"date": "January",
			"links": {
				"website": "http://www.bodojazzopen.no/"
			}
		},
		{
			"name": "Borealisfestival",
			"location": "Bergen",
			"date": "March",
			"links": {
				"website": "http://www.borealisfestival.no/"
			}
		},
		{
			"name": "Botnfestivalen",
			"location": "Sandnessjøen",
			"date": "July",
			"links": {
				"website": "http://www.botnfestivalen.com/"
			}
		},
		{
			"name": "BrassWind-festivalen",
			"location": "Bergen",
			"date": "September",
			"links": {
				"website": "http://mangermusikklag.com/brasswind/"
			},
			"image": "brasswind.jpg"
		},
		{
			"name": "Brekstad Kulturfestival",
			"location": "Brekstad",
			"date": "June",
			"links": {
				"website": "http://www.brekstadkulturfestival.no/"
			}
		},
		{
			"name": "Brynerocken",
			"genre": "rock",
			"location": "Bryne",
			"date": "September",
			"links": {
				"website": "http://www.brynerocken.no/"
			}
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
			"name": "Cellolyd i Lofoten",
			"location": "Sørvangen",
			"date": "August",
			"links": {
				"website": "http://www.cellolyd.com/"
			}
		},
		{
			"name": "CODA Oslo International Dance Festival",
			"genre": "dance",
			"location": "Oslo",
			"date": "October",
			"links": {
				"website": "http://www.codadancefest.no/"
			}
		},
		{
			"name": "Codstock",
			"location": "Henningsvær",
			"date": "June",
			"links": {
				"website": "http://www.codstock.no/"
			}
		},
		{
			"name": "Country Festivalen i Skjåk",
			"genre": "country",
			"location": "Skjåk",
			"date": "June",
			"links": {
				"website": "http://www.countrynorway.com/"
			}
		},
		{
			"name": "Chrisfestivalen",
			"location": "Kjøllefjord",
			"date": "June",
			"links": {
				"website": "http://chrisfestivalen.no/"
			}
		},
		{
			"name": "Dalane Blues Festival",
			"genre": "blues",
			"location": "Hauge i Dalane",
			"date": "June",
			"links": {
				"website": "http://www.dalaneblues.com/"
			}
		},
		{
			"name": "Dansefestivalen i Sel",
			"genre": "dance",
			"location": "Sel",
			"date": "July",
			"links": {
				"website": "http://www.dansefestivalen.no/"
			}
		},
		{
			"name": "Dark Season",
			"genre": "jazz",
			"location": "Kristiansand",
			"date": "October",
			"links": {
				"website": "http://www.darkseason.com/"
			}
		},
		{
			"name": "Dark Season Blues",
			"genre": "blues",
			"location": "Longyearbyen",
			"date": "October",
			"links": {
				"website": "http://www.svalbardblues.com/"
			}
		},
		{
			"name": "Domkirkefestivalen",
			"location": "Tønsberg",
			"date": "December",
			"links": {
				"website": "http://domkirkefestivalen.no/"
			}
		},
		{
			"name": "Drammen Elvefestival",
			"location": "Drammen",
			"date": "August",
			"links": {
				"website": "http://www.drammen-elvefestival.no/"
			}
		},
		{
			"name": "Drammen Sacred Music Festival",
			"location": "Drammen",
			"date": "September",
			"links": {
				"website": "http://www.drammensacred.no/"
			}
		},
		{
			"name": "Drøbak Havneblues",
			"genre": "blues",
			"location": "Drøbak",
			"date": "July",
			"links": {
				"website": "http://www.drobakblues.no/"
			}
		},
		{
			"name": "Døgnvill",
			"location": "Oslo",
			"date": "August",
			"links": {
				"website": "http://www.dognvill.no/"
			}
		},
		{
			"name": "DølaJazz",
			"genre": "jazz",
			"location": "Lillehammer",
			"date": "October",
			"links": {
				"website": "http://www.dolajazz.no/"
			}
		},
		{
			"name": "Egersund Visefestival",
			"location": "Egersund",
			"date": "July",
			"links": {
				"website": "http://www.egersundvisefestival.no/"
			}
		},
		{
			"name": "Eggstockfestivalen",
			"location": "Bergen",
			"date": "June",
			"links": {
				"website": "http://www.eggstock.no/"
			}
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
			"name": "Ekko",
			"genre": "electronic",
			"location": "Bergen",
			"date": ["October", "November"],
			"links": {
				"website": "http://ekko.no/"
			}
		},
		{
			"name": "Elektrostat",
			"genre": "electronic",
			"location": "Oslo",
			"date": "October",
			"links": {
				"website": "http://elektrostat.com/"
			}
		},
		{
			"name": "Etnemarknaden",
			"location": "Etne",
			"date": ["July", "August"],
			"links": {
				"website": "http://www.etnemarknaden.no/"
			}
		},
		{
			"name": "Fartein Valen Festivalen",
			"genre": "classical",
			"location": "Haugesund",
			"date": "April",
			"links": {
				"website": "http://www.farteinvalen.no/"
			}
		},
		{
			"name": "Fauskivalen",
			"location": "Hemsedal",
			"date": "August",
			"links": {
				"website": "http://www.fausko.no/"
			}
		},
		{
			"name": "Festspillene i Nesbyen",
			"location": "Nesbyen",
			"date": "June",
			"links": {
				"website": "http://www.festspilleneinesbyen.no/"
			}
		},
		{
			"name": "Festspillene i Nord-Norge",
			"location": "Harstad",
			"date": "June",
			"links": {
				"website": "http://www.festspillnn.no/"
			}
		},
		{
			"name": "Festspillere i Bergen",
			"location": "Bergen",
			"date": ["May", "June"],
			"links" : {
				"website": "http://www.fib.no/"
			}
		},
		{
			"name": "Festidalen",
			"location": "Uskedalen",
			"date": "August",
			"links": {
				"website": "http://www.festidalen.no/"
			}
		},
		{
			"name": "Festningen",
			"location": "Oslo",
			"date": "September",
			"links": {
				"website": "http://www.festningen.info/"
			}
		},
		{
			"name": "Finsktango festival",
			"location": "Storfjord",
			"date": "August",
			"links": {
				"website": "http://www.finsktango.no/"
			}
		},
		{
			"name": "Fiskestim",
			"location": "Oslo",
			"date": "September",
			"links": {
				"website": "http://www.fiskestim.no/"
			}
		},
		{
			"name": "Fjelljazz",
			"genre": "jazz",
			"location": "Heggenes",
			"date": "August",
			"links": {
				"website": "http://www.fjelljazz.no/"
			}
		},
		{
			"name": "Fjellparkfestivalen",
			"location": "Flekkefjord",
			"date": "July",
			"links": {
				"website": "http://www.fjellparkfestivalen.com/"
			}
		},
		{
			"name": "Fjordfesten",
			"location": "Sandefjord",
			"date": "August",
			"links": {
				"website": "http://www.fjordfesten.no/"
			}
		},
		{
			"name": "Fjordfestivalen",
			"location": "Hyggen",
			"date": "August",
			"links": {
				"website": "http://fjordfestivalen.no/"
			}
		},
		{
			"name": "Folkedansfestivalen",
			"genre": "dance",
			"location": "Ørsta",
			"date": "July",
			"links": {
				"website": "http://www.folkedansfestivalen.no/"
			}
		},
		{
			"name": "Folkelarm",
			"genre": "folk",
			"location": "Oslo",
			"date": "September",
			"links": {
				"website": "http://www.folkelarm.no/"
			}
		},
		{
			"name": "Folkemusikkveka",
			"genre": "folk",
			"location": "Ål",
			"date": ["May", "June"],
			"links": {
				"website": "http://www.folkemusikkveka.no/"
			}
		},
		{
			"name": "Fonnafest",
			"location": "Jondal",
			"date": "June",
			"links": {
				"website": "http://www.fonnafest.no/"
			}
		},
		{
			"name": "Førdefestivalen",
			"genre": "world",
			"location": "Førde",
			"date": "July",
			"links": {
				"website": "http://www.fordefestival.no/"
			}
		},
		{
			"name": "Frøyafestivalen",
			"location": "Sistranda",
			"date": "August",
			"links": {
				"website": "http://www.froyafestivalen.no/"
			}
		},
		{
			"name": "Gjerstad Rock Festival",
			"genre": "rock",
			"location": "Andebu",
			"date": "July",
			"links": {
				"website": "http://www.gjerstadrockfestival.com/"
			}
		},
		{
			"name": "Glommafestivalen",
			"location": "Fredrikstad",
			"date": "June",
			"links": {
				"website": "http://www.glommafestivalen.no/"
			}
		},
		{
			"name": "Glompen Musikkfest",
			"location": "Sandane",
			"date": ["August", "September"],
			"links": {
				"webiste": "http://www.gloppenmusikkfest.no/"
			}
		},
		{
			"name": "Glopperock",
			"genre": "rock",
			"location": "Sandane",
			"date": "August",
			"links": {
				"website": "http://www.glopperock.no/"
			}
		},
		{
			"name": "Granittrock",
			"location": "Oslo",
			"date": "September",
			"links": {
				"website": "http://www.granittrock.no/"
			}
		},
		{
			"name": "Grenland Brassfestival",
			"location": "Porsgrunn",
			"date": "May",
			"links": {
				"website": "http://www.grenlandbrass.com/"
			}
		},
		{
			"name": "Gressvig Sommerweekend",
			"location": "Gressvik",
			"date": "July",
			"links": {
				"facebook": "https://www.facebook.com/groups/26070014813/"
			}
		},
		{
			"name": "Grieg International Choir Festival",
			"location": "Bergen",
			"date": "October",
			"links": {
				"website": "http://www.griegfestival.no/"
			}
		},
		{
			"name": "Gøy på landet",
			"location": "Nykirke",
			"date": "June",
			"links": {
				"website": "http://gøypålandet.com/"
			}
		},
		{
			"name": "Hagan Bluesfestival",
			"genre": "blues",
			"location": "Sande i Vestfold",
			"date": "June",
			"links": {
				"website": "http://www.haganbluesfestival.no/"
			}
		},
		{
			"name": "Hallingmarken",
			"location": "Nesbyen",
			"date": "July",
			"links": {
				"website": "http://www.hallingmarken.no/"
			}
		},
		{
			"name": "Hamar Music Festival",
			"location": "Hamar",
			"date": "June",
			"links": {
				"website": "http://www.hamarmusicfestival.no/"
			}
		},
		{
			"name": "Hammerslag Festival Vinterblot",
			"genre": "metal",
			"location": "Tønsberg",
			"date": "February",
			"links": {
				"website": "http://www.hammerslagfestival.net/"
			}
		},
		{
			"name": "Hardanger Musikkfest",
			"location": "Kinsarvik",
			"date": "June",
			"links": {
				"website": "http://hardangermusikkfest.no/"
			}
		},
		{
			"name": "Haukeliseterfestivalen",
			"location": "Vinje",
			"date": "June",
			"links": {
				"website": "http://visithaukeli.org/Aktoer/Haukeliseterfestivalen"
			}
		},
		{
			"name": "Hemnesjazz",
			"genre": "jazz",
			"location": "Hemnesberget",
			"date": "August",
			"links": {
				"website": "http://www.hemnesjazz.no/"
			}
		},
		{
			"name": "Hilmarfestivalen",
			"location": "Steinkjer",
			"date": "Novemeber",
			"links": {
				"website": "http://hilmarfestivalen.no/"
			}
		},
		{
			"name": "Horten Kammermusikkfest",
			"location": "Horten",
			"date": "June",
			"links": {
				"webiste": "http://hortenkammermusikk.com/"
			}
		},
		{
			"name": "Hortensfestivalen",
			"location": "Horten",
			"date": "July",
			"links": {
				"website": "http://www.hortensfestivalen.org/"
			}
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
			"name": "Hyperfokus",
			"location": "Oslo",
			"date": "April",
			"links": {
				"website": "http://www.hyperfokus.no/"
			}
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
			"name": "Insomnia Festival",
			"location": "Tromsø",
			"date": "October",
			"links": {
				"website": "http://www.insomniafestival.no/"
			}
		},
		{
			"name": "Internasjonal Kammermusikkfest på Limdesnes",
			"genre": "classical",
			"location": "Lindesnes",
			"date": "September",
			"links": {
				"website": "http://www.lindesnes-kammermusikkfest.com/"
			}
		},
		{
			"name": "International Chamber Music Festival",
			"genre": "classical",
			"location": "Stavanger",
			"date": "August",
			"links": {
				"website": "http://www.icmf.no/"
			}
		},
		{
			"name": "Jazzfest",
			"genre": "jazz",
			"location": "Trondheim",
			"date": "May",
			"links": {
				"website": "http://jazzfest.no/"
			}
		},
		{
			"name": "Jazz på Jølst",
			"genre": "jazz",
			"location": "Vassenden",
			"date": "October",
			"links": {
				"website": "http://www.jolsterjazz.com/"
			}
		},
		{
			"name": "Jessheimdagene",
			"location": "Jessheim",
			"date": "August",
			"links": {
				"website": "http://jessheimdagene.no/"
			}
		},
		{
			"name": "Johan Halvorsen musikkfest",
			"location": "Drammen",
			"date": "March",
			"links": {
				"website": "http://www.halvorsen-musikkfest.no/"
			}
		},
		{
			"name": "jovialbeinnalen",
			"location": "Oslo",
			"date": "February",
			"links": {
				"website": "http://jovialbiennalen.tumblr.com/"
			}
		},
		{
			"name": "Jugendfest",
			"location": "Ålesund",
			"date": "August",
			"links": {
				"website": "http://www.momentium.no/jugendfest/"
			}
		},
		{
			"name": "Jutulrock",
			"genre": "rock",
			"location": "Vågå",
			"date": "August",
			"links": {
				"website": "http://jutulrock.com/"
			}
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
			"name": "Kalottspel",
			"location": "Rundhaug",
			"date": "August",
			"links": {
				"website": "http://www.kalottspel.no/"
			}
		},
		{
			"name": "Kammermusikk i Stavern",
			"genre": "classical",
			"location": "Larvik",
			"date": "July",
			"links": {
				"website": "http://www.kammermusikk.no/"
			}
		},
		{
			"name": "Kanalrock",
			"location": "Horten",
			"date": "August",
			"links": {
				"website": "http://www.kanalrock.no/"
			}
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
			"name": "Kartfestivalen",
			"location": "Gvarv",
			"date": "August",
			"links": {
				"website": "http://www.kartfestivalen.com/"
			}
		},
		{
			"name": "Kibneb Festivalen",
			"location": "Lensvik",
			"date": "July",
			"links": {
				"website": "http://kibneb.no/"
			}
		},
		{
			"name": "Kirsten Flagstad Festival",
			"genre": "classical",
			"location": "Hamar",
			"date": "June",
			"links": {
				"website": "http://www.flagstad-festival.no/"
			}
		},
		{
			"name": "Kjerringråkk",
			"location": "Bodø",
			"date": "March",
			"links": {
				"website": "http://kjerringrakk.net/"
			}
		},
		{
			"name": "Kjørrefjordfestivalen",
			"location": "Farsund",
			"date": "July",
			"links": {
				"website": "http://www.kjorrefjordfestivalen.com/"
			}
		},
		{
			"name": "Kon-Tiki Classical Music Fest",
			"genre": "classical",
			"location": "Nesoddtangen",
			"date": "August",
			"links": {
				"website": "http://www.classicmusicfest.com/"
			}
		},
		{
			"name": "Kongsberg Jazzfestival",
			"genre": "jazz",
			"location": "Kongsberg",
			"date": "July",
			"links": {
				"website": "http://kongsberg-jazzfestival.no/"
			}
		},
		{
			"name": "KontAk",
			"location": "Tromsø",
			"date": "March",
			"links": {
				"website": "http://www.kontak.no/"
			}
		},
		{
			"name": "Kopervikfestival",
			"location": "Kopervik",
			"date": "May",
			"links": {
				"website": "http://www.kopervikfestival.no/"
			}
		},
		{
			"name": "Kraftfestivalen",
			"location": "Askim",
			"date": "August",
			"links": {
				"website": "http://www.kraftfestivalen.no/"
			}
		},
		{
			"name": "Kringsnudd Festival",
			"location": "Hemsedal",
			"date": "July",
			"links": {
				"facebook": "https://www.facebook.com/groups/243874494276/"
			}
		},
		{
			"name": "Kristiansund Kirke Kunst Kulturakademi",
			"location": "Kristiansund",
			"date": "September",
			"links": {
				"website": "http://www.kkkkfestival.com/"
			}
		},
		{
			"name": "Kråkeslottfestivalen",
			"location": "Skaland",
			"date": ["May", "June"],
			"links": {
				"website": "http://www.kulturslottet.no/"
			}
		},
		{
			"name": "Ladehammerfestivalen",
			"location": "Trondheim",
			"date": "August",
			"links": {
				"website": "http://www.ladehammerfestivalen.no/"
			}
		},
		{
			"name": "Ladyfest",
			"location": "Oslo",
			"date": "May",
			"links": {
				"website": "http://ladyfestoslo.com/"
			}
		},
		{
			"name": "Landsfestivalen i Gammaldansmusikk",
			"location": "Steinkjer",
			"date": "June",
			"links": {
				"website": "http://www.landsfestivalen.no/"
			}
		},
		{
			"name": "Langesund Bluegrassfestival",
			"genre": "bluegrass",
			"location": "Langesund",
			"date": "June",
			"links": {
				"website": "http://www.bluegrassfestival.no/"
			}
		},
		{
			"name": "Larvik Gitarfestival",
			"location": "Larvik",
			"date": "March",
			"links": {
				"website": "http://www.larvikgitarfestival.com/"
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
			},
			"image": "landskappleiken.jpg"
		},
		{
			"name": "Latinfestivalen",
			"genre": "latin",
			"location": "Trondheim",
			"date": ["January", "February"],
			"links": {
				"website": "http://www.latinfestivalen.no/"
			}
		},
		{
			"name": "Lofoten Countryfestival",
			"genre": "country",
			"location": "Leknes",
			"date": "September",
			"links": {
				"website": "http://www.lofoten-countryfestival.no/"
			}
		},
		{
			"name": "Lofoten International Chamber Music Festival",
			"genre": "classical",
			"location": "Leknes",
			"date": "July",
			"links": {
				"website": "http://www.lofotenfestival.no/"
			}
		},
		{
			"name": "Losten",
			"location": "Askøy",
			"date": "August",
			"links": {
				"website": "http://losten.no/"
			}
		},
		{
			"name": "Låvende Saker",
			"location": "Sør-Fron",
			"date": "May",
			"links": {
				"website": "http://www.rudigard.no/"
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
			},
			"image": "maijazz.png"
		},
		{
			"name": "Malakof Rockfestival",
			"genre": "rock",
			"location": "Nordfjordeid",
			"date": "July",
			"links": {
				"website": "http://www.malakoff.no/"
			}
		},
		{
			"name": "Márkomeannu",
			"location": "Troms",
			"date": "July",
			"links": {
				"website": "http://www.markomeannu.no/"
			}
		},
		{
			"name": "Midnattsrock Festival",
			"location": "Lakselv",
			"date": "July",
			"links": {
				"website": "http://www.midnattsrocken.no/"
			}
		},
		{
			"name": "Midtsommerjazz",
			"genre": "jazz",
			"location": "Ålesund",
			"date": "June",
			"links": {
				"website": "http://www.momentium.no/midtsommerjazz"
			}
		},
		{
			"name": "MiG Tautra",
			"location": "Tautra",
			"date": "July",
			"links": {
				"website": "http://mig.no/"
			}
		},
		{
			"name": "Miniøya",
			"location": "Oslo",
			"date": "May",
			"links": {
				"website": "http://minioya.no/"
			}
		},
		{
			"name": "Moldejazz",
			"genre": "jazz",
			"location": "Molde",
			"date": "July",
			"links": {
				"website": "http://www.moldejazz.no/"
			}
		},
		{
			"name": "Musikkfest Oslo",
			"location": "Oslo",
			"date": "June",
			"links": {
				"website": "http://musikkfest.no/"
			}
		},
		{
			"name": "Musikkfest Stavanger",
			"location": "Stavanger",
			"date": "June",
			"links": {
				"website": "http://www.musikkfeststavanger.no/"
			}
		},
		{
			"name": "Musikkfest Trondheim",
			"location": "Trondheim",
			"date": "June",
			"links": {
				"website": "http://www.musikkfesttrondheim.no/"
			}
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
			"name":  "Målrock",
			"location": "Årdal",
			"date": "August",
			"links": {
				"website": "http://malrock.no/"
			}
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
			"name": "Namsos Rockfestival",
			"genre": "rock",
			"location": "Namsos",
			"date": "November",
			"links": {
				"website": "http://namsosrockfestival.no/"
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
			},
			"image": "nattjazz.png"
		},
		{
			"name": "Nidaros Bluesfestival",
			"genre": "blues",
			"location": "Trondheim",
			"date": "April",
			"links": {
				"website": "http://www.nidarosbluesfestival.com/"
			}
		},
		{
			"name": "Nordic Music Week",
			"location": "Stavanger",
			"date": "September",
			"links": {
				"website": "http://nordicmusicweek.com/"
			}
		},
		{
			"name": "Nordkor",
			"location": "Narvik",
			"date": "March",
			"links": {
				"website": "https://www.kor.no/nordkor/"
			}
		},
		{
			"name": "Nordland Musikkfestuke",
			"location": "Bodø",
			"date": "August",
			"links": {
				"website": "http://musikkfestuka.no/"
			}
		},
		{
			"name": "Nordland Musikkfestuke Vinter",
			"location": "Bodø",
			"date": "March",
			"links": {
				"website": "http://musikkfestuka.no/"
			}
		},
		{
			"name": "Nordlysfestivalen",
			"location": "Tromsø",
			"date": ["January", "February"],
			"links": {
				"website": "http://www.nordlysfestivalen.no/"
			}
		},
		{
			"name": "Nordsjøfestivalen i Farsund",
			"location": "Farsund",
			"date": ["August", "September"],
			"links": {
				"website": "http://www.nordsjofestivalen.no/"
			}
		},
		{
			"name": "Norsk Countrytreff",
			"genre": "country",
			"location": "Breim",
			"date": "July",
			"links": {
				"website": "http://norskcountrytreff.no/"
			}
		},
		{
			"name": "Norsk Orgelfestival",
			"location": "Stavanger",
			"date": "September",
			"links": {
				"website": "http://www.hallgeir.com/festival/"
			}
		},
		{
			"name": "Norwegian Wood",
			"location": "Oslo",
			"date": "June",
			"links": {
				"website": "http://www.norwegianwood.no/"
			}
		},
		{
			"name": "Norwegian Youth Chamber Music Festival",
			"genre": "classical",
			"location": "Stavanger",
			"date": ["September", "October"],
			"links": {
				"website": "http://www.nycmf.com/en/"
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
			},
			"image": "notoddenbluesfestival.png"
		},
		{
			"name": "Numusic",
			"location": "Stavanger",
			"date": "September",
			"links": {
				"website": "http://www.numusic.no/"
			}
		},
		{
			"name": "Nødutgangfestivalen",
			"location": "Bodø",
			"date": "October",
			"links": {
				"website": "http://www.emergency.no/"
			}
		},
		{
			"name": "Olavsfestdagene",
			"location": "Trondheim",
			"date": ["July", "August"],
			"links": {
				"website": "http://www.olavsfestdagene.no/"
			}
		},
		{
			"name": "Only Connect",
			"location": "Oslo",
			"date": "June",
			"links": {
				"website": "http://www.onlyconnect.no/"
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
			"name": "Osafestivalen",
			"location": "Voss",
			"date": "October",
			"links": {
				"website": "http://www.osafestivalen.no/"
			}
		},
		{
			"name": "Ose Countryfestival",
			"genre": "country",
			"location": "Bygland",
			"date": "July",
			"links": {
				"website": "http://www.osecountry.com/"
			}
		},
		{
			"name": "Oslo Kammermusikkfestival",
			"genre": "classical",
			"location": "Oslo",
			"date": "August",
			"links": {
				"website": "http://oslokammermusikkfestival.no/"
			}
		},
		{
			"name": "Oslo Internasjonale Kirkemusikkfestival",
			"location": "Oslo",
			"date": "March",
			"links": {
				"website": "http://www.kirkemusikkfestivalen.no/"
			}
		},
		{
			"name": "Oslo International Rumi Festival",
			"genre": "world",
			"location": "Oslo",
			"date": "November",
			"links": {
				"website": "http://www.rumi.no/"
			}
		},
		{
			"name": "Oslo Jazzfestival",
			"genre": "jazz",
			"location": "Oslo",
			"date": "August",
			"links": {
				"website": "http://www.oslojazzfestival.no/"
			}
		},
		{
			"name": "Oslo Kulturnatt",
			"location": "Oslo",
			"date": "September",
			"links": {
				"website": "http://www.oslokulturnatt.no/"
			}
		},
		{
			"name": "Oslo Operafestival",
			"genre": "opera",
			"location": "Oslo",
			"date": "October",
			"links": {
				"website": "http://www.operafestival.no/"
			}
		},
		{
			"name": "Oslo World Music Festival",
			"genre": "world",
			"location": "Oslo",
			"date": ["October", "November"],
			"links": {
				"website": "http://www.osloworld.no/"
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
			"name": "Palmesus",
			"location": "Kristiansand",
			"date": "July",
			"links": {
				"website": "http://www.palmesus.com/"
			}
		},
		{
			"name": "Parkenfestivalen",
			"location": "Bodø",
			"date": "August",
			"links": {
				"website": "http://parkenfestivalen.no/"
			}
		},
		{
			"name": "Periferifestivalen",
			"location": "Glesvær",
			"date": "August",
			"links": {
				"website": "http://www.periferifestivalen.no/"
			}
		},
		{
			"name": "Phonofestivalen",
			"location": "Bergen",
			"date": "September",
			"links": {
				"website": "http://www.phonofestivalen.no/"
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
			},
			"image": "polarjazz.png"
		},
		{
			"name": "Pomorfestivalen",
			"location": "Vardø",
			"date": "July",
			"links": {
				"website": "http://www.pomorfestivalen.no/"
			}
		},
		{
			"name": "Prøysenfestivalen",
			"location": "Rudshøgda",
			"date": "July",
			"links": {
				"website": "http://www.proysenfestivalen.no/"
			}
		},
		{
			"name": "Pstereo",
			"location": "Trondheim",
			"date": "August",
			"links": {
				"website": "http://www.pstereo.no/"
			}
		},
		{
			"name": "Pulpit",
			"location": "Stavanger",
			"date": "September",
			"links": {
				"website": "http://www.pulpit.no/"
			}
		},
		{
			"name": "Punkt",
			"location": "Kristiansand",
			"date": "September",
			"links": {
				"website": "http://punktfestival.no/"
			}
		},
		{
			"name": "Ranglerock",
			"location": "Bryne",
			"date": "July",
			"links": {
				"website": "http://ranglerock.no/"
			}
		},
		{
			"name": "Rauland Internasjonale Vinterfestival",
			"location": "Rauland",
			"date": "February",
			"links": {
				"website": "http://vinterfestival.hit.no/"
			}
		},
		{
			"name": "Raumarock",
			"location": "Åndalsnes",
			"date": "August",
			"links": {
				"website": "http://www.raumarock.com/"
			}
		},
		{
			"name": "Rekordfestivalen",
			"location": "Hovden",
			"date": "August",
			"links": {
				"website": "http://www.rekordfestivalen.no/"
			}
		},
		{
			"name": "Revenrock",
			"location": "Oslo",
			"date": "September",
			"links": {
				"website": "http://www.dntoslo.no/turbo/reverock/"
			}
		},
		{
			"name": "Riddu Riddu",
			"location": "Samuelsberg",
			"date": "July",
			"links": {
				"website": "http://riddu.no/"
			}
		},
		{
			"name": "Risør Bluegrassfestival",
			"genre": "bluegrass",
			"location": "Risør",
			"date": "July",
			"links": {
				"website": "http://www.risorbluegrassfestival.no/"
			}
		},
		{
			"name": "Risør Kammermusikkfest",
			"genre": "classical",
			"location": "Risør",
			"date": "June",
			"links": {
				"website": "http://www.kammermusikkfest.no/"
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
			},
			"image": "rjukanrockfestival.png"
		},
		{
			"name": "Rjukan Trubadurfestival",
			"location": "Rjukan",
			"date": "August",
			"links": {
				"website": "http://www.rjukan-trubadurfestival.com/"
			}
		},
		{
			"name": "Robert Normann-Festival",
			"location": "Sarpsborg",
			"date": "August",
			"links": {
				"website": "http://www.robertnormannfestival.no/"
			}
		},
		{
			"name": "Rockart Festivalen",
			"location": "Holmestrand",
			"date": "July",
			"links": {
				"website": "http://rockart.no/"
			}
		},
		{
			"name": "Rockfest",
			"location": "Haugesund",
			"date": "June",
			"links": {
				"website": "http://www.rockfest.no/"
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
			},
			"image": "rockmotrus.png"
		},
		{
			"name": "Rootsfestivalen",
			"location": "Brønnøysund",
			"date": "July",
			"links": {
				"website": "http://www.rootsfestivalen.no/"
			}
		},
		{
			"name": "Rosendal Musikkfestival",
			"location": "Rosendal",
			"date": ["May", "June"],
			"links": {
				"website": "http://www.rosendalmusikkfestival.no/"
			}
		},
		{
			"name": "Røa Musikkfestuker",
			"location": "Røa",
			"date": ["October", "November"],
			"links": {
				"website": "http://www.gunnar.no/"
			}
		},
		{
			"name": "Sami Easter Festival",
			"location": "Kautokeino",
			"date": "April",
			"links": {
				"website": "http://www.samieasterfestival.com/"
			}
		},
		{
			"name": "Seljordfestivalen",
			"location": "Seljord",
			"date": "July",
			"links": {
				"website": "http://www.seljordfestivalen.no/"
			}
		},
		{
			"name": "Sildajazz",
			"genre": "jazz",
			"location": "Haugesund",
			"date": "August",
			"links": {
				"website": "http://sildajazz.no/"
			}
		},
		{
			"name": "Sjonafestivalen",
			"location": "Sjona",
			"date": "August",
			"links": {
				"website": "http://www.sjonafestivalen.no/"
			}
		},
		{
			"name": "Skjervøydagan",
			"location": "Skjervøy",
			"date": "June",
			"links": {
				"website": "http://www.skjervoydagan.no/"
			}
		},
		{
			"name": "Skjærgårs Music and Mission Festival",
			"location": "Kragerø",
			"date": "July",
			"links": {
				"website": "http://sginfo.no/"
			}
		},
		{
			"name": "Skjærgårdstreffen",
			"location": "Åmli",
			"date": "August",
			"links": {
				"website": "http://www.skjaergardstreffen.no/"
			}
		},
		{
			"name": "Skjærgårs Vinterestival",
			"location": "Kragerø",
			"date": "February",
			"links": {
				"website": "http://sginfo.no/"
			}
		},
		{
			"name": "Skudefestivalen",
			"location": "Skudesneshamn",
			"date": "July",
			"links": {
				"website": "http://www.skudefestivalen.no/"
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
			"name": "Slottsfjell",
			"location": "Tønsberg",
			"date": "July",
			"links": {
				"website": "http://www.slottsfjellfestival.no/"
			}
		},
		{
			"name": "Sluserock",
			"location": "Ulefoss",
			"date": "June",
			"links": {
				"website": "http://sluserock.no/"
			}
		},
		{
			"name": "Smeltedigelen",
			"location": "Mo i Rana",
			"date": "October",
			"links": {
				"website": "http://www.smeltedigelen.no/"
			}
		},
		{
			"name": "Soddjazz",
			"genre": "jazz",
			"location": "Inderøy",
			"date": "April",
			"links": {
				"website": "http://soddjazz.no/"
			}
		},
		{
			"name": "Solar Weekend",
			"location": "Oslo",
			"date": "July",
			"links": {
				"website": "http://solarweekend.no/"
			}
		},
		{
			"name": "Sommerdagan i Meløy",
			"location": "Meløy",
			"date": ["July", "August"],
			"links": {
				"website": "http://www.meloy.kommune.no/sommerdagan/"
			}
		},
		{
			"name": "Sommerfesten",
			"location": "Giske",
			"date": "July",
			"links": {
				"website": "http://momentium.no/festivaler/sommerfesten"
			}
		},
		{
			"name": "Sommerfestivalen",
			"location": "Selbu",
			"date": "June",
			"links": {
				"website": "http://sommerfestivalen.no/"
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
			"name": "Souther Discomfort",
			"genre": "metal",
			"location": "Kristiansand",
			"date": "September",
			"links": {
				"website": "http://www.southerndiscomfort.info/"
			}
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
			"name": "Stavanger Live",
			"location": "Stavanger",
			"date": "May",
			"links": {
				"website": "http://www.stavangerlive.no/"
			}
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
			"name": "Storåsfestivalen",
			"location": "Storås",
			"date": "July",
			"links": {
				"website": "http://www.storaasfestivalen.no/"
			}
		},
		{
			"name": "Sunndal Kulturfestival",
			"location": "Sunndal",
			"date": "June",
			"links": {
				"website": "http://sunndalkulturfestival.origo.no/"
			}
		},
		{
			"name": "Sunnmøre Kammermusikkfestival",
			"genre": "classical",
			"location": "Sunnmøre",
			"date": "May",
			"links": {
				"website": "http://2013.kammermusikkfestival.no/"
			}
		},
		{
			"name": "Svartisenfestivalen",
			"location": "Mo i Rana",
			"date": "August",
			"links": {
				"website": "http://www.svartisenfestivalen.no/"
			}
		},
		{
			"name": "Sørumfestivalen",
			"location": "Sørumsand",
			"date": ["January", "February"],
			"links": {
				"website": "http://www.sorumfestivalen.no/"
			}
		},
		{
			"name": "Sørveiv",
			"location": "Kristiansand",
			"date": "November",
			"links": {
				"website": "http://www.sorveiv.no/"
			}
		},
		{
			"name": "Tahiti-festivalen",
			"location": "Kristiansund",
			"date": "June",
			"links": {
				"website": "http://www.tahiti-festivalen.no/"
			}
		},
		{
			"name": "Tape to Zero",
			"location": "Oslo",
			"date": "April",
			"links": {
				"website": "http://tapetozero.no/"
			}
		},
		{
			"name": "Telemarkfestivalen",
			"location": "Bø i Telemark",
			"date": "August",
			"links": {
				"website": "http://telemarkfestivalen.no/"
			}
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
			"name": "Tinnsjø Dansefestival",
			"location": "Mæl",
			"date": ["May", "June"],
			"links": {
				"website": "http://www.tinnsjodansefestival.no/"
			}
		},
		{
			"name": "Toftefestivalen",
			"location": "Tofte",
			"date": "June",
			"links": {
				"website": "http://www.toftefestivalen.no/"
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
			},
			"image": "tonsofrock.jpeg"
		},
		{
			"name": "Torghattfestivalen",
			"location": "Brønnøysund",
			"date": "June",
			"links": {
				"website": "http://www.bmk.no/tf/torghattfestival.php"
			}
		},
		{
			"name": "Torpfestivalen",
			"location": "Torp",
			"date": "July",
			"links": {
				"website": "http://www.torpfestivalen.com/"
			}
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
			"name": "Trandalblues",
			"genre": "blues",
			"location": "Trandal",
			"date": "July",
			"links": {
				"website": "http://trandalblues.com/"
			}
		},
		{
			"name": "Treungenfestival",
			"location": "Treungen",
			"date": ["July", "August"],
			"links": {
				"website": "http://www.treungen.no/"
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
			},
			"image": "trondheimcalling.png"
		},
		{
			"name": "Trondheim Kammermusikkfestival",
			"genre": "classic",
			"location": "Trondheim",
			"date": "September",
			"links": {
				"website": "http://www.kamfest.no/"
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
			},
			"image": "trondheimmetalfest.jpg"
		},
		{
			"name": "Trondheim Rock",
			"genre": "rock",
			"location": "Trondheim",
			"date": "June",
			"links": {
				"website": "http://www.trondheimrock.no/"
			}
		},
		{
			"name": "Trysilfestivalen",
			"location": "Trysil",
			"date": "June",
			"links": {
				"website": "http://www.trysilfestivalen.no/"
			}
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
			"name": "Tydalsfestival'n",
			"location": "Stugudal",
			"date": "July",
			"links": {
				"website": "http://www.tydalsfestivaln.no/"
			}
		},
		{
			"name": "Tysnesfest",
			"location": "Tysnes",
			"date": "July",
			"links": {
				"website": "http://www.tysnesfest.no/"
			}
		},
		{
			"name": "UiO-festivalen",
			"location": "Oslo",
			"date": "May",
			"links": {
				"website": "http://www.uio.no/om/aktuelt/arrangementer/uio-festivalen/"
			}
		},
		{
			"name": "Uka i Trondheim",
			"location": "Trondheim",
			"date": "October",
			"links": {
				"website": "https://www.uka.no/"
			}
		},
		{
			"name": "Uka i Ås",
			"location": "Ås",
			"date": "October",
			"links": {
				"website": "http://www.ukaiaas.no/"
			}
		},
		{
			"name": "Uka i Lillehammer",
			"location": "Lillehammer",
			"date": "February",
			"links": {
				"website": "http://ukalillehammer.no/"
			}
		},
		{
			"name": "Uka på Blindern",
			"location": "Oslo",
			"date": ["January", "February"],
			"links": {
				"website": "http://blindernuka.no/2013/"
			}
		},
		{
			"name": "Ultima",
			"location": "Oslo",
			"date": "September",
			"links": {
				"website": "http://www.ultima.no/"
			}
		},
		{
			"name": "Under Brua Festivalen",
			"location": "Ridabu",
			"date": "August",
			"links": {
				"website": "http://www.underbrua.no/"
			}
		},
		{
			"name": "Utkant",
			"location": "Skjerjehamn",
			"date": "July",
			"links": {
				"website": "http://www.utkant.com/"
			}
		},
		{
			"name": "Valdres Sommersymfoni",
			"genre": "classical",
			"location": "Valdres",
			"date": "June",
			"links": {
				"website": "http://www.sommersymfoni.no/"
			}
		},
		{
			"name": "Vannfestivalen",
			"location": "Ålgård",
			"date": "August",
			"links": {
				"website": "http://vannfestivalen.net/"
			}
		},
		{
			"name": "Vekao i Sogndal",
			"location": "Sogndal",
			"date": ["January", "February"],
			"links": {
				"website": "http://www.studentveka.no/"
			}
		},
		{
			"name": "Verket",
			"location": "Mo i Rana",
			"date": "August",
			"links": {
				"website": "http://www.verketfestival.no/"
			}
		},
		{
			"name": "Vestfoldspillene",
			"location": "Vestfold",
			"date": "June",
			"links": {
				"website": "http://www.vestfoldfestspillene.no/"
			}
		},
		{
			"name": "Vikedals Roots Music Festival",
			"location": "Vikedal",
			"date": "July",
			"links": {
				"website": "http://www.rootsfestival.no/"
			}
		},
		{
			"name": "Vikingrock",
			"location": "Gudvangen",
			"date": "July",
			"links": {
				"webdsite": "http://www.vikingrock.no/"
			}
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
			"name": "Vinterfestspill",
			"location": "Røros",
			"date": "March",
			"links": {
				"website": "http://www.vinterfestspill.no/"
			}
		},
		{
			"name": "Vinterfestuka i Narvik",
			"location": "Narvik",
			"date": "March",
			"links": {
				"website": "http://vinterfestuka.no/"
			}
		},
		{
			"name": "Vinterjazz",
			"genre": "jazz",
			"date": ["January", "Febuary"],
			"links": {
				"website": "http://www.vinterjazz.no/"
			}
		},
		{
			"name": "Volumfestivalen",
			"location": "Elverum",
			"date": "June",
			"links": {
				"website": "http://www.volumfestivalen.no/"
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
			},
			"image": "vossajazz.png"
		},
		{
			"name": "Vrangsfestivalen",
			"location": "Magnor",
			"date": "August",
			"links": {
				"website": "http://www.vrangsfestivalen.no/"
			}
		},
		{
			"name": "Vømmølfestivalen",
			"location": "Verdal",
			"date": "May",
			"links": {
				"website": "http://vommol.org/"
			}
		},
		{
			"name": "Vårsøghelga",
			"location": "Surnadal",
			"date": "June",
			"links": {
				"website": "http://www.varsoghelga.no/"
			}
		},
		{
			"name": "Working Class Hero",
			"location": "Drammen",
			"date": ["May", "June"],
			"links": {
				"website": "http://www.wch.no/"
			}
		},
		{
			"name": "Xplosif",
			"genre": "hiphop",
			"location": "Stavanger",
			"date": "October",
			"links": {
				"website": "http://xplosif.no/"
			}
		},
		{
			"name": "Yagori",
			"genre": "world",
			"location": "Oslo",
			"date": "September",
			"links": {
				"website": "http://yagori.com/"
			}
		},
		{
			"name": "Ørland Bluesfestival",
			"genre": "blues",
			"location": "Brekstad",
			"date": "October",
			"links": {
				"website": "http://orland-bluesklubb.com/"
			}
		},
		{
			"name": "Ørland Country & Dansefestival",
			"genre": "country",
			"location": "Ørland",
			"date": "July",
			"links": {
				"website": "http://ocdf.no/"
			}
		},
		{
			"name": "Ørskog Bluesfest",
			"genre": "blues",
			"location": "Ørskog",
			"date": ["May", "June"],
			"links": {
				"website": "http://orskogblues.no/"
			}
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
		},
		{
			"name": "Øygospel",
			"location": "Kristiansand",
			"date": ["May", "June"],
			"links": {
				"website": "http://www.oygospel.no/"
			}
		}
	];

	// Export
	if (window) {
		window.festivals = festivals;
	}
})();
