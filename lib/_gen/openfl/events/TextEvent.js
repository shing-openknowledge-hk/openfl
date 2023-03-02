// Class: openfl.events.TextEvent

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}

// Constructor

var TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) {
		text = "";
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
	this.text = text;
}

// Meta

TextEvent.__name__ = "openfl.events.TextEvent";
TextEvent.__isInterface__ = false;
TextEvent.__super__ = (openfl_events_Event().default);
TextEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new TextEvent(this.type,this.bubbles,this.cancelable,this.text);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("TextEvent",["type","bubbles","cancelable","text"]);
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		this.text = "";
	}
});
TextEvent.prototype.__class__ = TextEvent.prototype.constructor = $hxClasses["openfl.events.TextEvent"] = TextEvent;

// Init



// Statics


TextEvent.LINK = "link"
TextEvent.TEXT_INPUT = "textInput"
TextEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new TextEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = TextEvent;