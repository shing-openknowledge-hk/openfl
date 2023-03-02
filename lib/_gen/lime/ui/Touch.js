// Class: lime.ui.Touch

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_app__$Event_$lime_$ui_$Touch_$Void() {return require("./../../lime/app/_Event_lime_ui_Touch_Void");}

// Constructor

var Touch = function(x,y,id,dx,dy,pressure,device) {
	this.x = x;
	this.y = y;
	this.id = id;
	this.dx = dx;
	this.dy = dy;
	this.pressure = pressure;
	this.device = device;
}

// Meta

Touch.__name__ = "lime.ui.Touch";
Touch.__isInterface__ = false;
Touch.prototype = {
	
};
Touch.prototype.__class__ = Touch.prototype.constructor = $hxClasses["lime.ui.Touch"] = Touch;

// Init



// Statics


Touch.onCancel = new (lime_app__$Event_$lime_$ui_$Touch_$Void().default)()
Touch.onEnd = new (lime_app__$Event_$lime_$ui_$Touch_$Void().default)()
Touch.onMove = new (lime_app__$Event_$lime_$ui_$Touch_$Void().default)()
Touch.onStart = new (lime_app__$Event_$lime_$ui_$Touch_$Void().default)()

// Export

exports.default = Touch;