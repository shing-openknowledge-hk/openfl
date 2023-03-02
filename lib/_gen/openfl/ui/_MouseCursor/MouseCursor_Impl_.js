// Class: openfl.ui._MouseCursor.MouseCursor_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_ui_MouseCursor() {return require("./../../../lime/ui/MouseCursor");}

// Constructor

var MouseCursor_Impl_ = function(){}

// Meta

MouseCursor_Impl_.__name__ = "openfl.ui._MouseCursor.MouseCursor_Impl_";
MouseCursor_Impl_.__isInterface__ = false;
MouseCursor_Impl_.prototype = {
	
};
MouseCursor_Impl_.prototype.__class__ = MouseCursor_Impl_.prototype.constructor = $hxClasses["openfl.ui._MouseCursor.MouseCursor_Impl_"] = MouseCursor_Impl_;

// Init



// Statics

MouseCursor_Impl_.fromLimeCursor = function(cursor) {
	switch(cursor._hx_index) {
	case 0:
		return "arrow";
	case 1:
		return "crosshair";
	case 2:
		return "auto";
	case 3:
		return "hand";
	case 4:
		return "button";
	case 5:
		return "resize_nesw";
	case 6:
		return "resize_ns";
	case 7:
		return "resize_nwse";
	case 8:
		return "resize_we";
	case 9:
		return "ibeam";
	case 10:
		return "wait";
	case 11:
		return "waitarrow";
	case 12:
		return "custom";
	}
}
MouseCursor_Impl_.toLimeCursor = function(this1) {
	switch(this1) {
	case "arrow":
		return (lime_ui_MouseCursor().default).ARROW;
	case "auto":
		return (lime_ui_MouseCursor().default).DEFAULT;
	case "button":
		return (lime_ui_MouseCursor().default).POINTER;
	case "crosshair":
		return (lime_ui_MouseCursor().default).CROSSHAIR;
	case "custom":
		return (lime_ui_MouseCursor().default).CUSTOM;
	case "hand":
		return (lime_ui_MouseCursor().default).MOVE;
	case "ibeam":
		return (lime_ui_MouseCursor().default).TEXT;
	case "resize_nesw":
		return (lime_ui_MouseCursor().default).RESIZE_NESW;
	case "resize_ns":
		return (lime_ui_MouseCursor().default).RESIZE_NS;
	case "resize_nwse":
		return (lime_ui_MouseCursor().default).RESIZE_NWSE;
	case "resize_we":
		return (lime_ui_MouseCursor().default).RESIZE_WE;
	case "wait":
		return (lime_ui_MouseCursor().default).WAIT;
	case "waitarrow":
		return (lime_ui_MouseCursor().default).WAIT_ARROW;
	default:
		return (lime_ui_MouseCursor().default).DEFAULT;
	}
}
MouseCursor_Impl_.ARROW = "arrow"
MouseCursor_Impl_.AUTO = "auto"
MouseCursor_Impl_.BUTTON = "button"
MouseCursor_Impl_.HAND = "hand"
MouseCursor_Impl_.IBEAM = "ibeam"
MouseCursor_Impl_.__CROSSHAIR = "crosshair"
MouseCursor_Impl_.__CUSTOM = "custom"
MouseCursor_Impl_.__MOVE = "move"
MouseCursor_Impl_.__RESIZE_NESW = "resize_nesw"
MouseCursor_Impl_.__RESIZE_NS = "resize_ns"
MouseCursor_Impl_.__RESIZE_NWSE = "resize_nwse"
MouseCursor_Impl_.__RESIZE_WE = "resize_we"
MouseCursor_Impl_.__WAIT = "wait"
MouseCursor_Impl_.__WAIT_ARROW = "waitarrow"

// Export

exports.default = MouseCursor_Impl_;