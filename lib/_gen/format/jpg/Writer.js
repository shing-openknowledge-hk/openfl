// Class: format.jpg.Writer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_io_BytesBuffer() {return require("./../../haxe/io/BytesBuffer");}
function Std() {return require("./../../Std");}
function HxOverrides() {return require("./../../HxOverrides");}
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}
function format_jpg__$Writer_BitString() {return require("./../../format/jpg/_Writer/BitString");}

// Constructor

var Writer = function(out) {
	this.YTable = [];
	this.UVTable = [];
	this.fdtbl_Y = [];
	this.fdtbl_UV = [];
	var _g = 0;
	while(_g < 64) {
		var i = _g++;
		this.YTable.push(0);
		this.UVTable.push(0);
		this.fdtbl_Y.push(0.0);
		this.fdtbl_UV.push(0.0);
	}
	this.bitcode = new (haxe_ds_IntMap().default)();
	this.category = new (haxe_ds_IntMap().default)();
	this.byteout = out;
	this.bytenew = 0;
	this.bytepos = 7;
	this.YDC_HT = new (haxe_ds_IntMap().default)();
	this.UVDC_HT = new (haxe_ds_IntMap().default)();
	this.YAC_HT = new (haxe_ds_IntMap().default)();
	this.UVAC_HT = new (haxe_ds_IntMap().default)();
	this.YDU = [];
	this.UDU = [];
	this.VDU = [];
	this.DU = [];
	var _g1 = 0;
	while(_g1 < 64) {
		var i1 = _g1++;
		this.YDU.push(0.0);
		this.UDU.push(0.0);
		this.VDU.push(0.0);
		this.DU.push(0.0);
	}
	this.initZigZag();
	this.initLuminance();
	this.initChrominance();
	this.initHuffmanTbl();
	this.initCategoryNumber();
}

// Meta

