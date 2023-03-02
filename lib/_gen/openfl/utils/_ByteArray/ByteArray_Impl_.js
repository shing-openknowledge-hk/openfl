// Class: openfl.utils._ByteArray.ByteArray_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_utils_BytePointerData() {return require("./../../../lime/utils/BytePointerData");}
function openfl_utils_ByteArrayData() {return require("./../../../openfl/utils/ByteArrayData");}
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function lime_utils__$Bytes_Bytes_$Impl_$() {return require("./../../../lime/utils/_Bytes/Bytes_Impl_");}
function lime_app_Future() {return require("./../../../lime/app/Future");}
function lime_utils__$BytePointer_BytePointer_$Impl_$() {return require("./../../../lime/utils/_BytePointer/BytePointer_Impl_");}

// Constructor

var ByteArray_Impl_ = function(){}

// Meta

ByteArray_Impl_.__name__ = "openfl.utils._ByteArray.ByteArray_Impl_";
ByteArray_Impl_.__isInterface__ = false;
ByteArray_Impl_.prototype = {
	
};
ByteArray_Impl_.prototype.__class__ = ByteArray_Impl_.prototype.constructor = $hxClasses["openfl.utils._ByteArray.ByteArray_Impl_"] = ByteArray_Impl_;

// Init



// Statics

