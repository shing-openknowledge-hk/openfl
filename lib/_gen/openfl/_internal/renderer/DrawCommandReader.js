// Class: openfl._internal.renderer.DrawCommandReader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function openfl__$internal_renderer_DrawCommandType() {return require("./../../../openfl/_internal/renderer/DrawCommandType");}

// Constructor

var DrawCommandReader = function(buffer) {
	this.buffer = buffer;
	this.bPos = this.iPos = this.fPos = this.oPos = this.ffPos = this.iiPos = this.tsPos = 0;
	this.prev = (openfl__$internal_renderer_DrawCommandType().default).UNKNOWN;
}

// Meta

DrawCommandReader.__name__ = "openfl._internal.renderer.DrawCommandReader";
DrawCommandReader.__isInterface__ = false;
DrawCommandReader.prototype = {
	advance: function() {
		switch(this.prev._hx_index) {
		case 0:
			this.oPos += 2;
			this.bPos += 2;
			break;
		case 1:
			this.iPos += 1;
			this.fPos += 1;
			break;
		case 2:
			this.oPos += 4;
			this.iiPos += 2;
			this.ffPos += 1;
			this.fPos += 1;
			break;
		case 3:
			this.oPos += 1;
			break;
		case 4:
			this.fPos += 6;
			break;
		case 5:
			this.fPos += 4;
			break;
		case 6:
			this.fPos += 3;
			break;
		case 7:
			this.fPos += 4;
			break;
		case 8:
			this.oPos += 3;
			break;
		case 9:
			this.fPos += 4;
			break;
		case 10:
			this.fPos += 5;
			this.oPos += 1;
			break;
		case 12:
			this.oPos += 4;
			break;
		case 13:
			break;
		case 14:
			this.oPos += 2;
			this.bPos += 2;
			break;
		case 15:
			this.oPos += 4;
			this.iiPos += 2;
			this.ffPos += 1;
			this.fPos += 1;
			break;
		case 16:
			this.oPos += 4;
			this.iPos += 1;
			this.fPos += 2;
			this.bPos += 1;
			break;
		case 17:
			this.fPos += 2;
			break;
		case 18:
			this.fPos += 2;
			break;
		case 19:
			this.oPos += 1;
			break;
		case 20:
			this.oPos += 1;
			break;
		case 21:case 22:
			break;
		default:
		}
	},
	bool: function(index) {
		return this.buffer.b[this.bPos + index];
	},
	destroy: function() {
		this.buffer = null;
		this.reset();
	},
	fArr: function(index) {
		return this.buffer.ff[this.ffPos + index];
	},
	float: function(index) {
		return this.buffer.f[this.fPos + index];
	},
	iArr: function(index) {
		return this.buffer.ii[this.iiPos + index];
	},
	int: function(index) {
		return this.buffer.i[this.iPos + index];
	},
	obj: function(index) {
		return this.buffer.o[this.oPos + index];
	},
	readBeginBitmapFill: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).BEGIN_BITMAP_FILL;
		var this1 = this;
		return this1;
	},
	readBeginFill: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).BEGIN_FILL;
		var this1 = this;
		return this1;
	},
	readBeginGradientFill: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).BEGIN_GRADIENT_FILL;
		var this1 = this;
		return this1;
	},
	readBeginShaderFill: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).BEGIN_SHADER_FILL;
		var this1 = this;
		return this1;
	},
	readCubicCurveTo: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).CUBIC_CURVE_TO;
		var this1 = this;
		return this1;
	},
	readCurveTo: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).CURVE_TO;
		var this1 = this;
		return this1;
	},
	readDrawCircle: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).DRAW_CIRCLE;
		var this1 = this;
		return this1;
	},
	readDrawEllipse: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).DRAW_ELLIPSE;
		var this1 = this;
		return this1;
	},
	readDrawQuads: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).DRAW_QUADS;
		var this1 = this;
		return this1;
	},
	readDrawRect: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).DRAW_RECT;
		var this1 = this;
		return this1;
	},
	readDrawRoundRect: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).DRAW_ROUND_RECT;
		var this1 = this;
		return this1;
	},
	readDrawTriangles: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).DRAW_TRIANGLES;
		var this1 = this;
		return this1;
	},
	readEndFill: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).END_FILL;
		var this1 = this;
		return this1;
	},
	readLineBitmapStyle: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).LINE_BITMAP_STYLE;
		var this1 = this;
		return this1;
	},
	readLineGradientStyle: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).LINE_GRADIENT_STYLE;
		var this1 = this;
		return this1;
	},
	readLineStyle: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).LINE_STYLE;
		var this1 = this;
		return this1;
	},
	readLineTo: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).LINE_TO;
		var this1 = this;
		return this1;
	},
	readMoveTo: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).MOVE_TO;
		var this1 = this;
		return this1;
	},
	readOverrideBlendMode: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).OVERRIDE_BLEND_MODE;
		var this1 = this;
		return this1;
	},
	readOverrideMatrix: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).OVERRIDE_MATRIX;
		var this1 = this;
		return this1;
	},
	readWindingEvenOdd: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).WINDING_EVEN_ODD;
		var this1 = this;
		return this1;
	},
	readWindingNonZero: function() {
		this.advance();
		this.prev = (openfl__$internal_renderer_DrawCommandType().default).WINDING_NON_ZERO;
		var this1 = this;
		return this1;
	},
	reset: function() {
		this.bPos = this.iPos = this.fPos = this.oPos = this.ffPos = this.iiPos = this.tsPos = 0;
	},
	skip: function(type) {
		this.advance();
		this.prev = type;
	}
};
DrawCommandReader.prototype.__class__ = DrawCommandReader.prototype.constructor = $hxClasses["openfl._internal.renderer.DrawCommandReader"] = DrawCommandReader;

// Init



// Statics


DrawCommandReader.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, fields : { obj : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = DrawCommandReader;