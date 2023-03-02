// Class: haxe.ds._List.ListIterator

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var ListIterator = function(head) {
	this.head = head;
}

// Meta

ListIterator.__name__ = "haxe.ds._List.ListIterator";
ListIterator.__isInterface__ = false;
ListIterator.prototype = {
	hasNext: function() {
		return this.head != null;
	},
	next: function() {
		var val = this.head.item;
		this.head = this.head.next;
		return val;
	}
};
ListIterator.prototype.__class__ = ListIterator.prototype.constructor = $hxClasses["haxe.ds._List.ListIterator"] = ListIterator;

// Init



// Statics




// Export

exports.default = ListIterator;