// Class: openfl.events._EventDispatcher.DispatchIterator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var DispatchIterator = function(list) {
	this.active = false;
	this.reset(list);
}

// Meta

DispatchIterator.__name__ = "openfl.events._EventDispatcher.DispatchIterator";
DispatchIterator.__isInterface__ = false;
DispatchIterator.prototype = {
	copy: function() {
		if(!this.isCopy) {
			this.list = this.list.slice();
			this.isCopy = true;
		}
	},
	hasNext: function() {
		return this.index < this.list.length;
	},
	next: function() {
		return this.list[this.index++];
	},
	remove: function(listener,listIndex) {
		if(this.active) {
			if(!this.isCopy) {
				if(listIndex < this.index) {
					this.index--;
				}
			} else {
				var _g = this.index;
				var _g1 = this.list.length;
				while(_g < _g1) {
					var i = _g++;
					if(this.list[i] == listener) {
						this.list.splice(i,1);
						break;
					}
				}
			}
		}
	},
	reset: function(list) {
		this.list = list;
		this.isCopy = false;
		this.index = 0;
	},
	start: function() {
		this.active = true;
	},
	stop: function() {
		this.active = false;
	}
};
DispatchIterator.prototype.__class__ = DispatchIterator.prototype.constructor = $hxClasses["openfl.events._EventDispatcher.DispatchIterator"] = DispatchIterator;

// Init



// Statics


DispatchIterator.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = DispatchIterator;