/*!
 * OpenIOE.js v1.0.0
 * (c) 2014-2017 OpenIOE
 * Released under the MIT License.
 */

var OpenIOE = {　　　　
	createNew: function() {　　　　　　
		var openioe = {};　　　　　　

		openioe.request = function(params) {
			params = params || {};
			params.data = params.data || {};
			var json = jsonp(params);

			function jsonp(params) {

				var callbackName = 'OpenIOE_' + random();
				var head = document.getElementsByTagName('head')[0];

				params.data['callback'] = callbackName;
				var data = formatParams(params.data);
				var script = document.createElement('script');
				head.appendChild(script);

				window[callbackName] = function(json) {
					head.removeChild(script);
					clearTimeout(script.timer);
					window[callbackName] = null;
					json = JSON.stringify(json);
					json = eval('(' + json+ ')');
					params.success && params.success(json);
				};　　
				script.src = params.url + '?' + data;

				if(params.time) {
					script.timer = setTimeout(function() {
						window[callbackName] = null;
						head.removeChild(script);
						params.error && params.error({
							message: 'timeout'
						});
					}, params.time);
				} else {
					script.timer = setTimeout(function() {
						window[callbackName] = null;
						head.removeChild(script);
						params.error && params.error({
							message: 'timeout'
						});
					}, 5000);

				}

			};

			function formatParams(data) {
				var arr = [];
				for(var name in data) {
					arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
				};
				return arr.join('&');
			}

			function random() {
				return Math.random().toString(36).substr(2);
			}
		}

		return openioe;　　　　
	}

};