ByteArray_Impl_._new = function(length) {
	if(length == null) {
		length = 0;
	}
	var this1 = new (openfl_utils_ByteArrayData().default)(length);
	return this1;
}
ByteArray_Impl_.clear = function(this1) {
	this1.clear();
}
ByteArray_Impl_.compress = function(this1,algorithm) {
	this1.compress(algorithm);
	return;
}
ByteArray_Impl_.deflate = function(this1) {
	this1.deflate();
}
ByteArray_Impl_.fromArrayBuffer = function(buffer) {
	if(buffer == null) {
		return null;
	}
	return (openfl_utils_ByteArrayData().default).fromBytes((haxe_io_Bytes().default).ofData(buffer));
}
ByteArray_Impl_.fromBytes = function(bytes) {
	if(bytes == null) {
		return null;
	}
	if(((bytes) instanceof (openfl_utils_ByteArrayData().default))) {
		return bytes;
	} else {
		return (openfl_utils_ByteArrayData().default).fromBytes(bytes);
	}
}
ByteArray_Impl_.fromBytesData = function(bytesData) {
	if(bytesData == null) {
		return null;
	}
	return (openfl_utils_ByteArrayData().default).fromBytes((haxe_io_Bytes().default).ofData(bytesData));
}
ByteArray_Impl_.fromFile = function(path) {
	return ByteArray_Impl_.fromBytes((lime_utils__$Bytes_Bytes_$Impl_$().default).fromFile(path));
}
ByteArray_Impl_.fromLimeBytes = function(bytes) {
	return ByteArray_Impl_.fromBytes(bytes);
}
ByteArray_Impl_.get = function(this1,index) {
	return this1.get(index);
}
ByteArray_Impl_.inflate = function(this1) {
	this1.inflate();
}
ByteArray_Impl_.loadFromBytes = function(bytes) {
	return (lime_utils__$Bytes_Bytes_$Impl_$().default).loadFromBytes(bytes).then(function(limeBytes) {
		var byteArray = ByteArray_Impl_.fromBytes(limeBytes);
		return (lime_app_Future().default).withValue(byteArray);
	});
}
ByteArray_Impl_.loadFromFile = function(path) {
	return (lime_utils__$Bytes_Bytes_$Impl_$().default).loadFromFile(path).then(function(limeBytes) {
		var byteArray = ByteArray_Impl_.fromBytes(limeBytes);
		return (lime_app_Future().default).withValue(byteArray);
	});
}
ByteArray_Impl_.readBoolean = function(this1) {
	return this1.readBoolean();
}
ByteArray_Impl_.readByte = function(this1) {
	return this1.readByte();
}
ByteArray_Impl_.readBytes = function(this1,bytes,offset,length) {
	if(length == null) {
		length = 0;
	}
	if(offset == null) {
		offset = 0;
	}
	this1.readBytes(bytes,offset,length);
}
ByteArray_Impl_.readDouble = function(this1) {
	return this1.readDouble();
}
ByteArray_Impl_.readFloat = function(this1) {
	return this1.readFloat();
}
ByteArray_Impl_.readInt = function(this1) {
	return this1.readInt();
}
ByteArray_Impl_.readMultiByte = function(this1,length,charSet) {
	return this1.readMultiByte(length,charSet);
}
ByteArray_Impl_.readObject = function(this1) {
	return this1.readObject();
}
ByteArray_Impl_.readShort = function(this1) {
	return this1.readShort();
}
ByteArray_Impl_.readUTF = function(this1) {
	return this1.readUTF();
}
ByteArray_Impl_.readUTFBytes = function(this1,length) {
	return this1.readUTFBytes(length);
}
ByteArray_Impl_.readUnsignedByte = function(this1) {
	return this1.readUnsignedByte();
}
ByteArray_Impl_.readUnsignedInt = function(this1) {
	return this1.readUnsignedInt();
}
ByteArray_Impl_.readUnsignedShort = function(this1) {
	return this1.readUnsignedShort();
}
ByteArray_Impl_.set = function(this1,index,value) {
	this1.__resize(index + 1);
	this1.set(index,value);
	return value;
}
ByteArray_Impl_.toArrayBuffer = function(byteArray) {
	return byteArray.getData();
}
ByteArray_Impl_.toBytePointer = function(byteArray) {
	(lime_utils__$BytePointer_BytePointer_$Impl_$().default).set(ByteArray_Impl_.__bytePointer,byteArray,null,null,byteArray.position);
	return ByteArray_Impl_.__bytePointer;
}
ByteArray_Impl_.toBytes = function(byteArray) {
	return byteArray;
}
ByteArray_Impl_.toBytesData = function(byteArray) {
	return byteArray.getData();
}
ByteArray_Impl_.toLimeBytes = function(byteArray) {
	return ByteArray_Impl_.toBytes(ByteArray_Impl_.fromBytes(ByteArray_Impl_.toBytes(byteArray)));
}
ByteArray_Impl_.toString = function(this1) {
	return this1.toString();
}
ByteArray_Impl_.uncompress = function(this1,algorithm) {
	this1.uncompress(algorithm);
	return;
}
ByteArray_Impl_.writeBoolean = function(this1,value) {
	this1.writeBoolean(value);
}
ByteArray_Impl_.writeByte = function(this1,value) {
	this1.writeByte(value);
}
ByteArray_Impl_.writeBytes = function(this1,bytes,offset,length) {
	if(length == null) {
		length = 0;
	}
	if(offset == null) {
		offset = 0;
	}
	this1.writeBytes(bytes,offset,length);
}
ByteArray_Impl_.writeDouble = function(this1,value) {
	this1.writeDouble(value);
}
ByteArray_Impl_.writeFloat = function(this1,value) {
	this1.writeFloat(value);
}
ByteArray_Impl_.writeInt = function(this1,value) {
	this1.writeInt(value);
}
ByteArray_Impl_.writeMultiByte = function(this1,value,charSet) {
	this1.writeMultiByte(value,charSet);
}
ByteArray_Impl_.writeObject = function(this1,object) {
	this1.writeObject(object);
}
ByteArray_Impl_.writeShort = function(this1,value) {
	this1.writeShort(value);
}
ByteArray_Impl_.writeUTF = function(this1,value) {
	this1.writeUTF(value);
}
ByteArray_Impl_.writeUTFBytes = function(this1,value) {
	this1.writeUTFBytes(value);
}
ByteArray_Impl_.writeUnsignedInt = function(this1,value) {
	this1.writeUnsignedInt(value);
}
ByteArray_Impl_.get_bytesAvailable = function(this1) {
	return this1.get_bytesAvailable();
}
ByteArray_Impl_.get_defaultEndian = function() {
	return (openfl_utils_ByteArrayData().default).get_defaultEndian();
}
ByteArray_Impl_.set_defaultEndian = function(value) {
	return (openfl_utils_ByteArrayData().default).set_defaultEndian(value);
}
ByteArray_Impl_.get_defaultObjectEncoding = function() {
	return (openfl_utils_ByteArrayData().default).defaultObjectEncoding;
}
ByteArray_Impl_.set_defaultObjectEncoding = function(value) {
	return (openfl_utils_ByteArrayData().default).defaultObjectEncoding = value;
}
ByteArray_Impl_.get_endian = function(this1) {
	return this1.get_endian();
}
ByteArray_Impl_.set_endian = function(this1,value) {
	return this1.set_endian(value);
}
ByteArray_Impl_.get_length = function(this1) {
	if(this1 == null) {
		return 0;
	} else {
		return this1.l;
	}
}
ByteArray_Impl_.set_length = function(this1,value) {
	this1.set_length(value);
	return value;
}
ByteArray_Impl_.get_objectEncoding = function(this1) {
	return this1.objectEncoding;
}
ByteArray_Impl_.set_objectEncoding = function(this1,value) {
	return this1.objectEncoding = value;
}
ByteArray_Impl_.get_position = function(this1) {
	return this1.position;
}
ByteArray_Impl_.set_position = function(this1,value) {
	return this1.position = value;
}
ByteArray_Impl_.__bytePointer = (function($this) {
	var $r;
	var this1 = new (lime_utils_BytePointerData().default)(null,0);
	$r = this1;
	return $r;
}(this))

// Export

exports.default = ByteArray_Impl_;