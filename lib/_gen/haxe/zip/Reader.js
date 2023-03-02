// Class: haxe.zip.Reader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_ds_List() {return require("./../../haxe/ds/List");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_io_BytesBuffer() {return require("./../../haxe/io/BytesBuffer");}
function haxe_zip_ExtraField() {return require("./../../haxe/zip/ExtraField");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function haxe_zip_InflateImpl() {return require("./../../haxe/zip/InflateImpl");}

// Constructor

var Reader = function(i) {
	this.i = i;
}

// Meta

Reader.__name__ = "haxe.zip.Reader";
Reader.__isInterface__ = false;
Reader.prototype = {
	readZipDate: function() {
		var t = this.i.readUInt16();
		var hour = t >> 11 & 31;
		var min = t >> 5 & 63;
		var sec = t & 31;
		var d = this.i.readUInt16();
		var year = d >> 9;
		var month = d >> 5 & 15;
		var day = d & 31;
		return new Date(year + 1980,month - 1,day,hour,min,sec << 1);
	},
	readExtraFields: function(length) {
		var fields = new (haxe_ds_List().default)();
		while(length > 0) {
			if(length < 4) {
				throw new (js__$Boot_HaxeError().default)("Invalid extra fields data");
			}
			var tag = this.i.readUInt16();
			var len = this.i.readUInt16();
			if(length < len) {
				throw new (js__$Boot_HaxeError().default)("Invalid extra fields data");
			}
			if(tag == 28789) {
				var version = this.i.readByte();
				if(version != 1) {
					var data = new (haxe_io_BytesBuffer().default)();
					data.addByte(version);
					data.add(this.i.read(len - 1));
					fields.add((haxe_zip_ExtraField().default).FUnknown(tag,data.getBytes()));
				} else {
					var crc = this.i.readInt32();
					var name = this.i.read(len - 5).toString();
					fields.add((haxe_zip_ExtraField().default).FInfoZipUnicodePath(name,crc));
				}
			} else {
				fields.add((haxe_zip_ExtraField().default).FUnknown(tag,this.i.read(len)));
			}
			length -= 4 + len;
		}
		return fields;
	},
	readEntryHeader: function() {
		var i = this.i;
		var h = i.readInt32();
		if(h == 33639248 || h == 101010256) {
			return null;
		}
		if(h != 67324752) {
			throw new (js__$Boot_HaxeError().default)("Invalid Zip Data");
		}
		var version = i.readUInt16();
		var flags = i.readUInt16();
		var utf8 = (flags & 2048) != 0;
		var compression = i.readUInt16();
		var compressed = compression != 0;
		if(compressed && compression != 8) {
			throw new (js__$Boot_HaxeError().default)("Unsupported compression " + compression);
		}
		var mtime = this.readZipDate();
		var crc32 = i.readInt32();
		var csize = i.readInt32();
		var usize = i.readInt32();
		var fnamelen = i.readInt16();
		var elen = i.readInt16();
		var fname = i.readString(fnamelen);
		var fields = this.readExtraFields(elen);
		if(utf8) {
			fields.push((haxe_zip_ExtraField().default).FUtf8);
		}
		var data = null;
		if((flags & 8) != 0) {
			csize = -1;
		}
		return { fileName : fname, fileSize : usize, fileTime : mtime, compressed : compressed, dataSize : csize, data : data, crc32 : crc32, extraFields : fields};
	},
	read: function() {
		var l = new (haxe_ds_List().default)();
		var buf = null;
		var tmp = null;
		while(true) {
			var e = this.readEntryHeader();
			if(e == null) {
				break;
			}
			if(e.dataSize < 0) {
				var bufSize = 65536;
				if(tmp == null) {
					tmp = (haxe_io_Bytes().default).alloc(bufSize);
				}
				var out = new (haxe_io_BytesBuffer().default)();
				var z = new (haxe_zip_InflateImpl().default)(this.i,false,false);
				while(true) {
					var n = z.readBytes(tmp,0,bufSize);
					out.addBytes(tmp,0,n);
					if(n < bufSize) {
						break;
					}
				}
				e.data = out.getBytes();
				e.crc32 = this.i.readInt32();
				if(e.crc32 == 134695760) {
					e.crc32 = this.i.readInt32();
				}
				e.dataSize = this.i.readInt32();
				e.fileSize = this.i.readInt32();
				e.dataSize = e.fileSize;
				e.compressed = false;
			} else {
				e.data = this.i.read(e.dataSize);
			}
			l.add(e);
		}
		return l;
	}
};
Reader.prototype.__class__ = Reader.prototype.constructor = $hxClasses["haxe.zip.Reader"] = Reader;

// Init



// Statics

Reader.readZip = function(i) {
	var r = new Reader(i);
	return r.read();
}
Reader.unzip = function(f) {
	if(!f.compressed) {
		return f.data;
	}
	throw new (js__$Boot_HaxeError().default)("No uncompress support");
}


// Export

exports.default = Reader;