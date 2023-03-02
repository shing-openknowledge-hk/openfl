// Class: openfl.ui.GameInputControl

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}

// Constructor

var GameInputControl = function(device,id,minValue,maxValue,value) {
	if(value == null) {
		value = 0;
	}
	(openfl_events_EventDispatcher().default).call(this);
	this.device = device;
	this.id = id;
	this.minValue = minValue;
	this.maxValue = maxValue;
	this.value = value;
}

// Meta

GameInputControl.__name__ = "openfl.ui.GameInputControl";
GameInputControl.__isInterface__ = false;
GameInputControl.__super__ = (openfl_events_EventDispatcher().default);
GameInputControl.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	
});
GameInputControl.prototype.__class__ = GameInputControl.prototype.constructor = $hxClasses["openfl.ui.GameInputControl"] = GameInputControl;

// Init



// Statics




// Export

exports.default = GameInputControl;