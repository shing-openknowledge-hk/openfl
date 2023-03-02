// Class: openfl.ui.Mouse

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_app_Application() {return require("./../../lime/app/Application");}
function lime_ui_MouseCursor() {return require("./../../lime/ui/MouseCursor");}

// Constructor

var Mouse = function(){}

// Meta

Mouse.__name__ = "openfl.ui.Mouse";
Mouse.__isInterface__ = false;
Mouse.prototype = {
	
};
Mouse.prototype.__class__ = Mouse.prototype.constructor = $hxClasses["openfl.ui.Mouse"] = Mouse;

// Init

Object.defineProperty(Mouse,"cursor",{ get : function() {
	return Mouse.get_cursor();
}, set : function(value) {
	return Mouse.set_cursor(value);
}});

// Statics

Mouse.hide = function() {
	Mouse.__hidden = true;
	var _g = 0;
	var _g1 = (lime_app_Application().default).current.get_windows();
	while(_g < _g1.length) {
		var $window = _g1[_g];
		++_g;
		$window.set_cursor(null);
	}
}
Mouse.show = function() {
	Mouse.__hidden = false;
	var cacheCursor = Mouse.__cursor;
	Mouse.__cursor = null;
	Mouse.set_cursor(cacheCursor);
}
Mouse.get_cursor = function() {
	return Mouse.__cursor;
}
Mouse.set_cursor = function(value) {
	if(value == null) {
		value = "auto";
	}
	var setCursor = null;
	switch(value) {
	case "arrow":
		setCursor = (lime_ui_MouseCursor().default).ARROW;
		break;
	case "button":
		setCursor = (lime_ui_MouseCursor().default).POINTER;
		break;
	case "crosshair":
		setCursor = (lime_ui_MouseCursor().default).CROSSHAIR;
		break;
	case "custom":
		setCursor = (lime_ui_MouseCursor().default).CUSTOM;
		break;
	case "hand":
		setCursor = (lime_ui_MouseCursor().default).MOVE;
		break;
	case "ibeam":
		setCursor = (lime_ui_MouseCursor().default).TEXT;
		break;
	case "resize_nesw":
		setCursor = (lime_ui_MouseCursor().default).RESIZE_NESW;
		break;
	case "resize_ns":
		setCursor = (lime_ui_MouseCursor().default).RESIZE_NS;
		break;
	case "resize_nwse":
		setCursor = (lime_ui_MouseCursor().default).RESIZE_NWSE;
		break;
	case "resize_we":
		setCursor = (lime_ui_MouseCursor().default).RESIZE_WE;
		break;
	case "wait":
		setCursor = (lime_ui_MouseCursor().default).WAIT;
		break;
	case "waitarrow":
		setCursor = (lime_ui_MouseCursor().default).WAIT_ARROW;
		break;
	default:
	}
	if(setCursor != null && !Mouse.__hidden) {
		var _g = 0;
		var _g1 = (lime_app_Application().default).current.get_windows();
		while(_g < _g1.length) {
			var $window = _g1[_g];
			++_g;
			$window.set_cursor(setCursor);
		}
	}
	return Mouse.__cursor = value;
}
Mouse.supportsCursor = true
Mouse.supportsNativeCursor = true
Mouse.__cursor = "auto"

// Export

exports.default = Mouse;