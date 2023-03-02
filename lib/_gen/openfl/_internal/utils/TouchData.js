// Class: openfl._internal.utils.TouchData

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_utils_ObjectPool() {return require("./../../../lime/utils/ObjectPool");}

// Constructor

var TouchData = function() {
	this.rollOutStack = [];
}

// Meta

TouchData.__name__ = "openfl._internal.utils.TouchData";
TouchData.__isInterface__ = false;
TouchData.prototype = {
	reset: function() {
		this.touch = null;
		this.touchDownTarget = null;
		this.touchOverTarget = null;
		this.rollOutStack.splice(0,this.rollOutStack.length);
	}
};
TouchData.prototype.__class__ = TouchData.prototype.constructor = $hxClasses["openfl._internal.utils.TouchData"] = TouchData;

// Init



// Statics


TouchData.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, fields : { touch : { SuppressWarnings : ["checkstyle:Dynamic"]}}}
TouchData.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new TouchData();
},function(data) {
	data.reset();
})

// Export

exports.default = TouchData;