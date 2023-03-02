// Class: haxe.iterators.StringIteratorUnicode

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function StringTools() {return require("./../../StringTools");}

// Constructor

var StringIteratorUnicode = function(s) {
	this.offset = 0;
	this.s = s;
}

// Meta

StringIteratorUnicode.__name__ = "haxe.iterators.StringIteratorUnicode";
StringIteratorUnicode.__isInterface__ = false;
StringIteratorUnicode.prototype = {
	hasNext: function() {
		return this.offset < this.s.length;
	},
	next: function() {
		var c = (StringTools().default).utf16CodePointAt(this.s,this.offset++);
		if(c >= 65536) {
			this.offset++;
		}
		return c;
	}
};
StringIteratorUnicode.prototype.__class__ = StringIteratorUnicode.prototype.constructor = $hxClasses["haxe.iterators.StringIteratorUnicode"] = StringIteratorUnicode;

// Init



// Statics




// Export

exports.default = StringIteratorUnicode;