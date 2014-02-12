# Festivalisten

Music festivals in Norway.

## Data

The festival data is retrieved and managed from various sources:

* [Festivalguiden](http://www.festivalguide.no/?main=events&hva=musikkfestival)
* [Listen to Norway](http://www.mic.no/symfoni/kontakt.nsf/bedrifttype_e?OpenView&Start=1&Count=10000&Expand=14.1#14.1)
* [Wikipedia](http://no.wikipedia.org/wiki/Liste_over_norske_musikkfestivaler)
* [last.fm](http://www.last.fm/festivals/+place/Norway)

You can get direct access to the data (in JSON format) if you want to do something awesome with it: http://michaelenger.github.io/Festivalisten/data/festivals.json

## Contributing

Any help in keeping the list of festivals up-to-date is appreciated. The list is contained in the **data/festivals.json** file and follow this format:

```javascript
{
	"name": "Example Festival",
	"genre": "example", // optional
	"location": "Townville",
	"date": "January", // if the festival spans over many months use an array: ["March", "April"]
	"links": {
		"website": "http://example.com",
		"facebook": "http://facebook.com/example" // currently not used for anything
	},
	"image": "example.png" // image is relative to the **images** folder
}
```

## Using the update.js Script

The **update.js** script is a [node.js](http://nodejs.org/) script which reads from external APIs to update the festival list.

### Requirements

* [node.js](http://nodejs.org/)
* [request](https://github.com/mikeal/request)
* [libxmljs](https://github.com/polotek/libxmljs)

### Usage

This command should be run inside the **Festivalisten** directory (as it tries to read the data file using a relative path).

```
node js/update.js
```
