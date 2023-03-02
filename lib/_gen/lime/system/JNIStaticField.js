// Class: lime.system.JNIStaticField

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var JNIStaticField = function(field) {
	this.field = field;
}

// Meta

JNIStaticField.__name__ = "lime.system.JNIStaticField";
JNIStaticField.__isInterface__ = false;
JNIStaticField.prototype = {
	get: function() {
		return null;
	},
	set: function(value) {
		return value;
	}
};
JNIStaticField.prototype.__class__ = JNIStaticField.prototype.constructor = $hxClasses["lime.system.JNIStaticField"] = JNIStaticField;

// Init



// Statics




// Export

exports.default = JNIStaticField;