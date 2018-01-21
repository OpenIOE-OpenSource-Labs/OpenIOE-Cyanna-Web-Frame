var Skip = {
	createNew: function() {
		var Skip = {};
		Skip.SkipIndex = function(url) {
			 window.location.href = url;
		};

		return Skip;
	}

};