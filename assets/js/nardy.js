(function() {
	var Nardy = function() {
		// XmlHttp
		function _xmlhttp() {
			// If XMLHttpRequest is available then using it
			if (typeof XMLHttpRequest !== undefined) {
				return new XMLHttpRequest;
				// if window.ActiveXObject is available than the user is using
				// IE...so we have to create the newest version XMLHttp object
			} else if (window.ActiveXObject) {
				var version = [ 'MSXML2.XMLHttp.5.0', 'MSXML2.XMLHttp.4.0',
						'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp',
						'Microsoft.XMLHttp' ], xmlHttp;
				// In this array we are starting from the first element (newest
				// version) and trying to create it. If there is an
				// exception thrown we are handling it (and doing nothing ^^)
				for ( var i = 0; i < version.length; i++) {
					try {
						xmlHttp = new ActiveXObject(version[i]);
						return xmlHttp;
					} catch (e) {
					}
				}
			}
		};

		function element(id) {
			var element = document.querySelector(id);
			return element;
		};

		function length(obj) {
			var count = 0;
			for ( var key in obj) {
				if (obj.hasOwnProperty(key)) {
					count++;
				}
			}
			return count;
		};

		// Get Params
		function parms(data) {
			var parms = '';
			count = 0;
			for ( var key in data) {
				count++;
				parms += (length(data) == count) ? key + "=" + data[key] : key
						+ "=" + data[key] + "&";
			}
			return parms;
		}

		// As innerHTML
		this.html = function(options) {
			_el = element(options.id);
			_el.innerHTML = options.text;
		};

		// As append
		this.append = function(options) {
			_el = element(options.id);
			_el.innerHTML += options.text;
		};

		// As click
		this.click = function(id, callback) {
			_el = element(id);
			_el.addEventListener("click", callback);
		};
		
		// As change
		this.change = function(id, callback) {
			_el = element(id);
			_el.addEventListener("change", callback);
		};
		
		// As value
		this.select = function(id, teste) {
			_el = element(id);
			this.val(teste.local, _el.options[_el.selectedIndex].text);
		};
		
		this.val = function(id, valor) {
			_el = element(id);
			_el.value = valor;
		};

		// As each
		this.each = function(data, callback) {
			for ( var key in data) {
				callback(key, data[key]);
			}
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
			
			var url = (parms(options.data) === '') ? options.url : options.url+"?"+parms(options.data);
			
			xhr.open('GET', url, true);
			xhr.send('');

		};
	};

	window.Nardy = Nardy;

}).call(this);

var $_ = new Nardy();