// Class: haxe.io.BytesInput

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function haxe_io_Input() {return require("./../../haxe/io/Input");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_io_Eof() {return require("./../../haxe/io/Eof");}
function haxe_io_Error() {return require("./../../haxe/io/Error");}

// Constructor

var BytesInput = function(b,pos,len) {
	if(pos == null) {
		pos = 0;
	}
	if(len == null) {
		len = b.get_length() - pos;
	}
	if(pos < 0 || len < 0 || pos + len > b.get_length()) {
		throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).OutsideBounds);
	}
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
}

// Meta

BytesInput.__name__ = "haxe.io.BytesInput";
BytesInput.__isInterface__ = false;
BytesInput.__super__ = (haxe_io_Input().default);
BytesInput.prototype = $extend((haxe_io_Input().default).prototype, {
	get_position: function() {
		return this.pos;
	},
	readByte: function() {
		if(this.len == 0) {
			throw new (js__$Boot_HaxeError().default)(new (haxe_io_Eof().default)());
		}
		this.len--;
		return this.b[this.pos++];
	},
	readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.get_length()) {
			throw new (js__$Boot_HaxeError().default)((haxe_io_Error().default).OutsideBounds);
		}
		if(this.len == 0 && len > 0) {
			throw new (js__$Boot_HaxeError().default)(new (haxe_io_Eof().default)());
		}
		if(this.len < len) {
			len = this.len;
		}
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
});
BytesInput.prototype.__class__ = BytesInput.prototype.constructor = $hxClasses["haxe.io.BytesInput"] = BytesInput;

// Init



// Statics




// Export

exports.default = BytesInput;