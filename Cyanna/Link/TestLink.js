/*!
 * OpenIOE.js v1.0.0
 * (c) 2014-2017 OpenIOE
 * Released under the MIT License.
 */
CYANNA.log("Link/TestLink.js");

var TestLink = {　　　　
	createNew: function() {　　　　　　
		var TestLink = {};　　　　　　
		TestLink.index = function(params) {
			CYANNA.warn("Machine.index");
		}

		TestLink.ent = function(params) {

		}

		TestLink.exi = function(params) {

		}

		TestLink.add = function(params) {

		}

		TestLink.del = function(params) {

		}

		TestLink.inq = function(params) {


			params.success(params.data);//成功返回
			//params.error("ddd");//失败返回
		}

		TestLink.rev = function(params) {

		}

		TestLink.bin = function(params) {

		}
		TestLink.rel = function(params) {}
		return TestLink;　　
	}

};