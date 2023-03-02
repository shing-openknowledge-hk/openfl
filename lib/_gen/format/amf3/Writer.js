// Class: format.amf3.Writer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function _$UInt_UInt_$Impl_$() {return require("./../../_UInt/UInt_Impl_");}
function HxOverrides() {return require("./../../HxOverrides");}
function Lambda() {return require("./../../Lambda");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}

// Constructor

var Writer = function(o) {
	this.o = o;
	o.set_bigEndian(true);
}

// Meta

Writer.__name__ = "format.amf3.Writer";
Writer.__isInterface__ = false;
Writer.prototype = {
	writeInt: function(i) {
		if(i > 268435455 || i < -268435456) {
			this.o.writeByte(5);
			this.o.writeDouble(i);
		} else {
			this.o.writeByte(4);
			this.writeUInt(i);
		}
	},
	writeUInt: function(u,shiftLeft) {
		if(shiftLeft == null) {
			shiftLeft = false;
		}
		if(shiftLeft) {
			u = u << 1 | 1;
		}
		if((u >>> 31 & 1) == 1) {
			u = u & 536870911;
		}
		var bits = 22;
		var started = false;
		var chunk = u >>> bits - 1;
		if((_$UInt_UInt_$Impl_$().default).gt(chunk,0)) {
			chunk = chunk >>> 1;
			this.o.writeByte(chunk | 128);
			u = u - (chunk << bits);
			++bits;
			started = true;
		}
		bits -= 8;
		chunk = u >>> bits;
		if(started || (_$UInt_UInt_$Impl_$().default).gt(chunk,0)) {
			this.o.writeByte(chunk | 128);
			u = u - (chunk << bits);
			started = true;
		}
		bits -= 7;
		chunk = u >>> bits;
		if(started || (_$UInt_UInt_$Impl_$().default).gt(chunk,0)) {
			this.o.writeByte(chunk | 128);
			u = u - (chunk << bits);
			started = true;
		}
		this.o.writeByte(u);
	},
	writeString: function(s) {
		this.writeUInt(s.length,true);
		var j = 0;
		var it = 0;
		var _g = 0;
		var _g1 = s.length;
		while(_g < _g1) {
			var i = _g++;
			j = (HxOverrides().default).cca(s,i);
			if(j < 127) {
				this.o.writeByte(j);
				it = 0;
			} else if(j < 2047) {
				this.o.writeByte(j >> 6 | 192);
				j &= 63;
				it = 1;
			} else if(j < 65535) {
				this.o.writeByte(j >> 12 | 224);
				j &= 4095;
				it = 2;
			} else if(j < 1114111) {
				this.o.writeByte(j >> 18 | 240);
				j &= 196607;
				it = 3;
			}
			while(it-- > 0) this.o.writeByte(j >> 6 * it);
		}
	},
	writeObject: function(h,size) {
		if(size == null) {
			this.o.writeByte(11);
		} else {
			this.writeUInt(size << 4 | 3);
		}
		this.o.writeByte(1);
		if(size == null) {
			var f = h.keys();
			while(f.hasNext()) {
				var f1 = f.next();
				this.writeString(f1);
				this.write(h.get(f1));
			}
			this.o.writeByte(1);
		} else {
			var k = [];
			var f2 = h.keys();
			while(f2.hasNext()) {
				var f3 = f2.next();
				k.push(f3);
				this.writeString(f3);
			}
			var _g = 0;
			var _g1 = k.length;
			while(_g < _g1) {
				var i = _g++;
				this.write(h.get(k[i]));
			}
		}
	},
	write: function(v) {
		var o = this.o;
		switch(v._hx_index) {
		case 0:
			o.writeByte(0);
			break;
		case 1:
			o.writeByte(1);
			break;
		case 2:
			var b = v.b;
			o.writeByte(b ? 3 : 2);
			break;
		case 3:
			var i = v.i;
			this.writeInt(i);
			break;
		case 4:
			var n = v.f;
			o.writeByte(5);
			o.writeDouble(n);
			break;
		case 5:
			var s = v.s;
			o.writeByte(6);
			this.writeString(s);
			break;
		case 6:
			var d = v.d;
			o.writeByte(8);
			o.writeByte(1);
			o.writeDouble(d.getTime());
			break;
		case 7:
			var n1 = v.size;
			var h = v.fields;
			o.writeByte(10);
			this.writeObject(h,n1);
			break;
		case 8:
			var extra = v.extra;
			var a = v.values;
			o.writeByte(9);
			this.writeUInt(a.length,true);
			if(extra != null) {
				var mk = extra.keys();
				while(mk.hasNext()) {
					var mk1 = mk.next();
					o.writeString(mk1);
					this.write(extra.get(mk1));
				}
			}
			o.writeByte(1);
			var _g = 0;
			while(_g < a.length) {
				var f = a[_g];
				++_g;
				this.write(f);
			}
			break;
		case 10:
			var x = v.x;
			o.writeByte(11);
			this.writeString(x.toString());
			break;
		case 11:
			var b1 = v.b;
			o.writeByte(12);
			this.writeUInt(b1.get_length(),true);
			o.write(b1);
			break;
		case 12:
			var m = v.m;
			o.writeByte(17);
			this.writeUInt((Lambda().default).count(m),true);
			o.writeByte(0);
			var f1 = m.keys();
			while(f1.hasNext()) {
				var f2 = f1.next();
				this.write(f2);
				this.write(m.get(f2));
			}
			break;
		default:
			throw new (js__$Boot_HaxeError().default)("Unsupported type");
		}
	}
};
Writer.prototype.__class__ = Writer.prototype.constructor = $hxClasses["format.amf3.Writer"] = Writer;

// Init



// Statics




// Export

exports.default = Writer;