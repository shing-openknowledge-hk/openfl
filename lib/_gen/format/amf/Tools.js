// Class: format.amf.Tools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function Type() {return require("./../../Type");}
function format_amf_Value() {return require("./../../format/amf/Value");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function Reflect() {return require("./../../Reflect");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function Std() {return require("./../../Std");}

// Constructor

var Tools = function(){}

// Meta

Tools.__name__ = "format.amf.Tools";
Tools.__isInterface__ = false;
Tools.prototype = {
	
};
Tools.prototype.__class__ = Tools.prototype.constructor = $hxClasses["format.amf.Tools"] = Tools;

// Init



// Statics

Tools.encode = function(o) {
	var _g = (Type().default).typeof(o);
	switch(_g._hx_index) {
	case 0:
		return (format_amf_Value().default).ANull;
	case 1:
		return (format_amf_Value().default).ANumber(o);
	case 2:
		return (format_amf_Value().default).ANumber(o);
	case 3:
		return (format_amf_Value().default).ABool(o);
	case 4:
		var h = new (haxe_ds_StringMap().default)();
		var _g1 = 0;
		var _g11 = (Reflect().default).fields(o);
		while(_g1 < _g11.length) {
			var f = _g11[_g1];
			++_g1;
			h.set(f,Tools.encode((Reflect().default).field(o,f)));
		}
		return (format_amf_Value().default).AObject(h);
	case 6:
		var c = _g.c;
		switch(c) {
		case Array:
			var o1 = o;
			var a = [];
			var _g2 = 0;
			while(_g2 < o1.length) {
				var v = o1[_g2];
				++_g2;
				a.push(Tools.encode(v));
			}
			return (format_amf_Value().default).AArray(a);
		case String:
			return (format_amf_Value().default).AString(o);
		case (haxe_ds_StringMap().default):
			var o2 = o;
			var h1 = new (haxe_ds_StringMap().default)();
			var f1 = o2.keys();
			while(f1.hasNext()) {
				var f2 = f1.next();
				h1.set(f2,Tools.encode(o2.get(f2)));
			}
			return (format_amf_Value().default).AObject(h1);
		default:
			throw new (js__$Boot_HaxeError().default)("Can't encode instance of " + (Type().default).getClassName(c));
		}
		break;
	default:
		throw new (js__$Boot_HaxeError().default)("Can't encode " + (Std().default).string(o));
	}
}
Tools.number = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 0) {
		var n = a.f;
		return n;
	} else {
		return null;
	}
}
Tools.string = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 2) {
		var s = a.s;
		return s;
	} else {
		return null;
	}
}
Tools.object = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 3) {
		var _g1 = a.size;
		var o = a.fields;
		return o;
	} else {
		return null;
	}
}
Tools.abool = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 1) {
		var b = a.b;
		return b;
	} else {
		return null;
	}
}
Tools.array = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 7) {
		var a1 = a.values;
		return a1;
	} else {
		return null;
	}
}


// Export

exports.default = Tools;