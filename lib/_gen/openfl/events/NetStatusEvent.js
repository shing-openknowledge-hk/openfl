// Class: openfl.events.NetStatusEvent

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

var NetStatusEvent = function(type,bubbles,cancelable,info) {
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	this.info = info;
	(openfl_events_Event().default).call(this,type,bubbles,cancelable);
}

// Meta

NetStatusEvent.__name__ = "openfl.events.NetStatusEvent";
NetStatusEvent.__isInterface__ = false;
NetStatusEvent.__super__ = (openfl_events_Event().default);
NetStatusEvent.prototype = $extend((openfl_events_Event().default).prototype, {
	clone: function() {
		var event = new NetStatusEvent(this.type,this.bubbles,this.cancelable,this.info);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	},
	toString: function() {
		return this.__formatToString("NetStatusEvent",["type","bubbles","cancelable","info"]);
	},
	__init: function() {
		(openfl_events_Event().default).prototype.__init.call(this);
		this.info = null;
	}
});
NetStatusEvent.prototype.__class__ = NetStatusEvent.prototype.constructor = $hxClasses["openfl.events.NetStatusEvent"] = NetStatusEvent;

// Init



// Statics


NetStatusEvent.NET_STATUS = "netStatus"
NetStatusEvent.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new NetStatusEvent(null);
},function(event) {
	event.__init();
})

// Export

exports.default = NetStatusEvent;