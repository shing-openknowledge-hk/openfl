// Class: lime.ui.Joystick

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}
function lime_app__$Event_$lime_$ui_$Joystick_$Void() {return require("./../../lime/app/_Event_lime_ui_Joystick_Void");}
function lime_app__$Event_$Int_$Float_$Float_$Void() {return require("./../../lime/app/_Event_Int_Float_Float_Void");}
function lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void() {return require("./../../lime/app/_Event_Int_lime_ui_JoystickHatPosition_Void");}
function lime_app__$Event_$Void_$Void() {return require("./../../lime/app/_Event_Void_Void");}
function lime_app__$Event_$Int_$Void() {return require("./../../lime/app/_Event_Int_Void");}
function lime_app__$Event_$Int_$Float_$Void() {return require("./../../lime/app/_Event_Int_Float_Void");}

// Constructor

var Joystick = function(id) {
	this.onTrackballMove = new (lime_app__$Event_$Int_$Float_$Float_$Void().default)();
	this.onHatMove = new (lime_app__$Event_$Int_$lime_$ui_$JoystickHatPosition_$Void().default)();
	this.onDisconnect = new (lime_app__$Event_$Void_$Void().default)();
	this.onButtonUp = new (lime_app__$Event_$Int_$Void().default)();
	this.onButtonDown = new (lime_app__$Event_$Int_$Void().default)();
	this.onAxisMove = new (lime_app__$Event_$Int_$Float_$Void().default)();
	this.id = id;
	this.connected = true;
}

// Meta

Joystick.__name__ = "lime.ui.Joystick";
Joystick.__isInterface__ = false;
Joystick.prototype = {
	get_guid: function() {
		var devices = Joystick.__getDeviceData();
		return devices[this.id].id;
	},
	get_name: function() {
		var devices = Joystick.__getDeviceData();
		return devices[this.id].id;
	},
	get_numAxes: function() {
		var devices = Joystick.__getDeviceData();
		return devices[this.id].axes.length;
	},
	get_numButtons: function() {
		var devices = Joystick.__getDeviceData();
		return devices[this.id].buttons.length;
	},
	get_numHats: function() {
		return 0;
	},
	get_numTrackballs: function() {
		return 0;
	}
};
Joystick.prototype.__class__ = Joystick.prototype.constructor = $hxClasses["lime.ui.Joystick"] = Joystick;

// Init



// Statics

Joystick.__connect = function(id) {
	if(!Joystick.devices.exists(id)) {
		var joystick = new Joystick(id);
		Joystick.devices.set(id,joystick);
		Joystick.onConnect.dispatch(joystick);
	}
}
Joystick.__disconnect = function(id) {
	var joystick = Joystick.devices.get(id);
	if(joystick != null) {
		joystick.connected = false;
	}
	Joystick.devices.remove(id);
	if(joystick != null) {
		joystick.onDisconnect.dispatch();
	}
}
Joystick.__getDeviceData = function() {
	if(navigator.getGamepads) {
		return navigator.getGamepads();
	} else if(navigator.webkitGetGamepads) {
		return navigator.webkitGetGamepads();
	} else {
		return null;
	}
}
Joystick.devices = new (haxe_ds_IntMap().default)()
Joystick.onConnect = new (lime_app__$Event_$lime_$ui_$Joystick_$Void().default)()

// Export

exports.default = Joystick;