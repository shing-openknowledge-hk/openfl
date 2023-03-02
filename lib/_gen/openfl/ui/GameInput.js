// Class: openfl.ui.GameInput

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function openfl_events_GameInputEvent() {return require("./../../openfl/events/GameInputEvent");}
function haxe_ds_ObjectMap() {return require("./../../haxe/ds/ObjectMap");}
function openfl_ui_GameInputDevice() {return require("./../../openfl/ui/GameInputDevice");}
function openfl_ui_GameInputControl() {return require("./../../openfl/ui/GameInputControl");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function HxOverrides() {return require("./../../HxOverrides");}

// Constructor

var GameInput = function() {
	(openfl_events_EventDispatcher().default).call(this);
	GameInput.__instances.push(this);
}

// Meta

GameInput.__name__ = "openfl.ui.GameInput";
GameInput.__isInterface__ = false;
GameInput.__super__ = (openfl_events_EventDispatcher().default);
GameInput.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) {
			useWeakReference = false;
		}
		if(priority == null) {
			priority = 0;
		}
		if(useCapture == null) {
			useCapture = false;
		}
		(openfl_events_EventDispatcher().default).prototype.addEventListener.call(this,type,listener,useCapture,priority,useWeakReference);
		if(type == "deviceAdded") {
			var _g = 0;
			var _g1 = GameInput.__deviceList;
			while(_g < _g1.length) {
				var device = _g1[_g];
				++_g;
				this.dispatchEvent(new (openfl_events_GameInputEvent().default)("deviceAdded",true,false,device));
			}
		}
	}
});
GameInput.prototype.__class__ = GameInput.prototype.constructor = $hxClasses["openfl.ui.GameInput"] = GameInput;

// Init



// Statics

