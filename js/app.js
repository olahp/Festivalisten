(function($) {
	"use strict";

	/**
	 * Initialize the app - setup events and such.
	 */
	var Festivalnorge = function(festivals) {
		var festivalElement = $(".festivals");

		this.genres = [];
		this.createFestivalList(festivals, festivalElement);
		this.resizeCells(festivalElement);

		// Setup isotope
		festivalElement.isotope({
			itemSelector: ".item",
			layoutMode: "fitRows"
		});

		// Events
		var self = this;
		$(window).on("resize", function() {
			self.resizeCells(festivalElement);
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

			if (typeof festival.date == "object" && festival.date.length) {
				if (festival.date.length > 2) {
					festival.date = festival.date.join(", ");
				} else {
					festival.date = festival.date[0] + " - " + festival.date[1];
				}
			}

			if (festival.genre) {
				festival.genre = festival.genre.charAt(0).toUpperCase() + festival.genre.substr(1).toLowerCase();
				if (this.genres.indexOf(festival.genre) == -1) {
					this.genres.push(festival.genre);
				}
			}

			element.append(Mustache.render(template, festival));
		}
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
