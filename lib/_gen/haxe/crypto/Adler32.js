// Class: haxe.crypto.Adler32

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var Adler32 = function() {
	this.a1 = 1;
	this.a2 = 0;
}

// Meta

Adler32.__name__ = "haxe.crypto.Adler32";
Adler32.__isInterface__ = false;
Adler32.prototype = {
	update: function(b,pos,len) {
		var a1 = this.a1;
		var a2 = this.a2;
		var _g = pos;
		var _g1 = pos + len;
		while(_g < _g1) {
			var p = _g++;
			var c = b.get(p);
			a1 = (a1 + c) % 65521;
			a2 = (a2 + a1) % 65521;
		}
		this.a1 = a1;
		this.a2 = a2;
	},
	equals: function(a) {
		if(a.a1 == this.a1) {
			return a.a2 == this.a2;
		} else {
			return false;
		}
	}
};
Adler32.prototype.__class__ = Adler32.prototype.constructor = $hxClasses["haxe.crypto.Adler32"] = Adler32;

// Init



// Statics

Adler32.read = function(i) {
	var a = new Adler32();
	var a2a = i.readByte();
	var a2b = i.readByte();
	var a1a = i.readByte();
	var a1b = i.readByte();
	a.a1 = a1a << 8 | a1b;
	a.a2 = a2a << 8 | a2b;
	return a;
}


// Export

exports.default = Adler32;