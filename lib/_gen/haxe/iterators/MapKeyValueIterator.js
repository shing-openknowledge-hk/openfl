// Class: haxe.iterators.MapKeyValueIterator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var MapKeyValueIterator = function(map) {
	this.map = map;
	this.keys = map.keys();
}

// Meta

MapKeyValueIterator.__name__ = "haxe.iterators.MapKeyValueIterator";
MapKeyValueIterator.__isInterface__ = false;
MapKeyValueIterator.prototype = {
	hasNext: function() {
		return this.keys.hasNext();
	},
	next: function() {
		var key = this.keys.next();
		return { value : this.map.get(key), key : key};
	}
};
MapKeyValueIterator.prototype.__class__ = MapKeyValueIterator.prototype.constructor = $hxClasses["haxe.iterators.MapKeyValueIterator"] = MapKeyValueIterator;

// Init



// Statics




// Export

exports.default = MapKeyValueIterator;