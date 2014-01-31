(function($) {
	"use strict";

	/**
	 * Initialize the app - setup events and such.
	 */
	var Festivalisten = function(element) {
		this.element = element;
		this.festivals = [];
		this.genres = [];
		this.locations = [];

		this.loadData(this.setupInterface.bind(this));
	};

	Festivalisten.prototype.setupInterface = function() {
		var filters = {
				location: "",
				genre: "",
				date: ""
			},
			filterLocation = $(".controls .filter-location select"),
			filterGenre = $(".controls .filter-genre select"),
			filterDate = $(".controls .filter-date select"),
			sortBy = $(".controls .sort select");

		// Isotope
		this.element.isotope({
			itemSelector: ".item",
			layoutMode: "fitRows",
			getSortData: {
				name: ".name",
				location: "[data-location]",
				genre: "[data-genre]",
				date: function(itemElement) {
					var dateString = $(itemElement).data("date"),
						date = new Date(dateString.replace(/^(\w+).*$/, "$1") + " 1, 1988"); // oh god, so cheap
					return date ? date.getMonth() + (dateString.search(/[^\w]/) != -1 ? 0.5 : 0) : -1;
				}
			},
			sortBy: sortBy.val()
		});

		// Filters
		$.each(this.locations, function() {
			filterLocation.append("<option value=\"" + this + "\">" + this + "</option>");
		});
		$.each(this.genres, function() {
			filterGenre.append("<option value=\"" + this + "\">" + this + "</option>");
		});

		// Events
		var self = this,
			festivalsElement = this.element;
		$(window).on("resize", function() {
			self.resizeCells(festivalsElement);
		});
		filterLocation.on("change", function() {
			filters.location = this.value;
			self.filterFestivalItems(filters, festivalsElement);
		});
		filterGenre.on("change", function() {
			filters.genre = this.value;
			self.filterFestivalItems(filters, festivalsElement);
		});
		filterDate.on("change", function() {
			filters.date = this.value;
			self.filterFestivalItems(filters, festivalsElement);
		});
		sortBy.on("change", function() {
			this.element.isotope({
				sortBy: this.value
			});
		});
	};

	/**
	 * Create the list of festivals.
	 */
	Festivalisten.prototype.createFestivalList = function(festivals, element) {
		var template = $("#template-festival").html(),
			festival;

		for (var i = 0; i < festivals.length; i++) {
			festival = festivals[i];

			if (festival.date) {
				if (typeof festival.date == "object" && festival.date.length) {
					if (festival.date.length > 2) {
						festival.date = festival.date.join(", ");
					} else {
						festival.date = festival.date[0] + " - " + festival.date[1];
					}
				}
			}

			if (festival.genre) {
				festival.genre = festival.genre.charAt(0).toUpperCase() + festival.genre.substr(1).toLowerCase();
				if (this.genres.indexOf(festival.genre) == -1) {
					this.genres.push(festival.genre);
				}
			}

			if (festival.location) {
				if (this.locations.indexOf(festival.location) == -1) {
					this.locations.push(festival.location);
				}
			}

			if (festival.links) {
				var website;
				if (festival.links.website) {
					website = festival.links.website;
				} else {
					for (var key in festival.links) {
						website = festival.links[key];
						break;
					}
				}
				festival.website = {
					url: website,
					name: website.replace(/^(\w*:\/\/)?(www\.)?([\w\.-]+).*?$/, "$3")
				};
			}

			if (festival.image) {
				festival.has_image = true;
			}

			element.append(Mustache.render(template, festival));
		}

		this.locations.sort(function(a, b) {
			return a.toLowerCase().localeCompare(b.toLowerCase());
		});
		this.genres.sort(function(a, b) {
			return a.toLowerCase().localeCompare(b.toLowerCase());
		});

		element.find(".loading").remove();
	};

	/**
	 * Filter the festival items using isotope.
	 */
	Festivalisten.prototype.filterFestivalItems = function(filters, element) {
		var filter = "";

		for (var key in filters) {
			if (filters[key] != "") {
				filter += key == "date"
					? "[data-" + key + "*=" + filters[key] + "]"
					: "[data-" + key + "=" + filters[key] + "]";
			}
		}

		element.isotope({
			filter: filter != "" ? filter : "*"
		});
	};

	/**
	 * Load the festival data.
	 */
	Festivalisten.prototype.loadData = function(callback) {
		$.ajax({
			url: "data/festivals.json",
			success: function(data) {
				this.setupFestivals(JSON.parse(data));
				if (callback) {
					callback();
				}
			}.bind(this),
			error: function(a,b,c) {
				console.error(a,b,c);
			}
		});
	};

	/**
	 * Resize the cells to be square.
	 */
	Festivalisten.prototype.resizeCells = function(element) {
		var items = element.find(".festival");
		items.css("height", items.first().width() + "px");
	};

	/**
	 * Process the data.
	 */
	Festivalisten.prototype.setupFestivals = function(data) {
		this.festivals = data;
		this.createFestivalList(this.festivals, this.element);
		this.resizeCells(this.element);
	};

	// Let's do this!
	$(document).ready(function(){
		new Festivalisten($(".festivals"));
	});

})(jQuery.noConflict());
