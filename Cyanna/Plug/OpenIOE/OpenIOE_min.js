/*!
 * OpenIOE.js v1.0.0
 * (c) 2014-2017 OpenIOE
 * Released under the MIT License.
 */
var OpenIOE = {
	createNew: function() {
		var a = {};
		a.request = function(f) {
			f = f || {};
			f.data = f.data || {};
			var b = e(f);

			function e(k) {
				var j = "OpenIOE_" + c();
				var h = document.getElementsByTagName("head")[0];
				k.data["callback"] = j;
				var i = d(k.data);
				var g = document.createElement("script");
				h.appendChild(g);
				window[j] = function(l) {
					h.removeChild(g);
					clearTimeout(g.timer);
					window[j] = null;
					k.success && k.success(l)
				};
				g.src = k.url + "?" + i;
				if(k.time) {
					g.timer = setTimeout(function() {
						window[j] = null;
						h.removeChild(g);
						k.error && k.error({
							message: "timeout"
						})
					}, k.time)
				} else {
					g.timer = setTimeout(function() {
						window[j] = null;
						h.removeChild(g);
						k.error && k.error({
							message: "timeout"
						})
					}, 5000)
				}
			}

			function d(i) {
				var g = [];
				for(var h in i) {
					g.push(encodeURIComponent(h) + "=" + encodeURIComponent(i[h]))
				}
				return g.join("&")
			}

			function c() {
				return Math.random().toString(36).substr(2)
			}
		};
		return a
	}
};