// Class: openfl.utils.Timer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function Std() {return require("./../../Std");}
function openfl_events_TimerEvent() {return require("./../../openfl/events/TimerEvent");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_errors_Error() {return require("./../../openfl/errors/Error");}

// Constructor

var Timer = function(delay,repeatCount) {
	if(repeatCount == null) {
		repeatCount = 0;
	}
	if(isNaN(delay) || delay < 0) {
		throw new (js__$Boot_HaxeError().default)(new (openfl_errors_Error().default)("The delay specified is negative or not a finite number"));
	}
	(openfl_events_EventDispatcher().default).call(this);
	this.__delay = delay;
	this.__repeatCount = repeatCount;
	this.running = false;
	this.currentCount = 0;
}

// Meta

Timer.__name__ = "openfl.utils.Timer";
Timer.__isInterface__ = false;
Timer.__super__ = (openfl_events_EventDispatcher().default);
Timer.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	reset: function() {
		if(this.running) {
			this.stop();
		}
		this.currentCount = 0;
	},
	start: function() {
		if(!this.running) {
			this.running = true;
			this.__timerID = window.setInterval($bind(this,this.timer_onTimer),(Std().default).int(this.__delay));
		}
	},
	stop: function() {
		this.running = false;
		if(this.__timerID != null) {
			window.clearInterval(this.__timerID);
			this.__timerID = null;
		}
	},
	get_delay: function() {
		return this.__delay;
	},
	set_delay: function(value) {
		this.__delay = value;
		if(this.running) {
			this.stop();
			this.start();
		}
		return this.__delay;
	},
	get_repeatCount: function() {
		return this.__repeatCount;
	},
	set_repeatCount: function(v) {
		if(this.running && v != 0 && v <= this.currentCount) {
			this.stop();
		}
		return this.__repeatCount = v;
	},
	timer_onTimer: function() {
		this.currentCount++;
		if(this.__repeatCount > 0 && this.currentCount >= this.__repeatCount) {
			this.stop();
			this.dispatchEvent(new (openfl_events_TimerEvent().default)("timer"));
			this.dispatchEvent(new (openfl_events_TimerEvent().default)("timerComplete"));
		} else {
			this.dispatchEvent(new (openfl_events_TimerEvent().default)("timer"));
		}
	}
});
Timer.prototype.__class__ = Timer.prototype.constructor = $hxClasses["openfl.utils.Timer"] = Timer;

// Init

{
	var p = Timer.prototype;
	global.Object.defineProperties(p,{ delay : { get : p.get_delay, set : p.set_delay}, repeatCount : { get : p.get_repeatCount, set : p.set_repeatCount}});
};

// Statics




// Export

exports.default = Timer;