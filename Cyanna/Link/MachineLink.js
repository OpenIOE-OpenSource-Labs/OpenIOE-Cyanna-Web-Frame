/*!
 * OpenIOE.js v1.0.0
 * (c) 2014-2017 OpenIOE
 * Released under the MIT License.
 */
CYANNA.log("Link/MachineLink.js");

var MachineLink = {　　　　
	createNew: function() {　　　　　　
		var Machine = {};　　　　　　

		Machine.ent = function(params) {

		}

		Machine.index = function(params) {
			CYANNA.warn("Machine.index");
		}

		Machine.exi = function(params) {

		}

		Machine.add = function(params) {

		}

		Machine.del = function(params) {

		}

		Machine.inq = function(params) {

			var data = params.data;

			var CONT = data.CONT;

			switch(CONT) {

				case "ms":
					{

						var MID = data.MID;

						CYANNA.routesFile({
							route: {
								"FILE": "Plug/OpenIOE/OpenIOE_min.js",
								"NAME": "OpenIOE",
								"ISTR": "request"
							},
							url: 'http://api.celerstar.com/IOT/',
							time: 5000,
							data: {
								"LINK": "m",
								"ISTR": "inq",
								"CONT": "ms",
								"MID": MID,
								"TYPE": "jsonp"
							},
							success: function(res) {
								params.success(res);
							},
							error: function(error) {
								params.error({
									message: 'timeout'
								});
							}

						})

					}
					break;
				default:
					{
						alert(params.data.ISTR);
					}
					break;
			}

		}

		Machine.rev = function(params) {

		}

		Machine.bin = function(params) {

		}
		Machine.rel = function(params) {}
		return Machine;　　
	}

};