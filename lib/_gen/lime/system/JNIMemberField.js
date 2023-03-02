// Class: lime.system.JNIMemberField

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var JNIMemberField = function(field) {
	this.field = field;
}

// Meta

JNIMemberField.__name__ = "lime.system.JNIMemberField";
JNIMemberField.__isInterface__ = false;
JNIMemberField.prototype = {
	get: function(jobject) {
		return null;
	},
	set: function(jobject,value) {
		return value;
	}
};
JNIMemberField.prototype.__class__ = JNIMemberField.prototype.constructor = $hxClasses["lime.system.JNIMemberField"] = JNIMemberField;

// Init



// Statics




// Export

exports.default = JNIMemberField;