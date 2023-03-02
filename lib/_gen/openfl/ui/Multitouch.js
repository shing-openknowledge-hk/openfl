// Class: openfl.ui.Multitouch

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var Multitouch = function(){}

// Meta

Multitouch.__name__ = "openfl.ui.Multitouch";
Multitouch.__isInterface__ = false;
Multitouch.prototype = {
	
};
Multitouch.prototype.__class__ = Multitouch.prototype.constructor = $hxClasses["openfl.ui.Multitouch"] = Multitouch;

// Init

{
	Multitouch.maxTouchPoints = 2;
	Multitouch.supportedGestures = null;
	Multitouch.supportsGestureEvents = false;
	Multitouch.inputMode = "touchPoint";
	Object.defineProperties(Multitouch,{ supportsTouchEvents : { get : function() {
		return Multitouch.get_supportsTouchEvents();
	}}});
};

// Statics

Multitouch.get_supportsTouchEvents = function() {
	if(('ontouchstart' in document.documentElement) || (window.DocumentTouch && document instanceof DocumentTouch)) {
		return true;
	}
	return false;
}


// Export

exports.default = Multitouch;