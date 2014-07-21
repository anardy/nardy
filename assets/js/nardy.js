(function() {
	var Nardy = function() {
		var t = '';
		function _xmlhttp() {
			if (typeof XMLHttpRequest !== undefined) {
				return new XMLHttpRequest();
			} else if (window.ActiveXObject) {
				var version = [ 'MSXML2.XMLHttp.5.0', 'MSXML2.XMLHttp.4.0',
				'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp',
				'Microsoft.XMLHttp' ], xmlHttp;
				for (var i = 0; i < version.length; i++) {
					try {
						xmlHttp = new ActiveXObject(version[i]);
						return xmlHttp;
					} catch (e) {
					}
				}
			}
		}

		function element(id) {
			var el = document.querySelector(id);
			return el;
		}

		function length(obj) {
			var count = 0;
			for ( var key in obj) {
				if (obj.hasOwnProperty(key)) {
					count++;
				}
			}
			return count;
		}

		// Get Params
		function parms(data) {
			var params = '';
			count = 0;
			for ( var key in data) {
				count++;
				params += (length(data) == count) ? key + "=" + data[key] : key + "=" + data[key] + "&";
			}
			return params;
		}
		this.$ = function(el) {
			t = document.querySelector(el);
			return this;
		};

		// As innerHTML -- Don't use
		this.html = function(options) {
			_el = element(options.id);
			_el.innerHTML = options.text;
		};

		// As append
		this.append = function(element) {
			t = t.appendChild(document.createElement(element));
			return this;
		};

		// As text
		this.text = function(text) {
			t.appendChild(document.createTextNode(text));
			return this;
		};

		// As attr
		this.attr = function(attr, value) {
			t.setAttribute(attr, value);
			return this;
		};

		// As value
		this.val = function(valor) {
			if (valor === undefined) {
				return t.value;
			} else {
				t.value = valor;
			}
		};

		// As click
		this.click = function(callback) {
			t.addEventListener("click", callback);
		};

		// As change
		this.change = function(callback) {
			t.addEventListener("change", callback);
		};

		// As value
		this.selected = function() {
			return t.options[t.selectedIndex].text;
		};

		// As each
		this.each = function(data, callback) {
			for ( var key in data) {
				if (data.hasOwnProperty(key)) {
					callback(key, data[key]);
				}
			}
		};

		this.empty = function() {
			while (t.firstChild)
				t.removeChild(t.firstChild);
		};

		this.addClass = function(css) {
			t.classList.add(css);
		};

		// App Get
		this.post = function(options) {
			var xhr = _xmlhttp();
			// continuação da request
			console.log(parms(options.data));
		};

		this.get = function(options, callback) {
			var xhr = _xmlhttp();
			xhr.onreadystatechange = ensureReadiness;
			function ensureReadiness() {
				if (xhr.readyState < 4) {
					return;
				}
				if (xhr.status !== 200) {
					return;
				}
				// all is well
				if (xhr.readyState === 4) {
					callback(xhr.responseText);
				}
			}
			var url = (parms(options.data) === '') ? options.url : options.url + "?" + parms(options.data);
			xhr.open('GET', url, true);
			xhr.send('');
		};
	};
	window.Nardy = Nardy;
}).call(this);