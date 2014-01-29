(function($) {
	"use strict";

	/**
	 * Initialize the app - setup events and such.
	 */
	var Festivalist = function(festivals) {
		var festivalsElement = $(".festivals"),
			filters = {
				location: "",
				genre: "",
				date: ""
			},
			filterLocation = $(".controls .filter-location select"),
			filterGenre = $(".controls .filter-genre select"),
			filterDate = $(".controls .filter-date select"),
			sortBy = $(".controls .sort select");

		this.festivals = festivals;
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
		this.genres.sort(function(a, b) {
			return a.toLowerCase().localeCompare(b.toLowerCase());
		});
		$.each(this.genres, function() {
			filterGenre.append("<option value=\"" + this + "\">" + this + "</option>");
		});

		// Setup isotope
		festivalsElement.isotope({
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

		// Events
		var self = this;
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
			festivalsElement.isotope({
				sortBy: this.value
			});
		});
	};

	/**
	 * Create the list of festivals.
	 */
	Festivalist.prototype.createFestivalList = function(festivals, element) {
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

			element.append(Mustache.render(template, festival));
		}

		element.find(".loading").remove();
	};

	/**
	 * Filter the festival items using isotope.
	 */
	Festivalist.prototype.filterFestivalItems = function(filters, element) {
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
	 * Resize the cells to be square.
	 */
	Festivalist.prototype.resizeCells = function(element) {
		var items = element.find(".festival");
		items.css("height", items.first().width() + "px");
	};

	// Let's do this!
	$(document).ready(function(){
		new Festivalist(window.festivals);
	});

})(jQuery.noConflict());
