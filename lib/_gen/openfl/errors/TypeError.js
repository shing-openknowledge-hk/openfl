// Class: openfl.errors.TypeError

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

var TypeError = function(message) {
	if(message == null) {
		message = "";
	}
	(openfl_errors_Error().default).call(this,message,0);
	this.name = "TypeError";
}

// Meta

TypeError.__name__ = "openfl.errors.TypeError";
TypeError.__isInterface__ = false;
TypeError.__super__ = (openfl_errors_Error().default);
TypeError.prototype = $extend((openfl_errors_Error().default).prototype, {
	
});
TypeError.prototype.__class__ = TypeError.prototype.constructor = $hxClasses["openfl.errors.TypeError"] = TypeError;

// Init



// Statics




// Export

exports.default = TypeError;