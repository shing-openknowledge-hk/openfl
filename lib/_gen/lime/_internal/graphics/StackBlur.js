// Class: lime._internal.graphics.StackBlur

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function Std() {return require("./../../../Std");}
function lime__$internal_graphics_BlurStack() {return require("./../../../lime/_internal/graphics/BlurStack");}

// Constructor

var StackBlur = function(){}

// Meta

StackBlur.__name__ = "lime._internal.graphics.StackBlur";
StackBlur.__isInterface__ = false;
StackBlur.prototype = {
	
};
StackBlur.prototype.__class__ = StackBlur.prototype.constructor = $hxClasses["lime._internal.graphics.StackBlur"] = StackBlur;

// Init



// Statics

StackBlur.blur = function(dest,source,sourceRect,destPoint,blurX,blurY,quality) {
	dest.copyPixels(source,sourceRect,destPoint);
	StackBlur.__stackBlurCanvasRGBA(dest,(Std().default).int(sourceRect.width),(Std().default).int(sourceRect.height),blurX,blurY,quality);
}
StackBlur.__stackBlurCanvasRGBA = function(image,width,height,blurX,blurY,quality) {
	var radiusX = Math.round(blurX) >> 1;
	var radiusY = Math.round(blurY) >> 1;
	if(StackBlur.MUL_TABLE == null) {
		return;
	}
	if(radiusX >= StackBlur.MUL_TABLE.length) {
		radiusX = StackBlur.MUL_TABLE.length - 1;
	}
	if(radiusY >= StackBlur.MUL_TABLE.length) {
		radiusY = StackBlur.MUL_TABLE.length - 1;
	}
	if(radiusX < 0 || radiusY < 0) {
		return;
	}
	var iterations = quality;
	if(iterations < 1) {
		iterations = 1;
	}
	if(iterations > 3) {
		iterations = 3;
	}
	var px = image.get_data();
	var x;
	var y;
	var i;
	var p;
	var yp;
	var yi;
	var yw;
	var r;
	var g;
	var b;
	var a;
	var pr;
	var pg;
	var pb;
	var pa;
	var f;
	var divx = radiusX + radiusX + 1;
	var divy = radiusY + radiusY + 1;
	var w = width;
	var h = height;
	var w1 = w - 1;
	var h1 = h - 1;
	var rxp1 = radiusX + 1;
	var ryp1 = radiusY + 1;
	var ssx = new (lime__$internal_graphics_BlurStack().default)();
	var sx = ssx;
	var _g = 1;
	var _g1 = divx;
	while(_g < _g1) {
		var i1 = _g++;
		sx = sx.n = new (lime__$internal_graphics_BlurStack().default)();
	}
	sx.n = ssx;
	var ssy = new (lime__$internal_graphics_BlurStack().default)();
	var sy = ssy;
	var _g2 = 1;
	var _g3 = divy;
	while(_g2 < _g3) {
		var i2 = _g2++;
		sy = sy.n = new (lime__$internal_graphics_BlurStack().default)();
	}
	sy.n = ssy;
	var si = null;
	var mtx = StackBlur.MUL_TABLE[radiusX];
	var stx = StackBlur.SHG_TABLE[radiusX];
	var mty = StackBlur.MUL_TABLE[radiusY];
	var sty = StackBlur.SHG_TABLE[radiusY];
	while(iterations > 0) {
		--iterations;
		yi = 0;
		yw = yi;
		var ms = mtx;
		var ss = stx;
		y = h;
		while(true) {
			pr = px[yi];
			r = rxp1 * pr;
			pg = px[yi + 1];
			g = rxp1 * pg;
			pb = px[yi + 2];
			b = rxp1 * pb;
			pa = px[yi + 3];
			a = rxp1 * pa;
			sx = ssx;
			i = rxp1;
			while(true) {
				sx.r = pr;
				sx.g = pg;
				sx.b = pb;
				sx.a = pa;
				sx = sx.n;
				if(!(--i > -1)) {
					break;
				}
			}
			var _g4 = 1;
			var _g5 = rxp1;
			while(_g4 < _g5) {
				var i3 = _g4++;
				p = yi + ((w1 < i3 ? w1 : i3) << 2);
				r += sx.r = px[p];
				g += sx.g = px[p + 1];
				b += sx.b = px[p + 2];
				a += sx.a = px[p + 3];
				sx = sx.n;
			}
			si = ssx;
			var _g6 = 0;
			var _g7 = w;
			while(_g6 < _g7) {
				var x1 = _g6++;
				px[yi++] = r * ms >>> ss;
				px[yi++] = g * ms >>> ss;
				px[yi++] = b * ms >>> ss;
				px[yi++] = a * ms >>> ss;
				p = x1 + radiusX + 1;
				p = yw + (p < w1 ? p : w1) << 2;
				r -= si.r - (si.r = px[p]);
				g -= si.g - (si.g = px[p + 1]);
				b -= si.b - (si.b = px[p + 2]);
				a -= si.a - (si.a = px[p + 3]);
				si = si.n;
			}
			yw += w;
			if(!(--y > 0)) {
				break;
			}
		}
		ms = mty;
		ss = sty;
		var _g41 = 0;
		var _g51 = w;
		while(_g41 < _g51) {
			var x2 = _g41++;
			yi = x2 << 2;
			pr = px[yi];
			r = ryp1 * pr;
			pg = px[yi + 1];
			g = ryp1 * pg;
			pb = px[yi + 2];
			b = ryp1 * pb;
			pa = px[yi + 3];
			a = ryp1 * pa;
			sy = ssy;
			var _g42 = 0;
			var _g52 = ryp1;
			while(_g42 < _g52) {
				var i4 = _g42++;
				sy.r = pr;
				sy.g = pg;
				sy.b = pb;
				sy.a = pa;
				sy = sy.n;
			}
			yp = w;
			var _g61 = 1;
			var _g71 = radiusY + 1;
			while(_g61 < _g71) {
				var i5 = _g61++;
				yi = yp + x2 << 2;
				r += sy.r = px[yi];
				g += sy.g = px[yi + 1];
				b += sy.b = px[yi + 2];
				a += sy.a = px[yi + 3];
				sy = sy.n;
				if(i5 < h1) {
					yp += w;
				}
			}
			yi = x2;
			si = ssy;
			if(iterations > 0) {
				var _g8 = 0;
				var _g9 = h;
				while(_g8 < _g9) {
					var y1 = _g8++;
					p = yi << 2;
					pa = a * ms >>> ss;
					px[p + 3] = pa;
					if(pa > 0) {
						px[p] = r * ms >>> ss;
						px[p + 1] = g * ms >>> ss;
						px[p + 2] = b * ms >>> ss;
					} else {
						px[p] = px[p + 1] = px[p + 2] = 0;
					}
					p = y1 + ryp1;
					p = x2 + (p < h1 ? p : h1) * w << 2;
					r -= si.r - (si.r = px[p]);
					g -= si.g - (si.g = px[p + 1]);
					b -= si.b - (si.b = px[p + 2]);
					a -= si.a - (si.a = px[p + 3]);
					si = si.n;
					yi += w;
				}
			} else {
				var _g81 = 0;
				var _g91 = h;
				while(_g81 < _g91) {
					var y2 = _g81++;
					p = yi << 2;
					pa = a * ms >>> ss;
					px[p + 3] = pa;
					if(pa > 0) {
						f = 255 / pa;
						pr = (Std().default).int((r * ms >>> ss) * f);
						pg = (Std().default).int((g * ms >>> ss) * f);
						pb = (Std().default).int((b * ms >>> ss) * f);
						px[p] = pr > 255 ? 255 : pr;
						px[p + 1] = pg > 255 ? 255 : pg;
						px[p + 2] = pb > 255 ? 255 : pb;
					} else {
						px[p] = px[p + 1] = px[p + 2] = 0;
					}
					p = y2 + ryp1;
					p = x2 + (p < h1 ? p : h1) * w << 2;
					r -= si.r - (si.r = px[p]);
					g -= si.g - (si.g = px[p + 1]);
					b -= si.b - (si.b = px[p + 2]);
					a -= si.a - (si.a = px[p + 3]);
					si = si.n;
					yi += w;
				}
			}
		}
	}
}
StackBlur.MUL_TABLE = [1,171,205,293,57,373,79,137,241,27,391,357,41,19,283,265,497,469,443,421,25,191,365,349,335,161,155,149,9,278,269,261,505,245,475,231,449,437,213,415,405,395,193,377,369,361,353,345,169,331,325,319,313,307,301,37,145,285,281,69,271,267,263,259,509,501,493,243,479,118,465,459,113,446,55,435,429,423,209,413,51,403,199,393,97,3,379,375,371,367,363,359,355,351,347,43,85,337,333,165,327,323,5,317,157,311,77,305,303,75,297,294,73,289,287,71,141,279,277,275,68,135,67,133,33,262,260,129,511,507,503,499,495,491,61,121,481,477,237,235,467,232,115,457,227,451,7,445,221,439,218,433,215,427,425,211,419,417,207,411,409,203,202,401,399,396,197,49,389,387,385,383,95,189,47,187,93,185,23,183,91,181,45,179,89,177,11,175,87,173,345,343,341,339,337,21,167,83,331,329,327,163,81,323,321,319,159,79,315,313,39,155,309,307,153,305,303,151,75,299,149,37,295,147,73,291,145,289,287,143,285,71,141,281,35,279,139,69,275,137,273,17,271,135,269,267,133,265,33,263,131,261,130,259,129,257,1]
StackBlur.SHG_TABLE = [0,9,10,11,9,12,10,11,12,9,13,13,10,9,13,13,14,14,14,14,10,13,14,14,14,13,13,13,9,14,14,14,15,14,15,14,15,15,14,15,15,15,14,15,15,15,15,15,14,15,15,15,15,15,15,12,14,15,15,13,15,15,15,15,16,16,16,15,16,14,16,16,14,16,13,16,16,16,15,16,13,16,15,16,14,9,16,16,16,16,16,16,16,16,16,13,14,16,16,15,16,16,10,16,15,16,14,16,16,14,16,16,14,16,16,14,15,16,16,16,14,15,14,15,13,16,16,15,17,17,17,17,17,17,14,15,17,17,16,16,17,16,15,17,16,17,11,17,16,17,16,17,16,17,17,16,17,17,16,17,17,16,16,17,17,17,16,14,17,17,17,17,15,16,14,16,15,16,13,16,15,16,14,16,15,16,12,16,15,16,17,17,17,17,17,13,16,15,17,17,17,16,15,17,17,17,16,15,17,17,14,16,17,17,16,17,17,16,15,17,16,14,17,16,15,17,16,17,17,16,17,15,16,17,14,17,16,15,17,16,17,13,17,16,17,17,16,17,14,17,16,17,16,17,16,17,9]

// Export

exports.default = StackBlur;