(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory;
	} else {
		root.Nardy = factory();
	}
})(this, function() {

	'use strict';

	var Nardy = {}, t = '';

	// método privado
	length = function(obj) {
		var count = 0;
		for ( var key in obj) {
			if (obj.hasOwnProperty(key))
				count++;
		}
		return count;
	};

	Nardy.$ = function(el) {
		t = document.querySelector(el);
		return this;
	};
	
	// As text
	Nardy.text = function(text) {
		t.appendChild(document.createTextNode(text));
		return this;
	};

	// Create element
	Nardy.append = function(element) {
		t.appendChild(document.createElement(element));
		return this;
	};

	// Get value element
	Nardy.val = function(valor) {
		if (valor === undefined) {
			return t.value;
		} else {
			t.value = valor;
		}
	};

	// Event click element
	Nardy.click = function(callback) {
		t.addEventListener("click", callback);
	};

	// Set value attr
	Nardy.attr = function(attr, value) {
		t.setAttribute(attr, value);
		return this;
	};

	// Event change element
	Nardy.change = function(callback) {
		t.addEventListener("change", callback);
	};

	// Selected item
	Nardy.selected = function() {
		return t.options[t.selectedIndex].text;
	};

	// As Empty
	Nardy.empty = function() {
		while(t.firstChild) t.removeChild(t.firstChild);
	};

	// For each
	Nardy.each = function(data, callback) {
		for ( var key in data) {
			if (data.hasOwnProperty(key)) {
				callback(key, data[key]);
			}
		}
	};

	// As class
	Nardy.addClass = function(css) {
		t.classList.add(css);
	};

	Nardy.count = function(text) {
		console.log(_length(text));
	};

	return Nardy;
});