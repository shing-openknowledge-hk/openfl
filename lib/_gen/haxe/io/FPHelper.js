// Class: haxe.io.FPHelper

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe__$Int64__$_$_$Int64() {return require("./../../haxe/_Int64/___Int64");}

// Constructor

var FPHelper = function(){}

// Meta

FPHelper.__name__ = "haxe.io.FPHelper";
FPHelper.__isInterface__ = false;
FPHelper.prototype = {
	
};
FPHelper.prototype.__class__ = FPHelper.prototype.constructor = $hxClasses["haxe.io.FPHelper"] = FPHelper;

// Init



// Statics

FPHelper.i32ToFloat = function(i) {
	FPHelper.helper.setInt32(0,i,true);
	return FPHelper.helper.getFloat32(0,true);
}
FPHelper.floatToI32 = function(f) {
	FPHelper.helper.setFloat32(0,f,true);
	return FPHelper.helper.getInt32(0,true);
}
FPHelper.i64ToDouble = function(low,high) {
	FPHelper.helper.setInt32(0,low,true);
	FPHelper.helper.setInt32(4,high,true);
	return FPHelper.helper.getFloat64(0,true);
}
FPHelper.doubleToI64 = function(v) {
	var i64 = FPHelper.i64tmp;
	FPHelper.helper.setFloat64(0,v,true);
	i64.low = FPHelper.helper.getInt32(0,true);
	i64.high = FPHelper.helper.getInt32(4,true);
	return i64;
}
FPHelper.i64tmp = (function($this) {
	var $r;
	var this1 = new (haxe__$Int64__$_$_$Int64().default)(0,0);
	$r = this1;
	return $r;
}(this))
FPHelper.helper = new DataView(new ArrayBuffer(8))

// Export

exports.default = FPHelper;