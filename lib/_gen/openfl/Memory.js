// Class: openfl.Memory

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $hxEnums = require("./../hxEnums_stub").default;
var $import = require("./../import_stub").default;
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../openfl/utils/_ByteArray/ByteArray_Impl_");}

// Constructor

var Memory = function(){}

// Meta

Memory.__name__ = "openfl.Memory";
Memory.__isInterface__ = false;
Memory.prototype = {
	
};
Memory.prototype.__class__ = Memory.prototype.constructor = $hxClasses["openfl.Memory"] = Memory;

// Init



// Statics

Memory.getByte = function(position) {
	return Memory.__byteArray.get(position);
}
Memory.getDouble = function(position) {
	return Memory._setPositionTemporarily(position,function() {
		return Memory.__byteArray.readDouble();
	});
}
Memory.getFloat = function(position) {
	return Memory._setPositionTemporarily(position,function() {
		return Memory.__byteArray.readFloat();
	});
}
Memory.getI32 = function(position) {
	return Memory._setPositionTemporarily(position,function() {
		return Memory.__byteArray.readInt();
	});
}
Memory.getUI16 = function(position) {
	return Memory._setPositionTemporarily(position,function() {
		return Memory.__byteArray.readUnsignedShort();
	});
}
Memory.select = function(byteArray) {
	Memory.__byteArray = byteArray;
	Memory.__length = byteArray != null ? (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(byteArray) : 0;
}
Memory.setByte = function(position,v) {
	var this1 = Memory.__byteArray;
	this1.__resize(position + 1);
	this1.set(position,v);
}
Memory.setDouble = function(position,v) {
	Memory._setPositionTemporarily(position,function() {
		Memory.__byteArray.writeDouble(v);
	});
}
Memory.setFloat = function(position,v) {
	Memory._setPositionTemporarily(position,function() {
		Memory.__byteArray.writeFloat(v);
	});
}
Memory.setI16 = function(position,v) {
	Memory._setPositionTemporarily(position,function() {
		Memory.__byteArray.writeShort(v);
	});
}
Memory.setI32 = function(position,v) {
	Memory._setPositionTemporarily(position,function() {
		Memory.__byteArray.writeInt(v);
	});
}
Memory._setPositionTemporarily = function(position,action) {
	var oldPosition = Memory.__byteArray.position;
	Memory.__byteArray.position = position;
	var value = action();
	Memory.__byteArray.position = oldPosition;
	return value;
}
Memory.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = Memory;