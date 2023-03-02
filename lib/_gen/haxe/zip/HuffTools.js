// Class: haxe.zip.HuffTools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_zip_Huffman() {return require("./../../haxe/zip/Huffman");}
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}

// Constructor

var HuffTools = function() {
}

// Meta

HuffTools.__name__ = "haxe.zip.HuffTools";
HuffTools.__isInterface__ = false;
HuffTools.prototype = {
	treeDepth: function(t) {
		switch(t._hx_index) {
		case 0:
			var _g = t.i;
			return 0;
		case 1:
			var b = t.right;
			var a = t.left;
			var da = this.treeDepth(a);
			var db = this.treeDepth(b);
			return 1 + (da < db ? da : db);
		case 2:
			var _g2 = t.table;
			var _g1 = t.n;
			throw new (js__$Boot_HaxeError().default)("assert");
		}
	},
	treeCompress: function(t) {
		var d = this.treeDepth(t);
		if(d == 0) {
			return t;
		}
		if(d == 1) {
			if(t._hx_index == 1) {
				var b = t.right;
				var a = t.left;
				return (haxe_zip_Huffman().default).NeedBit(this.treeCompress(a),this.treeCompress(b));
			} else {
				throw new (js__$Boot_HaxeError().default)("assert");
			}
		}
		var size = 1 << d;
		var table = [];
		var _g = 0;
		var _g1 = size;
		while(_g < _g1) {
			var i = _g++;
			table.push((haxe_zip_Huffman().default).Found(-1));
		}
		this.treeWalk(table,0,0,d,t);
		return (haxe_zip_Huffman().default).NeedBits(d,table);
	},
	treeWalk: function(table,p,cd,d,t) {
		if(t._hx_index == 1) {
			var b = t.right;
			var a = t.left;
			if(d > 0) {
				this.treeWalk(table,p,cd + 1,d - 1,a);
				this.treeWalk(table,p | 1 << cd,cd + 1,d - 1,b);
			} else {
				table[p] = this.treeCompress(t);
			}
		} else {
			table[p] = this.treeCompress(t);
		}
	},
	treeMake: function(bits,maxbits,v,len) {
		if(len > maxbits) {
			throw new (js__$Boot_HaxeError().default)("Invalid huffman");
		}
		var idx = v << 5 | len;
		if(bits.exists(idx)) {
			return (haxe_zip_Huffman().default).Found(bits.get(idx));
		}
		v <<= 1;
		++len;
		return (haxe_zip_Huffman().default).NeedBit(this.treeMake(bits,maxbits,v,len),this.treeMake(bits,maxbits,v | 1,len));
	},
	make: function(lengths,pos,nlengths,maxbits) {
		if(nlengths == 1) {
			return (haxe_zip_Huffman().default).NeedBit((haxe_zip_Huffman().default).Found(0),(haxe_zip_Huffman().default).Found(0));
		}
		var counts = [];
		var tmp = [];
		if(maxbits > 32) {
			throw new (js__$Boot_HaxeError().default)("Invalid huffman");
		}
		var _g = 0;
		var _g1 = maxbits;
		while(_g < _g1) {
			var i = _g++;
			counts.push(0);
			tmp.push(0);
		}
		var _g2 = 0;
		var _g3 = nlengths;
		while(_g2 < _g3) {
			var i1 = _g2++;
			var p = lengths[i1 + pos];
			if(p >= maxbits) {
				throw new (js__$Boot_HaxeError().default)("Invalid huffman");
			}
			counts[p]++;
		}
		var code = 0;
		var _g4 = 1;
		var _g5 = maxbits - 1;
		while(_g4 < _g5) {
			var i2 = _g4++;
			code = code + counts[i2] << 1;
			tmp[i2] = code;
		}
		var bits = new (haxe_ds_IntMap().default)();
		var _g6 = 0;
		var _g7 = nlengths;
		while(_g6 < _g7) {
			var i3 = _g6++;
			var l = lengths[i3 + pos];
			if(l != 0) {
				var n = tmp[l - 1];
				tmp[l - 1] = n + 1;
				bits.set(n << 5 | l,i3);
			}
		}
		return this.treeCompress((haxe_zip_Huffman().default).NeedBit(this.treeMake(bits,maxbits,0,1),this.treeMake(bits,maxbits,1,1)));
	}
};
HuffTools.prototype.__class__ = HuffTools.prototype.constructor = $hxClasses["haxe.zip.HuffTools"] = HuffTools;

// Init



// Statics




// Export

exports.default = HuffTools;