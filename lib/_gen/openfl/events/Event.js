// Class: openfl.events.Event

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
function Reflect() {return require("./../../Reflect");}
function Std() {return require("./../../Std");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}

// Constructor

var Event = function(type,bubbles,cancelable) {
	if(cancelable == null) {
		cancelable = false;
	}
	if(bubbles == null) {
		bubbles = false;
	}
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	this.eventPhase = 2;
}

// Meta

Event.__name__ = "openfl.events.Event";
Event.__isInterface__ = false;
Event.prototype = {
	clone: function() {
		var event = new Event(this.type,this.bubbles,this.cancelable);
		event.eventPhase = this.eventPhase;
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		return event;
	},
	formatToString: function(className,p1,p2,p3,p4,p5) {
		var parameters = [];
		if(p1 != null) {
			parameters.push(p1);
		}
		if(p2 != null) {
			parameters.push(p2);
		}
		if(p3 != null) {
			parameters.push(p3);
		}
		if(p4 != null) {
			parameters.push(p4);
		}
		if(p5 != null) {
			parameters.push(p5);
		}
		return (Reflect().default).callMethod(this,$bind(this,this.__formatToString),[className,parameters]);
	},
	isDefaultPrevented: function() {
		return this.__preventDefault;
	},
	preventDefault: function() {
		if(this.cancelable) {
			this.__preventDefault = true;
		}
	},
	stopImmediatePropagation: function() {
		this.__isCanceled = true;
		this.__isCanceledNow = true;
	},
	stopPropagation: function() {
		this.__isCanceled = true;
	},
	toString: function() {
		return this.__formatToString("Event",["type","bubbles","cancelable"]);
	},
	__formatToString: function(className,parameters) {
		var output = "[" + className;
		var arg = null;
		var _g = 0;
		while(_g < parameters.length) {
			var param = parameters[_g];
			++_g;
			arg = (Reflect().default).field(this,param);
			if(typeof(arg) == "string") {
				output += " " + param + "=\"" + (Std().default).string(arg) + "\"";
			} else {
				output += " " + param + "=" + (Std().default).string(arg);
			}
		}
		output += "]";
		return output;
	},
	__init: function() {
		this.target = null;
		this.currentTarget = null;
		this.bubbles = false;
		this.cancelable = false;
		this.eventPhase = 2;
		this.__isCanceled = false;
		this.__isCanceledNow = false;
		this.__preventDefault = false;
	}
};
Event.prototype.__class__ = Event.prototype.constructor = $hxClasses["openfl.events.Event"] = Event;

// Init



// Statics


Event.ACTIVATE = "activate"
Event.ADDED = "added"
Event.ADDED_TO_STAGE = "addedToStage"
Event.CANCEL = "cancel"
Event.CHANGE = "change"
Event.CLEAR = "clear"
Event.CLOSE = "close"
Event.COMPLETE = "complete"
Event.CONNECT = "connect"
Event.CONTEXT3D_CREATE = "context3DCreate"
Event.COPY = "copy"
Event.CUT = "cut"
Event.DEACTIVATE = "deactivate"
Event.ENTER_FRAME = "enterFrame"
Event.EXIT_FRAME = "exitFrame"
Event.FRAME_CONSTRUCTED = "frameConstructed"
Event.FRAME_LABEL = "frameLabel"
Event.FULLSCREEN = "fullScreen"
Event.ID3 = "id3"
Event.INIT = "init"
Event.MOUSE_LEAVE = "mouseLeave"
Event.OPEN = "open"
Event.PASTE = "paste"
Event.REMOVED = "removed"
Event.REMOVED_FROM_STAGE = "removedFromStage"
Event.RENDER = "render"
Event.RESIZE = "resize"
Event.SCROLL = "scroll"
Event.SELECT = "select"
Event.SELECT_ALL = "selectAll"
Event.SOUND_COMPLETE = "soundComplete"
Event.TAB_CHILDREN_CHANGE = "tabChildrenChange"
Event.TAB_ENABLED_CHANGE = "tabEnabledChange"
Event.TAB_INDEX_CHANGE = "tabIndexChange"
Event.TEXTURE_READY = "textureReady"
Event.UNLOAD = "unload"
Event.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new Event(null);
},function(event) {
	event.__init();
})

// Export

exports.default = Event;