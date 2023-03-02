// Class: openfl.net._URLVariables.URLVariables_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function Reflect() {return require("./../../../Reflect");}
function StringTools() {return require("./../../../StringTools");}
function HxOverrides() {return require("./../../../HxOverrides");}
function Lambda() {return require("./../../../Lambda");}

// Constructor

var URLVariables_Impl_ = function(){}

// Meta

URLVariables_Impl_.__name__ = "openfl.net._URLVariables.URLVariables_Impl_";
URLVariables_Impl_.__isInterface__ = false;
URLVariables_Impl_.prototype = {
	
};
URLVariables_Impl_.prototype.__class__ = URLVariables_Impl_.prototype.constructor = $hxClasses["openfl.net._URLVariables.URLVariables_Impl_"] = URLVariables_Impl_;

// Init



// Statics

URLVariables_Impl_._new = function(source) {
	var this1 = { };
	if(source != null) {
		URLVariables_Impl_.decode(this1,source);
	}
	return this1;
}
URLVariables_Impl_.decode = function(this1,source) {
	var fields = (Reflect().default).fields(this1);
	var _g = 0;
	while(_g < fields.length) {
		var f = fields[_g];
		++_g;
		(Reflect().default).deleteField(this1,f);
	}
	var fields1 = source.split(";").join("&").split("&");
	var _g1 = 0;
	while(_g1 < fields1.length) {
		var f1 = fields1[_g1];
		++_g1;
		var eq = f1.indexOf("=");
		if(eq > 0) {
			(Reflect().default).setField(this1,(StringTools().default).urlDecode((HxOverrides().default).substr(f1,0,eq)),(StringTools().default).urlDecode((HxOverrides().default).substr(f1,eq + 1,null)));
		} else if(eq != 0) {
			(Reflect().default).setField(this1,(StringTools().default).urlDecode(f1),"");
		}
	}
}
URLVariables_Impl_.toString = function(this1) {
	var result = [];
	var fields = (Reflect().default).fields(this1);
	var _g = 0;
	while(_g < fields.length) {
		var f = fields[_g];
		++_g;
		var value = (Reflect().default).field(this1,f);
		if(f.indexOf("[]") > -1 && ((value) instanceof Array)) {
			var arrayValue = (Lambda().default).map(value,function(v) {
				return (StringTools().default).urlEncode(v);
			}).join("&amp;" + f + "=");
			result.push((StringTools().default).urlEncode(f) + "=" + arrayValue);
		} else {
			result.push((StringTools().default).urlEncode(f) + "=" + (StringTools().default).urlEncode(value));
		}
	}
	return result.join("&");
}


// Export

exports.default = URLVariables_Impl_;