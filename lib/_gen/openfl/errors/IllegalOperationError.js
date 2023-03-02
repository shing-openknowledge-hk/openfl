// Class: openfl.errors.IllegalOperationError

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

var IllegalOperationError = function(message) {
	if(message == null) {
		message = "";
	}
	(openfl_errors_Error().default).call(this,message,0);
	this.name = "IllegalOperationError";
}

// Meta

IllegalOperationError.__name__ = "openfl.errors.IllegalOperationError";
IllegalOperationError.__isInterface__ = false;
IllegalOperationError.__super__ = (openfl_errors_Error().default);
IllegalOperationError.prototype = $extend((openfl_errors_Error().default).prototype, {
	
});
IllegalOperationError.prototype.__class__ = IllegalOperationError.prototype.constructor = $hxClasses["openfl.errors.IllegalOperationError"] = IllegalOperationError;

// Init



// Statics




// Export

exports.default = IllegalOperationError;