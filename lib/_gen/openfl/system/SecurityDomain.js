// Class: openfl.system.SecurityDomain

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var SecurityDomain = function() {
}

// Meta

SecurityDomain.__name__ = "openfl.system.SecurityDomain";
SecurityDomain.__isInterface__ = false;
SecurityDomain.prototype = {
	
};
SecurityDomain.prototype.__class__ = SecurityDomain.prototype.constructor = $hxClasses["openfl.system.SecurityDomain"] = SecurityDomain;

// Init



// Statics


SecurityDomain.__meta__ = { obj : { SuppressWarnings : ["checkstyle:UnnecessaryConstructor"]}}
SecurityDomain.currentDomain = new SecurityDomain()

// Export

exports.default = SecurityDomain;