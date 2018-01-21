CYANNA.ready(function() {

	// CYANNA.loadCurrentCss("index.css");
	// CYANNA.loadCurrentScript("test.js");

	// CYANNA.loadExtCss("http://www.celerstar.com/static/uikit-doc/vendor/highlight/highlight.css");
	// CYANNA.loadExtScript("http://www.celerstar.com/static/jquery/jquery-3.1.0.min.js");

	CYANNA.log("Page/index.js");

	CYANNA.routes({
		route: {
			"LINK": "Machine",
			"ISTR": "inq"
		},

		data: {
			"CONT": "ms",
			"TYPE": "jsonp",
			"MID": "00000000MGKy48hn"
		},

		success: function(res) {
			console.log(JSON.stringify(res));
		},
		error: function(error) {
			console.log(JSON.stringify(error));
		}

	});

	CYANNA.routesFile({
		route: {
			"FILE": "Link/TestLink.js",
			"NAME": "TestLink",
			"ISTR": "inq"
		},

		data: 123,
		success: function(res) {
			CYANNA.log(res);
		},
		error: function(error) {
			alert(error);
		}

	})

})