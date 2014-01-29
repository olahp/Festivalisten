(function($) {
	"use strict";

	/**
	 * Initialize the app - setup events and such.
	 */
	var Festivalnorge = function(festivals) {
		var festivalsElement = $(".festivals"),
			filters = {
				location: ""
			},
			filterLocation = $(".filters .filter-location");

		this.festivals = festivals;
		this.dates = [];
		this.genres = [];
		this.locations = [];

		this.createFestivalList(festivals, festivalsElement);
		this.resizeCells(festivalsElement);

		// Filters
		this.locations.sort(function(a, b) {
			return a.toLowerCase().localeCompare(b.toLowerCase());
		});
		$.each(this.locations, function() {
			filterLocation.append("<option value=\"" + this + "\">" + this + "</option>");
		});

		// Setup isotope
		festivalsElement.isotope({
			itemSelector: ".item",
			layoutMode: "fitRows"
		});

		// Events
		var self = this;
		$(window).on("resize", function() {
			self.resizeCells(festivalsElement);
		});
		filterLocation.on("change", function() {
			filters.location = this.value;
			self.filterFestivalItems(filters, festivalsElement);
		});
	};

	/**
	 * Create the list of festivals.
	 */
	Festivalnorge.prototype.createFestivalList = function(festivals, element) {
		var template = $("#template-festival").html(),
			festival;

		for (var i = 0; i < festivals.length; i++) {
			festival = festivals[i];

			if (festival.date) {
				if (typeof festival.date == "object" && festival.date.length) {
					for (var d = 0; d < festival.date.length; d++) {
						if (this.dates.indexOf(festival.date[d]) == -1) {
							this.dates.push(festival.date[d]);
						}
					}
					if (festival.date.length > 2) {
						festival.date = festival.date.join(", ");
					} else {
						festival.date = festival.date[0] + " - " + festival.date[1];
					}
				} else {
					if (this.dates.indexOf(festival.date) == -1) {
						this.dates.push(festival.date);
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

			element.append(Mustache.render(template, festival));
		}

		element.find(".loading").remove();
	};

	/**
	 * Filter the festival items using isotope.
	 */
	Festivalnorge.prototype.filterFestivalItems = function(filters, element) {
		var filter = "";

		for (var key in filters) {
			if (filters[key] != "") {
				filter += "[data-" + key + "=" + filters[key] + "]";
			}
		}

		element.isotope({
			filter: filter != "" ? filter : "*"
		});
	};

	/**
	 * Resize the cells to be square.
	 */
	Festivalnorge.prototype.resizeCells = function(element) {
		var items = element.find(".festival");
		items.css("height", items.first().width() + "px");
	};

	// Let's do this!
	$(document).ready(function(){
		new Festivalnorge(window.festivals);
	});

})(jQuery.noConflict());
