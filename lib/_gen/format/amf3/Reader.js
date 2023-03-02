// Class: format.amf3.Reader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function format_amf3_Tools() {return require("./../../format/amf3/Tools");}
function haxe_Log() {return require("./../../haxe/Log");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function format_amf3_Value() {return require("./../../format/amf3/Value");}
function haxe_ds_EnumValueMap() {return require("./../../haxe/ds/EnumValueMap");}
function Type() {return require("./../../Type");}
function Std() {return require("./../../Std");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function Xml() {return require("./../../Xml");}

// Constructor

var Reader = function(i) {
	this.complexObjectsTable = [];
	this.objectTraitsTable = [];
	this.stringTable = [];
	this.i = i;
	i.set_bigEndian(true);
}

// Meta

Reader.__name__ = "format.amf3.Reader";
Reader.__isInterface__ = false;
Reader.prototype = {
	readObject: function() {
		var dyn = false;
		var isExternalizable = false;
		var className = null;
		var sealedMemberNames = [];
		var n = this.readInt();
		if((n & 1) == 0) {
			return this.complexObjectsTable[n >> 1];
		} else if((n & 3) == 1) {
			n >>= 3;
			var refTraits = this.objectTraitsTable[n];
			dyn = refTraits.isDynamic;
			isExternalizable = refTraits.isExternalizable;
			sealedMemberNames = refTraits.sealedMemberNames;
		} else if((n & 7) == 3) {
			dyn = (n >> 3 & 1) == 1;
			n >>= 4;
			className = this.readString();
			var _g = 0;
			var _g1 = n;
			while(_g < _g1) {
				var j = _g++;
				sealedMemberNames.push((format_amf3_Tools().default).decode(this.readString()));
			}
			this.objectTraitsTable.push({ isExternalizable : isExternalizable, isDynamic : dyn, className : className, sealedMemberNames : sealedMemberNames});
		} else if((n & 7) == 7) {
			isExternalizable = true;
			className = this.readString();
			(haxe_Log().default).trace((format_amf3_Tools().default).decode(className),{ fileName : "../node_modules/format/format/amf3/Reader.hx", lineNumber : 108, className : "format.amf3.Reader", methodName : "readObject"});
		} else {
			throw new (js__$Boot_HaxeError().default)("Invalid object traits");
		}
		var h = new (haxe_ds_StringMap().default)();
		var ret = (format_amf3_Value().default).AObject(h);
		this.complexObjectsTable.push(ret);
		if(!isExternalizable) {
			var _g2 = 0;
			var _g11 = sealedMemberNames.length;
			while(_g2 < _g11) {
				var j1 = _g2++;
				var value = this.read();
				h.set(sealedMemberNames[j1],value);
			}
			if(dyn) {
				var s;
				while(true) {
					s = (format_amf3_Tools().default).decode(this.readString());
					if(s == "") {
						break;
					}
					h.set(s,this.read());
				}
			}
		} else {
			throw new (js__$Boot_HaxeError().default)("Externalizable not supported");
		}
		return ret;
	},
	readMap: function() {
		var n = this.readInt();
		if((n & 1) == 0) {
			return this.complexObjectsTable[n >> 1];
		}
		n >>= 1;
		var h = new (haxe_ds_EnumValueMap().default)();
		var ret = (format_amf3_Value().default).AMap(h);
		this.complexObjectsTable.push(ret);
		this.i.readByte();
		var _g = 0;
		var _g1 = n;
		while(_g < _g1) {
			var i = _g++;
			h.set(this.read(),this.read());
		}
		return ret;
	},
	readArray: function() {
		var n = this.readInt();
		if((n & 1) == 0) {
			return this.complexObjectsTable[n >> 1];
		}
		n >>= 1;
		var a = [];
		var m = new (haxe_ds_StringMap().default)();
		var ret = (format_amf3_Value().default).AArray(a,m);
		this.complexObjectsTable.push(ret);
		var assocName = (format_amf3_Tools().default).decode(this.readString());
		while(assocName.length != 0) {
			var v = this.read();
			m.set(assocName,v);
			assocName = (format_amf3_Tools().default).decode(this.readString());
		}
		var _g = 0;
		var _g1 = n;
		while(_g < _g1) {
			var i = _g++;
			a.push(this.read());
		}
		return ret;
	},
	readIntVector: function() {
		var header = this.readInt();
		if((header & 1) == 0) {
			return this.complexObjectsTable[header >> 1];
		}
		var len = header >> 1;
		var fixed = this.i.readByte() != 0;
		var a;
		if(fixed) {
			var this1 = new Array(len);
			a = this1;
		} else {
			a = [];
		}
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var r = _g++;
			a[r] = (format_amf3_Value().default).AInt(this.i.readInt32());
		}
		var ret = fixed ? (format_amf3_Value().default).AVector(a) : (format_amf3_Value().default).AArray(a);
		this.complexObjectsTable.push(ret);
		return ret;
	},
	readDoubleVector: function() {
		var header = this.readInt();
		if((header & 1) == 0) {
			return this.complexObjectsTable[header >> 1];
		}
		var len = header >> 1;
		var fixed = this.i.readByte() != 0;
		var a;
		if(fixed) {
			var this1 = new Array(len);
			a = this1;
		} else {
			a = [];
		}
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var r = _g++;
			a[r] = (format_amf3_Value().default).ANumber(this.i.readDouble());
		}
		var ret = fixed ? (format_amf3_Value().default).AVector(a) : (format_amf3_Value().default).AArray(a);
		this.complexObjectsTable.push(ret);
		return ret;
	},
	readObjectVector: function() {
		var header = this.readInt();
		if((header & 1) == 0) {
			return this.complexObjectsTable[header >> 1];
		}
		var len = header >> 1;
		var fixed = this.i.readByte() != 0;
		var objectTypeName = (format_amf3_Tools().default).decode(this.readString());
		(haxe_Log().default).trace("readObjectVector name:" + objectTypeName,{ fileName : "../node_modules/format/format/amf3/Reader.hx", lineNumber : 259, className : "format.amf3.Reader", methodName : "readObjectVector"});
		var VC = (Type().default).resolveClass(objectTypeName);
		(haxe_Log().default).trace("VC:" + (Std().default).string(VC),{ fileName : "../node_modules/format/format/amf3/Reader.hx", lineNumber : 261, className : "format.amf3.Reader", methodName : "readObjectVector"});
		var a;
		var ret;
		if(fixed) {
			var this1 = new Array(len);
			a = this1;
			ret = (format_amf3_Value().default).AVector(a);
		} else {
			a = [];
			ret = (format_amf3_Value().default).AArray(a);
		}
		this.complexObjectsTable.push(ret);
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var r = _g++;
			a[r] = this.read();
		}
		return ret;
	},
	readBytes: function() {
		var n = this.readInt();
		if((n & 1) == 0) {
			return this.complexObjectsTable[n >> 1];
		}
		n >>= 1;
		var b = (haxe_io_Bytes().default).alloc(n);
		var _g = 0;
		var _g1 = n;
		while(_g < _g1) {
			var j = _g++;
			b.set(j,this.i.readByte());
		}
		var ret = (format_amf3_Value().default).ABytes(b);
		this.complexObjectsTable.push(ret);
		return ret;
	},
	readInt: function(signExtend,preShift) {
		if(preShift == null) {
			preShift = 0;
		}
		if(signExtend == null) {
			signExtend = false;
		}
		var c = this.i.readByte() & 255;
		if(c < 128) {
			return c >> preShift;
		}
		var ret = (c & 127) << 7;
		c = this.i.readByte() & 255;
		if(c < 128) {
			return (ret | c) >> preShift;
		}
		ret |= c & 127;
		ret <<= 7;
		c = this.i.readByte() & 255;
		if(c < 128) {
			return (ret | c) >> preShift;
		}
		ret |= c & 127;
		ret <<= 8;
		c = this.i.readByte() & 255;
		ret |= c;
		if(signExtend && (ret & 268435456) != 0) {
			ret |= -536870912;
		}
		return ret >> preShift;
	},
	readString: function() {
		var header = this.readInt();
		if((header & 1) == 0) {
			var strRefIdx = header >> 1;
			return this.stringTable[strRefIdx];
		}
		var len = header >> 1;
		return this.readStringNoHeader(len);
	},
	readStringNoHeader: function(len) {
		if(len == 0) {
			return (format_amf3_Value().default).AString("");
		}
		var u = "";
		var c = 0;
		var d = 0;
		var j = 0;
		var it = 0;
		while(j < len) {
			c = this.i.readByte();
			if(c < 128) {
				it = 0;
				d = c;
			} else if(c < 224) {
				it = 1;
				d = c & 31;
			} else if(c < 240) {
				it = 2;
				d = c & 15;
			} else if(c < 241) {
				it = 3;
				d = c & 7;
			}
			c = it;
			while(c-- > 0) {
				d <<= 6;
				d |= this.i.readByte() & 63;
			}
			j += it + 1;
			if(d != 1) {
				u = u + String.fromCodePoint(d);
			}
		}
		var ret = (format_amf3_Value().default).AString(u.toString());
		this.stringTable.push(ret);
		return ret;
	},
	readDate: function() {
		var n = this.readInt();
		if((n & 1) == 0) {
			return this.complexObjectsTable[n >> 1];
		}
		var date = new Date(this.i.readDouble());
		var ret = (format_amf3_Value().default).ADate(date);
		this.complexObjectsTable.push(ret);
		return ret;
	},
	readXml: function() {
		var n = this.readInt();
		if((n & 1) == 0) {
			return this.complexObjectsTable[n >> 1];
		}
		n >>= 1;
		var xml = (Xml().default).parse((format_amf3_Tools().default).decode(this.readStringNoHeader(n)));
		var ret = (format_amf3_Value().default).AXml(xml);
		this.complexObjectsTable.push(ret);
		return ret;
	},
	readWithCode: function(id) {
		var i = this.i;
		switch(id) {
		case 0:
			return (format_amf3_Value().default).AUndefined;
		case 1:
			return (format_amf3_Value().default).ANull;
		case 2:
			return (format_amf3_Value().default).ABool(false);
		case 3:
			return (format_amf3_Value().default).ABool(true);
		case 4:
			return (format_amf3_Value().default).AInt(this.readInt(true));
		case 5:
			return (format_amf3_Value().default).ANumber(i.readDouble());
		case 6:
			return this.readString();
		case 7:
			throw new (js__$Boot_HaxeError().default)("XMLDocument unsupported");
		case 8:
			return this.readDate();
		case 9:
			return this.readArray();
		case 10:
			return this.readObject();
		case 11:
			return this.readXml();
		case 12:
			return this.readBytes();
		case 13:case 14:
			return this.readIntVector();
		case 15:
			return this.readDoubleVector();
		case 16:
			return this.readObjectVector();
		case 17:
			return this.readMap();
		default:
			throw new (js__$Boot_HaxeError().default)("Unknown AMF " + id);
		}
	},
	read: function() {
		return this.readWithCode(this.i.readByte());
	}
};
Reader.prototype.__class__ = Reader.prototype.constructor = $hxClasses["format.amf3.Reader"] = Reader;

// Init



// Statics




// Export

exports.default = Reader;