GameInput.getDeviceAt = function(index) {
	if(index >= 0 && index < GameInput.__deviceList.length) {
		return GameInput.__deviceList[index];
	}
	return null;
}
GameInput.__getDevice = function(gamepad) {
	if(gamepad == null) {
		return null;
	}
	if(!GameInput.__devices.exists(gamepad)) {
		var device = new (openfl_ui_GameInputDevice().default)(gamepad.get_guid(),gamepad.get_name());
		GameInput.__deviceList.push(device);
		GameInput.__devices.set(gamepad,device);
		GameInput.numDevices = GameInput.__deviceList.length;
	}
	return GameInput.__devices.get(gamepad);
}
GameInput.__onGamepadAxisMove = function(gamepad,axis,value) {
	var device = GameInput.__getDevice(gamepad);
	if(device == null) {
		return;
	}
	if(device.enabled) {
		if(!device.__axis.exists(axis)) {
			var control;
			switch(axis) {
			case 0:
				control = "LEFT_X";
				break;
			case 1:
				control = "LEFT_Y";
				break;
			case 2:
				control = "RIGHT_X";
				break;
			case 3:
				control = "RIGHT_Y";
				break;
			case 4:
				control = "TRIGGER_LEFT";
				break;
			case 5:
				control = "TRIGGER_RIGHT";
				break;
			default:
				control = "UNKNOWN (" + axis + ")";
			}
			var control1 = new (openfl_ui_GameInputControl().default)(device,"AXIS_" + control,-1,1);
			device.__axis.set(axis,control1);
			device.__controls.push(control1);
		}
		var control2 = device.__axis.get(axis);
		control2.value = value;
		control2.dispatchEvent(new (openfl_events_Event().default)("change"));
	}
}
GameInput.__onGamepadButtonDown = function(gamepad,button) {
	var device = GameInput.__getDevice(gamepad);
	if(device == null) {
		return;
	}
	if(device.enabled) {
		if(!device.__button.exists(button)) {
			var control;
			switch(button) {
			case 0:
				control = "A";
				break;
			case 1:
				control = "B";
				break;
			case 2:
				control = "X";
				break;
			case 3:
				control = "Y";
				break;
			case 4:
				control = "BACK";
				break;
			case 5:
				control = "GUIDE";
				break;
			case 6:
				control = "START";
				break;
			case 7:
				control = "LEFT_STICK";
				break;
			case 8:
				control = "RIGHT_STICK";
				break;
			case 9:
				control = "LEFT_SHOULDER";
				break;
			case 10:
				control = "RIGHT_SHOULDER";
				break;
			case 11:
				control = "DPAD_UP";
				break;
			case 12:
				control = "DPAD_DOWN";
				break;
			case 13:
				control = "DPAD_LEFT";
				break;
			case 14:
				control = "DPAD_RIGHT";
				break;
			default:
				control = "UNKNOWN (" + button + ")";
			}
			var control1 = new (openfl_ui_GameInputControl().default)(device,"BUTTON_" + control,0,1);
			device.__button.set(button,control1);
			device.__controls.push(control1);
		}
		var control2 = device.__button.get(button);
		control2.value = 1;
		control2.dispatchEvent(new (openfl_events_Event().default)("change"));
	}
}
GameInput.__onGamepadButtonUp = function(gamepad,button) {
	var device = GameInput.__getDevice(gamepad);
	if(device == null) {
		return;
	}
	if(device.enabled) {
		if(!device.__button.exists(button)) {
			var control;
			switch(button) {
			case 0:
				control = "A";
				break;
			case 1:
				control = "B";
				break;
			case 2:
				control = "X";
				break;
			case 3:
				control = "Y";
				break;
			case 4:
				control = "BACK";
				break;
			case 5:
				control = "GUIDE";
				break;
			case 6:
				control = "START";
				break;
			case 7:
				control = "LEFT_STICK";
				break;
			case 8:
				control = "RIGHT_STICK";
				break;
			case 9:
				control = "LEFT_SHOULDER";
				break;
			case 10:
				control = "RIGHT_SHOULDER";
				break;
			case 11:
				control = "DPAD_UP";
				break;
			case 12:
				control = "DPAD_DOWN";
				break;
			case 13:
				control = "DPAD_LEFT";
				break;
			case 14:
				control = "DPAD_RIGHT";
				break;
			default:
				control = "UNKNOWN (" + button + ")";
			}
			var control1 = new (openfl_ui_GameInputControl().default)(device,"BUTTON_" + control,0,1);
			device.__button.set(button,control1);
			device.__controls.push(control1);
		}
		var control2 = device.__button.get(button);
		control2.value = 0;
		control2.dispatchEvent(new (openfl_events_Event().default)("change"));
	}
}
GameInput.__onGamepadConnect = function(gamepad) {
	var device = GameInput.__getDevice(gamepad);
	if(device == null) {
		return;
	}
	var _g = 0;
	var _g1 = GameInput.__instances;
	while(_g < _g1.length) {
		var instance = _g1[_g];
		++_g;
		instance.dispatchEvent(new (openfl_events_GameInputEvent().default)("deviceAdded",true,false,device));
	}
}
GameInput.__onGamepadDisconnect = function(gamepad) {
	var device = GameInput.__devices.get(gamepad);
	if(device != null) {
		if(GameInput.__devices.exists(gamepad)) {
			(HxOverrides().default).remove(GameInput.__deviceList,GameInput.__devices.get(gamepad));
			GameInput.__devices.remove(gamepad);
		}
		GameInput.numDevices = GameInput.__deviceList.length;
		var _g = 0;
		var _g1 = GameInput.__instances;
		while(_g < _g1.length) {
			var instance = _g1[_g];
			++_g;
			instance.dispatchEvent(new (openfl_events_GameInputEvent().default)("deviceRemoved",true,false,device));
		}
	}
}
GameInput.__meta__ = { fields : { addEventListener : { SuppressWarnings : ["checkstyle:Dynamic"]}}}
GameInput.isSupported = true
GameInput.numDevices = 0
GameInput.__deviceList = []
GameInput.__instances = []
GameInput.__devices = new (haxe_ds_ObjectMap().default)()

// Export

exports.default = GameInput;