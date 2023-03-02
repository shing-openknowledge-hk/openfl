// Class: haxe.xml.Parser

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function Xml() {return require("./../../Xml");}
function StringTools() {return require("./../../StringTools");}
function StringBuf() {return require("./../../StringBuf");}
function HxOverrides() {return require("./../../HxOverrides");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_xml_XmlParserException() {return require("./../../haxe/xml/XmlParserException");}
function Std() {return require("./../../Std");}

// Constructor

var Parser = function(){}

// Meta

Parser.__name__ = "haxe.xml.Parser";
Parser.__isInterface__ = false;
Parser.prototype = {
	
};
Parser.prototype.__class__ = Parser.prototype.constructor = $hxClasses["haxe.xml.Parser"] = Parser;

// Init



// Statics

Parser.parse = function(str,strict) {
	if(strict == null) {
		strict = false;
	}
	var doc = (Xml().default).createDocument();
	Parser.doParse(str,strict,0,doc);
	return doc;
}
Parser.doParse = function(str,strict,p,parent) {
	if(p == null) {
		p = 0;
	}
	var xml = null;
	var state = 1;
	var next = 1;
	var aname = null;
	var start = 0;
	var nsubs = 0;
	var nbrackets = 0;
	var c = (StringTools().default).fastCodeAt(str,p);
	var buf = new (StringBuf().default)();
	var escapeNext = 1;
	var attrValQuote = -1;
	while(!(StringTools().default).isEof(c)) {
		switch(state) {
		case 0:
			switch(c) {
			case 9:case 10:case 13:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			if(c == 60) {
				state = 0;
				next = 2;
			} else {
				start = p;
				state = 13;
				continue;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				if((StringTools().default).fastCodeAt(str,p + 1) == 91) {
					p += 2;
					if((HxOverrides().default).substr(str,p,6).toUpperCase() != "CDATA[") {
						throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Expected <![CDATA[",str,p));
					}
					p += 5;
					state = 17;
					start = p + 1;
				} else if((StringTools().default).fastCodeAt(str,p + 1) == 68 || (StringTools().default).fastCodeAt(str,p + 1) == 100) {
					if((HxOverrides().default).substr(str,p + 2,6).toUpperCase() != "OCTYPE") {
						throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Expected <!DOCTYPE",str,p));
					}
					p += 8;
					state = 16;
					start = p + 1;
				} else if((StringTools().default).fastCodeAt(str,p + 1) != 45 || (StringTools().default).fastCodeAt(str,p + 2) != 45) {
					throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Expected <!--",str,p));
				} else {
					p += 2;
					state = 15;
					start = p + 1;
				}
				break;
			case 47:
				if(parent == null) {
					throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Expected node name",str,p));
				}
				start = p + 1;
				state = 0;
				next = 10;
				break;
			case 63:
				state = 14;
				start = p;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!Parser.isValidChar(c)) {
				if(p == start) {
					throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Expected node name",str,p));
				}
				xml = (Xml().default).createElement((HxOverrides().default).substr(str,start,p - start));
				parent.addChild(xml);
				++nsubs;
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				break;
			case 62:
				state = 9;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!Parser.isValidChar(c)) {
				if(start == p) {
					throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Expected attribute name",str,p));
				}
				var tmp = (HxOverrides().default).substr(str,start,p - start);
				aname = tmp;
				if(xml.exists(aname)) {
					throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Duplicate attribute [" + aname + "]",str,p));
				}
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			if(c == 61) {
				state = 0;
				next = 7;
			} else {
				throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Expected =",str,p));
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				buf = new (StringBuf().default)();
				state = 8;
				start = p + 1;
				attrValQuote = c;
				break;
			default:
				throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Expected \"",str,p));
			}
			break;
		case 8:
			switch(c) {
			case 38:
				buf.addSub(str,start,p - start);
				state = 18;
				escapeNext = 8;
				start = p + 1;
				break;
			case 60:case 62:
				if(strict) {
					throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Invalid unescaped " + String.fromCodePoint(c) + " in attribute value",str,p));
				} else if(c == attrValQuote) {
					buf.addSub(str,start,p - start);
					var val = buf.toString();
					buf = new (StringBuf().default)();
					xml.set(aname,val);
					state = 0;
					next = 4;
				}
				break;
			default:
				if(c == attrValQuote) {
					buf.addSub(str,start,p - start);
					var val1 = buf.toString();
					buf = new (StringBuf().default)();
					xml.set(aname,val1);
					state = 0;
					next = 4;
				}
			}
			break;
		case 9:
			p = Parser.doParse(str,strict,p,xml);
			start = p;
			state = 1;
			break;
		case 10:
			if(!Parser.isValidChar(c)) {
				if(start == p) {
					throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Expected node name",str,p));
				}
				var v = (HxOverrides().default).substr(str,start,p - start);
				if(parent == null || parent.nodeType != 0) {
					throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Unexpected </" + v + ">, tag is not open",str,p));
				}
				if(v != parent.get_nodeName()) {
					throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Expected </" + parent.get_nodeName() + ">",str,p));
				}
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 11:
			if(c == 62) {
				state = 1;
			} else {
				throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Expected >",str,p));
			}
			break;
		case 12:
			if(c == 62) {
				if(nsubs == 0) {
					parent.addChild((Xml().default).createPCData(""));
				}
				return p;
			} else {
				throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Expected >",str,p));
			}
			break;
		case 13:
			if(c == 60) {
				buf.addSub(str,start,p - start);
				var child = (Xml().default).createPCData(buf.toString());
				buf = new (StringBuf().default)();
				parent.addChild(child);
				++nsubs;
				state = 0;
				next = 2;
			} else if(c == 38) {
				buf.addSub(str,start,p - start);
				state = 18;
				escapeNext = 13;
				start = p + 1;
			}
			break;
		case 14:
			if(c == 63 && (StringTools().default).fastCodeAt(str,p + 1) == 62) {
				++p;
				var str1 = (HxOverrides().default).substr(str,start + 1,p - start - 2);
				parent.addChild((Xml().default).createProcessingInstruction(str1));
				++nsubs;
				state = 1;
			}
			break;
		case 15:
			if(c == 45 && (StringTools().default).fastCodeAt(str,p + 1) == 45 && (StringTools().default).fastCodeAt(str,p + 2) == 62) {
				parent.addChild((Xml().default).createComment((HxOverrides().default).substr(str,start,p - start)));
				++nsubs;
				p += 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) {
				++nbrackets;
			} else if(c == 93) {
				--nbrackets;
			} else if(c == 62 && nbrackets == 0) {
				parent.addChild((Xml().default).createDocType((HxOverrides().default).substr(str,start,p - start)));
				++nsubs;
				state = 1;
			}
			break;
		case 17:
			if(c == 93 && (StringTools().default).fastCodeAt(str,p + 1) == 93 && (StringTools().default).fastCodeAt(str,p + 2) == 62) {
				var child1 = (Xml().default).createCData((HxOverrides().default).substr(str,start,p - start));
				parent.addChild(child1);
				++nsubs;
				p += 2;
				state = 1;
			}
			break;
		case 18:
			if(c == 59) {
				var s = (HxOverrides().default).substr(str,start,p - start);
				if((StringTools().default).fastCodeAt(s,0) == 35) {
					var c1 = (StringTools().default).fastCodeAt(s,1) == 120 ? (Std().default).parseInt("0" + (HxOverrides().default).substr(s,1,s.length - 1)) : (Std().default).parseInt((HxOverrides().default).substr(s,1,s.length - 1));
					buf.addChar(c1);
				} else if(!Parser.escapes.exists(s)) {
					if(strict) {
						throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Undefined entity: " + s,str,p));
					}
					buf.add("&" + s + ";");
				} else {
					buf.add(Parser.escapes.get(s));
				}
				start = p + 1;
				state = escapeNext;
			} else if(!Parser.isValidChar(c) && c != 35) {
				if(strict) {
					throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Invalid character in entity: " + String.fromCodePoint(c),str,p));
				}
				buf.addChar(38);
				buf.addSub(str,start,p - start);
				--p;
				start = p + 1;
				state = escapeNext;
			}
			break;
		}
		c = (StringTools().default).fastCodeAt(str,++p);
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(parent.nodeType == 0) {
			throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Unclosed node <" + parent.get_nodeName() + ">",str,p));
		}
		if(p != start || nsubs == 0) {
			buf.addSub(str,start,p - start);
			parent.addChild((Xml().default).createPCData(buf.toString()));
			++nsubs;
		}
		return p;
	}
	if(!strict && state == 18 && escapeNext == 13) {
		buf.addChar(38);
		buf.addSub(str,start,p - start);
		parent.addChild((Xml().default).createPCData(buf.toString()));
		++nsubs;
		return p;
	}
	throw new (js__$Boot_HaxeError().default)(new (haxe_xml_XmlParserException().default)("Unexpected end",str,p));
}
Parser.isValidChar = function(c) {
	if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95)) {
		return c == 45;
	} else {
		return true;
	}
}
Parser.escapes = (function($this) {
	var $r;
	var h = new (haxe_ds_StringMap().default)();
	h.set("lt","<");
	h.set("gt",">");
	h.set("amp","&");
	h.set("quot","\"");
	h.set("apos","'");
	$r = h;
	return $r;
}(this))

// Export

exports.default = Parser;