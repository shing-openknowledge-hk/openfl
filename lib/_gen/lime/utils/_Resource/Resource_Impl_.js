// Class: lime.utils._Resource.Resource_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}

// Constructor

var Resource_Impl_ = function(){}

// Meta

Resource_Impl_.__name__ = "lime.utils._Resource.Resource_Impl_";
Resource_Impl_.__isInterface__ = false;
Resource_Impl_.prototype = {
	
};
Resource_Impl_.prototype.__class__ = Resource_Impl_.prototype.constructor = $hxClasses["lime.utils._Resource.Resource_Impl_"] = Resource_Impl_;

// Init



// Statics

Resource_Impl_._new = function(size) {
	if(size == null) {
		size = 0;
	}
	var this1 = (haxe_io_Bytes().default).alloc(size);
	return this1;
}
Resource_Impl_.__fromString = function(value) {
	return (haxe_io_Bytes().default).ofString(value);
}
Resource_Impl_.__toString = function(value) {
	return value.toString();
}


// Export

exports.default = Resource_Impl_;