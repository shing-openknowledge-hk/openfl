// Class: haxe.zip.InflateImpl

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_zip__$InflateImpl_State() {return require("./../../haxe/zip/_InflateImpl/State");}
function haxe_crypto_Adler32() {return require("./../../haxe/crypto/Adler32");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function haxe_io_BytesBuffer() {return require("./../../haxe/io/BytesBuffer");}
function haxe_zip_HuffTools() {return require("./../../haxe/zip/HuffTools");}
function haxe_zip__$InflateImpl_Window() {return require("./../../haxe/zip/_InflateImpl/Window");}

// Constructor

var InflateImpl = function(i,header,crc) {
	if(crc == null) {
		crc = true;
	}
	if(header == null) {
		header = true;
	}
	this.isFinal = false;
	this.htools = new (haxe_zip_HuffTools().default)();
	this.huffman = this.buildFixedHuffman();
	this.huffdist = null;
	this.len = 0;
	this.dist = 0;
	this.state = header ? (haxe_zip__$InflateImpl_State().default).Head : (haxe_zip__$InflateImpl_State().default).Block;
	this.input = i;
	this.bits = 0;
	this.nbits = 0;
	this.needed = 0;
	this.output = null;
	this.outpos = 0;
	this.lengths = [];
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.window = new (haxe_zip__$InflateImpl_Window().default)(crc);
}

// Meta

InflateImpl.__name__ = "haxe.zip.InflateImpl";
InflateImpl.__isInterface__ = false;
InflateImpl.prototype = {
	buildFixedHuffman: function() {
		if(InflateImpl.FIXED_HUFFMAN != null) {
			return InflateImpl.FIXED_HUFFMAN;
		}
		var a = [];
		var _g = 0;
		while(_g < 288) {
			var n = _g++;
			a.push(n <= 143 ? 8 : n <= 255 ? 9 : n <= 279 ? 7 : 8);
		}
		InflateImpl.FIXED_HUFFMAN = this.htools.make(a,0,288,10);
		return InflateImpl.FIXED_HUFFMAN;
	},
	readBytes: function(b,pos,len) {
		this.needed = len;
		this.outpos = pos;
		this.output = b;
		if(len > 0) {
			while(this.inflateLoop()) {
			}
		}
		return len - this.needed;
	},
	getBits: function(n) {
		while(this.nbits < n) {
			this.bits |= this.input.readByte() << this.nbits;
			this.nbits += 8;
		}
		var b = this.bits & (1 << n) - 1;
		this.nbits -= n;
		this.bits >>= n;
		return b;
	},
	getBit: function() {
		if(this.nbits == 0) {
			this.nbits = 8;
			this.bits = this.input.readByte();
		}
		var b = (this.bits & 1) == 1;
		this.nbits--;
		this.bits >>= 1;
		return b;
	},
	getRevBits: function(n) {
		if(n == 0) {
			return 0;
		} else if(this.getBit()) {
			return 1 << n - 1 | this.getRevBits(n - 1);
		} else {
			return this.getRevBits(n - 1);
		}
	},
	resetBits: function() {
		this.bits = 0;
		this.nbits = 0;
	},
	addBytes: function(b,p,len) {
		this.window.addBytes(b,p,len);
		this.output.blit(this.outpos,b,p,len);
		this.needed -= len;
		this.outpos += len;
	},
	addByte: function(b) {
		this.window.addByte(b);
		this.output.set(this.outpos,b);
		this.needed--;
		this.outpos++;
	},
	addDistOne: function(n) {
		var c = this.window.getLastChar();
		var _g = 0;
		var _g1 = n;
		while(_g < _g1) {
			var i = _g++;
			this.addByte(c);
		}
	},
	addDist: function(d,len) {
		this.addBytes(this.window.buffer,this.window.pos - d,len);
	},
	applyHuffman: function(h) {
		switch(h._hx_index) {
		case 0:
			var n = h.i;
			return n;
		case 1:
			var b = h.right;
			var a = h.left;
			return this.applyHuffman(this.getBit() ? b : a);
		case 2:
			var tbl = h.table;
			var n1 = h.n;
			return this.applyHuffman(tbl[this.getBits(n1)]);
		}
	},
	inflateLengths: function(a,max) {
		var i = 0;
		var prev = 0;
		while(i < max) {
			var n = this.applyHuffman(this.huffman);
			switch(n) {
			case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:
				prev = n;
				a[i] = n;
				++i;
				break;
			case 16:
				var end = i + 3 + this.getBits(2);
				if(end > max) {
					throw new (js__$Boot_HaxeError().default)("Invalid data");
				}
				while(i < end) {
					a[i] = prev;
					++i;
				}
				break;
			case 17:
				i += 3 + this.getBits(3);
				if(i > max) {
					throw new (js__$Boot_HaxeError().default)("Invalid data");
				}
				break;
			case 18:
				i += 11 + this.getBits(7);
				if(i > max) {
					throw new (js__$Boot_HaxeError().default)("Invalid data");
				}
				break;
			default:
				throw new (js__$Boot_HaxeError().default)("Invalid data");
			}
		}
	},
	inflateLoop: function() {
		switch(this.state._hx_index) {
		case 0:
			var cmf = this.input.readByte();
			var cm = cmf & 15;
			var cinfo = cmf >> 4;
			if(cm != 8) {
				throw new (js__$Boot_HaxeError().default)("Invalid data");
			}
			var flg = this.input.readByte();
			var fdict = (flg & 32) != 0;
			if(((cmf << 8) + flg) % 31 != 0) {
				throw new (js__$Boot_HaxeError().default)("Invalid data");
			}
			if(fdict) {
				throw new (js__$Boot_HaxeError().default)("Unsupported dictionary");
			}
			this.state = (haxe_zip__$InflateImpl_State().default).Block;
			return true;
		case 1:
			this.isFinal = this.getBit();
			switch(this.getBits(2)) {
			case 0:
				this.len = this.input.readUInt16();
				var nlen = this.input.readUInt16();
				if(nlen != 65535 - this.len) {
					throw new (js__$Boot_HaxeError().default)("Invalid data");
				}
				this.state = (haxe_zip__$InflateImpl_State().default).Flat;
				var r = this.inflateLoop();
				this.resetBits();
				return r;
			case 1:
				this.huffman = this.buildFixedHuffman();
				this.huffdist = null;
				this.state = (haxe_zip__$InflateImpl_State().default).CData;
				return true;
			case 2:
				var hlit = this.getBits(5) + 257;
				var hdist = this.getBits(5) + 1;
				var hclen = this.getBits(4) + 4;
				var _g = 0;
				var _g1 = hclen;
				while(_g < _g1) {
					var i = _g++;
					this.lengths[InflateImpl.CODE_LENGTHS_POS[i]] = this.getBits(3);
				}
				var _g2 = hclen;
				var _g3 = 19;
				while(_g2 < _g3) {
					var i1 = _g2++;
					this.lengths[InflateImpl.CODE_LENGTHS_POS[i1]] = 0;
				}
				this.huffman = this.htools.make(this.lengths,0,19,8);
				var lengths = [];
				var _g4 = 0;
				var _g5 = hlit + hdist;
				while(_g4 < _g5) {
					var i2 = _g4++;
					lengths.push(0);
				}
				this.inflateLengths(lengths,hlit + hdist);
				this.huffdist = this.htools.make(lengths,hlit,hdist,16);
				this.huffman = this.htools.make(lengths,0,hlit,16);
				this.state = (haxe_zip__$InflateImpl_State().default).CData;
				return true;
			default:
				throw new (js__$Boot_HaxeError().default)("Invalid data");
			}
			break;
		case 2:
			var n = this.applyHuffman(this.huffman);
			if(n < 256) {
				this.addByte(n);
				return this.needed > 0;
			} else if(n == 256) {
				this.state = this.isFinal ? (haxe_zip__$InflateImpl_State().default).Crc : (haxe_zip__$InflateImpl_State().default).Block;
				return true;
			} else {
				n -= 257;
				var extra_bits = InflateImpl.LEN_EXTRA_BITS_TBL[n];
				if(extra_bits == -1) {
					throw new (js__$Boot_HaxeError().default)("Invalid data");
				}
				this.len = InflateImpl.LEN_BASE_VAL_TBL[n] + this.getBits(extra_bits);
				var dist_code = this.huffdist == null ? this.getRevBits(5) : this.applyHuffman(this.huffdist);
				extra_bits = InflateImpl.DIST_EXTRA_BITS_TBL[dist_code];
				if(extra_bits == -1) {
					throw new (js__$Boot_HaxeError().default)("Invalid data");
				}
				this.dist = InflateImpl.DIST_BASE_VAL_TBL[dist_code] + this.getBits(extra_bits);
				if(this.dist > this.window.available()) {
					throw new (js__$Boot_HaxeError().default)("Invalid data");
				}
				this.state = this.dist == 1 ? (haxe_zip__$InflateImpl_State().default).DistOne : (haxe_zip__$InflateImpl_State().default).Dist;
				return true;
			}
			break;
		case 3:
			var rlen = this.len < this.needed ? this.len : this.needed;
			var bytes = this.input.read(rlen);
			this.len -= rlen;
			this.addBytes(bytes,0,rlen);
			if(this.len == 0) {
				this.state = this.isFinal ? (haxe_zip__$InflateImpl_State().default).Crc : (haxe_zip__$InflateImpl_State().default).Block;
			}
			return this.needed > 0;
		case 4:
			var calc = this.window.checksum();
			if(calc == null) {
				this.state = (haxe_zip__$InflateImpl_State().default).Done;
				return true;
			}
			var crc = (haxe_crypto_Adler32().default).read(this.input);
			if(!calc.equals(crc)) {
				throw new (js__$Boot_HaxeError().default)("Invalid CRC");
			}
			this.state = (haxe_zip__$InflateImpl_State().default).Done;
			return true;
		case 5:
			while(this.len > 0 && this.needed > 0) {
				var rdist = this.len < this.dist ? this.len : this.dist;
				var rlen1 = this.needed < rdist ? this.needed : rdist;
				this.addDist(this.dist,rlen1);
				this.len -= rlen1;
			}
			if(this.len == 0) {
				this.state = (haxe_zip__$InflateImpl_State().default).CData;
			}
			return this.needed > 0;
		case 6:
			var rlen2 = this.len < this.needed ? this.len : this.needed;
			this.addDistOne(rlen2);
			this.len -= rlen2;
			if(this.len == 0) {
				this.state = (haxe_zip__$InflateImpl_State().default).CData;
			}
			return this.needed > 0;
		case 7:
			return false;
		}
	}
};
InflateImpl.prototype.__class__ = InflateImpl.prototype.constructor = $hxClasses["haxe.zip.InflateImpl"] = InflateImpl;

// Init



// Statics

InflateImpl.run = function(i,bufsize) {
	if(bufsize == null) {
		bufsize = 65536;
	}
	var buf = (haxe_io_Bytes().default).alloc(bufsize);
	var output = new (haxe_io_BytesBuffer().default)();
	var inflate = new InflateImpl(i);
	while(true) {
		var len = inflate.readBytes(buf,0,bufsize);
		output.addBytes(buf,0,len);
		if(len < bufsize) {
			break;
		}
	}
	return output.getBytes();
}
InflateImpl.LEN_EXTRA_BITS_TBL = [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,-1,-1]
InflateImpl.LEN_BASE_VAL_TBL = [3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]
InflateImpl.DIST_EXTRA_BITS_TBL = [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,-1,-1]
InflateImpl.DIST_BASE_VAL_TBL = [1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]
InflateImpl.CODE_LENGTHS_POS = [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]
InflateImpl.FIXED_HUFFMAN = null

// Export

exports.default = InflateImpl;