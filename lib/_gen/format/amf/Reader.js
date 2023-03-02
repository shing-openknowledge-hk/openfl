// Class: format.amf.Reader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function format_amf_Value() {return require("./../../format/amf/Value");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}

// Constructor

var Reader = function(i) {
	this.i = i;
	i.set_bigEndian(true);
}

// Meta

Reader.__name__ = "format.amf.Reader";
Reader.__isInterface__ = false;
Reader.prototype = {
	readObject: function() {
		var h = new (haxe_ds_StringMap().default)();
		while(true) {
			var c1 = this.i.readByte();
			var c2 = this.i.readByte();
			var name = this.i.readString(c1 << 8 | c2);
			var k = this.i.readByte();
			if(k == 9) {
				break;
			}
			h.set(name,this.readWithCode(k));
		}
		return h;
	},
	readArray: function(n) {
		var a = [];
		var _g = 0;
		var _g1 = n;
		while(_g < _g1) {
			var i = _g++;
			a.push(this.read());
		}
		return a;
	},
	readInt: function() {
		return this.i.readInt32();
	},
	readWithCode: function(id) {
		var i = this.i;
		switch(id) {
		case 0:
			return (format_amf_Value().default).ANumber(i.readDouble());
		case 1:
			var tmp;
			switch(i.readByte()) {
			case 0:
				tmp = false;
				break;
			case 1:
				tmp = true;
				break;
			default:
				throw new (js__$Boot_HaxeError().default)("Invalid AMF");
			}
			return (format_amf_Value().default).ABool(tmp);
		case 2:
			return (format_amf_Value().default).AString(i.readString(i.readUInt16()));
		case 5:
			return (format_amf_Value().default).ANull;
		case 6:
			return (format_amf_Value().default).AUndefined;
		case 7:
			throw new (js__$Boot_HaxeError().default)("Not supported : Reference");
		case 3:case 8:
			var ismixed = id == 8;
			var size = ismixed ? this.readInt() : null;
			return (format_amf_Value().default).AObject(this.readObject(),size);
		case 10:
			return (format_amf_Value().default).AArray(this.readArray(this.readInt()));
		case 11:
			var time_ms = i.readDouble();
			var tz_min = i.readUInt16();
			return (format_amf_Value().default).ADate(new Date(time_ms + tz_min * 60 * 1000.0));
		case 12:
			return (format_amf_Value().default).AString(i.readString(this.readInt()));
		default:
			throw new (js__$Boot_HaxeError().default)("Unknown AMF " + id);
		}
	},
	read: function() {
		return this.readWithCode(this.i.readByte());
	}
};
Reader.prototype.__class__ = Reader.prototype.constructor = $hxClasses["format.amf.Reader"] = Reader;

// Init



// Statics




// Export

exports.default = Reader;