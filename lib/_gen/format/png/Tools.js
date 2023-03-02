// Class: format.png.Tools

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function haxe_io_BytesBuffer() {return require("./../../haxe/io/BytesBuffer");}
function format_tools_Inflate() {return require("./../../format/tools/Inflate");}
function haxe_ds_List() {return require("./../../haxe/ds/List");}
function format_png_Chunk() {return require("./../../format/png/Chunk");}
function format_png_Color() {return require("./../../format/png/Color");}
function format_tools_Deflate() {return require("./../../format/tools/Deflate");}

// Constructor

var Tools = function(){}

// Meta

Tools.__name__ = "format.png.Tools";
Tools.__isInterface__ = false;
Tools.prototype = {
	
};
Tools.prototype.__class__ = Tools.prototype.constructor = $hxClasses["format.png.Tools"] = Tools;

// Init



// Statics

Tools.getHeader = function(d) {
	var c = d.iterator();
	while(c.hasNext()) {
		var c1 = c.next();
		if(c1._hx_index == 1) {
			var h = c1.h;
			return h;
		}
	}
	throw new (js__$Boot_HaxeError().default)("Header not found");
}
Tools.getPalette = function(d) {
	var c = d.iterator();
	while(c.hasNext()) {
		var c1 = c.next();
		if(c1._hx_index == 3) {
			var b = c1.b;
			return b;
		}
	}
	return null;
}
Tools.filter = function(data,x,y,stride,prev,p,numChannels) {
	if(numChannels == null) {
		numChannels = 4;
	}
	var b = y == 0 ? 0 : data.get(p - stride);
	var c = x == 0 || y == 0 ? 0 : data.get(p - stride - numChannels);
	var k = prev + b - c;
	var pa = k - prev;
	if(pa < 0) {
		pa = -pa;
	}
	var pb = k - b;
	if(pb < 0) {
		pb = -pb;
	}
	var pc = k - c;
	if(pc < 0) {
		pc = -pc;
	}
	if(pa <= pb && pa <= pc) {
		return prev;
	} else if(pb <= pc) {
		return b;
	} else {
		return c;
	}
}
Tools.reverseBytes = function(b) {
	var p = 0;
	var _g = 0;
	var _g1 = b.get_length() >> 2;
	while(_g < _g1) {
		var i = _g++;
		var b1 = b.get(p);
		var g = b.get(p + 1);
		var r = b.get(p + 2);
		var a = b.get(p + 3);
		b.set(p++,a);
		b.set(p++,r);
		b.set(p++,g);
		b.set(p++,b1);
	}
}
Tools.extractGrey = function(d) {
	var h = Tools.getHeader(d);
	var grey = (haxe_io_Bytes().default).alloc(h.width * h.height);
	var data = null;
	var fullData = null;
	var c = d.iterator();
	while(c.hasNext()) {
		var c1 = c.next();
		if(c1._hx_index == 2) {
			var b = c1.b;
			if(fullData != null) {
				fullData.add(b);
			} else if(data == null) {
				data = b;
			} else {
				fullData = new (haxe_io_BytesBuffer().default)();
				fullData.add(data);
				fullData.add(b);
				data = null;
			}
		}
	}
	if(fullData != null) {
		data = fullData.getBytes();
	}
	if(data == null) {
		throw new (js__$Boot_HaxeError().default)("Data not found");
	}
	data = (format_tools_Inflate().default).run(data);
	var r = 0;
	var w = 0;
	var _g = h.color;
	if(_g._hx_index == 0) {
		var alpha = _g.alpha;
		if(h.colbits != 8) {
			throw new (js__$Boot_HaxeError().default)("Unsupported color mode");
		}
		var width = h.width;
		var stride = (alpha ? 2 : 1) * width + 1;
		if(data.get_length() < h.height * stride) {
			throw new (js__$Boot_HaxeError().default)("Not enough data");
		}
		var rinc = alpha ? 2 : 1;
		var _g1 = 0;
		var _g11 = h.height;
		while(_g1 < _g11) {
			var y = _g1++;
			var f = data.get(r++);
			switch(f) {
			case 0:
				var _g2 = 0;
				var _g12 = width;
				while(_g2 < _g12) {
					var x = _g2++;
					var v = data.get(r);
					r += rinc;
					grey.set(w++,v);
				}
				break;
			case 1:
				var cv = 0;
				var _g3 = 0;
				var _g13 = width;
				while(_g3 < _g13) {
					var x1 = _g3++;
					cv += data.get(r);
					r += rinc;
					grey.set(w++,cv);
				}
				break;
			case 2:
				var stride1 = y == 0 ? 0 : width;
				var _g4 = 0;
				var _g14 = width;
				while(_g4 < _g14) {
					var x2 = _g4++;
					var v1 = data.get(r) + grey.get(w - stride1);
					r += rinc;
					grey.set(w++,v1);
				}
				break;
			case 3:
				var cv1 = 0;
				var stride2 = y == 0 ? 0 : width;
				var _g5 = 0;
				var _g15 = width;
				while(_g5 < _g15) {
					var x3 = _g5++;
					cv1 = data.get(r) + (cv1 + grey.get(w - stride2) >> 1) & 255;
					r += rinc;
					grey.set(w++,cv1);
				}
				break;
			case 4:
				var stride3 = width;
				var cv2 = 0;
				var _g6 = 0;
				var _g16 = width;
				while(_g6 < _g16) {
					var x4 = _g6++;
					cv2 = Tools.filter(grey,x4,y,stride3,cv2,w,1) + data.get(r) & 255;
					r += rinc;
					grey.set(w++,cv2);
				}
				break;
			default:
				throw new (js__$Boot_HaxeError().default)("Invalid filter " + f);
			}
		}
	} else {
		throw new (js__$Boot_HaxeError().default)("Unsupported color mode");
	}
	return grey;
}
Tools.extract32 = function(d,bytes,flipY) {
	var h = Tools.getHeader(d);
	var bgra = bytes == null ? (haxe_io_Bytes().default).alloc(h.width * h.height * 4) : bytes;
	var data = null;
	var fullData = null;
	var c = d.iterator();
	while(c.hasNext()) {
		var c1 = c.next();
		if(c1._hx_index == 2) {
			var b = c1.b;
			if(fullData != null) {
				fullData.add(b);
			} else if(data == null) {
				data = b;
			} else {
				fullData = new (haxe_io_BytesBuffer().default)();
				fullData.add(data);
				fullData.add(b);
				data = null;
			}
		}
	}
	if(fullData != null) {
		data = fullData.getBytes();
	}
	if(data == null) {
		throw new (js__$Boot_HaxeError().default)("Data not found");
	}
	data = (format_tools_Inflate().default).run(data);
	var r = 0;
	var w = 0;
	var lineDelta = 0;
	if(flipY) {
		lineDelta = -h.width * 8;
		w = (h.height - 1) * (h.width * 4);
	}
	var flipY1 = flipY ? -1 : 1;
	var _g = h.color;
	switch(_g._hx_index) {
	case 0:
		var alpha = _g.alpha;
		if(h.colbits != 8) {
			throw new (js__$Boot_HaxeError().default)("Unsupported color mode");
		}
		var width = h.width;
		var stride = (alpha ? 2 : 1) * width + 1;
		if(data.get_length() < h.height * stride) {
			throw new (js__$Boot_HaxeError().default)("Not enough data");
		}
		var alphvaIdx = -1;
		if(!alpha) {
			var t = d.iterator();
			while(t.hasNext()) {
				var t1 = t.next();
				if(t1._hx_index == 4) {
					if(t1.id == "tRNS") {
						var data1 = t1.data;
						if(data1.get_length() >= 2) {
							alphvaIdx = data1.get(1);
						}
						break;
					}
				}
			}
		}
		var _g1 = 0;
		var _g11 = h.height;
		while(_g1 < _g11) {
			var y = _g1++;
			var f = data.get(r++);
			switch(f) {
			case 0:
				if(alpha) {
					var _g2 = 0;
					var _g12 = width;
					while(_g2 < _g12) {
						var x = _g2++;
						var v = data.get(r++);
						bgra.set(w++,v);
						bgra.set(w++,v);
						bgra.set(w++,v);
						bgra.set(w++,data.get(r++));
					}
				} else {
					var _g3 = 0;
					var _g13 = width;
					while(_g3 < _g13) {
						var x1 = _g3++;
						var v1 = data.get(r++);
						bgra.set(w++,v1);
						bgra.set(w++,v1);
						bgra.set(w++,v1);
						bgra.set(w++,v1 == alphvaIdx ? 0 : 255);
					}
				}
				break;
			case 1:
				var cv = 0;
				var ca = 0;
				if(alpha) {
					var _g4 = 0;
					var _g14 = width;
					while(_g4 < _g14) {
						var x2 = _g4++;
						cv += data.get(r++);
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						ca += data.get(r++);
						bgra.set(w++,ca);
					}
				} else {
					var _g5 = 0;
					var _g15 = width;
					while(_g5 < _g15) {
						var x3 = _g5++;
						cv += data.get(r++);
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						bgra.set(w++,cv);
						bgra.set(w++,cv == alphvaIdx ? 0 : 255);
					}
				}
				break;
			case 2:
				var stride1 = y == 0 ? 0 : width * 4 * flipY1;
				if(alpha) {
					var _g6 = 0;
					var _g16 = width;
					while(_g6 < _g16) {
						var x4 = _g6++;
						var v2 = data.get(r++) + bgra.get(w - stride1);
						bgra.set(w++,v2);
						bgra.set(w++,v2);
						bgra.set(w++,v2);
						bgra.set(w++,data.get(r++) + bgra.get(w - stride1));
					}
				} else {
					var _g7 = 0;
					var _g17 = width;
					while(_g7 < _g17) {
						var x5 = _g7++;
						var v3 = data.get(r++) + bgra.get(w - stride1);
						bgra.set(w++,v3);
						bgra.set(w++,v3);
						bgra.set(w++,v3);
						bgra.set(w++,v3 == alphvaIdx ? 0 : 255);
					}
				}
				break;
			case 3:
				var cv1 = 0;
				var ca1 = 0;
				var stride2 = y == 0 ? 0 : width * 4 * flipY1;
				if(alpha) {
					var _g8 = 0;
					var _g18 = width;
					while(_g8 < _g18) {
						var x6 = _g8++;
						cv1 = data.get(r++) + (cv1 + bgra.get(w - stride2) >> 1) & 255;
						bgra.set(w++,cv1);
						bgra.set(w++,cv1);
						bgra.set(w++,cv1);
						ca1 = data.get(r++) + (ca1 + bgra.get(w - stride2) >> 1) & 255;
						bgra.set(w++,ca1);
					}
				} else {
					var _g9 = 0;
					var _g19 = width;
					while(_g9 < _g19) {
						var x7 = _g9++;
						cv1 = data.get(r++) + (cv1 + bgra.get(w - stride2) >> 1) & 255;
						bgra.set(w++,cv1);
						bgra.set(w++,cv1);
						bgra.set(w++,cv1);
						bgra.set(w++,cv1 == alphvaIdx ? 0 : 255);
					}
				}
				break;
			case 4:
				var stride3 = width * 4 * flipY1;
				var cv2 = 0;
				var ca2 = 0;
				if(alpha) {
					var _g10 = 0;
					var _g110 = width;
					while(_g10 < _g110) {
						var x8 = _g10++;
						cv2 = Tools.filter(bgra,x8,y,stride3,cv2,w) + data.get(r++) & 255;
						bgra.set(w++,cv2);
						bgra.set(w++,cv2);
						bgra.set(w++,cv2);
						ca2 = Tools.filter(bgra,x8,y,stride3,ca2,w) + data.get(r++) & 255;
						bgra.set(w++,ca2);
					}
				} else {
					var _g20 = 0;
					var _g111 = width;
					while(_g20 < _g111) {
						var x9 = _g20++;
						cv2 = Tools.filter(bgra,x9,y,stride3,cv2,w) + data.get(r++) & 255;
						bgra.set(w++,cv2);
						bgra.set(w++,cv2);
						bgra.set(w++,cv2);
						bgra.set(w++,cv2 == alphvaIdx ? 0 : 255);
					}
				}
				break;
			default:
				throw new (js__$Boot_HaxeError().default)("Invalid filter " + f);
			}
			w += lineDelta;
		}
		break;
	case 1:
		var alpha1 = _g.alpha;
		if(h.colbits != 8) {
			throw new (js__$Boot_HaxeError().default)("Unsupported color mode");
		}
		var width1 = h.width;
		var stride4 = (alpha1 ? 4 : 3) * width1 + 1;
		if(data.get_length() < h.height * stride4) {
			throw new (js__$Boot_HaxeError().default)("Not enough data");
		}
		var alphaRed = -1;
		var alphaGreen = -1;
		var alphaBlue = -1;
		if(!alpha1) {
			var t2 = d.iterator();
			while(t2.hasNext()) {
				var t3 = t2.next();
				if(t3._hx_index == 4) {
					if(t3.id == "tRNS") {
						var data2 = t3.data;
						if(data2.get_length() >= 6) {
							alphaRed = data2.get(1);
							alphaGreen = data2.get(3);
							alphaBlue = data2.get(5);
						}
						break;
					}
				}
			}
		}
		var cr = 0;
		var cg = 0;
		var cb = 0;
		var ca3 = 0;
		var _g21 = 0;
		var _g112 = h.height;
		while(_g21 < _g112) {
			var y1 = _g21++;
			var f1 = data.get(r++);
			switch(f1) {
			case 0:
				if(alpha1) {
					var _g22 = 0;
					var _g113 = width1;
					while(_g22 < _g113) {
						var x10 = _g22++;
						bgra.set(w++,data.get(r + 2));
						bgra.set(w++,data.get(r + 1));
						bgra.set(w++,data.get(r));
						bgra.set(w++,data.get(r + 3));
						r += 4;
					}
				} else {
					var _g23 = 0;
					var _g114 = width1;
					while(_g23 < _g114) {
						var x11 = _g23++;
						cb = data.get(r + 2);
						bgra.set(w++,cb);
						cg = data.get(r + 1);
						bgra.set(w++,cg);
						cr = data.get(r);
						bgra.set(w++,cr);
						bgra.set(w++,cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255);
						r += 3;
					}
				}
				break;
			case 1:
				ca3 = 0;
				cb = ca3;
				cg = cb;
				cr = cg;
				if(alpha1) {
					var _g24 = 0;
					var _g115 = width1;
					while(_g24 < _g115) {
						var x12 = _g24++;
						cb += data.get(r + 2);
						bgra.set(w++,cb);
						cg += data.get(r + 1);
						bgra.set(w++,cg);
						cr += data.get(r);
						bgra.set(w++,cr);
						ca3 += data.get(r + 3);
						bgra.set(w++,ca3);
						r += 4;
					}
				} else {
					var _g25 = 0;
					var _g116 = width1;
					while(_g25 < _g116) {
						var x13 = _g25++;
						cb += data.get(r + 2);
						bgra.set(w++,cb);
						cg += data.get(r + 1);
						bgra.set(w++,cg);
						cr += data.get(r);
						bgra.set(w++,cr);
						bgra.set(w++,cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255);
						r += 3;
					}
				}
				break;
			case 2:
				var stride5 = y1 == 0 ? 0 : width1 * 4 * flipY1;
				if(alpha1) {
					var _g26 = 0;
					var _g117 = width1;
					while(_g26 < _g117) {
						var x14 = _g26++;
						bgra.set(w,data.get(r + 2) + bgra.get(w - stride5));
						++w;
						bgra.set(w,data.get(r + 1) + bgra.get(w - stride5));
						++w;
						bgra.set(w,data.get(r) + bgra.get(w - stride5));
						++w;
						bgra.set(w,data.get(r + 3) + bgra.get(w - stride5));
						++w;
						r += 4;
					}
				} else {
					var _g27 = 0;
					var _g118 = width1;
					while(_g27 < _g118) {
						var x15 = _g27++;
						cb = data.get(r + 2) + bgra.get(w - stride5);
						bgra.set(w,cb);
						++w;
						cg = data.get(r + 1) + bgra.get(w - stride5);
						bgra.set(w,cg);
						++w;
						cr = data.get(r) + bgra.get(w - stride5);
						bgra.set(w,cr);
						++w;
						bgra.set(w++,cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255);
						r += 3;
					}
				}
				break;
			case 3:
				ca3 = 0;
				cb = ca3;
				cg = cb;
				cr = cg;
				var stride6 = y1 == 0 ? 0 : width1 * 4 * flipY1;
				if(alpha1) {
					var _g28 = 0;
					var _g119 = width1;
					while(_g28 < _g119) {
						var x16 = _g28++;
						cb = data.get(r + 2) + (cb + bgra.get(w - stride6) >> 1) & 255;
						bgra.set(w++,cb);
						cg = data.get(r + 1) + (cg + bgra.get(w - stride6) >> 1) & 255;
						bgra.set(w++,cg);
						cr = data.get(r) + (cr + bgra.get(w - stride6) >> 1) & 255;
						bgra.set(w++,cr);
						ca3 = data.get(r + 3) + (ca3 + bgra.get(w - stride6) >> 1) & 255;
						bgra.set(w++,ca3);
						r += 4;
					}
				} else {
					var _g29 = 0;
					var _g120 = width1;
					while(_g29 < _g120) {
						var x17 = _g29++;
						cb = data.get(r + 2) + (cb + bgra.get(w - stride6) >> 1) & 255;
						bgra.set(w++,cb);
						cg = data.get(r + 1) + (cg + bgra.get(w - stride6) >> 1) & 255;
						bgra.set(w++,cg);
						cr = data.get(r) + (cr + bgra.get(w - stride6) >> 1) & 255;
						bgra.set(w++,cr);
						bgra.set(w++,cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255);
						r += 3;
					}
				}
				break;
			case 4:
				var stride7 = width1 * 4 * flipY1;
				ca3 = 0;
				cb = ca3;
				cg = cb;
				cr = cg;
				if(alpha1) {
					var _g30 = 0;
					var _g121 = width1;
					while(_g30 < _g121) {
						var x18 = _g30++;
						cb = Tools.filter(bgra,x18,y1,stride7,cb,w) + data.get(r + 2) & 255;
						bgra.set(w++,cb);
						cg = Tools.filter(bgra,x18,y1,stride7,cg,w) + data.get(r + 1) & 255;
						bgra.set(w++,cg);
						cr = Tools.filter(bgra,x18,y1,stride7,cr,w) + data.get(r) & 255;
						bgra.set(w++,cr);
						ca3 = Tools.filter(bgra,x18,y1,stride7,ca3,w) + data.get(r + 3) & 255;
						bgra.set(w++,ca3);
						r += 4;
					}
				} else {
					var _g31 = 0;
					var _g122 = width1;
					while(_g31 < _g122) {
						var x19 = _g31++;
						cb = Tools.filter(bgra,x19,y1,stride7,cb,w) + data.get(r + 2) & 255;
						bgra.set(w++,cb);
						cg = Tools.filter(bgra,x19,y1,stride7,cg,w) + data.get(r + 1) & 255;
						bgra.set(w++,cg);
						cr = Tools.filter(bgra,x19,y1,stride7,cr,w) + data.get(r) & 255;
						bgra.set(w++,cr);
						bgra.set(w++,cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255);
						r += 3;
					}
				}
				break;
			default:
				throw new (js__$Boot_HaxeError().default)("Invalid filter " + f1);
			}
			w += lineDelta;
		}
		break;
	case 2:
		var pal = Tools.getPalette(d);
		if(pal == null) {
			throw new (js__$Boot_HaxeError().default)("PNG Palette is missing");
		}
		var alpha2 = null;
		var t4 = d.iterator();
		while(t4.hasNext()) {
			var t5 = t4.next();
			if(t5._hx_index == 4) {
				if(t5.id == "tRNS") {
					var data3 = t5.data;
					alpha2 = data3;
					break;
				}
			}
		}
		if(alpha2 != null && alpha2.get_length() < 1 << h.colbits) {
			var alpha21 = (haxe_io_Bytes().default).alloc(1 << h.colbits);
			alpha21.blit(0,alpha2,0,alpha2.get_length());
			alpha21.fill(alpha2.get_length(),alpha21.get_length() - alpha2.get_length(),255);
			alpha2 = alpha21;
		}
		var width2 = h.width;
		var stride8 = Math.ceil(width2 * h.colbits / 8) + 1;
		if(data.get_length() < h.height * stride8) {
			throw new (js__$Boot_HaxeError().default)("Not enough data");
		}
		var tmp = h.width * h.colbits;
		var rline = tmp >> 3;
		var _g32 = 0;
		var _g123 = h.height;
		while(_g32 < _g123) {
			var y2 = _g32++;
			var f2 = data.get(r++);
			if(f2 == 0) {
				r += rline;
				continue;
			}
			switch(f2) {
			case 1:
				var c2 = 0;
				var _g33 = 0;
				var _g124 = width2;
				while(_g33 < _g124) {
					var x20 = _g33++;
					var v4 = data.get(r);
					c2 += v4;
					data.set(r++,c2 & 255);
				}
				break;
			case 2:
				var stride9 = y2 == 0 ? 0 : rline + 1;
				var _g34 = 0;
				var _g125 = width2;
				while(_g34 < _g125) {
					var x21 = _g34++;
					var v5 = data.get(r);
					data.set(r,v5 + data.get(r - stride9));
					++r;
				}
				break;
			case 3:
				var c3 = 0;
				var stride10 = y2 == 0 ? 0 : rline + 1;
				var _g35 = 0;
				var _g126 = width2;
				while(_g35 < _g126) {
					var x22 = _g35++;
					var v6 = data.get(r);
					c3 = v6 + (c3 + data.get(r - stride10) >> 1) & 255;
					data.set(r++,c3);
				}
				break;
			case 4:
				var stride11 = rline + 1;
				var c4 = 0;
				var _g36 = 0;
				var _g127 = width2;
				while(_g36 < _g127) {
					var x23 = _g36++;
					var v7 = data.get(r);
					c4 = Tools.filter(data,x23,y2,stride11,c4,r,1) + v7 & 255;
					data.set(r++,c4);
				}
				break;
			default:
				throw new (js__$Boot_HaxeError().default)("Invalid filter " + f2);
			}
		}
		var r1 = 0;
		if(h.colbits == 8) {
			var _g210 = 0;
			var _g37 = h.height;
			while(_g210 < _g37) {
				var y3 = _g210++;
				++r1;
				var _g211 = 0;
				var _g38 = h.width;
				while(_g211 < _g38) {
					var x24 = _g211++;
					var c5 = data.get(r1++);
					bgra.set(w++,pal.get(c5 * 3 + 2));
					bgra.set(w++,pal.get(c5 * 3 + 1));
					bgra.set(w++,pal.get(c5 * 3));
					bgra.set(w++,alpha2 != null ? alpha2.get(c5) : 255);
				}
				w += lineDelta;
			}
		} else if(h.colbits < 8) {
			var req = h.colbits;
			var mask = (1 << req) - 1;
			var _g212 = 0;
			var _g39 = h.height;
			while(_g212 < _g39) {
				var y4 = _g212++;
				++r1;
				var bits = 0;
				var nbits = 0;
				var v8;
				var _g213 = 0;
				var _g310 = h.width;
				while(_g213 < _g310) {
					var x25 = _g213++;
					if(nbits < req) {
						bits = bits << 8 | data.get(r1++);
						nbits += 8;
					}
					var c6 = bits >>> nbits - req & mask;
					nbits -= req;
					bgra.set(w++,pal.get(c6 * 3 + 2));
					bgra.set(w++,pal.get(c6 * 3 + 1));
					bgra.set(w++,pal.get(c6 * 3));
					bgra.set(w++,alpha2 != null ? alpha2.get(c6) : 255);
				}
				w += lineDelta;
			}
		} else {
			throw new (js__$Boot_HaxeError().default)(h.colbits + " indexed bits per pixel not supported");
		}
		break;
	}
	return bgra;
}
Tools.buildGrey = function(width,height,data,level) {
	if(level == null) {
		level = 9;
	}
	var rgb = (haxe_io_Bytes().default).alloc(width * height + height);
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgb.set(w++,0);
		var _g2 = 0;
		var _g11 = width;
		while(_g2 < _g11) {
			var x = _g2++;
			rgb.set(w++,data.get(r++));
		}
	}
	var l = new (haxe_ds_List().default)();
	l.add((format_png_Chunk().default).CHeader({ width : width, height : height, colbits : 8, color : (format_png_Color().default).ColGrey(false), interlaced : false}));
	l.add((format_png_Chunk().default).CData((format_tools_Deflate().default).run(rgb,level)));
	l.add((format_png_Chunk().default).CEnd);
	return l;
}
Tools.buildIndexed = function(width,height,data,palette,level) {
	if(level == null) {
		level = 9;
	}
	var rgb = (haxe_io_Bytes().default).alloc(width * height + height);
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgb.set(w++,0);
		var _g2 = 0;
		var _g11 = width;
		while(_g2 < _g11) {
			var x = _g2++;
			rgb.set(w++,data.get(r++));
		}
	}
	var l = new (haxe_ds_List().default)();
	l.add((format_png_Chunk().default).CHeader({ width : width, height : height, colbits : 8, color : (format_png_Color().default).ColIndexed, interlaced : false}));
	l.add((format_png_Chunk().default).CPalette(palette));
	l.add((format_png_Chunk().default).CData((format_tools_Deflate().default).run(rgb,level)));
	l.add((format_png_Chunk().default).CEnd);
	return l;
}
Tools.buildRGB = function(width,height,data,level) {
	if(level == null) {
		level = 9;
	}
	var rgb = (haxe_io_Bytes().default).alloc(width * height * 3 + height);
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgb.set(w++,0);
		var _g2 = 0;
		var _g11 = width;
		while(_g2 < _g11) {
			var x = _g2++;
			rgb.set(w++,data.get(r + 2));
			rgb.set(w++,data.get(r + 1));
			rgb.set(w++,data.get(r));
			r += 3;
		}
	}
	var l = new (haxe_ds_List().default)();
	l.add((format_png_Chunk().default).CHeader({ width : width, height : height, colbits : 8, color : (format_png_Color().default).ColTrue(false), interlaced : false}));
	l.add((format_png_Chunk().default).CData((format_tools_Deflate().default).run(rgb,level)));
	l.add((format_png_Chunk().default).CEnd);
	return l;
}
Tools.build32ARGB = function(width,height,data,level) {
	if(level == null) {
		level = 9;
	}
	var rgba = (haxe_io_Bytes().default).alloc(width * height * 4 + height);
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgba.set(w++,0);
		var _g2 = 0;
		var _g11 = width;
		while(_g2 < _g11) {
			var x = _g2++;
			rgba.set(w++,data.get(r + 1));
			rgba.set(w++,data.get(r + 2));
			rgba.set(w++,data.get(r + 3));
			rgba.set(w++,data.get(r));
			r += 4;
		}
	}
	var l = new (haxe_ds_List().default)();
	l.add((format_png_Chunk().default).CHeader({ width : width, height : height, colbits : 8, color : (format_png_Color().default).ColTrue(true), interlaced : false}));
	l.add((format_png_Chunk().default).CData((format_tools_Deflate().default).run(rgba,level)));
	l.add((format_png_Chunk().default).CEnd);
	return l;
}
Tools.build32BGRA = function(width,height,data,level) {
	if(level == null) {
		level = 9;
	}
	var rgba = (haxe_io_Bytes().default).alloc(width * height * 4 + height);
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgba.set(w++,0);
		var _g2 = 0;
		var _g11 = width;
		while(_g2 < _g11) {
			var x = _g2++;
			rgba.set(w++,data.get(r + 2));
			rgba.set(w++,data.get(r + 1));
			rgba.set(w++,data.get(r));
			rgba.set(w++,data.get(r + 3));
			r += 4;
		}
	}
	var l = new (haxe_ds_List().default)();
	l.add((format_png_Chunk().default).CHeader({ width : width, height : height, colbits : 8, color : (format_png_Color().default).ColTrue(true), interlaced : false}));
	l.add((format_png_Chunk().default).CData((format_tools_Deflate().default).run(rgba,level)));
	l.add((format_png_Chunk().default).CEnd);
	return l;
}


// Export

exports.default = Tools;