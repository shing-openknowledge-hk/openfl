// Class: format.amf.Writer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var Writer = function(o) {
	this.o = o;
	o.set_bigEndian(true);
}

// Meta

Writer.__name__ = "format.amf.Writer";
Writer.__isInterface__ = false;
Writer.prototype = {
	write: function(v) {
		var o = this.o;
		switch(v._hx_index) {
		case 0:
			var n = v.f;
			o.writeByte(0);
			o.writeDouble(n);
			break;
		case 1:
			var b = v.b;
			o.writeByte(1);
			o.writeByte(b ? 1 : 0);
			break;
		case 2:
			var s = v.s;
			if(s.length <= 65535) {
				o.writeByte(2);
				o.writeUInt16(s.length);
			} else {
				o.writeByte(12);
				o.writeInt32(s.length);
			}
			o.writeString(s);
			break;
		case 3:
			var size = v.size;
			var h = v.fields;
			if(size == null) {
				o.writeByte(3);
			} else {
				o.writeByte(8);
				o.writeInt32(size);
			}
			var f = h.keys();
			while(f.hasNext()) {
				var f1 = f.next();
				o.writeUInt16(f1.length);
				o.writeString(f1);
				this.write(h.get(f1));
			}
			o.writeByte(0);
			o.writeByte(0);
			o.writeByte(9);
			break;
		case 4:
			var d = v.d;
			o.writeByte(11);
			o.writeDouble(d.getTime());
			o.writeUInt16(0);
			break;
		case 5:
			o.writeByte(6);
			break;
		case 6:
			o.writeByte(5);
			break;
		case 7:
			var a = v.values;
			o.writeByte(10);
			o.writeInt32(a.length);
			var _g = 0;
			while(_g < a.length) {
				var f2 = a[_g];
				++_g;
				this.write(f2);
			}
			break;
		}
	}
};
Writer.prototype.__class__ = Writer.prototype.constructor = $hxClasses["format.amf.Writer"] = Writer;

// Init



// Statics




// Export

exports.default = Writer;