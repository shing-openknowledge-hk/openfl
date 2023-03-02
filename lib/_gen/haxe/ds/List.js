// Class: haxe.ds.List

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_ds__$List_ListNode() {return require("./../../haxe/ds/_List/ListNode");}
function haxe_ds__$List_ListIterator() {return require("./../../haxe/ds/_List/ListIterator");}

// Constructor

var List = function() {
	this.length = 0;
}

// Meta

List.__name__ = "haxe.ds.List";
List.__isInterface__ = false;
List.prototype = {
	add: function(item) {
		var x = new (haxe_ds__$List_ListNode().default)(item,null);
		if(this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		}
		this.q = x;
		this.length++;
	},
	push: function(item) {
		var x = new (haxe_ds__$List_ListNode().default)(item,this.h);
		this.h = x;
		if(this.q == null) {
			this.q = x;
		}
		this.length++;
	},
	pop: function() {
		if(this.h == null) {
			return null;
		}
		var x = this.h.item;
		this.h = this.h.next;
		if(this.h == null) {
			this.q = null;
		}
		this.length--;
		return x;
	},
	clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
	},
	remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l.item == v) {
				if(prev == null) {
					this.h = l.next;
				} else {
					prev.next = l.next;
				}
				if(this.q == l) {
					this.q = prev;
				}
				this.length--;
				return true;
			}
			prev = l;
			l = l.next;
		}
		return false;
	},
	iterator: function() {
		return new (haxe_ds__$List_ListIterator().default)(this.h);
	}
};
List.prototype.__class__ = List.prototype.constructor = $hxClasses["haxe.ds.List"] = List;

// Init



// Statics




// Export

exports.default = List;