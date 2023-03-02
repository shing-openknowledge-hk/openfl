// Class: openfl.errors.RangeError

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_errors_Error() {return require("./../../openfl/errors/Error");}

// Constructor

var RangeError = function(message) {
	if(message == null) {
		message = "";
	}
	(openfl_errors_Error().default).call(this,message,0);
	this.name = "RangeError";
}

// Meta

RangeError.__name__ = "openfl.errors.RangeError";
RangeError.__isInterface__ = false;
RangeError.__super__ = (openfl_errors_Error().default);
RangeError.prototype = $extend((openfl_errors_Error().default).prototype, {
	
});
RangeError.prototype.__class__ = RangeError.prototype.constructor = $hxClasses["openfl.errors.RangeError"] = RangeError;

// Init



// Statics




// Export

exports.default = RangeError;