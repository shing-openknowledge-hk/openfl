// Class: openfl.errors.IOError

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

var IOError = function(message) {
	if(message == null) {
		message = "";
	}
	(openfl_errors_Error().default).call(this,message);
	this.name = "IOError";
}

// Meta

IOError.__name__ = "openfl.errors.IOError";
IOError.__isInterface__ = false;
IOError.__super__ = (openfl_errors_Error().default);
IOError.prototype = $extend((openfl_errors_Error().default).prototype, {
	
});
IOError.prototype.__class__ = IOError.prototype.constructor = $hxClasses["openfl.errors.IOError"] = IOError;

// Init



// Statics




// Export

exports.default = IOError;