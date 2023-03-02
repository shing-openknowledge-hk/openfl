// Class: _Xml.XmlType_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $hxEnums = require("./../hxEnums_stub").default;

// Constructor

var XmlType_Impl_ = function(){}

// Meta

XmlType_Impl_.__name__ = "_Xml.XmlType_Impl_";
XmlType_Impl_.__isInterface__ = false;
XmlType_Impl_.prototype = {
	
};
XmlType_Impl_.prototype.__class__ = XmlType_Impl_.prototype.constructor = $hxClasses["_Xml.XmlType_Impl_"] = XmlType_Impl_;

// Init



// Statics

XmlType_Impl_.toString = function(this1) {
	switch(this1) {
	case 0:
		return "Element";
	case 1:
		return "PCData";
	case 2:
		return "CData";
	case 3:
		return "Comment";
	case 4:
		return "DocType";
	case 5:
		return "ProcessingInstruction";
	case 6:
		return "Document";
	}
}


// Export

exports.default = XmlType_Impl_;