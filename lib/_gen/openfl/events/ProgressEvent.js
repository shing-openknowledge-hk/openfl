// Class: openfl.events.ProgressEvent

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

var ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) {
		bytesTotal = 0;
	}
	if(bytesLoaded == null) {
		bytesLoaded = 0;
	}
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
}

// Meta

ProgressEvent.__name__ = "openfl.events.ProgressEvent";
ProgressEvent.__isInterface__ = false;
ProgressEvent.__super__ = (openfl_events_Event().default);
ProgressEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new ProgressEvent(this.type,this.bubbles,this.cancelable,this.bytesLoaded,this.bytesTotal);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("ProgressEvent",["type","bubbles","cancelable","bytesLoaded","bytesTotal"]);
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		this.bytesLoaded = 0;
		this.bytesTotal = 0;
	}
});
ProgressEvent.prototype.__class__ = ProgressEvent.prototype.constructor = $hxClasses["openfl.events.ProgressEvent"] = ProgressEvent;

// Init



// Statics


ProgressEvent.PROGRESS = "progress"
ProgressEvent.SOCKET_DATA = "socketData"
ProgressEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new ProgressEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = ProgressEvent;