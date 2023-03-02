// Class: openfl.events.EventDispatcher

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl_events_IEventDispatcher() {return require("./../../openfl/events/IEventDispatcher");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function openfl_events__$EventDispatcher_Listener() {return require("./../../openfl/events/_EventDispatcher/Listener");}
function openfl_events__$EventDispatcher_DispatchIterator() {return require("./../../openfl/events/_EventDispatcher/DispatchIterator");}
function Type() {return require("./../../Type");}
function HxOverrides() {return require("./../../HxOverrides");}

// Constructor

var EventDispatcher = function(target) {
	if(target != null) {
		this.__targetDispatcher = target;
	}
}

// Meta

EventDispatcher.__name__ = "openfl.events.EventDispatcher";
EventDispatcher.__isInterface__ = false;
EventDispatcher.__interfaces__ = [(openfl_events_IEventDispatcher().default)];
EventDispatcher.prototype = {
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
		if(listener == null) {
			return;
		}
		if(this.__eventMap == null) {
			this.__eventMap = new (haxe_ds_StringMap().default)();
			this.__iterators = new (haxe_ds_StringMap().default)();
		}
		if(!this.__eventMap.exists(type)) {
			var list = [];
			list.push(new (openfl_events__$EventDispatcher_Listener().default)(listener,useCapture,priority));
			var iterator = new (openfl_events__$EventDispatcher_DispatchIterator().default)(list);
			this.__eventMap.set(type,list);
			this.__iterators.set(type,[iterator]);
		} else {
			var list1 = this.__eventMap.get(type);
			var _g = 0;
			var _g1 = list1.length;
			while(_g < _g1) {
				var i = _g++;
				if(list1[i].match(listener,useCapture)) {
					return;
				}
			}
			var iterators = this.__iterators.get(type);
			var _g2 = 0;
			while(_g2 < iterators.length) {
				var iterator1 = iterators[_g2];
				++_g2;
				if(iterator1.active) {
					iterator1.copy();
				}
			}
			this.__addListenerByPriority(list1,new (openfl_events__$EventDispatcher_Listener().default)(listener,useCapture,priority));
		}
	},
	dispatchEvent: function(event) {
		if(this.__targetDispatcher != null) {
			event.target = this.__targetDispatcher;
		} else {
			event.target = this;
		}
		return this.__dispatchEvent(event);
	},
	hasEventListener: function(type) {
		if(this.__eventMap == null) {
			return false;
		}
		return this.__eventMap.exists(type);
	},
	removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) {
			useCapture = false;
		}
		if(this.__eventMap == null || listener == null) {
			return;
		}
		var list = this.__eventMap.get(type);
		if(list == null) {
			return;
		}
		var iterators = this.__iterators.get(type);
		var _g = 0;
		var _g1 = list.length;
		while(_g < _g1) {
			var i = _g++;
			if(list[i].match(listener,useCapture)) {
				var _g2 = 0;
				while(_g2 < iterators.length) {
					var iterator = iterators[_g2];
					++_g2;
					iterator.remove(list[i],i);
				}
				list.splice(i,1);
				break;
			}
		}
		if(list.length == 0) {
			this.__eventMap.remove(type);
			this.__iterators.remove(type);
		}
		if(!this.__eventMap.iterator().hasNext()) {
			this.__eventMap = null;
			this.__iterators = null;
		}
	},
	toString: function() {
		var full = (Type().default).getClassName((Type().default).getClass(this));
		var short = full.split(".").pop();
		return "[object " + short + "]";
	},
	willTrigger: function(type) {
		return this.hasEventListener(type);
	},
	__dispatchEvent: function(event) {
		if(this.__eventMap == null || event == null) {
			return true;
		}
		var type = event.type;
		var list = this.__eventMap.get(type);
		if(list == null) {
			return true;
		}
		if(event.target == null) {
			if(this.__targetDispatcher != null) {
				event.target = this.__targetDispatcher;
			} else {
				event.target = this;
			}
		}
		event.currentTarget = this;
		var capture = event.eventPhase == 1;
		var iterators = this.__iterators.get(type);
		var iterator = iterators[0];
		if(iterator.active) {
			iterator = new (openfl_events__$EventDispatcher_DispatchIterator().default)(list);
			iterators.push(iterator);
		}
		iterator.start();
		var listener = iterator;
		while(listener.hasNext()) {
			var listener1 = listener.next();
			if(listener1 == null) {
				continue;
			}
			if(listener1.useCapture == capture) {
				listener1.callback(event);
				if(event.__isCanceledNow) {
					break;
				}
			}
		}
		iterator.stop();
		if(iterator != iterators[0]) {
			(HxOverrides().default).remove(iterators,iterator);
		} else {
			iterator.reset(list);
		}
		return !event.isDefaultPrevented();
	},
	__removeAllListeners: function() {
		this.__eventMap = null;
		this.__iterators = null;
	},
	__addListenerByPriority: function(list,listener) {
		var numElements = list.length;
		var addAtPosition = numElements;
		var _g = 0;
		var _g1 = numElements;
		while(_g < _g1) {
			var i = _g++;
			if(list[i].priority < listener.priority) {
				addAtPosition = i;
				break;
			}
		}
		list.splice(addAtPosition,0,listener);
	}
};
EventDispatcher.prototype.__class__ = EventDispatcher.prototype.constructor = $hxClasses["openfl.events.EventDispatcher"] = EventDispatcher;

// Init



// Statics




// Export

exports.default = EventDispatcher;