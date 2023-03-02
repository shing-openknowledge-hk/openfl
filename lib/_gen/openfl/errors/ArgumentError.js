// Class: openfl.errors.ArgumentError

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

var ArgumentError = function(message) {
	if(message == null) {
		message = "";
	}
	(openfl_errors_Error().default).call(this,message);
	this.name = "ArgumentError";
}

// Meta

ArgumentError.__name__ = "openfl.errors.ArgumentError";
ArgumentError.__isInterface__ = false;
ArgumentError.__super__ = (openfl_errors_Error().default);
ArgumentError.prototype = $extend((openfl_errors_Error().default).prototype, {
	
});
ArgumentError.prototype.__class__ = ArgumentError.prototype.constructor = $hxClasses["openfl.errors.ArgumentError"] = ArgumentError;

// Init



// Statics




// Export

exports.default = ArgumentError;