Writer.__name__ = "format.jpg.Writer";
Writer.__isInterface__ = false;
Writer.prototype = {
	initZigZag: function() {
		this.ZigZag = [0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63];
	},
	initQuantTables: function(sf) {
		var YQT = [16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99];
		var _g = 0;
		while(_g < 64) {
			var i = _g++;
			var t = Math.floor((YQT[i] * sf + 50) / 100);
			if(t < 1) {
				t = 1;
			} else if(t > 255) {
				t = 255;
			}
			this.YTable[this.ZigZag[i]] = t;
		}
		var UVQT = [17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99];
		var _g1 = 0;
		while(_g1 < 64) {
			var j = _g1++;
			var u = Math.floor((UVQT[j] * sf + 50) / 100);
			if(u < 1) {
				u = 1;
			} else if(u > 255) {
				u = 255;
			}
			this.UVTable[this.ZigZag[j]] = u;
		}
		var aasf = [1.0,1.387039845,1.306562965,1.175875602,1.0,0.785694958,0.541196100,0.275899379];
		var k = 0;
		var _g2 = 0;
		while(_g2 < 8) {
			var row = _g2++;
			var _g21 = 0;
			while(_g21 < 8) {
				var col = _g21++;
				this.fdtbl_Y[k] = 1.0 / (this.YTable[this.ZigZag[k]] * aasf[row] * aasf[col] * 8.0);
				this.fdtbl_UV[k] = 1.0 / (this.UVTable[this.ZigZag[k]] * aasf[row] * aasf[col] * 8.0);
				++k;
			}
		}
	},
	initLuminance: function() {
		this.std_dc_luminance_nrcodes = [0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0];
		this.std_dc_luminance_values = this.strIntsToBytes("0,1,2,3,4,5,6,7,8,9,10,11");
		this.std_ac_luminance_nrcodes = [0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125];
		this.std_ac_luminance_values = this.strIntsToBytes("0x01,0x02,0x03,0x00,0x04,0x11,0x05,0x12," + "0x21,0x31,0x41,0x06,0x13,0x51,0x61,0x07," + "0x22,0x71,0x14,0x32,0x81,0x91,0xa1,0x08," + "0x23,0x42,0xb1,0xc1,0x15,0x52,0xd1,0xf0," + "0x24,0x33,0x62,0x72,0x82,0x09,0x0a,0x16," + "0x17,0x18,0x19,0x1a,0x25,0x26,0x27,0x28," + "0x29,0x2a,0x34,0x35,0x36,0x37,0x38,0x39," + "0x3a,0x43,0x44,0x45,0x46,0x47,0x48,0x49," + "0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59," + "0x5a,0x63,0x64,0x65,0x66,0x67,0x68,0x69," + "0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79," + "0x7a,0x83,0x84,0x85,0x86,0x87,0x88,0x89," + "0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98," + "0x99,0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7," + "0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6," + "0xb7,0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5," + "0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4," + "0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xe1,0xe2," + "0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea," + "0xf1,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8," + "0xf9,0xfa");
	},
	strIntsToBytes: function(s) {
		var len = s.length;
		var b = new (haxe_io_BytesBuffer().default)();
		var val = 0;
		var i = 0;
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var j = _g++;
			if(s.charAt(j) == ",") {
				val = (Std().default).parseInt((HxOverrides().default).substr(s,i,j - i));
				b.addByte(val);
				i = j + 1;
			}
		}
		if(i < len) {
			val = (Std().default).parseInt((HxOverrides().default).substr(s,i,null));
			b.addByte(val);
		}
		return b.getBytes();
	},
	initChrominance: function() {
		this.std_dc_chrominance_nrcodes = [0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
		this.std_dc_chrominance_values = this.strIntsToBytes("0,1,2,3,4,5,6,7,8,9,10,11");
		this.std_ac_chrominance_nrcodes = [0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119];
		this.std_ac_chrominance_values = this.strIntsToBytes("0x00,0x01,0x02,0x03,0x11,0x04,0x05,0x21," + "0x31,0x06,0x12,0x41,0x51,0x07,0x61,0x71," + "0x13,0x22,0x32,0x81,0x08,0x14,0x42,0x91," + "0xa1,0xb1,0xc1,0x09,0x23,0x33,0x52,0xf0," + "0x15,0x62,0x72,0xd1,0x0a,0x16,0x24,0x34," + "0xe1,0x25,0xf1,0x17,0x18,0x19,0x1a,0x26," + "0x27,0x28,0x29,0x2a,0x35,0x36,0x37,0x38," + "0x39,0x3a,0x43,0x44,0x45,0x46,0x47,0x48," + "0x49,0x4a,0x53,0x54,0x55,0x56,0x57,0x58," + "0x59,0x5a,0x63,0x64,0x65,0x66,0x67,0x68," + "0x69,0x6a,0x73,0x74,0x75,0x76,0x77,0x78," + "0x79,0x7a,0x82,0x83,0x84,0x85,0x86,0x87," + "0x88,0x89,0x8a,0x92,0x93,0x94,0x95,0x96," + "0x97,0x98,0x99,0x9a,0xa2,0xa3,0xa4,0xa5," + "0xa6,0xa7,0xa8,0xa9,0xaa,0xb2,0xb3,0xb4," + "0xb5,0xb6,0xb7,0xb8,0xb9,0xba,0xc2,0xc3," + "0xc4,0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xd2," + "0xd3,0xd4,0xd5,0xd6,0xd7,0xd8,0xd9,0xda," + "0xe2,0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9," + "0xea,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8," + "0xf9,0xfa");
	},
	initHuffmanTbl: function() {
		this.YDC_HT = this.computeHuffmanTbl(this.std_dc_luminance_nrcodes,this.std_dc_luminance_values);
		this.UVDC_HT = this.computeHuffmanTbl(this.std_dc_chrominance_nrcodes,this.std_dc_chrominance_values);
		this.YAC_HT = this.computeHuffmanTbl(this.std_ac_luminance_nrcodes,this.std_ac_luminance_values);
		this.UVAC_HT = this.computeHuffmanTbl(this.std_ac_chrominance_nrcodes,this.std_ac_chrominance_values);
	},
	computeHuffmanTbl: function(nrcodes,std_table) {
		var codevalue = 0;
		var pos_in_table = 0;
		var HT = new (haxe_ds_IntMap().default)();
		var _g = 1;
		while(_g < 17) {
			var k = _g++;
			var end = nrcodes[k];
			var _g1 = 0;
			var _g11 = end;
			while(_g1 < _g11) {
				var j = _g1++;
				var idx = std_table.get(pos_in_table);
				HT.set(idx,new (format_jpg__$Writer_BitString().default)(k,codevalue));
				++pos_in_table;
				++codevalue;
			}
			codevalue *= 2;
		}
		return HT;
	},
	initCategoryNumber: function() {
		var nrlower = 1;
		var nrupper = 2;
		var idx;
		var _g = 1;
		while(_g < 16) {
			var cat = _g++;
			var _g1 = nrlower;
			var _g11 = nrupper;
			while(_g1 < _g11) {
				var nr = _g1++;
				idx = 32767 + nr;
				this.category.set(idx,cat);
				this.bitcode.set(idx,new (format_jpg__$Writer_BitString().default)(cat,nr));
			}
			var nrneg = -(nrupper - 1);
			while(nrneg <= -nrlower) {
				idx = 32767 + nrneg;
				this.category.set(idx,cat);
				this.bitcode.set(idx,new (format_jpg__$Writer_BitString().default)(cat,nrupper - 1 + nrneg));
				++nrneg;
			}
			nrlower <<= 1;
			nrupper <<= 1;
		}
	},
	writeBits: function(bs) {
		var value = bs.val;
		var posval = bs.len - 1;
		while(posval >= 0) {
			if((value & 1 << posval) != 0) {
				this.bytenew |= 1 << this.bytepos;
			}
			--posval;
			this.bytepos--;
			if(this.bytepos < 0) {
				if(this.bytenew == 255) {
					this.b(255);
					this.b(0);
				} else {
					this.b(this.bytenew);
				}
				this.bytepos = 7;
				this.bytenew = 0;
			}
		}
	},
	writeWord: function(val) {
		this.b(val >> 8 & 255);
		this.b(val & 255);
	},
	fDCTQuant: function(data,fdtbl) {
		var dataOff = 0;
		var _g = 0;
		while(_g < 8) {
			var i = _g++;
			var tmp0 = data[dataOff] + data[dataOff + 7];
			var tmp7 = data[dataOff] - data[dataOff + 7];
			var tmp1 = data[dataOff + 1] + data[dataOff + 6];
			var tmp6 = data[dataOff + 1] - data[dataOff + 6];
			var tmp2 = data[dataOff + 2] + data[dataOff + 5];
			var tmp5 = data[dataOff + 2] - data[dataOff + 5];
			var tmp3 = data[dataOff + 3] + data[dataOff + 4];
			var tmp4 = data[dataOff + 3] - data[dataOff + 4];
			var tmp10 = tmp0 + tmp3;
			var tmp13 = tmp0 - tmp3;
			var tmp11 = tmp1 + tmp2;
			var tmp12 = tmp1 - tmp2;
			data[dataOff] = tmp10 + tmp11;
			data[dataOff + 4] = tmp10 - tmp11;
			var z1 = (tmp12 + tmp13) * 0.707106781;
			data[dataOff + 2] = tmp13 + z1;
			data[dataOff + 6] = tmp13 - z1;
			tmp10 = tmp4 + tmp5;
			tmp11 = tmp5 + tmp6;
			tmp12 = tmp6 + tmp7;
			var z5 = (tmp10 - tmp12) * 0.382683433;
			var z2 = 0.541196100 * tmp10 + z5;
			var z4 = 1.306562965 * tmp12 + z5;
			var z3 = tmp11 * 0.707106781;
			var z11 = tmp7 + z3;
			var z13 = tmp7 - z3;
			data[dataOff + 5] = z13 + z2;
			data[dataOff + 3] = z13 - z2;
			data[dataOff + 1] = z11 + z4;
			data[dataOff + 7] = z11 - z4;
			dataOff += 8;
		}
		dataOff = 0;
		var _g1 = 0;
		while(_g1 < 8) {
			var j = _g1++;
			var tmp0p2 = data[dataOff] + data[dataOff + 56];
			var tmp7p2 = data[dataOff] - data[dataOff + 56];
			var tmp1p2 = data[dataOff + 8] + data[dataOff + 48];
			var tmp6p2 = data[dataOff + 8] - data[dataOff + 48];
			var tmp2p2 = data[dataOff + 16] + data[dataOff + 40];
			var tmp5p2 = data[dataOff + 16] - data[dataOff + 40];
			var tmp3p2 = data[dataOff + 24] + data[dataOff + 32];
			var tmp4p2 = data[dataOff + 24] - data[dataOff + 32];
			var tmp10p2 = tmp0p2 + tmp3p2;
			var tmp13p2 = tmp0p2 - tmp3p2;
			var tmp11p2 = tmp1p2 + tmp2p2;
			var tmp12p2 = tmp1p2 - tmp2p2;
			data[dataOff] = tmp10p2 + tmp11p2;
			data[dataOff + 32] = tmp10p2 - tmp11p2;
			var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781;
			data[dataOff + 16] = tmp13p2 + z1p2;
			data[dataOff + 48] = tmp13p2 - z1p2;
			tmp10p2 = tmp4p2 + tmp5p2;
			tmp11p2 = tmp5p2 + tmp6p2;
			tmp12p2 = tmp6p2 + tmp7p2;
			var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433;
			var z2p2 = 0.541196100 * tmp10p2 + z5p2;
			var z4p2 = 1.306562965 * tmp12p2 + z5p2;
			var z3p2 = tmp11p2 * 0.707106781;
			var z11p2 = tmp7p2 + z3p2;
			var z13p2 = tmp7p2 - z3p2;
			data[dataOff + 40] = z13p2 + z2p2;
			data[dataOff + 24] = z13p2 - z2p2;
			data[dataOff + 8] = z11p2 + z4p2;
			data[dataOff + 56] = z11p2 - z4p2;
			++dataOff;
		}
		var _g2 = 0;
		while(_g2 < 64) {
			var k = _g2++;
			data[k] = Math.round(data[k] * fdtbl[k]);
		}
		return data;
	},
	b: function(v) {
		this.byteout.writeByte(v);
	},
	writeAPP0: function() {
		this.b(255);
		this.b(224);
		this.b(0);
		this.b(16);
		this.b(74);
		this.b(70);
		this.b(73);
		this.b(70);
		this.b(0);
		this.b(1);
		this.b(1);
		this.b(0);
		this.b(0);
		this.b(1);
		this.b(0);
		this.b(1);
		this.b(0);
		this.b(0);
	},
	writeDQT: function() {
		this.b(255);
		this.b(219);
		this.b(0);
		this.b(132);
		this.b(0);
		var _g = 0;
		while(_g < 64) {
			var j = _g++;
			this.b(this.YTable[j]);
		}
		this.b(1);
		var _g1 = 0;
		while(_g1 < 64) {
			var j1 = _g1++;
			this.b(this.UVTable[j1]);
		}
	},
	writeSOF0: function(width,height) {
		this.b(255);
		this.b(192);
		this.b(0);
		this.b(17);
		this.b(8);
		this.b(height >> 8 & 255);
		this.b(height & 255);
		this.b(width >> 8 & 255);
		this.b(width & 255);
		this.b(3);
		this.b(1);
		this.b(17);
		this.b(0);
		this.b(2);
		this.b(17);
		this.b(1);
		this.b(3);
		this.b(17);
		this.b(1);
	},
	writeDHT: function() {
		this.b(255);
		this.b(196);
		this.b(1);
		this.b(162);
		this.b(0);
		this.b(this.std_dc_luminance_nrcodes[1]);
		this.b(this.std_dc_luminance_nrcodes[2]);
		this.b(this.std_dc_luminance_nrcodes[3]);
		this.b(this.std_dc_luminance_nrcodes[4]);
		this.b(this.std_dc_luminance_nrcodes[5]);
		this.b(this.std_dc_luminance_nrcodes[6]);
		this.b(this.std_dc_luminance_nrcodes[7]);
		this.b(this.std_dc_luminance_nrcodes[8]);
		this.b(this.std_dc_luminance_nrcodes[9]);
		this.b(this.std_dc_luminance_nrcodes[10]);
		this.b(this.std_dc_luminance_nrcodes[11]);
		this.b(this.std_dc_luminance_nrcodes[12]);
		this.b(this.std_dc_luminance_nrcodes[13]);
		this.b(this.std_dc_luminance_nrcodes[14]);
		this.b(this.std_dc_luminance_nrcodes[15]);
		this.b(this.std_dc_luminance_nrcodes[16]);
		this.byteout.write(this.std_dc_luminance_values);
		this.b(16);
		this.b(this.std_ac_luminance_nrcodes[1]);
		this.b(this.std_ac_luminance_nrcodes[2]);
		this.b(this.std_ac_luminance_nrcodes[3]);
		this.b(this.std_ac_luminance_nrcodes[4]);
		this.b(this.std_ac_luminance_nrcodes[5]);
		this.b(this.std_ac_luminance_nrcodes[6]);
		this.b(this.std_ac_luminance_nrcodes[7]);
		this.b(this.std_ac_luminance_nrcodes[8]);
		this.b(this.std_ac_luminance_nrcodes[9]);
		this.b(this.std_ac_luminance_nrcodes[10]);
		this.b(this.std_ac_luminance_nrcodes[11]);
		this.b(this.std_ac_luminance_nrcodes[12]);
		this.b(this.std_ac_luminance_nrcodes[13]);
		this.b(this.std_ac_luminance_nrcodes[14]);
		this.b(this.std_ac_luminance_nrcodes[15]);
		this.b(this.std_ac_luminance_nrcodes[16]);
		this.byteout.write(this.std_ac_luminance_values);
		this.b(1);
		this.b(this.std_dc_chrominance_nrcodes[1]);
		this.b(this.std_dc_chrominance_nrcodes[2]);
		this.b(this.std_dc_chrominance_nrcodes[3]);
		this.b(this.std_dc_chrominance_nrcodes[4]);
		this.b(this.std_dc_chrominance_nrcodes[5]);
		this.b(this.std_dc_chrominance_nrcodes[6]);
		this.b(this.std_dc_chrominance_nrcodes[7]);
		this.b(this.std_dc_chrominance_nrcodes[8]);
		this.b(this.std_dc_chrominance_nrcodes[9]);
		this.b(this.std_dc_chrominance_nrcodes[10]);
		this.b(this.std_dc_chrominance_nrcodes[11]);
		this.b(this.std_dc_chrominance_nrcodes[12]);
		this.b(this.std_dc_chrominance_nrcodes[13]);
		this.b(this.std_dc_chrominance_nrcodes[14]);
		this.b(this.std_dc_chrominance_nrcodes[15]);
		this.b(this.std_dc_chrominance_nrcodes[16]);
		this.byteout.write(this.std_dc_chrominance_values);
		this.b(17);
		this.b(this.std_ac_chrominance_nrcodes[1]);
		this.b(this.std_ac_chrominance_nrcodes[2]);
		this.b(this.std_ac_chrominance_nrcodes[3]);
		this.b(this.std_ac_chrominance_nrcodes[4]);
		this.b(this.std_ac_chrominance_nrcodes[5]);
		this.b(this.std_ac_chrominance_nrcodes[6]);
		this.b(this.std_ac_chrominance_nrcodes[7]);
		this.b(this.std_ac_chrominance_nrcodes[8]);
		this.b(this.std_ac_chrominance_nrcodes[9]);
		this.b(this.std_ac_chrominance_nrcodes[10]);
		this.b(this.std_ac_chrominance_nrcodes[11]);
		this.b(this.std_ac_chrominance_nrcodes[12]);
		this.b(this.std_ac_chrominance_nrcodes[13]);
		this.b(this.std_ac_chrominance_nrcodes[14]);
		this.b(this.std_ac_chrominance_nrcodes[15]);
		this.b(this.std_ac_chrominance_nrcodes[16]);
		this.byteout.write(this.std_ac_chrominance_values);
	},
	writeSOS: function() {
		this.b(255);
		this.b(218);
		this.b(0);
		this.b(12);
		this.b(3);
		this.b(1);
		this.b(0);
		this.b(2);
		this.b(17);
		this.b(3);
		this.b(17);
		this.b(0);
		this.b(63);
		this.b(0);
	},
	processDU: function(CDU,fdtbl,DC,HTDC,HTAC) {
		var EOB = HTAC.get(0);
		var M16zeroes = HTAC.get(240);
		var DU_DCT = this.fDCTQuant(CDU,fdtbl);
		var _g = 0;
		while(_g < 64) {
			var i = _g++;
			this.DU[this.ZigZag[i]] = DU_DCT[i];
		}
		var idx;
		var Diff = (Std().default).int(this.DU[0] - DC);
		DC = this.DU[0];
		if(Diff == 0) {
			this.writeBits(HTDC.get(0));
		} else {
			idx = 32767 + Diff;
			this.writeBits(HTDC.get(this.category.get(idx)));
			this.writeBits(this.bitcode.get(idx));
		}
		var end0pos = 63;
		while(end0pos > 0 && this.DU[end0pos] == 0.0) --end0pos;
		if(end0pos == 0) {
			this.writeBits(EOB);
			return DC;
		}
		var i1 = 1;
		while(i1 <= end0pos) {
			var startpos = i1;
			while(this.DU[i1] == 0.0 && i1 <= end0pos) ++i1;
			var nrzeroes = i1 - startpos;
			if(nrzeroes >= 16) {
				var _g1 = 0;
				var _g2 = nrzeroes >> 4;
				while(_g1 < _g2) {
					var nrmarker = _g1++;
					this.writeBits(M16zeroes);
				}
				nrzeroes &= 15;
			}
			idx = 32767 + (Std().default).int(this.DU[i1]);
			this.writeBits(HTAC.get(nrzeroes * 16 + this.category.get(idx)));
			this.writeBits(this.bitcode.get(idx));
			++i1;
		}
		if(end0pos != 63) {
			this.writeBits(EOB);
		}
		return DC;
	},
	RGB2YUV: function(img,width,xpos,ypos) {
		var pos = 0;
		var _g = 0;
		while(_g < 8) {
			var y = _g++;
			var offset = (y + ypos) * width + xpos << 2;
			var _g1 = 0;
			while(_g1 < 8) {
				var x = _g1++;
				++offset;
				var R = img.get(offset++);
				var G = img.get(offset++);
				var B = img.get(offset++);
				this.YDU[pos] = 0.29900 * R + 0.58700 * G + 0.11400 * B - 128;
				this.UDU[pos] = -0.16874 * R + -0.33126 * G + 0.50000 * B;
				this.VDU[pos] = 0.50000 * R + -0.41869 * G + -0.08131 * B;
				++pos;
			}
		}
	},
	write: function(image) {
		var quality = image.quality;
		if(quality <= 0) {
			quality = 1;
		}
		if(quality > 100) {
			quality = 100;
		}
		var sf = quality < 50 ? (Std().default).int(5000 / quality) : (Std().default).int(200 - quality * 2);
		this.initQuantTables(sf);
		this.bytenew = 0;
		this.bytepos = 7;
		var width = image.width;
		var height = image.height;
		this.writeWord(65496);
		this.writeAPP0();
		this.writeDQT();
		this.writeSOF0(width,height);
		this.writeDHT();
		this.writeSOS();
		var DCY = 0.0;
		var DCU = 0.0;
		var DCV = 0.0;
		this.bytenew = 0;
		this.bytepos = 7;
		var ypos = 0;
		while(ypos < height) {
			var xpos = 0;
			while(xpos < width) {
				this.RGB2YUV(image.pixels,width,xpos,ypos);
				DCY = this.processDU(this.YDU,this.fdtbl_Y,DCY,this.YDC_HT,this.YAC_HT);
				DCU = this.processDU(this.UDU,this.fdtbl_UV,DCU,this.UVDC_HT,this.UVAC_HT);
				DCV = this.processDU(this.VDU,this.fdtbl_UV,DCV,this.UVDC_HT,this.UVAC_HT);
				xpos += 8;
			}
			ypos += 8;
		}
		if(this.bytepos >= 0) {
			var fillbits = new (format_jpg__$Writer_BitString().default)(this.bytepos + 1,(1 << this.bytepos + 1) - 1);
			this.writeBits(fillbits);
		}
		this.writeWord(65497);
	}
};
Writer.prototype.__class__ = Writer.prototype.constructor = $hxClasses["format.jpg.Writer"] = Writer;

// Init



// Statics




// Export

exports.default = Writer;