// Class: haxe.zip._InflateImpl.Window

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function haxe_crypto_Adler32() {return require("./../../../haxe/crypto/Adler32");}

// Constructor

var Window = function(hasCrc) {
	this.buffer = (haxe_io_Bytes().default).alloc(65536);
	this.pos = 0;
	if(hasCrc) {
		this.crc = new (haxe_crypto_Adler32().default)();
	}
}

// Meta

Window.__name__ = "haxe.zip._InflateImpl.Window";
Window.__isInterface__ = false;
Window.prototype = {
	slide: function() {
		if(this.crc != null) {
			this.crc.update(this.buffer,0,32768);
		}
		var b = (haxe_io_Bytes().default).alloc(65536);
		this.pos -= 32768;
		b.blit(0,this.buffer,32768,this.pos);
		this.buffer = b;
	},
	addBytes: function(b,p,len) {
		if(this.pos + len > 65536) {
			this.slide();
		}
		this.buffer.blit(this.pos,b,p,len);
		this.pos += len;
	},
	addByte: function(c) {
		if(this.pos == 65536) {
			this.slide();
		}
		this.buffer.set(this.pos,c);
		this.pos++;
	},
	getLastChar: function() {
		return this.buffer.get(this.pos - 1);
	},
	available: function() {
		return this.pos;
	},
	checksum: function() {
		if(this.crc != null) {
			this.crc.update(this.buffer,0,this.pos);
		}
		return this.crc;
	}
};
Window.prototype.__class__ = Window.prototype.constructor = $hxClasses["haxe.zip._InflateImpl.Window"] = Window;

// Init



// Statics




// Export

exports.default = Window;