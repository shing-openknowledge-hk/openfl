// Class: StringBuf

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $hxEnums = require("./hxEnums_stub").default;
var $import = require("./import_stub").default;
function Std() {return require("./Std");}
function HxOverrides() {return require("./HxOverrides");}

// Constructor

var StringBuf = function() {
	this.b = "";
}

// Meta

StringBuf.__name__ = "StringBuf";
StringBuf.__isInterface__ = false;
StringBuf.prototype = {
	add: function(x) {
		this.b += (Std().default).string(x);
	},
	addChar: function(c) {
		this.b += String.fromCodePoint(c);
	},
	addSub: function(s,pos,len) {
		this.b += len == null ? (HxOverrides().default).substr(s,pos,null) : (HxOverrides().default).substr(s,pos,len);
	},
	toString: function() {
		return this.b;
	}
};
StringBuf.prototype.__class__ = StringBuf.prototype.constructor = $hxClasses["StringBuf"] = StringBuf;

// Init



// Statics




// Export

exports.default = StringBuf;