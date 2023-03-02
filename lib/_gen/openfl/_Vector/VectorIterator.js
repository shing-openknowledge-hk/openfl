// Class: openfl._Vector.VectorIterator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var VectorIterator = function(vector) {
	this.vector = vector;
	this.index = -1;
}

// Meta

VectorIterator.__name__ = "openfl._Vector.VectorIterator";
VectorIterator.__isInterface__ = false;
VectorIterator.prototype = {
	hasNext: function() {
		return this.index < this.vector.get_length() - 1;
	},
	next: function() {
		this.index++;
		return this.vector[this.index];
	}
};
VectorIterator.prototype.__class__ = VectorIterator.prototype.constructor = $hxClasses["openfl._Vector.VectorIterator"] = VectorIterator;

// Init



// Statics


VectorIterator.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = VectorIterator;