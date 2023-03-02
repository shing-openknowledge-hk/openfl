// Class: Xml

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $hxEnums = require("./hxEnums_stub").default;
var $import = require("./import_stub").default;
function js__$Boot_HaxeError() {return require("./js/_Boot/HaxeError");}
function _$Xml_XmlType_$Impl_$() {return require("./_Xml/XmlType_Impl_");}
function HxOverrides() {return require("./HxOverrides");}
function haxe_xml_Printer() {return require("./haxe/xml/Printer");}
function haxe_xml_Parser() {return require("./haxe/xml/Parser");}
function haxe_ds_StringMap() {return require("./haxe/ds/StringMap");}

// Constructor

var Xml = function(nodeType) {
	this.nodeType = nodeType;
	this.children = [];
	this.attributeMap = new (haxe_ds_StringMap().default)();
}

// Meta

Xml.__name__ = "Xml";
Xml.__isInterface__ = false;
Xml.prototype = {
	get_nodeName: function() {
		if(this.nodeType != Xml.Element) {
			throw new (js__$Boot_HaxeError().default)("Bad node type, expected Element but found " + (_$Xml_XmlType_$Impl_$().default).toString(this.nodeType));
		}
		return this.nodeName;
	},
	set_nodeName: function(v) {
		if(this.nodeType != Xml.Element) {
			throw new (js__$Boot_HaxeError().default)("Bad node type, expected Element but found " + (_$Xml_XmlType_$Impl_$().default).toString(this.nodeType));
		}
		return this.nodeName = v;
	},
	get_nodeValue: function() {
		if(this.nodeType == Xml.Document || this.nodeType == Xml.Element) {
			throw new (js__$Boot_HaxeError().default)("Bad node type, unexpected " + (_$Xml_XmlType_$Impl_$().default).toString(this.nodeType));
		}
		return this.nodeValue;
	},
	set_nodeValue: function(v) {
		if(this.nodeType == Xml.Document || this.nodeType == Xml.Element) {
			throw new (js__$Boot_HaxeError().default)("Bad node type, unexpected " + (_$Xml_XmlType_$Impl_$().default).toString(this.nodeType));
		}
		return this.nodeValue = v;
	},
	get: function(att) {
		if(this.nodeType != Xml.Element) {
			throw new (js__$Boot_HaxeError().default)("Bad node type, expected Element but found " + (_$Xml_XmlType_$Impl_$().default).toString(this.nodeType));
		}
		return this.attributeMap.get(att);
	},
	set: function(att,value) {
		if(this.nodeType != Xml.Element) {
			throw new (js__$Boot_HaxeError().default)("Bad node type, expected Element but found " + (_$Xml_XmlType_$Impl_$().default).toString(this.nodeType));
		}
		this.attributeMap.set(att,value);
	},
	exists: function(att) {
		if(this.nodeType != Xml.Element) {
			throw new (js__$Boot_HaxeError().default)("Bad node type, expected Element but found " + (_$Xml_XmlType_$Impl_$().default).toString(this.nodeType));
		}
		return this.attributeMap.exists(att);
	},
	attributes: function() {
		if(this.nodeType != Xml.Element) {
			throw new (js__$Boot_HaxeError().default)("Bad node type, expected Element but found " + (_$Xml_XmlType_$Impl_$().default).toString(this.nodeType));
		}
		return this.attributeMap.keys();
	},
	iterator: function() {
		this.ensureElementType();
		return (HxOverrides().default).iter(this.children);
	},
	addChild: function(x) {
		this.ensureElementType();
		if(x.parent != null) {
			x.parent.removeChild(x);
		}
		this.children.push(x);
		x.parent = this;
	},
	removeChild: function(x) {
		this.ensureElementType();
		if((HxOverrides().default).remove(this.children,x)) {
			x.parent = null;
			return true;
		}
		return false;
	},
	toString: function() {
		return (haxe_xml_Printer().default).print(this);
	},
	ensureElementType: function() {
		if(this.nodeType != Xml.Document && this.nodeType != Xml.Element) {
			throw new (js__$Boot_HaxeError().default)("Bad node type, expected Element or Document but found " + (_$Xml_XmlType_$Impl_$().default).toString(this.nodeType));
		}
	}
};
Xml.prototype.__class__ = Xml.prototype.constructor = $hxClasses["Xml"] = Xml;

// Init



// Statics

Xml.parse = function(str) {
	return (haxe_xml_Parser().default).parse(str);
}
Xml.createElement = function(name) {
	var xml = new Xml(Xml.Element);
	xml.set_nodeName(name);
	return xml;
}
Xml.createPCData = function(data) {
	var xml = new Xml(Xml.PCData);
	xml.set_nodeValue(data);
	return xml;
}
Xml.createCData = function(data) {
	var xml = new Xml(Xml.CData);
	xml.set_nodeValue(data);
	return xml;
}
Xml.createComment = function(data) {
	var xml = new Xml(Xml.Comment);
	xml.set_nodeValue(data);
	return xml;
}
Xml.createDocType = function(data) {
	var xml = new Xml(Xml.DocType);
	xml.set_nodeValue(data);
	return xml;
}
Xml.createProcessingInstruction = function(data) {
	var xml = new Xml(Xml.ProcessingInstruction);
	xml.set_nodeValue(data);
	return xml;
}
Xml.createDocument = function() {
	return new Xml(Xml.Document);
}
Xml.Element = 0
Xml.PCData = 1
Xml.CData = 2
Xml.Comment = 3
Xml.DocType = 4
Xml.ProcessingInstruction = 5
Xml.Document = 6

// Export

exports.default = Xml;