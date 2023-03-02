// Class: openfl.utils.ByteArrayData

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_utils_IDataOutput() {return require("./../../openfl/utils/IDataOutput");}
function openfl_utils_IDataInput() {return require("./../../openfl/utils/IDataInput");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function lime_utils__$Bytes_Bytes_$Impl_$() {return require("./../../lime/utils/_Bytes/Bytes_Impl_");}
function lime_utils_CompressionAlgorithm() {return require("./../../lime/utils/CompressionAlgorithm");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_errors_EOFError() {return require("./../../openfl/errors/EOFError");}
function haxe_io_FPHelper() {return require("./../../haxe/io/FPHelper");}
function haxe_io_BytesInput() {return require("./../../haxe/io/BytesInput");}
function format_amf_Reader() {return require("./../../format/amf/Reader");}
function format_amf3_Reader() {return require("./../../format/amf3/Reader");}
function haxe_Unserializer() {return require("./../../haxe/Unserializer");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function format_amf_Tools() {return require("./../../format/amf/Tools");}
function haxe_io_BytesOutput() {return require("./../../haxe/io/BytesOutput");}
function format_amf_Writer() {return require("./../../format/amf/Writer");}
function format_amf3_Tools() {return require("./../../format/amf3/Tools");}
function format_amf3_Writer() {return require("./../../format/amf3/Writer");}
function haxe_Serializer() {return require("./../../haxe/Serializer");}
function Reflect() {return require("./../../Reflect");}
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function haxe_ds_ObjectMap() {return require("./../../haxe/ds/ObjectMap");}
function lime_system_System() {return require("./../../lime/system/System");}
function lime_system_Endian() {return require("./../../lime/system/Endian");}

// Constructor

var ByteArrayData = function(length) {
	if(length == null) {
		length = 0;
	}
	var bytes = (haxe_io_Bytes().default).alloc(length);
	(haxe_io_Bytes().default).call(this,bytes.b.buffer);
	this.__length = length;
	this.set_endian(ByteArrayData.get_defaultEndian());
	this.objectEncoding = ByteArrayData.defaultObjectEncoding;
	this.position = 0;
}

// Meta

ByteArrayData.__name__ = "openfl.utils.ByteArrayData";
ByteArrayData.__isInterface__ = false;
ByteArrayData.__interfaces__ = [(openfl_utils_IDataOutput().default),(openfl_utils_IDataInput().default)];
ByteArrayData.__super__ = (haxe_io_Bytes().default);
ByteArrayData.prototype = $extend((haxe_io_Bytes().default).prototype, {
	clear: function() {
		this.set_length(0);
		this.position = 0;
	},
	compress: function(algorithm) {
		if(algorithm == null) {
			algorithm = "zlib";
		}
		if(this.__length > this.l) {
			var cacheLength = this.l;
			this.l = this.__length;
			var data = (haxe_io_Bytes().default).alloc(cacheLength);
			data.blit(0,this,0,cacheLength);
			this.__setData(data);
			this.l = cacheLength;
		}
		var limeBytes = this;
		var bytes;
		switch(algorithm) {
		case "deflate":
			bytes = (lime_utils__$Bytes_Bytes_$Impl_$().default).compress(limeBytes,(lime_utils_CompressionAlgorithm().default).DEFLATE);
			break;
		case "lzma":
			bytes = (lime_utils__$Bytes_Bytes_$Impl_$().default).compress(limeBytes,(lime_utils_CompressionAlgorithm().default).LZMA);
			break;
		default:
			bytes = (lime_utils__$Bytes_Bytes_$Impl_$().default).compress(limeBytes,(lime_utils_CompressionAlgorithm().default).ZLIB);
		}
		if(bytes != null) {
			this.__setData(bytes);
			this.l = this.__length;
			this.position = this.l;
		}
	},
	deflate: function() {
		this.compress("deflate");
	},
	inflate: function() {
		this.uncompress("deflate");
	},
	readBoolean: function() {
		if(this.position < this.l) {
			return this.get(this.position++) != 0;
		} else {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_EOFError().default)());
		}
	},
	readByte: function() {
		var value = this.readUnsignedByte();
		if((value & 128) != 0) {
			return value - 256;
		} else {
			return value;
		}
	},
	readBytes: function(bytes,offset,length) {
		if(length == null) {
			length = 0;
		}
		if(offset == null) {
			offset = 0;
		}
		if(length == 0) {
			length = this.l - this.position;
		}
		if(this.position + length > this.l) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_EOFError().default)());
		}
		if(bytes.get_length() < offset + length) {
			bytes.__resize(offset + length);
		}
		bytes.blit(offset,this,this.position,length);
		this.position += length;
	},
	readDouble: function() {
		if(this.get_endian() == "littleEndian") {
			if(this.position + 8 > this.l) {
				throw new (js__$Boot_HaxeError().default)(new (openfl_errors_EOFError().default)());
			}
			this.position += 8;
			return this.getDouble(this.position - 8);
		} else {
			var ch1 = this.readInt();
			var ch2 = this.readInt();
			return (haxe_io_FPHelper().default).i64ToDouble(ch2,ch1);
		}
	},
	readFloat: function() {
		if(this.get_endian() == "littleEndian") {
			if(this.position + 4 > this.l) {
				throw new (js__$Boot_HaxeError().default)(new (openfl_errors_EOFError().default)());
			}
			this.position += 4;
			return this.getFloat(this.position - 4);
		} else {
			return (haxe_io_FPHelper().default).i32ToFloat(this.readInt());
		}
	},
	readInt: function() {
		var ch1 = this.readUnsignedByte();
		var ch2 = this.readUnsignedByte();
		var ch3 = this.readUnsignedByte();
		var ch4 = this.readUnsignedByte();
		if(this.get_endian() == "littleEndian") {
			return ch4 << 24 | ch3 << 16 | ch2 << 8 | ch1;
		} else {
			return ch1 << 24 | ch2 << 16 | ch3 << 8 | ch4;
		}
	},
	readMultiByte: function(length,charSet) {
		return this.readUTFBytes(length);
	},
	readObject: function() {
		switch(this.objectEncoding) {
		case 0:
			var input = new (haxe_io_BytesInput().default)(this,this.position);
			var reader = new (format_amf_Reader().default)(input);
			var data = ByteArrayData.unwrapAMFValue(reader.read());
			this.position = input.get_position();
			return data;
		case 3:
			var input1 = new (haxe_io_BytesInput().default)(this,this.position);
			var reader1 = new (format_amf3_Reader().default)(input1);
			var data1 = ByteArrayData.unwrapAMF3Value(reader1.read());
			this.position = input1.get_position();
			return data1;
		case 10:
			var data2 = this.readUTF();
			return (haxe_Unserializer().default).run(data2);
		case 12:
			var data3 = this.readUTF();
			return JSON.parse(data3);
		default:
			return null;
		}
	},
	readShort: function() {
		var ch1 = this.readUnsignedByte();
		var ch2 = this.readUnsignedByte();
		var value;
		if(this.get_endian() == "littleEndian") {
			value = ch2 << 8 | ch1;
		} else {
			value = ch1 << 8 | ch2;
		}
		if((value & 32768) != 0) {
			return value - 65536;
		} else {
			return value;
		}
	},
	readUnsignedByte: function() {
		if(this.position < this.l) {
			return this.get(this.position++);
		} else {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_EOFError().default)());
		}
	},
	readUnsignedInt: function() {
		var ch1 = this.readUnsignedByte();
		var ch2 = this.readUnsignedByte();
		var ch3 = this.readUnsignedByte();
		var ch4 = this.readUnsignedByte();
		if(this.get_endian() == "littleEndian") {
			return ch4 << 24 | ch3 << 16 | ch2 << 8 | ch1;
		} else {
			return ch1 << 24 | ch2 << 16 | ch3 << 8 | ch4;
		}
	},
	readUnsignedShort: function() {
		var ch1 = this.readUnsignedByte();
		var ch2 = this.readUnsignedByte();
		if(this.get_endian() == "littleEndian") {
			return (ch2 << 8) + ch1;
		} else {
			return ch1 << 8 | ch2;
		}
	},
	readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	},
	readUTFBytes: function(length) {
		if(this.position + length > this.l) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_EOFError().default)());
		}
		this.position += length;
		return this.getString(this.position - length,length);
	},
	uncompress: function(algorithm) {
		if(algorithm == null) {
			algorithm = "zlib";
		}
		if(this.__length > this.l) {
			var cacheLength = this.l;
			this.l = this.__length;
			var data = (haxe_io_Bytes().default).alloc(cacheLength);
			data.blit(0,this,0,cacheLength);
			this.__setData(data);
			this.l = cacheLength;
		}
		var limeBytes = this;
		var bytes;
		switch(algorithm) {
		case "deflate":
			bytes = (lime_utils__$Bytes_Bytes_$Impl_$().default).decompress(limeBytes,(lime_utils_CompressionAlgorithm().default).DEFLATE);
			break;
		case "lzma":
			bytes = (lime_utils__$Bytes_Bytes_$Impl_$().default).decompress(limeBytes,(lime_utils_CompressionAlgorithm().default).LZMA);
			break;
		default:
			bytes = (lime_utils__$Bytes_Bytes_$Impl_$().default).decompress(limeBytes,(lime_utils_CompressionAlgorithm().default).ZLIB);
		}
		if(bytes != null) {
			this.__setData(bytes);
			this.l = this.__length;
		}
		this.position = 0;
	},
	writeBoolean: function(value) {
		this.writeByte(value ? 1 : 0);
	},
	writeByte: function(value) {
		this.__resize(this.position + 1);
		this.set(this.position++,value & 255);
	},
	writeBytes: function(bytes,offset,length) {
		if(length == null) {
			length = 0;
		}
		if(offset == null) {
			offset = 0;
		}
		if((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(bytes) == 0) {
			return;
		}
		if(length == 0) {
			length = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(bytes) - offset;
		}
		this.__resize(this.position + length);
		this.blit(this.position,bytes,offset,length);
		this.position = this.position + length;
	},
	writeDouble: function(value) {
		var int64 = (haxe_io_FPHelper().default).doubleToI64(value);
		if(this.get_endian() == "littleEndian") {
			this.writeInt(int64.low);
			this.writeInt(int64.high);
		} else {
			this.writeInt(int64.high);
			this.writeInt(int64.low);
		}
	},
	writeFloat: function(value) {
		if(this.get_endian() == "littleEndian") {
			this.__resize(this.position + 4);
			this.setFloat(this.position,value);
			this.position += 4;
		} else {
			var int = (haxe_io_FPHelper().default).floatToI32(value);
			this.writeInt(int);
		}
	},
	writeInt: function(value) {
		this.__resize(this.position + 4);
		if(this.get_endian() == "littleEndian") {
			this.set(this.position++,value & 255);
			this.set(this.position++,value >> 8 & 255);
			this.set(this.position++,value >> 16 & 255);
			this.set(this.position++,value >> 24 & 255);
		} else {
			this.set(this.position++,value >> 24 & 255);
			this.set(this.position++,value >> 16 & 255);
			this.set(this.position++,value >> 8 & 255);
			this.set(this.position++,value & 255);
		}
	},
	writeMultiByte: function(value,charSet) {
		this.writeUTFBytes(value);
	},
	writeObject: function(object) {
		switch(this.objectEncoding) {
		case 0:
			var value = (format_amf_Tools().default).encode(object);
			var output = new (haxe_io_BytesOutput().default)();
			var writer = new (format_amf_Writer().default)(output);
			writer.write(value);
			this.writeBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromBytes(output.getBytes()));
			break;
		case 3:
			var value1 = (format_amf3_Tools().default).encode(object);
			var output1 = new (haxe_io_BytesOutput().default)();
			var writer1 = new (format_amf3_Writer().default)(output1);
			writer1.write(value1);
			this.writeBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromBytes(output1.getBytes()));
			break;
		case 10:
			var value2 = (haxe_Serializer().default).run(object);
			this.writeUTF(value2);
			break;
		case 12:
			var value3 = JSON.stringify(object);
			this.writeUTF(value3);
			break;
		default:
			return;
		}
	},
	writeShort: function(value) {
		this.__resize(this.position + 2);
		if(this.get_endian() == "littleEndian") {
			this.set(this.position++,value);
			this.set(this.position++,value >> 8);
		} else {
			this.set(this.position++,value >> 8);
			this.set(this.position++,value);
		}
	},
	writeUnsignedInt: function(value) {
		this.writeInt(value);
	},
	writeUTF: function(value) {
		var bytes = (haxe_io_Bytes().default).ofString(value);
		this.writeShort(bytes.l);
		this.writeBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromBytes(bytes));
	},
	writeUTFBytes: function(value) {
		var bytes = (haxe_io_Bytes().default).ofString(value);
		this.writeBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromBytes(bytes));
	},
	__fromBytes: function(bytes) {
		this.__setData(bytes);
		this.l = bytes.l;
	},
	__resize: function(size) {
		if(size > this.__length) {
			var bytes = (haxe_io_Bytes().default).alloc((size + 1) * 3 >> 1);
			if(this.__length > 0) {
				var cacheLength = this.l;
				this.l = this.__length;
				bytes.blit(0,this,0,this.__length);
				this.l = cacheLength;
			}
			this.__setData(bytes);
		}
		if(this.l < size) {
			this.l = size;
		}
	},
	__setData: function(bytes) {
		this.b = bytes.b;
		this.__length = bytes.l;
		this.data = bytes.data;
	},
	get_bytesAvailable: function() {
		return this.l - this.position;
	},
	get_endian: function() {
		return this.__endian;
	},
	set_endian: function(value) {
		return this.__endian = value;
	},
	set_length: function(value) {
		if(value > 0) {
			this.__resize(value);
			if(value < this.position) {
				this.position = value;
			}
		}
		this.l = value;
		return value;
	}
});
ByteArrayData.prototype.__class__ = ByteArrayData.prototype.constructor = $hxClasses["openfl.utils.ByteArrayData"] = ByteArrayData;

