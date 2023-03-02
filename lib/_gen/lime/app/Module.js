// Class: lime.app.Module

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_app_IModule() {return require("./../../lime/app/IModule");}
function lime_app__$Event_$Int_$Void() {return require("./../../lime/app/_Event_Int_Void");}

// Constructor

var Module = function() {
	this.onExit = new (lime_app__$Event_$Int_$Void().default)();
}

// Meta

Module.__name__ = "lime.app.Module";
Module.__isInterface__ = false;
Module.__interfaces__ = [(lime_app_IModule().default)];
Module.prototype = {
	__registerLimeModule: function(application) {
	},
	__unregisterLimeModule: function(application) {
	}
};
Module.prototype.__class__ = Module.prototype.constructor = $hxClasses["lime.app.Module"] = Module;

// Init



// Statics




// Export

exports.default = Module;