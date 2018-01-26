var Config = {

	createNew: function() {
		var Config = {};

		Config.root = "";
		Config.logState = true;
		Config.loadSameJsState = true;
		Config.loadSameCssState = false;

		Config.globalCss = [

		];

		Config.globalExtCss = [

		];

		Config.globalJs = [
			"jquery-2.1.0.js"
		];

		Config.globalExtJs = [

		];

		Config.setRoot = function(root) {
			this.root = root;
		};

		return Config;
	}
}