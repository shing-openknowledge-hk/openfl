// Class: openfl.system.Security

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var Security = function(){}

// Meta

Security.__name__ = "openfl.system.Security";
Security.__isInterface__ = false;
Security.prototype = {
	
};
Security.prototype.__class__ = Security.prototype.constructor = $hxClasses["openfl.system.Security"] = Security;

// Init



// Statics

Security.allowDomain = function(p1,p2,p3,p4,p5) {
}
Security.allowInsecureDomain = function(p1,p2,p3,p4,p5) {
}
Security.loadPolicyFile = function(url) {
}
Security.LOCAL_TRUSTED = "localTrusted"
Security.LOCAL_WITH_FILE = "localWithFile"
Security.LOCAL_WITH_NETWORK = "localWithNetwork"
Security.REMOTE = "remote"

// Export

exports.default = Security;