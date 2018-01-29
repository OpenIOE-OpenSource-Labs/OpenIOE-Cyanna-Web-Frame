CYANNA.ready(function() {

	CYANNA.log("Page/index.js");

	//CYANNA.loadCmpt("cmpt-test", "beforeend", "cmpt-test.html", function() {});
	//CYANNA.loadCurrentCmpt("cmpt-test", "beforeend", "cmpt-test.html", function() {});
	CYANNA.loadCmpt(["cmpt-test", "beforeend", "cmpt-test.html"], function() {});

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