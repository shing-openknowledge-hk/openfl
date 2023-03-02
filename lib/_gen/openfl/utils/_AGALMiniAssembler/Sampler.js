// Class: openfl.utils._AGALMiniAssembler.Sampler

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function Std() {return require("./../../../Std");}
function _$UInt_UInt_$Impl_$() {return require("./../../../_UInt/UInt_Impl_");}

// Constructor

var Sampler = function(name,flag,mask) {
	this.name = name;
	this.flag = flag;
	this.mask = mask;
}

// Meta

Sampler.__name__ = "openfl.utils._AGALMiniAssembler.Sampler";
Sampler.__isInterface__ = false;
Sampler.prototype = {
	toString: function() {
		var this1 = this.flag;
		var tmp = "[Sampler name=\"" + this.name + "\", flag=\"" + (Std().default).string(this1 == null ? null : (_$UInt_UInt_$Impl_$().default).toFloat(this1)) + "\", mask=";
		var this2 = this.mask;
		return tmp + (Std().default).string(this2 == null ? null : (_$UInt_UInt_$Impl_$().default).toFloat(this2)) + "]";
	}
};
Sampler.prototype.__class__ = Sampler.prototype.constructor = $hxClasses["openfl.utils._AGALMiniAssembler.Sampler"] = Sampler;

// Init



// Statics


Sampler.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = Sampler;