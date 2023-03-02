// Class: openfl.errors.SecurityError

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

var SecurityError = function(message) {
	if(message == null) {
		message = "";
	}
	(openfl_errors_Error().default).call(this,message,0);
	this.name = "SecurityError";
}

// Meta

SecurityError.__name__ = "openfl.errors.SecurityError";
SecurityError.__isInterface__ = false;
SecurityError.__super__ = (openfl_errors_Error().default);
SecurityError.prototype = $extend((openfl_errors_Error().default).prototype, {
	
});
SecurityError.prototype.__class__ = SecurityError.prototype.constructor = $hxClasses["openfl.errors.SecurityError"] = SecurityError;

// Init



// Statics




// Export

exports.default = SecurityError;