(function($) {
	"use strict";

	/**
	 * Initialize the app - setup events and such.
	 */
	var Festivalnorge = function(festivals) {
		var festivalElement = $(".festivals");

		this.festivals = festivals;
		this.createList(festivalElement);
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
	Festivalnorge.prototype.createList = function(element) {
		var template = $("#template-festival").html(),
			festival;

		for (var i = 0; i < this.festivals.length; i++) {
			festival = this.festivals[i];
			// @todo: format data
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