// Init

{
	global.Object.defineProperty(ByteArrayData,"defaultEndian",{ get : function() {
		return ByteArrayData.get_defaultEndian();
	}, set : function(v) {
		return ByteArrayData.set_defaultEndian(v);
	}});
	var tmp = ByteArrayData.prototype;
	var tmp1 = { get : function () { return this.get_bytesAvailable (); }};
	var tmp2 = { get : function () { return this.get_endian (); }, set : function (v) { return this.set_endian (v); }};
	var tmp3 = function () { return this.get_length (); }
	var tmp4 = function (v) { return this.set_length (v); }
	global.Object.defineProperties(tmp,{ bytesAvailable : tmp1, endian : tmp2, length : { get : tmp3, set : tmp4}});
};

// Statics

ByteArrayData.fromArrayBuffer = function(buffer) {
	return (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromArrayBuffer(buffer);
}
ByteArrayData.fromBytes = function(bytes) {
	var result = new ByteArrayData();
	result.__fromBytes(bytes);
	return result;
}
ByteArrayData.loadFromBytes = function(bytes) {
	return (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).loadFromBytes(bytes);
}
ByteArrayData.loadFromFile = function(path) {
	return (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).loadFromFile(path);
}
ByteArrayData.unwrapAMFValue = function(val) {
	switch(val._hx_index) {
	case 0:
		var f = val.f;
		return f;
	case 1:
		var b = val.b;
		return b;
	case 2:
		var s = val.s;
		return s;
	case 3:
		var _g2 = val.size;
		var vmap = val.fields;
		var obj = { };
		var name = vmap.keys();
		while(name.hasNext()) {
			var name1 = name.next();
			(Reflect().default).setField(obj,name1,ByteArrayData.unwrapAMFValue(vmap.get(name1)));
		}
		return obj;
	case 4:
		var d = val.d;
		return d;
	case 5:
		return null;
	case 6:
		return null;
	case 7:
		var vals = val.values;
		var f1 = ByteArrayData.unwrapAMFValue;
		var result = new Array(vals.length);
		var _g = 0;
		var _g1 = vals.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = f1(vals[i]);
		}
		return result;
	}
}
ByteArrayData.unwrapAMF3Value = function(val) {
	switch(val._hx_index) {
	case 0:
		return null;
	case 1:
		return null;
	case 2:
		var b = val.b;
		return b;
	case 3:
		var n = val.i;
		return n;
	case 4:
		var f = val.f;
		return f;
	case 5:
		var s = val.s;
		return s;
	case 6:
		var d = val.d;
		return d;
	case 7:
		var _g5 = val.size;
		var vmap = val.fields;
		var obj = { };
		var name = vmap.keys();
		while(name.hasNext()) {
			var name1 = name.next();
			(Reflect().default).setField(obj,name1,ByteArrayData.unwrapAMF3Value(vmap.get(name1)));
		}
		return obj;
	case 8:
		var _g12 = val.extra;
		var vals = val.values;
		var f1 = ByteArrayData.unwrapAMF3Value;
		var result = new Array(vals.length);
		var _g = 0;
		var _g1 = vals.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = f1(vals[i]);
		}
		return result;
	case 9:
		var vals1 = val.values;
		var f2 = ByteArrayData.unwrapAMF3Value;
		var length = vals1.length;
		var this1 = new Array(length);
		var r = this1;
		var len = length;
		var _g2 = 0;
		var _g11 = len;
		while(_g2 < _g11) {
			var i1 = _g2++;
			var v = f2(vals1[i1]);
			r[i1] = v;
		}
		return r;
	case 10:
		var xml = val.x;
		return xml;
	case 11:
		var b1 = val.b;
		return (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromBytes(b1);
	case 12:
		var vmap1 = val.m;
		var map = null;
		var key = vmap1.keys();
		while(key.hasNext()) {
			var key1 = key.next();
			if(map == null) {
				switch(key1._hx_index) {
				case 3:
					var _g13 = key1.i;
					map = new (haxe_ds_IntMap().default)();
					break;
				case 5:
					var _g3 = key1.s;
					map = new (haxe_ds_StringMap().default)();
					break;
				default:
					map = new (haxe_ds_ObjectMap().default)();
				}
			}
			map.set(ByteArrayData.unwrapAMF3Value(key1),ByteArrayData.unwrapAMF3Value(vmap1.get(key1)));
		}
		if(map == null) {
			map = new (haxe_ds_StringMap().default)();
		}
		return map;
	}
}
ByteArrayData.get_defaultEndian = function() {
	if(ByteArrayData.__defaultEndian == null) {
		if((lime_system_System().default).get_endianness() == (lime_system_Endian().default).LITTLE_ENDIAN) {
			ByteArrayData.__defaultEndian = "littleEndian";
		} else {
			ByteArrayData.__defaultEndian = "bigEndian";
		}
	}
	return ByteArrayData.__defaultEndian;
}
ByteArrayData.set_defaultEndian = function(value) {
	return ByteArrayData.__defaultEndian = value;
}
ByteArrayData.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}
ByteArrayData.defaultObjectEncoding = 10
ByteArrayData.__defaultEndian = null

// Export

exports.default = ByteArrayData;