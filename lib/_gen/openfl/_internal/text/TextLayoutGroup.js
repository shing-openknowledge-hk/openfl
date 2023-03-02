// Class: openfl._internal.text.TextLayoutGroup

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var TextLayoutGroup = function(format,startIndex,endIndex) {
	this.format = format;
	this.startIndex = startIndex;
	this.endIndex = endIndex;
}

// Meta

TextLayoutGroup.__name__ = "openfl._internal.text.TextLayoutGroup";
TextLayoutGroup.__isInterface__ = false;
TextLayoutGroup.prototype = {
	getAdvance: function(index) {
		return this.positions[index];
	}
};
TextLayoutGroup.prototype.__class__ = TextLayoutGroup.prototype.constructor = $hxClasses["openfl._internal.text.TextLayoutGroup"] = TextLayoutGroup;

// Init



// Statics


TextLayoutGroup.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = TextLayoutGroup;