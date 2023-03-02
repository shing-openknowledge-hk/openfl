// Class: haxe.xml.XmlParserException

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function Type() {return require("./../../Type");}
function StringTools() {return require("./../../StringTools");}

// Constructor

var XmlParserException = function(message,xml,position) {
	this.xml = xml;
	this.message = message;
	this.position = position;
	this.lineNumber = 1;
	this.positionAtLine = 0;
	var _g = 0;
	var _g1 = position;
	while(_g < _g1) {
		var i = _g++;
		var c = (StringTools().default).fastCodeAt(xml,i);
		if(c == 10) {
			this.lineNumber++;
			this.positionAtLine = 0;
		} else if(c != 13) {
			this.positionAtLine++;
		}
	}
}

// Meta

XmlParserException.__name__ = "haxe.xml.XmlParserException";
XmlParserException.__isInterface__ = false;
XmlParserException.prototype = {
	toString: function() {
		return (Type().default).getClassName((Type().default).getClass(this)) + ": " + this.message + " at line " + this.lineNumber + " char " + this.positionAtLine;
	}
};
XmlParserException.prototype.__class__ = XmlParserException.prototype.constructor = $hxClasses["haxe.xml.XmlParserException"] = XmlParserException;

// Init



// Statics




// Export

exports.default = XmlParserException;