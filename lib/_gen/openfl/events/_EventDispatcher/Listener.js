// Class: openfl.events._EventDispatcher.Listener

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function Reflect() {return require("./../../../Reflect");}

// Constructor

var Listener = function(callback,useCapture,priority) {
	this.callback = callback;
	this.useCapture = useCapture;
	this.priority = priority;
}

// Meta

Listener.__name__ = "openfl.events._EventDispatcher.Listener";
Listener.__isInterface__ = false;
Listener.prototype = {
	match: function(callback,useCapture) {
		if((Reflect().default).compareMethods(this.callback,callback)) {
			return this.useCapture == useCapture;
		} else {
			return false;
		}
	}
};
Listener.prototype.__class__ = Listener.prototype.constructor = $hxClasses["openfl.events._EventDispatcher.Listener"] = Listener;

// Init



// Statics


Listener.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = Listener;