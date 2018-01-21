var Cyanna = {
	createNew: function() {
		var Cyanna = {};

		Cyanna.root = "";
		Cyanna.readyStates = false;
		Cyanna.loadSameJsState = true;
		Cyanna.loadSameCssState = true;

		Cyanna.setRoot = function(root) {
			this.root = root;
		};

		Cyanna.readyEvent;

		Cyanna.setReadyState = function(state) {

			if(typeof this.readyEvent === "function" && this.readyStates == false) {
				this.readyEvent();
			}

			this.readyStates = state;
		};

		Cyanna.routes = function(params) {
			params = params || {};
			params.data = params.data || {};

			var LINK = params.route.LINK;
			var ISTR = params.route.ISTR;

			if(LINK == undefined || LINK == "") {
				CYANNA.error("Cyanna.routesFile no LINK");
				return;
			}

			if(ISTR == undefined || ISTR == "") {
				CYANNA.error("Cyanna.routesFile no ISTR");
				return;
			}
			CYANNA.loadScript("Cyanna/Link/" + LINK + "Link.js", function() {

				var linkFileName = LINK + "Link";
				var link = eval(linkFileName).createNew();

				link[ISTR](params);
			})

		};

		Cyanna.routesFile = function(params) {
			params = params || {};
			params.data = params.data || {};

			var FILE = params.route.FILE;
			var NAME = params.route.NAME;
			var ISTR = params.route.ISTR;

			if(FILE == undefined || FILE == "") {
				CYANNA.error("Cyanna.routesFile no File");
				return;
			}

			if(NAME == undefined || NAME == "") {
				CYANNA.error("Cyanna.routesFile no NAME");
				return;
			}

			if(ISTR == undefined || ISTR == "") {
				CYANNA.error("Cyanna.routesFile no ISTR");
				return;
			}
			CYANNA.loadScript("Cyanna/"+FILE, function() {

				var linkFileName = NAME;
				var link = eval(linkFileName).createNew();

				link[ISTR](params);
			})

		};

		Cyanna.ready = function(callback) {
			if(typeof callback === "function") {

				if(this.readyStates == true) {
					callback && callback();
				} else {
					this.readyEvent = callback;
				}

			}
		};

		Cyanna.setLogState = function(state) {
			this.logState = state;
		};

		Cyanna.logState = true;

		Cyanna.log = function(obj) {

			if(this.logState == true) {
				console.log("%cCyanna:" + obj, "color:green;");
			}

		};
		Cyanna.info = function(obj) {
			if(this.logState == true) {

				console.info("%cCyanna:" + obj, "color:blue;");
			}

		};

		Cyanna.info = function(obj) {
			if(this.logState == true) {

				console.info("%cCyanna:" + obj, "color:blue;");
			}

		};

		Cyanna.warn = function(obj) {
			if(this.logState == true) {
				console.warn("%cCyanna:" + obj, "color:GoldenRod;");
			}

		};
		Cyanna.error = function(obj) {
			if(this.logState == true) {
				console.error("%cCyanna:" + obj, "color:red;");
			}

		};

		Cyanna.setSameJsState = function(state) {
			this.loadSameJsState = state;
		};

		Cyanna.setSameCssState = function(state) {
			this.loadSameCssState = state;
		};

		Cyanna.loadScript = function(url, callback) {

			if(url != undefined) {
				url = this.root + url;

				var script = document.createElement("script");
				script.type = "text/javascript";

				if(script.readyState) {
					script.onreadystatechange = function() {
						if(script.readyState == "loaded" || script.readyState == "complete") {
							script.onreadystatechange = null;
							if(typeof callback === "function") {
								callback && callback();
							}
						}
					};
				} else {
					script.onload = function() {
						if(typeof callback === "function") {
							callback && callback();
						}
					};
				}
				script.src = url;
				document.body.appendChild(script);
			}
		};

		Cyanna.loadCurrentScript = function(url, callback) {

			if(url != undefined) {
				var urls = Url.createNew();
				var nowUrl = urls.protocol() + '//' + urls.path() + urls.nameNoSuffix() + '.js'
				url = urls.protocol() + '//' + urls.path() + url;

				if(url == nowUrl && this.loadSameJsState) {
					this.warn("Reload currentScript file.");
					return;
				}
				var script = document.createElement("script");
				script.type = "text/javascript";

				if(script.readyState) {
					script.onreadystatechange = function() {
						if(script.readyState == "loaded" || script.readyState == "complete") {
							script.onreadystatechange = null;
							callback && callback();
						}
					};
				} else {
					script.onload = function() {
						callback && callback();
					};
				}
				script.src = url;
				document.body.appendChild(script);
			}

		};

		Cyanna.loadExtScript = function(url, callback) {

			if(url != undefined) {

				var script = document.createElement("script");
				script.type = "text/javascript";

				if(script.readyState) {
					script.onreadystatechange = function() {
						if(script.readyState == "loaded" || script.readyState == "complete") {
							script.onreadystatechange = null;

							if(typeof callback === "function") {
								callback && callback();
							}

						}
					};
				} else {
					script.onload = function() {
						if(typeof callback === "function") {
							callback && callback();
						}
					};
				}
				script.src = url;
				document.body.appendChild(script);

			}

		};

		Cyanna.loadCss = function(url,callback) {

			if(url != undefined) {
				url = this.root +  url;
				
				css = document.createElement('link');
				css.type = 'text/css';
				css.rel = 'stylesheet';

				if(css.readyState) {
					css.onreadystatechange = function() {
						if(css.readyState == "loaded" || css.readyState == "complete") {
							css.onreadystatechange = null;
							if(typeof callback === "function") {
								callback && callback();
							}
						}
					};
				} else {
					css.onload = function() {
						if(typeof callback === "function") {
							callback && callback();
						}
					};
				}
				
				css.href = url;
				head.appendChild(css);
			}
		};

		Cyanna.loadCurrentCss = function(url,callback) {
			if(url != undefined) {

				var urls = Url.createNew();
				var nowUrl = urls.protocol() + '//' + urls.path() + urls.nameNoSuffix() + '.css'
				url = urls.protocol() + '//' + urls.path() + url;

				if(url == nowUrl && this.loadSameCssState) {

					this.warn("Reload currentCss file");
					return;
				}

				css = document.createElement('link');
				css.type = 'text/css';
				css.rel = 'stylesheet';

				if(css.readyState) {
					css.onreadystatechange = function() {
						if(css.readyState == "loaded" || css.readyState == "complete") {
							css.onreadystatechange = null;
							if(typeof callback === "function") {
								callback && callback();
							}
						}
					};
				} else {
					css.onload = function() {
						if(typeof callback === "function") {
							callback && callback();
						}
					};
				}
				
				css.href = url;
				head.appendChild(css);
			}
		};

		Cyanna.loadExtCss = function(url,callback) {

			if(url != undefined) {

				var css = document.createElement('link');
				
				css.rel = 'stylesheet';
				css.type = 'text/css';

				if(css.readyState) {
					css.onreadystatechange = function() {
						if(css.readyState == "loaded" || css.readyState == "complete") {
							css.onreadystatechange = null;

							if(typeof callback === "function") {
								callback && callback();
							}

						}
					};
				} else {
					css.onload = function() {
						if(typeof callback === "function") {
							callback && callback();
						}
					};
				}
				
				css.href = url;
				head.appendChild(css);
			}
		};

		Cyanna.loadCssArray = function(cssArray,callback) {
			
			

			function cssRecurse(self, count, callback) {

				if(count == cssArray.length) {
					callback && callback();
				} else {
					self.loadCss(cssArray[count], function() {
						cssRecurse(self, ++count, callback);
					});
				}
			}

			cssRecurse(this, 0, callback);

		};

		Cyanna.loadExtCssArray = function(cssArray,callback) {
			


			function cssRecurse(self, count, callback) {

				if(count == cssArray.length) {
					callback && callback();
				} else {
					self.loadExtCss(cssArray[count], function() {
						cssRecurse(self, ++count, callback);
					});
				}
			}

			cssRecurse(this, 0, callback);

		};

		Cyanna.loadJsArray = function(jsArray, callback) {

			function scriptRecurse(self, count, callback) {

				if(count == jsArray.length) {
					callback && callback();
				} else {
					self.loadScript(jsArray[count], function() {
						scriptRecurse(self, ++count, callback);
					});
				}
			}

			scriptRecurse(this, 0, callback);

		};

		Cyanna.loadExtJsArray = function(jsArray, callback) {

			function scriptRecurse(self, count, callback) {

				if(count == jsArray.length) {
					callback && callback();
				} else {
					self.loadExtScript(jsArray[count], function() {
						scriptRecurse(self, ++count, callback);
					});
				}
			}

			scriptRecurse(this, 0, callback);

		};
		return Cyanna;
	}

}
var CYANNA = Cyanna.createNew();
CYANNA.setRoot("http://127.0.0.1:8020/OpenIOE官网/OpenIOE/service/");

CYANNA.loadJsArray(["Cyanna/Config.js", "Cyanna/Plug/Url/Url.js"], function() {

	var config = Config.createNew();
	config.setRoot(CYANNA.root);

	var urls = Url.createNew();

	var cssArray = config.globalCss;
	var jsArray = config.globalJs;
	var cssExtArray = config.globalExtCss;
	var jsExtArray = config.globalExtJs;

	CYANNA.setSameJsState(config.loadSameJsState);
	CYANNA.setSameCssState(config.loadSameCssState);
	CYANNA.setLogState(config.logState);


	if(config.loadSameCssState == true) {
		cssExtArray.push(urls.protocol() + '//' + urls.path() + urls.nameNoSuffix() + '.css');
	}
	
	if(config.loadSameJsState == true) {
		jsExtArray.push(urls.protocol() + '//' + urls.path() + urls.nameNoSuffix() + '.js');
	}


	CYANNA.loadCssArray(cssArray);
	CYANNA.loadJsArray(jsArray);
	CYANNA.loadExtCssArray(cssExtArray);
	CYANNA.loadExtJsArray(jsExtArray, function() {
		CYANNA.setReadyState(true);
	});

})

CYANNA.log("Cyanna.js");