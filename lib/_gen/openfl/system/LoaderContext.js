// Class: openfl.system.LoaderContext

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) {
		checkPolicyFile = false;
	}
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	this.applicationDomain = applicationDomain;
	this.allowCodeImport = true;
	this.allowLoadBytesCodeExecution = true;
}

// Meta

LoaderContext.__name__ = "openfl.system.LoaderContext";
LoaderContext.__isInterface__ = false;
LoaderContext.prototype = {
	
};
LoaderContext.prototype.__class__ = LoaderContext.prototype.constructor = $hxClasses["openfl.system.LoaderContext"] = LoaderContext;

// Init



// Statics




// Export

exports.default = LoaderContext;