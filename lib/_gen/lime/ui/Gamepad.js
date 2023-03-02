// Class: lime.ui.Gamepad

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_ui_Joystick() {return require("./../../lime/ui/Joystick");}
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}
function lime_app__$Event_$lime_$ui_$Gamepad_$Void() {return require("./../../lime/app/_Event_lime_ui_Gamepad_Void");}
function lime_app__$Event_$Void_$Void() {return require("./../../lime/app/_Event_Void_Void");}
function lime_app__$Event_$lime_$ui_$GamepadButton_$Void() {return require("./../../lime/app/_Event_lime_ui_GamepadButton_Void");}
function lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void() {return require("./../../lime/app/_Event_lime_ui_GamepadAxis_Float_Void");}

// Constructor

var Gamepad = function(id) {
	this.onDisconnect = new (lime_app__$Event_$Void_$Void().default)();
	this.onButtonUp = new (lime_app__$Event_$lime_$ui_$GamepadButton_$Void().default)();
	this.onButtonDown = new (lime_app__$Event_$lime_$ui_$GamepadButton_$Void().default)();
	this.onAxisMove = new (lime_app__$Event_$lime_$ui_$GamepadAxis_$Float_$Void().default)();
	this.id = id;
	this.connected = true;
}

// Meta

Gamepad.__name__ = "lime.ui.Gamepad";
Gamepad.__isInterface__ = false;
Gamepad.prototype = {
	get_guid: function() {
		var devices = (lime_ui_Joystick().default).__getDeviceData();
		return devices[this.id].id;
	},
	get_name: function() {
		var devices = (lime_ui_Joystick().default).__getDeviceData();
		return devices[this.id].id;
	}
};
Gamepad.prototype.__class__ = Gamepad.prototype.constructor = $hxClasses["lime.ui.Gamepad"] = Gamepad;

// Init



// Statics

Gamepad.addMappings = function(mappings) {
}
Gamepad.__connect = function(id) {
	if(!Gamepad.devices.exists(id)) {
		var gamepad = new Gamepad(id);
		Gamepad.devices.set(id,gamepad);
		Gamepad.onConnect.dispatch(gamepad);
	}
}
Gamepad.__disconnect = function(id) {
	var gamepad = Gamepad.devices.get(id);
	if(gamepad != null) {
		gamepad.connected = false;
	}
	Gamepad.devices.remove(id);
	if(gamepad != null) {
		gamepad.onDisconnect.dispatch();
	}
}
Gamepad.devices = new (haxe_ds_IntMap().default)()
Gamepad.onConnect = new (lime_app__$Event_$lime_$ui_$Gamepad_$Void().default)()

// Export

exports.default = Gamepad;