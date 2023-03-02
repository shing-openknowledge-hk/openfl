// Class: lime.system.Clipboard

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_app__$Event_$Void_$Void() {return require("./../../lime/app/_Event_Void_Void");}
function lime_app_Application() {return require("./../../lime/app/Application");}

// Constructor

var Clipboard = function(){}

// Meta

Clipboard.__name__ = "lime.system.Clipboard";
Clipboard.__isInterface__ = false;
Clipboard.prototype = {
	
};
Clipboard.prototype.__class__ = Clipboard.prototype.constructor = $hxClasses["lime.system.Clipboard"] = Clipboard;

// Init



// Statics

Clipboard.__update = function() {
	var cacheText = Clipboard._text;
	Clipboard._text = null;
	if(Clipboard._text != cacheText) {
		Clipboard.onUpdate.dispatch();
	}
}
Clipboard.get_text = function() {
	Clipboard.__update();
	return Clipboard._text;
}
Clipboard.set_text = function(value) {
	var cacheText = Clipboard._text;
	Clipboard._text = value;
	var $window = (lime_app_Application().default).current.get_window();
	if($window != null) {
		$window.__backend.setClipboard(value);
	}
	if(Clipboard._text != cacheText) {
		Clipboard.onUpdate.dispatch();
	}
	return value;
}
Clipboard.onUpdate = new (lime_app__$Event_$Void_$Void().default)()

// Export

exports.default = Clipboard;