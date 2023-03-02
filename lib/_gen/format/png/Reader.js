// Class: format.png.Reader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_ds_List() {return require("./../../haxe/ds/List");}
function format_png_Chunk() {return require("./../../format/png/Chunk");}
function format_png_Color() {return require("./../../format/png/Color");}
function haxe_crypto_Crc32() {return require("./../../haxe/crypto/Crc32");}
function HxOverrides() {return require("./../../HxOverrides");}
function haxe_io_BytesInput() {return require("./../../haxe/io/BytesInput");}

// Constructor

var Reader = function(i) {
	this.i = i;
	i.set_bigEndian(true);
	this.checkCRC = true;
}

// Meta

Reader.__name__ = "format.png.Reader";
Reader.__isInterface__ = false;
Reader.prototype = {
	read: function() {
		var b = 137;
		if(this.i.readByte() != b) {
			throw new (js__$Boot_HaxeError().default)("Invalid header");
		}
		var b1 = 80;
		if(this.i.readByte() != b1) {
			throw new (js__$Boot_HaxeError().default)("Invalid header");
		}
		var b2 = 78;
		if(this.i.readByte() != b2) {
			throw new (js__$Boot_HaxeError().default)("Invalid header");
		}
		var b3 = 71;
		if(this.i.readByte() != b3) {
			throw new (js__$Boot_HaxeError().default)("Invalid header");
		}
		var b4 = 13;
		if(this.i.readByte() != b4) {
			throw new (js__$Boot_HaxeError().default)("Invalid header");
		}
		var b5 = 10;
		if(this.i.readByte() != b5) {
			throw new (js__$Boot_HaxeError().default)("Invalid header");
		}
		var b6 = 26;
		if(this.i.readByte() != b6) {
			throw new (js__$Boot_HaxeError().default)("Invalid header");
		}
		var b7 = 10;
		if(this.i.readByte() != b7) {
			throw new (js__$Boot_HaxeError().default)("Invalid header");
		}
		var l = new (haxe_ds_List().default)();
		while(true) {
			var c = this.readChunk();
			l.add(c);
			if(c == (format_png_Chunk().default).CEnd) {
				break;
			}
		}
		return l;
	},
	readHeader: function(i) {
		i.set_bigEndian(true);
		var width = i.readInt32();
		var height = i.readInt32();
		var colbits = i.readByte();
		var color = i.readByte();
		var color1;
		switch(color) {
		case 0:
			color1 = (format_png_Color().default).ColGrey(false);
			break;
		case 2:
			color1 = (format_png_Color().default).ColTrue(false);
			break;
		case 3:
			color1 = (format_png_Color().default).ColIndexed;
			break;
		case 4:
			color1 = (format_png_Color().default).ColGrey(true);
			break;
		case 6:
			color1 = (format_png_Color().default).ColTrue(true);
			break;
		default:
			throw new (js__$Boot_HaxeError().default)("Unknown color model " + color + ":" + colbits);
		}
		var compress = i.readByte();
		var filter = i.readByte();
		if(compress != 0 || filter != 0) {
			throw new (js__$Boot_HaxeError().default)("Invalid header");
		}
		var interlace = i.readByte();
		if(interlace != 0 && interlace != 1) {
			throw new (js__$Boot_HaxeError().default)("Invalid header");
		}
		return { width : width, height : height, colbits : colbits, color : color1, interlaced : interlace == 1};
	},
	readChunk: function() {
		var dataLen = this.i.readInt32();
		var id = this.i.readString(4);
		var data = this.i.read(dataLen);
		var crc = this.i.readInt32();
		if(this.checkCRC) {
			var c = new (haxe_crypto_Crc32().default)();
			c.byte((HxOverrides().default).cca(id,0));
			c.byte((HxOverrides().default).cca(id,1));
			c.byte((HxOverrides().default).cca(id,2));
			c.byte((HxOverrides().default).cca(id,3));
			c.update(data,0,data.get_length());
			if(c.get() != crc) {
				throw new (js__$Boot_HaxeError().default)("CRC check failure");
			}
		}
		switch(id) {
		case "IDAT":
			return (format_png_Chunk().default).CData(data);
		case "IEND":
			return (format_png_Chunk().default).CEnd;
		case "IHDR":
			return (format_png_Chunk().default).CHeader(this.readHeader(new (haxe_io_BytesInput().default)(data)));
		case "PLTE":
			return (format_png_Chunk().default).CPalette(data);
		default:
			return (format_png_Chunk().default).CUnknown(id,data);
		}
	}
};
Reader.prototype.__class__ = Reader.prototype.constructor = $hxClasses["format.png.Reader"] = Reader;

// Init



// Statics




// Export

exports.default = Reader;