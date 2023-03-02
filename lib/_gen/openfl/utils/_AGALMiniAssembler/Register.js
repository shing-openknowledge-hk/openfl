// Class: openfl.utils._AGALMiniAssembler.Register

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

var Register = function(name,longName,emitCode,range,flags) {
	this.name = name;
	this.longName = longName;
	this.emitCode = emitCode;
	this.range = range;
	this.flags = flags;
}

// Meta

Register.__name__ = "openfl.utils._AGALMiniAssembler.Register";
Register.__isInterface__ = false;
Register.prototype = {
	toString: function() {
		var this1 = this.emitCode;
		var tmp = "[Register name=\"" + this.name + "\", longName=\"" + this.longName + "\", emitCode=" + (Std().default).string(this1 == null ? null : (_$UInt_UInt_$Impl_$().default).toFloat(this1)) + ", range=";
		var this2 = this.range;
		var tmp1 = tmp + (Std().default).string(this2 == null ? null : (_$UInt_UInt_$Impl_$().default).toFloat(this2)) + ", flags=";
		var this3 = this.flags;
		return tmp1 + (Std().default).string(this3 == null ? null : (_$UInt_UInt_$Impl_$().default).toFloat(this3)) + "]";
	}
};
Register.prototype.__class__ = Register.prototype.constructor = $hxClasses["openfl.utils._AGALMiniAssembler.Register"] = Register;

// Init



// Statics


Register.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = Register;