
var Url = {
	createNew: function() {
		var Url = {};
		Url.host = function() {
			return window.location.host;
		};
		Url.protocol = function() {
			return window.location.protocol;
		};


		Url.pathname = function() {
			
			pathname=window.location.pathname.replace(/\/\//g, "/");
			return pathname;
		};

		Url.url = function() {
			return this.host() + this.pathname();
		};

		Url.path = function() {

			var urlAll = this.host() + this.pathname();
			var str = "/";
			var i = urlAll.lastIndexOf(str);

			return urlAll.substring(0, i + 1);
		};

		Url.name = function() {

			var urlAll = this.host() + this.pathname();
			var str = "/";
			var i = urlAll.lastIndexOf(str);

			return urlAll.substring(i + 1, urlAll.length);
		};

		Url.nameNoSuffix = function() {
			var name = this.name();
			var str = ".";
			var i = name.lastIndexOf(str);
			return name.substring(0, i);
		};

		return Url;
	}

};