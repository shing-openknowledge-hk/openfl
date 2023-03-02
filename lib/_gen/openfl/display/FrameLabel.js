// Class: openfl.display.FrameLabel

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

var FrameLabel = function(name,frame) {
	(openfl_events_EventDispatcher().default).call(this);
	this.__name = name;
	this.__frame = frame;
}

// Meta

FrameLabel.__name__ = "openfl.display.FrameLabel";
FrameLabel.__isInterface__ = false;
FrameLabel.__super__ = (openfl_events_EventDispatcher().default);
FrameLabel.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	get_frame: function() {
		return this.__frame;
	},
	get_name: function() {
		return this.__name;
	}
});
FrameLabel.prototype.__class__ = FrameLabel.prototype.constructor = $hxClasses["openfl.display.FrameLabel"] = FrameLabel;

// Init

{
	Object.defineProperty(FrameLabel.prototype,"frame",{ get : function () { return this.get_frame (); }});
	Object.defineProperty(FrameLabel.prototype,"name",{ get : function () { return this.get_name (); }});
};

// Statics




// Export

exports.default = FrameLabel;