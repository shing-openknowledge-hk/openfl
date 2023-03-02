// Class: haxe.crypto.Crc32

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}

// Constructor

var Crc32 = function() {
	this.crc = -1;
}

// Meta

Crc32.__name__ = "haxe.crypto.Crc32";
Crc32.__isInterface__ = false;
Crc32.prototype = {
	byte: function(b) {
		var tmp = (this.crc ^ b) & 255;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
		this.crc = this.crc >>> 8 ^ tmp;
	},
	update: function(b,pos,len) {
		var b1 = b.getData();
		var _g = pos;
		var _g1 = pos + len;
		while(_g < _g1) {
			var i = _g++;
			var tmp = (this.crc ^ (haxe_io_Bytes().default).fastGet(b1,i)) & 255;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			this.crc = this.crc >>> 8 ^ tmp;
		}
	},
	get: function() {
		return this.crc ^ -1;
	}
};
Crc32.prototype.__class__ = Crc32.prototype.constructor = $hxClasses["haxe.crypto.Crc32"] = Crc32;

// Init



// Statics




// Export

exports.default = Crc32;