// Class: haxe.io.BytesBuffer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_io_Error() {return require("./../../haxe/io/Error");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}

// Constructor

var BytesBuffer = function() {
	this.pos = 0;
	this.size = 0;
}

// Meta

BytesBuffer.__name__ = "haxe.io.BytesBuffer";
BytesBuffer.__isInterface__ = false;
BytesBuffer.prototype = {
	addByte: function(byte) {
		if(this.pos == this.size) {
			this.grow(1);
		}
		this.view.setUint8(this.pos++,byte);
	},
	add: function(src) {
		if(this.pos + src.get_length() > this.size) {
			this.grow(src.get_length());
		}
		if(this.size == 0) {
			return;
		}
		var sub = new Uint8Array(src.b.buffer,src.b.byteOffset,src.get_length());
		this.u8.set(sub,this.pos);
		this.pos += src.get_length();
	},
	addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.get_length()) {
			throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).OutsideBounds);
		}
		if(this.pos + len > this.size) {
			this.grow(len);
		}
		if(this.size == 0) {
			return;
		}
		var sub = new Uint8Array(src.b.buffer,src.b.byteOffset + pos,len);
		this.u8.set(sub,this.pos);
		this.pos += len;
	},
	grow: function(delta) {
		var req = this.pos + delta;
		var nsize = this.size == 0 ? 16 : this.size;
		while(nsize < req) nsize = nsize * 3 >> 1;
		var nbuf = new ArrayBuffer(nsize);
		var nu8 = new Uint8Array(nbuf);
		if(this.size > 0) {
			nu8.set(this.u8);
		}
		this.size = nsize;
		this.buffer = nbuf;
		this.u8 = nu8;
		this.view = new DataView(this.buffer);
	},
	getBytes: function() {
		if(this.size == 0) {
			return (haxe_io_Bytes().default).alloc(0);
		}
		var b = new (haxe_io_Bytes().default)(this.buffer);
		b.set_length(this.pos);
		return b;
	}
};
BytesBuffer.prototype.__class__ = BytesBuffer.prototype.constructor = $hxClasses["haxe.io.BytesBuffer"] = BytesBuffer;

// Init



// Statics




// Export

exports.default = BytesBuffer;