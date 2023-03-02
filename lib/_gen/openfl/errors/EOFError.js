// Class: openfl.errors.EOFError

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_errors_IOError() {return require("./../../openfl/errors/IOError");}

// Constructor

var EOFError = function(message,id) {
	if(id == null) {
		id = 0;
	}
	(openfl_errors_IOError().default).call(this,"End of file was encountered");
	this.name = "EOFError";
	this.errorID = 2030;
}

// Meta

EOFError.__name__ = "openfl.errors.EOFError";
EOFError.__isInterface__ = false;
EOFError.__super__ = (openfl_errors_IOError().default);
EOFError.prototype = $extend((openfl_errors_IOError().default).prototype, {
	
});
EOFError.prototype.__class__ = EOFError.prototype.constructor = $hxClasses["openfl.errors.EOFError"] = EOFError;

// Init



// Statics




// Export

exports.default = EOFError;