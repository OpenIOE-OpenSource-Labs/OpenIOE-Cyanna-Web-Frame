var Config = {

	createNew: function() {
		var Config = {};

		Config.root = "";
		Config.logState = true;
		Config.loadSameJsState = true;
		Config.loadSameCssState = false;

		Config.globalCss = [
			"index.css"
		];

		Config.globalExtCss = [
			"http://www.celerstar.com/static/uikit-doc/vendor/highlight/highlight.css"
		];

		Config.globalJs = [
			"test.js"
		];

		Config.globalExtJs = [
			"http://www.celerstar.com/static/jquery/jquery-3.1.0.min.js"
		];

		Config.setRoot = function(root) {
			this.root = root;
		};

		return Config;
	}
}