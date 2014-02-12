"use strict";
(function() {
	var fs = require("fs"),
		request = require("request"),
		libxmljs = require("libxmljs");

	/**
	 * Update the festival list.
	 */
	var Update = {

		/**
		 * Append the festivals to the local list, removing any duplicates.
		 */
		appendFestivals: function(festivals) {
			var festival, name, found,
				count = 0;

			for (var i = 0; i < festivals.length; i++) {
				festival = festivals[i];
				festival.name = festival.name.replace(/ \d{4}$/, ""); // remove the year at the end of names
				name = festival.name.toLowerCase();
				found = false;

				// I know that O(n^2) is a faux pas, but it's the fastest way to do it for now
				for (var j = 0; j < this.festivals.length; j++) {
					if (this.festivals[j].name.toLowerCase() == name) {
						found = true;
						break;
					}
				}

				if (!found) {
					count++;
					this.festivals.push(festival);
				}
			}

			console.log(count + " festivals added");
		},

		/**
		 * Start the update.
		 */
		begin: function() {
			console.log("Loading local data");
			fs.readFile("data/festivals.json", "utf8", function (err,data) {
				if (err) {
					return console.error(err);
				}
				if (typeof data == "string") {
					data = JSON.parse(data);
				}
				console.log(data.length + " festivals found");
				this.festivals = data;
				this.loadLastFMData(function(data) {
					this.appendFestivals(data);
					this.saveFestivals("data/festivals.json");
				}.bind(this));
			}.bind(this));
		},

		/**
		 * Load data from Last.fm
		 */
		loadLastFMData: function(callback) {
			console.log("Loading data from Last.fm");

			var festivals = [];

			function fetch(page) {
				// Please don't abuse my API key, kthnx :3
				var url = "http://ws.audioscrobbler.com/2.0/?method=geo.getevents&location=norway&festivalsonly=1&api_key=ded69fc86a83fecb469ac594bf910ff5";
				if (page) {
					url += "&page=" + page;
				}
				request(url, function (error, response, body) {
					if (error) {
						return console.error(error);
					}
					var xml = libxmljs.parseXml(body),
						root = xml.get("//events"),
						page = parseInt(root.attr("page").value()),
						pages = parseInt(root.attr("totalPages").value()),
						events = root.find("event");

					for (var i = 0; i < events.length; i++) {
						var event = events[i],
							festival = {
								name: event.get("title").text(),
								location: event.get("venue/location/city").text()
							},
							date = event.get("startDate").text(),
							website = event.get("website").text();

						switch (new Date(date).getMonth()) {
							case 0:
								festival.date = "January";
								break;
							case 1:
								festival.date = "February";
								break;
							case 2:
								festival.date = "March";
								break;
							case 3:
								festival.date = "April";
								break;
							case 4:
								festival.date = "May";
								break;
							case 5:
								festival.date = "June";
								break;
							case 6:
								festival.date = "July";
								break;
							case 7:
								festival.date = "August";
								break;
							case 8:
								festival.date = "September";
								break;
							case 9:
								festival.date = "October";
								break;
							case 10:
								festival.date = "November";
								break;
							case 11:
								festival.date = "December";
								break;
						}

						if (website.length) {
							festival.links = {
								website: website
							};
						}

						festivals.push(festival);
					}

					if (page < pages) {
						fetch(page + 1);
					} else if (typeof callback == "function") {
						console.log(festivals.length + " festivals found");
						callback(festivals);
					}
				});
			}

			fetch();
		},

		/**
		 * Save the festivals to a file.
		 */
		saveFestivals: function(file) {
			var data = JSON.stringify(this.festivals);
			console.log("Saving festivals to: " + file);
			fs.writeFile(file, data, function (err) {
				if (err) throw err;
			});
		}

	};

	Update.begin();

})();
