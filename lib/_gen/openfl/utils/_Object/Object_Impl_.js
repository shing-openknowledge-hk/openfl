// Class: openfl.utils._Object.Object_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function Reflect() {return require("./../../../Reflect");}
function Type() {return require("./../../../Type");}
function HxOverrides() {return require("./../../../HxOverrides");}
function js_Boot() {return require("./../../../js/Boot");}
function haxe_lang_Iterable() {return require("./../../../haxe/lang/Iterable");}
function Std() {return require("./../../../Std");}

// Constructor

var Object_Impl_ = function(){}

// Meta

Object_Impl_.__name__ = "openfl.utils._Object.Object_Impl_";
Object_Impl_.__isInterface__ = false;
Object_Impl_.prototype = {
	
};
Object_Impl_.prototype.__class__ = Object_Impl_.prototype.constructor = $hxClasses["openfl.utils._Object.Object_Impl_"] = Object_Impl_;

// Init



// Statics

Object_Impl_._new = function() {
	var this1 = { };
	return this1;
}
Object_Impl_.hasOwnProperty = function(this1,name) {
	if(this1 != null) {
		return (Reflect().default).hasField(this1,name);
	} else {
		return false;
	}
}
Object_Impl_.isPrototypeOf = function(this1,theClass) {
	var c = (Type().default).getClass(this1);
	while(c != null) {
		if(c == theClass) {
			return true;
		}
		c = (Type().default).getSuperClass(c);
	}
	return false;
}
Object_Impl_.iterator = function(this1) {
	var fields = (Reflect().default).fields(this1);
	if(fields == null) {
		fields = [];
	}
	return (HxOverrides().default).iter(fields);
}
Object_Impl_.propertyIsEnumerable = function(this1,name) {
	if(this1 != null && (Reflect().default).hasField(this1,name)) {
		return (js_Boot().default).__implements((Reflect().default).field(this1,name),(haxe_lang_Iterable().default));
	} else {
		return false;
	}
}
Object_Impl_.toLocaleString = function(this1) {
	return (Std().default).string(this1);
}
Object_Impl_.toString = function(this1) {
	return (Std().default).string(this1);
}
Object_Impl_.valueOf = function(this1) {
	return this1;
}
Object_Impl_.__get = function(this1,key) {
	return (Reflect().default).field(this1,key);
}
Object_Impl_.__set = function(this1,key,value) {
	(Reflect().default).setField(this1,key,value);
	return value;
}
Object_Impl_.__meta__ = { statics : { iterator : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, __get : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, __set : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}

// Export

exports.default = Object_Impl_;