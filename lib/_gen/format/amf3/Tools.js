// Class: format.amf3.Tools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function Type() {return require("./../../Type");}
function format_amf3_Value() {return require("./../../format/amf3/Value");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function Reflect() {return require("./../../Reflect");}
function Xml() {return require("./../../Xml");}
function format_amf3_Amf3Array() {return require("./../../format/amf3/Amf3Array");}
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}
function haxe_ds_ObjectMap() {return require("./../../haxe/ds/ObjectMap");}
function haxe_ds_EnumValueMap() {return require("./../../haxe/ds/EnumValueMap");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function Std() {return require("./../../Std");}

// Constructor

var Tools = function(){}

// Meta

Tools.__name__ = "format.amf3.Tools";
Tools.__isInterface__ = false;
Tools.prototype = {
	
};
Tools.prototype.__class__ = Tools.prototype.constructor = $hxClasses["format.amf3.Tools"] = Tools;

// Init



// Statics

Tools.encode = function(o) {
	var _g = (Type().default).typeof(o);
	switch(_g._hx_index) {
	case 0:
		return (format_amf3_Value().default).ANull;
	case 1:
		return (format_amf3_Value().default).AInt(o);
	case 2:
		return (format_amf3_Value().default).ANumber(o);
	case 3:
		return (format_amf3_Value().default).ABool(o);
	case 4:
		var h = new (haxe_ds_StringMap().default)();
		var _g1 = 0;
		var _g11 = (Reflect().default).fields(o);
		while(_g1 < _g11.length) {
			var f = _g11[_g1];
			++_g1;
			h.set(f,Tools.encode((Reflect().default).field(o,f)));
		}
		return (format_amf3_Value().default).AObject(h);
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
			return (format_amf3_Value().default).AArray(a);
		case Date:
			return (format_amf3_Value().default).ADate(o);
		case String:
			return (format_amf3_Value().default).AString(o);
		case (Xml().default):
			return (format_amf3_Value().default).AXml(o);
		case (format_amf3_Amf3Array().default):
			var o2 = o;
			var a1 = [];
			var m = new (haxe_ds_StringMap().default)();
			var _g3 = 0;
			var _g12 = o2.a;
			while(_g3 < _g12.length) {
				var v1 = _g12[_g3];
				++_g3;
				a1.push(Tools.encode(v1));
			}
			var k = o2.extra.iterator();
			while(k.hasNext()) {
				var k1 = k.next();
				var v2 = Tools.encode(o2.extra.get(k1));
				m.set(k1,v2);
			}
			return (format_amf3_Value().default).AArray(a1,m);
		case (haxe_ds_IntMap().default):case (haxe_ds_ObjectMap().default):case (haxe_ds_StringMap().default):
			var o3 = o;
			var h1 = new (haxe_ds_EnumValueMap().default)();
			var f1 = o3.keys();
			while(f1.hasNext()) {
				var f2 = f1.next();
				h1.set(Tools.encode(f2),Tools.encode(o3.get(f2)));
			}
			return (format_amf3_Value().default).AMap(h1);
		case (haxe_io_Bytes().default):
			return (format_amf3_Value().default).ABytes(o);
		default:
			var h2 = new (haxe_ds_StringMap().default)();
			var i = 0;
			var _g4 = 0;
			var _g13 = (Type().default).getInstanceFields((Type().default).getClass(o));
			while(_g4 < _g13.length) {
				var f3 = _g13[_g4];
				++_g4;
				h2.set(f3,Tools.encode((Reflect().default).getProperty(o,f3)));
				++i;
			}
			return (format_amf3_Value().default).AObject(h2,i);
		}
		break;
	default:
		throw new (js__$Boot_HaxeError().default)("Can't encode " + (Std().default).string(o));
	}
}
Tools.decode = function(a) {
	switch(a._hx_index) {
	case 0:
		return Tools.undefined(a);
	case 1:
		return Tools.anull(a);
	case 2:
		var _g = a.b;
		return Tools.bool(a);
	case 3:
		var _g10 = a.i;
		return Tools.int(a);
	case 4:
		var _g7 = a.f;
		return Tools.number(a);
	case 5:
		var _g3 = a.s;
		return Tools.string(a);
	case 6:
		var _g8 = a.d;
		return Tools.date(a);
	case 7:
		var _g5 = a.size;
		var _g4 = a.fields;
		return Tools.object(a);
	case 8:
		var _g12 = a.extra;
		var _g11 = a.values;
		return Tools.array(a);
	case 9:
		var _g1 = a.values;
		return Tools.vector(a);
	case 10:
		var _g2 = a.x;
		return Tools.xml(a);
	case 11:
		var _g6 = a.b;
		return Tools.bytes(a);
	case 12:
		var _g9 = a.m;
		return Tools.map(a);
	}
}
Tools.undefined = function(a) {
	return null;
}
Tools.anull = function(a) {
	return null;
}
Tools.bool = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 2) {
		var b = a.b;
		return b;
	} else {
		return null;
	}
}
Tools.int = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 3) {
		var n = a.i;
		return n;
	} else {
		return null;
	}
}
Tools.number = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 4) {
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
	if(a._hx_index == 5) {
		var s = a.s;
		return s;
	} else {
		return null;
	}
}
Tools.date = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 6) {
		var d = a.d;
		return d;
	} else {
		return null;
	}
}
Tools.array = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 8) {
		var m = a.extra;
		var a1 = a.values;
		var b = [];
		var _g = 0;
		while(_g < a1.length) {
			var f = a1[_g];
			++_g;
			b.push(Tools.decode(f));
		}
		var c = new (haxe_ds_StringMap().default)();
		var mk = m.keys();
		while(mk.hasNext()) {
			var mk1 = mk.next();
			var v = Tools.decode(m.get(mk1));
			c.set(mk1,v);
		}
		return new (format_amf3_Amf3Array().default)(b,c);
	} else {
		return null;
	}
}
Tools.vector = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 9) {
		var a1 = a.values;
		var this1 = new Array(a1.length);
		var v = this1;
		var _g = 0;
		var _g1 = a1.length;
		while(_g < _g1) {
			var i = _g++;
			v[i] = Tools.decode(a1[i]);
		}
		return v;
	} else {
		return null;
	}
}
Tools.object = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 7) {
		var _g1 = a.size;
		var o = a.fields;
		var m = new (haxe_ds_StringMap().default)();
		var f = o.keys();
		while(f.hasNext()) {
			var f1 = f.next();
			m.set(f1,Tools.decode(o.get(f1)));
		}
		return m;
	} else {
		return null;
	}
}
Tools.xml = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 10) {
		var x = a.x;
		return x;
	} else {
		return null;
	}
}
Tools.bytes = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 11) {
		var b = a.b;
		return b;
	} else {
		return null;
	}
}
Tools.map = function(a) {
	if(a == null) {
		return null;
	}
	if(a._hx_index == 12) {
		var m = a.m;
		var p = new (haxe_ds_EnumValueMap().default)();
		var f = m.keys();
		while(f.hasNext()) {
			var f1 = f.next();
			p.set(Tools.decode(f1),Tools.decode(m.get(f1)));
		}
		return p;
	} else {
		return null;
	}
}


// Export

exports.default = Tools;