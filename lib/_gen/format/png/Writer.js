// Class: format.png.Writer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function haxe_io_BytesOutput() {return require("./../../haxe/io/BytesOutput");}
function haxe_crypto_Crc32() {return require("./../../haxe/crypto/Crc32");}
function HxOverrides() {return require("./../../HxOverrides");}

// Constructor

var Writer = function(o) {
	this.o = o;
	o.set_bigEndian(true);
}

// Meta

Writer.__name__ = "format.png.Writer";
Writer.__isInterface__ = false;
Writer.prototype = {
	write: function(png) {
		var b = 137;
		this.o.writeByte(b);
		var b1 = 80;
		this.o.writeByte(b1);
		var b2 = 78;
		this.o.writeByte(b2);
		var b3 = 71;
		this.o.writeByte(b3);
		var b4 = 13;
		this.o.writeByte(b4);
		var b5 = 10;
		this.o.writeByte(b5);
		var b6 = 26;
		this.o.writeByte(b6);
		var b7 = 10;
		this.o.writeByte(b7);
		var c = png.iterator();
		while(c.hasNext()) {
			var c1 = c.next();
			switch(c1._hx_index) {
			case 0:
				this.writeChunk("IEND",(haxe_io_Bytes().default).alloc(0));
				break;
			case 1:
				var h = c1.h;
				var b8 = new (haxe_io_BytesOutput().default)();
				b8.set_bigEndian(true);
				b8.writeInt32(h.width);
				b8.writeInt32(h.height);
				b8.writeByte(h.colbits);
				var _g = h.color;
				var tmp;
				switch(_g._hx_index) {
				case 0:
					var alpha = _g.alpha;
					tmp = alpha ? 4 : 0;
					break;
				case 1:
					var alpha1 = _g.alpha;
					tmp = alpha1 ? 6 : 2;
					break;
				case 2:
					tmp = 3;
					break;
				}
				b8.writeByte(tmp);
				b8.writeByte(0);
				b8.writeByte(0);
				b8.writeByte(h.interlaced ? 1 : 0);
				this.writeChunk("IHDR",b8.getBytes());
				break;
			case 2:
				var d = c1.b;
				this.writeChunk("IDAT",d);
				break;
			case 3:
				var b9 = c1.b;
				this.writeChunk("PLTE",b9);
				break;
			case 4:
				var data = c1.data;
				var id = c1.id;
				this.writeChunk(id,data);
				break;
			}
		}
	},
	writeChunk: function(id,data) {
		this.o.writeInt32(data.get_length());
		this.o.writeString(id);
		this.o.write(data);
		var crc = new (haxe_crypto_Crc32().default)();
		crc.byte((HxOverrides().default).cca(id,0));
		crc.byte((HxOverrides().default).cca(id,1));
		crc.byte((HxOverrides().default).cca(id,2));
		crc.byte((HxOverrides().default).cca(id,3));
		crc.update(data,0,data.get_length());
		this.o.writeInt32(crc.get());
	}
};
Writer.prototype.__class__ = Writer.prototype.constructor = $hxClasses["format.png.Writer"] = Writer;

// Init



// Statics




// Export

exports.default = Writer;