// Class: haxe.io.Input

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_io_Error() {return require("./../../haxe/io/Error");}
function haxe_CallStack() {return require("./../../haxe/CallStack");}
function haxe_io_Eof() {return require("./../../haxe/io/Eof");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function haxe_io_FPHelper() {return require("./../../haxe/io/FPHelper");}

// Constructor

var Input = function(){}

// Meta

Input.__name__ = "haxe.io.Input";
Input.__isInterface__ = false;
Input.prototype = {
	readByte: function() {
		throw new (js__$Boot_HaxeError().default)("Not implemented");
	},
	readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.get_length()) {
			throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).OutsideBounds);
		}
		try {
			while(k > 0) {
				b[pos] = this.readByte();
				++pos;
				--k;
			}
		} catch( eof ) {
			(haxe_CallStack().default).lastException = eof;
			var eof1 = ((eof) instanceof (js__$Boot_HaxeError().default)) ? eof.val : eof;
			if(((eof1) instanceof (haxe_io_Eof().default))) {
				var eof2 = eof1;
			} else {
				throw eof;
			}
		}
		return len - k;
	},
	set_bigEndian: function(b) {
		this.bigEndian = b;
		return b;
	},
	readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			if(k == 0) {
				throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).Blocked);
			}
			pos += k;
			len -= k;
		}
	},
	read: function(nbytes) {
		var s = (haxe_io_Bytes().default).alloc(nbytes);
		var p = 0;
		while(nbytes > 0) {
			var k = this.readBytes(s,p,nbytes);
			if(k == 0) {
				throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).Blocked);
			}
			p += k;
			nbytes -= k;
		}
		return s;
	},
	readDouble: function() {
		var i1 = this.readInt32();
		var i2 = this.readInt32();
		if(this.bigEndian) {
			return (haxe_io_FPHelper().default).i64ToDouble(i2,i1);
		} else {
			return (haxe_io_FPHelper().default).i64ToDouble(i1,i2);
		}
	},
	readInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var n = this.bigEndian ? ch2 | ch1 << 8 : ch1 | ch2 << 8;
		if((n & 32768) != 0) {
			return n - 65536;
		}
		return n;
	},
	readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		if(this.bigEndian) {
			return ch2 | ch1 << 8;
		} else {
			return ch1 | ch2 << 8;
		}
	},
	readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if(this.bigEndian) {
			return ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24;
		} else {
			return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
		}
	},
	readString: function(len,encoding) {
		var b = (haxe_io_Bytes().default).alloc(len);
		this.readFullBytes(b,0,len);
		return b.getString(0,len,encoding);
	}
};
Input.prototype.__class__ = Input.prototype.constructor = $hxClasses["haxe.io.Input"] = Input;

// Init



// Statics




// Export

exports.default = Input;