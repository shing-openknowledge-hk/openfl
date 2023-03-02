// Class: openfl.utils._Dictionary.Dictionary_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function Reflect() {return require("./../../../Reflect");}
function haxe_iterators_MapKeyValueIterator() {return require("./../../../haxe/iterators/MapKeyValueIterator");}
function HxOverrides() {return require("./../../../HxOverrides");}

// Constructor

var Dictionary_Impl_ = function(){}

// Meta

Dictionary_Impl_.__name__ = "openfl.utils._Dictionary.Dictionary_Impl_";
Dictionary_Impl_.__isInterface__ = false;
Dictionary_Impl_.prototype = {
	
};
Dictionary_Impl_.prototype.__class__ = Dictionary_Impl_.prototype.constructor = $hxClasses["openfl.utils._Dictionary.Dictionary_Impl_"] = Dictionary_Impl_;

// Init



// Statics

Dictionary_Impl_._new = function(weakKeys) {
	if(weakKeys == null) {
		weakKeys = false;
	}
	var this1 = { };
	return this1;
}
Dictionary_Impl_.exists = function(this1,key) {
	return (Reflect().default).hasField(this1,key);
}
Dictionary_Impl_.get = function(this1,key) {
	return (Reflect().default).field(this1,key);
}
Dictionary_Impl_.keyValueIterator = function(this1) {
	return new (haxe_iterators_MapKeyValueIterator().default)(this1);
}
Dictionary_Impl_.remove = function(this1,key) {
	if((Reflect().default).hasField(this1,key)) {
		(Reflect().default).deleteField(this1,key);
		return true;
	}
	return false;
}
Dictionary_Impl_.set = function(this1,key,value) {
	(Reflect().default).setField(this1,key,value);
	return value;
}
Dictionary_Impl_.iterator = function(this1) {
	var fields = (Reflect().default).fields(this1);
	if(fields != null) {
		return (HxOverrides().default).iter(fields);
	}
	return null;
}
Dictionary_Impl_.each = function(this1) {
	var values = [];
	var _g = 0;
	var _g1 = (Reflect().default).fields(this1);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		values.push((Reflect().default).field(this1,field));
	}
	return (HxOverrides().default).iter(values);
}


// Export

exports.default = Dictionary_Impl_;