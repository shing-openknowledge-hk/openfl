// Class: lime.app._Event_lime_graphics_RenderContext_Void

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function Reflect() {return require("./../../Reflect");}

// Constructor

var _Event_lime_graphics_RenderContext_Void = function() {
	this.canceled = false;
	this.__listeners = [];
	this.__priorities = [];
	this.__repeat = [];
}

// Meta

_Event_lime_graphics_RenderContext_Void.__name__ = "lime.app._Event_lime_graphics_RenderContext_Void";
_Event_lime_graphics_RenderContext_Void.__isInterface__ = false;
_Event_lime_graphics_RenderContext_Void.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) {
			priority = 0;
		}
		if(once == null) {
			once = false;
		}
		var _g = 0;
		var _g1 = this.__priorities.length;
		while(_g < _g1) {
			var i = _g++;
			if(priority > this.__priorities[i]) {
				this.__listeners.splice(i,0,listener);
				this.__priorities.splice(i,0,priority);
				this.__repeat.splice(i,0,!once);
				return;
			}
		}
		this.__listeners.push(listener);
		this.__priorities.push(priority);
		this.__repeat.push(!once);
	},
	cancel: function() {
		this.canceled = true;
	},
	has: function(listener) {
		var _g = 0;
		var _g1 = this.__listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if((Reflect().default).compareMethods(l,listener)) {
				return true;
			}
		}
		return false;
	},
	remove: function(listener) {
		var i = this.__listeners.length;
		while(--i >= 0) if((Reflect().default).compareMethods(this.__listeners[i],listener)) {
			this.__listeners.splice(i,1);
			this.__priorities.splice(i,1);
			this.__repeat.splice(i,1);
		}
	},
	dispatch: function(a) {
		this.canceled = false;
		var listeners = this.__listeners;
		var repeat = this.__repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](a);
			if(!repeat[i]) {
				this.remove(listeners[i]);
			} else {
				++i;
			}
			if(this.canceled) {
				break;
			}
		}
	}
};
_Event_lime_graphics_RenderContext_Void.prototype.__class__ = _Event_lime_graphics_RenderContext_Void.prototype.constructor = $hxClasses["lime.app._Event_lime_graphics_RenderContext_Void"] = _Event_lime_graphics_RenderContext_Void;

// Init



// Statics




// Export

exports.default = _Event_lime_graphics_RenderContext_Void;