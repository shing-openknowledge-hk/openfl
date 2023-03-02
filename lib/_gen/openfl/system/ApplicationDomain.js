// Class: openfl.system.ApplicationDomain

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function Type() {return require("./../../Type");}

// Constructor

var ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) {
		this.parentDomain = parentDomain;
	} else {
		this.parentDomain = ApplicationDomain.currentDomain;
	}
}

// Meta

ApplicationDomain.__name__ = "openfl.system.ApplicationDomain";
ApplicationDomain.__isInterface__ = false;
ApplicationDomain.prototype = {
	getDefinition: function(name) {
		return (Type().default).resolveClass(name);
	},
	hasDefinition: function(name) {
		return (Type().default).resolveClass(name) != null;
	}
};
ApplicationDomain.prototype.__class__ = ApplicationDomain.prototype.constructor = $hxClasses["openfl.system.ApplicationDomain"] = ApplicationDomain;

// Init



// Statics


ApplicationDomain.currentDomain = new ApplicationDomain(null)

// Export

exports.default = ApplicationDomain;