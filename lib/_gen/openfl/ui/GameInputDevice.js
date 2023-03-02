// Class: openfl.ui.GameInputDevice

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}
function openfl_ui_GameInputControl() {return require("./../../openfl/ui/GameInputControl");}

// Constructor

var GameInputDevice = function(id,name) {
	this.__controls = [];
	this.__button = new (haxe_ds_IntMap().default)();
	this.__axis = new (haxe_ds_IntMap().default)();
	this.id = id;
	this.name = name;
	var control;
	control = new (openfl_ui_GameInputControl().default)(this,"AXIS_" + 0,-1,1);
	this.__axis.set(0,control);
	this.__controls.push(control);
	control = new (openfl_ui_GameInputControl().default)(this,"AXIS_" + 1,-1,1);
	this.__axis.set(1,control);
	this.__controls.push(control);
	control = new (openfl_ui_GameInputControl().default)(this,"AXIS_" + 2,-1,1);
	this.__axis.set(2,control);
	this.__controls.push(control);
	control = new (openfl_ui_GameInputControl().default)(this,"AXIS_" + 3,-1,1);
	this.__axis.set(3,control);
	this.__controls.push(control);
	control = new (openfl_ui_GameInputControl().default)(this,"AXIS_" + 4,-1,1);
	this.__axis.set(4,control);
	this.__controls.push(control);
	control = new (openfl_ui_GameInputControl().default)(this,"AXIS_" + 5,-1,1);
	this.__axis.set(5,control);
	this.__controls.push(control);
	var _g = 0;
	while(_g < 15) {
		var i = _g++;
		control = new (openfl_ui_GameInputControl().default)(this,"BUTTON_" + i,0,1);
		this.__button.set(i,control);
		this.__controls.push(control);
	}
}

// Meta

GameInputDevice.__name__ = "openfl.ui.GameInputDevice";
GameInputDevice.__isInterface__ = false;
GameInputDevice.prototype = {
	getCachedSamples: function(data,append) {
		if(append == null) {
			append = false;
		}
		return 0;
	},
	getControlAt: function(i) {
		if(i >= 0 && i < this.__controls.length) {
			return this.__controls[i];
		}
		return null;
	},
	startCachingSamples: function(numSamples,controls) {
	},
	stopCachingSamples: function() {
	},
	get_numControls: function() {
		return this.__controls.length;
	}
};
GameInputDevice.prototype.__class__ = GameInputDevice.prototype.constructor = $hxClasses["openfl.ui.GameInputDevice"] = GameInputDevice;

// Init

Object.defineProperties(GameInputDevice.prototype,{ numControls : { get : function () { return this.get_numControls (); }}});

// Statics


GameInputDevice.MAX_BUFFER_SIZE = 32000

// Export

exports.default = GameInputDevice;