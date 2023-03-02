// Class: openfl._internal.formats.atf.ATFReader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../../../js/_Boot/HaxeError");}
function openfl_errors_IllegalOperationError() {return require("./../../../../openfl/errors/IllegalOperationError");}
function lime_utils_Log() {return require("./../../../../lime/utils/Log");}
function _$UInt_UInt_$Impl_$() {return require("./../../../../_UInt/UInt_Impl_");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function haxe_io_Bytes() {return require("./../../../../haxe/io/Bytes");}
function js_Boot() {return require("./../../../../js/Boot");}

// Constructor

var ATFReader = function(data,byteArrayOffset) {
	this.version = 0;
	data.position = byteArrayOffset;
	var signature = data.readUTFBytes(3);
	data.position = byteArrayOffset;
	if(signature != "ATF") {
		throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("ATF signature not found"));
	}
	var length = 0;
	if(data.get(byteArrayOffset + 6) == 255) {
		this.version = data.get(byteArrayOffset + 7);
		data.position = byteArrayOffset + 8;
		length = this.__readUInt32(data);
	} else {
		this.version = 0;
		data.position = byteArrayOffset + 3;
		length = this.__readUInt24(data);
	}
	if((_$UInt_UInt_$Impl_$().default).gt((js_Boot().default).__cast(byteArrayOffset + length , $hxClasses["Int"]),(openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(data))) {
		throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("ATF length exceeds byte array length"));
	}
	this.data = data;
}

// Meta

ATFReader.__name__ = "openfl._internal.formats.atf.ATFReader";
ATFReader.__isInterface__ = false;
ATFReader.prototype = {
	readHeader: function(__width,__height,cubeMap) {
		var tdata = this.data.readUnsignedByte();
		var type = tdata >>> 7;
		if(!cubeMap && type != 0) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("ATF Cube map not expected"));
		}
		if(cubeMap && type != 1) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("ATF Cube map expected"));
		}
		this.cubeMap = cubeMap;
		this.atfFormat = tdata & 127;
		if(this.atfFormat != 3 && this.atfFormat != 5) {
			(lime_utils_Log().default).warn("Only ATF block compressed textures without JPEG-XR+LZMA are supported",{ fileName : "../src/openfl/_internal/formats/atf/ATFReader.hx", lineNumber : 96, className : "openfl._internal.formats.atf.ATFReader", methodName : "readHeader"});
		}
		this.width = 1 << this.data.readUnsignedByte();
		this.height = 1 << this.data.readUnsignedByte();
		if(this.width != __width || this.height != __height) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("ATF width and height dont match"));
		}
		this.mipCount = this.data.readUnsignedByte();
		return this.atfFormat == 5;
	},
	readTextures: function(uploadCallback) {
		var gpuFormats = this.version < 3 ? 3 : 4;
		var sideCount = this.cubeMap ? 6 : 1;
		var _g = 0;
		var _g1 = sideCount;
		while(_g < _g1) {
			var side = _g++;
			var _g2 = 0;
			var _g11 = this.mipCount;
			while(_g2 < _g11) {
				var level = _g2++;
				var _g3 = 0;
				var _g12 = gpuFormats;
				while(_g3 < _g12) {
					var gpuFormat = _g3++;
					var blockLength = this.version == 0 ? this.__readUInt24(this.data) : this.__readUInt32(this.data);
					if((_$UInt_UInt_$Impl_$().default).gt(this.data.position + blockLength,(openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(this.data))) {
						throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("Block length exceeds ATF file length"));
					}
					if((_$UInt_UInt_$Impl_$().default).gt(blockLength,0)) {
						var bytes = (haxe_io_Bytes().default).alloc(blockLength);
						var this1 = this.data;
						var bytes1 = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromBytes(bytes);
						var offset = 0;
						var length = blockLength;
						if(length == null) {
							length = 0;
						}
						if(offset == null) {
							offset = 0;
						}
						this1.readBytes(bytes1,offset,length);
						uploadCallback(side,level,gpuFormat,this.width >> level,this.height >> level,blockLength,bytes);
					}
				}
			}
		}
	},
	__readUInt24: function(data) {
		var value = data.readUnsignedByte() << 16;
		value = value | data.readUnsignedByte() << 8;
		value = value | data.readUnsignedByte();
		return value;
	},
	__readUInt32: function(data) {
		var value = data.readUnsignedByte() << 24;
		value = value | data.readUnsignedByte() << 16;
		value = value | data.readUnsignedByte() << 8;
		value = value | data.readUnsignedByte();
		return value;
	}
};
ATFReader.prototype.__class__ = ATFReader.prototype.constructor = $hxClasses["openfl._internal.formats.atf.ATFReader"] = ATFReader;

// Init



// Statics


ATFReader.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = ATFReader;