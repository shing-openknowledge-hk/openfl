// Class: StringTools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $hxEnums = require("./hxEnums_stub").default;
var $import = require("./import_stub").default;
function StringBuf() {return require("./StringBuf");}
function haxe_iterators_StringIteratorUnicode() {return require("./haxe/iterators/StringIteratorUnicode");}
function HxOverrides() {return require("./HxOverrides");}

// Constructor

var StringTools = function(){}

// Meta

StringTools.__name__ = "StringTools";
StringTools.__isInterface__ = false;
StringTools.prototype = {
	
};
StringTools.prototype.__class__ = StringTools.prototype.constructor = $hxClasses["StringTools"] = StringTools;

// Init



// Statics

StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s,quotes) {
	var buf = new (StringBuf().default)();
	var code = new (haxe_iterators_StringIteratorUnicode().default)(s);
	while(code.hasNext()) {
		var code1 = code.next();
		switch(code1) {
		case 34:
			if(quotes) {
				buf.add("&quot;");
			} else {
				buf.addChar(code1);
			}
			break;
		case 38:
			buf.add("&amp;");
			break;
		case 39:
			if(quotes) {
				buf.add("&#039;");
			} else {
				buf.addChar(code1);
			}
			break;
		case 60:
			buf.add("&lt;");
			break;
		case 62:
			buf.add("&gt;");
			break;
		default:
			buf.addChar(code1);
		}
	}
	return buf.toString();
}
StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return s.lastIndexOf(start,0) == 0;
	} else {
		return false;
	}
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	if(slen >= elen) {
		return s.indexOf(end,slen - elen) == slen - elen;
	} else {
		return false;
	}
}
StringTools.isSpace = function(s,pos) {
	var c = (HxOverrides().default).cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return (HxOverrides().default).substr(s,r,l - r);
	} else {
		return s;
	}
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return (HxOverrides().default).substr(s,0,l - r);
	} else {
		return s;
	}
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	while(true) {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
		if(!(n > 0)) {
			break;
		}
	}
	if(digits != null) {
		while(s.length < digits) s = "0" + s;
	}
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
}
StringTools.isEof = function(c) {
	return c != c;
}
StringTools.utf16CodePointAt = function(s,index) {
	var c = StringTools.fastCodeAt(s,index);
	if(c >= 55296 && c <= 56319) {
		c = c - 55232 << 10 | StringTools.fastCodeAt(s,index + 1) & 1023;
	}
	return c;
}


// Export

exports.default = StringTools;