// Class: openfl._internal.renderer.DrawCommandBuffer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function openfl__$internal_renderer_DrawCommandReader() {return require("./../../../openfl/_internal/renderer/DrawCommandReader");}
function openfl__$internal_renderer_DrawCommandType() {return require("./../../../openfl/_internal/renderer/DrawCommandType");}

// Constructor

var DrawCommandBuffer = function() {
	if(DrawCommandBuffer.empty == null) {
		this.types = [];
		this.b = [];
		this.i = [];
		this.f = [];
		this.o = [];
		this.ff = [];
		this.ii = [];
		this.copyOnWrite = true;
	} else {
		this.clear();
	}
}

// Meta

DrawCommandBuffer.__name__ = "openfl._internal.renderer.DrawCommandBuffer";
DrawCommandBuffer.__isInterface__ = false;
DrawCommandBuffer.prototype = {
	append: function(other) {
		if(this.get_length() == 0) {
			this.types = other.types;
			this.b = other.b;
			this.i = other.i;
			this.f = other.f;
			this.o = other.o;
			this.ff = other.ff;
			this.ii = other.ii;
			this.copyOnWrite = other.copyOnWrite = true;
			return other;
		}
		var data = new (openfl__$internal_renderer_DrawCommandReader().default)(other);
		var _g = 0;
		var _g1 = other.types;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			switch(type._hx_index) {
			case 0:
				var c = data.readBeginBitmapFill();
				this.beginBitmapFill(c.obj(0),c.obj(1),c.bool(0),c.bool(1));
				break;
			case 1:
				var c1 = data.readBeginFill();
				this.beginFill(c1.int(0),c1.float(0));
				break;
			case 2:
				var c2 = data.readBeginGradientFill();
				this.beginGradientFill(c2.obj(0),c2.iArr(0),c2.fArr(0),c2.iArr(1),c2.obj(1),c2.obj(2),c2.obj(3),c2.float(0));
				break;
			case 3:
				var c3 = data.readBeginShaderFill();
				this.beginShaderFill(c3.obj(0));
				break;
			case 4:
				var c4 = data.readCubicCurveTo();
				this.cubicCurveTo(c4.float(0),c4.float(1),c4.float(2),c4.float(3),c4.float(4),c4.float(5));
				break;
			case 5:
				var c5 = data.readCurveTo();
				this.curveTo(c5.float(0),c5.float(1),c5.float(2),c5.float(3));
				break;
			case 6:
				var c6 = data.readDrawCircle();
				this.drawCircle(c6.float(0),c6.float(1),c6.float(2));
				break;
			case 7:
				var c7 = data.readDrawEllipse();
				this.drawEllipse(c7.float(0),c7.float(1),c7.float(2),c7.float(3));
				break;
			case 8:
				var c8 = data.readDrawQuads();
				this.drawQuads(c8.obj(0),c8.obj(1),c8.obj(2));
				break;
			case 9:
				var c9 = data.readDrawRect();
				this.drawRect(c9.float(0),c9.float(1),c9.float(2),c9.float(3));
				break;
			case 10:
				var c10 = data.readDrawRoundRect();
				this.drawRoundRect(c10.float(0),c10.float(1),c10.float(2),c10.float(3),c10.float(4),c10.obj(0));
				break;
			case 12:
				var c11 = data.readDrawTriangles();
				this.drawTriangles(c11.obj(0),c11.obj(1),c11.obj(2),c11.obj(3));
				break;
			case 13:
				var c12 = data.readEndFill();
				this.endFill();
				break;
			case 14:
				var c13 = data.readLineBitmapStyle();
				this.lineBitmapStyle(c13.obj(0),c13.obj(1),c13.bool(0),c13.bool(1));
				break;
			case 15:
				var c14 = data.readLineGradientStyle();
				this.lineGradientStyle(c14.obj(0),c14.iArr(0),c14.fArr(0),c14.iArr(1),c14.obj(1),c14.obj(2),c14.obj(3),c14.float(0));
				break;
			case 16:
				var c15 = data.readLineStyle();
				this.lineStyle(c15.obj(0),c15.int(0),c15.float(0),c15.bool(0),c15.obj(1),c15.obj(2),c15.obj(3),c15.float(1));
				break;
			case 17:
				var c16 = data.readLineTo();
				this.lineTo(c16.float(0),c16.float(1));
				break;
			case 18:
				var c17 = data.readMoveTo();
				this.moveTo(c17.float(0),c17.float(1));
				break;
			case 20:
				var c18 = data.readOverrideMatrix();
				this.overrideMatrix(c18.obj(0));
				break;
			case 21:
				var c19 = data.readWindingEvenOdd();
				this.windingEvenOdd();
				break;
			case 22:
				var c20 = data.readWindingNonZero();
				this.windingNonZero();
				break;
			default:
			}
		}
		data.destroy();
		return other;
	},
	beginBitmapFill: function(bitmap,matrix,repeat,smooth) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).BEGIN_BITMAP_FILL);
		this.o.push(bitmap);
		this.o.push(matrix);
		this.b.push(repeat);
		this.b.push(smooth);
	},
	beginFill: function(color,alpha) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).BEGIN_FILL);
		this.i.push(color);
		this.f.push(alpha);
	},
	beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).BEGIN_GRADIENT_FILL);
		this.o.push(type);
		this.ii.push(colors);
		this.ff.push(alphas);
		this.ii.push(ratios);
		this.o.push(matrix);
		this.o.push(spreadMethod);
		this.o.push(interpolationMethod);
		this.f.push(focalPointRatio);
	},
	beginShaderFill: function(shaderBuffer) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).BEGIN_SHADER_FILL);
		this.o.push(shaderBuffer);
	},
	clear: function() {
		this.types = DrawCommandBuffer.empty.types;
		this.b = DrawCommandBuffer.empty.b;
		this.i = DrawCommandBuffer.empty.i;
		this.f = DrawCommandBuffer.empty.f;
		this.o = DrawCommandBuffer.empty.o;
		this.ff = DrawCommandBuffer.empty.ff;
		this.ii = DrawCommandBuffer.empty.ii;
		this.copyOnWrite = true;
	},
	copy: function() {
		var copy = new DrawCommandBuffer();
		copy.append(this);
		return copy;
	},
	cubicCurveTo: function(controlX1,controlY1,controlX2,controlY2,anchorX,anchorY) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).CUBIC_CURVE_TO);
		this.f.push(controlX1);
		this.f.push(controlY1);
		this.f.push(controlX2);
		this.f.push(controlY2);
		this.f.push(anchorX);
		this.f.push(anchorY);
	},
	curveTo: function(controlX,controlY,anchorX,anchorY) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).CURVE_TO);
		this.f.push(controlX);
		this.f.push(controlY);
		this.f.push(anchorX);
		this.f.push(anchorY);
	},
	destroy: function() {
		this.clear();
		this.types = null;
		this.b = null;
		this.i = null;
		this.f = null;
		this.o = null;
		this.ff = null;
		this.ii = null;
	},
	drawCircle: function(x,y,radius) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).DRAW_CIRCLE);
		this.f.push(x);
		this.f.push(y);
		this.f.push(radius);
	},
	drawEllipse: function(x,y,width,height) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).DRAW_ELLIPSE);
		this.f.push(x);
		this.f.push(y);
		this.f.push(width);
		this.f.push(height);
	},
	drawQuads: function(rects,indices,transforms) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).DRAW_QUADS);
		this.o.push(rects);
		this.o.push(indices);
		this.o.push(transforms);
	},
	drawRect: function(x,y,width,height) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).DRAW_RECT);
		this.f.push(x);
		this.f.push(y);
		this.f.push(width);
		this.f.push(height);
	},
	drawRoundRect: function(x,y,width,height,ellipseWidth,ellipseHeight) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).DRAW_ROUND_RECT);
		this.f.push(x);
		this.f.push(y);
		this.f.push(width);
		this.f.push(height);
		this.f.push(ellipseWidth);
		this.o.push(ellipseHeight);
	},
	drawTriangles: function(vertices,indices,uvtData,culling) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).DRAW_TRIANGLES);
		this.o.push(vertices);
		this.o.push(indices);
		this.o.push(uvtData);
		this.o.push(culling);
	},
	endFill: function() {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).END_FILL);
	},
	lineBitmapStyle: function(bitmap,matrix,repeat,smooth) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).LINE_BITMAP_STYLE);
		this.o.push(bitmap);
		this.o.push(matrix);
		this.b.push(repeat);
		this.b.push(smooth);
	},
	lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).LINE_GRADIENT_STYLE);
		this.o.push(type);
		this.ii.push(colors);
		this.ff.push(alphas);
		this.ii.push(ratios);
		this.o.push(matrix);
		this.o.push(spreadMethod);
		this.o.push(interpolationMethod);
		this.f.push(focalPointRatio);
	},
	lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).LINE_STYLE);
		this.o.push(thickness);
		this.i.push(color);
		this.f.push(alpha);
		this.b.push(pixelHinting);
		this.o.push(scaleMode);
		this.o.push(caps);
		this.o.push(joints);
		this.f.push(miterLimit);
	},
	lineTo: function(x,y) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).LINE_TO);
		this.f.push(x);
		this.f.push(y);
	},
	moveTo: function(x,y) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).MOVE_TO);
		this.f.push(x);
		this.f.push(y);
	},
	prepareWrite: function() {
		if(this.copyOnWrite) {
			this.types = this.types.slice();
			this.b = this.b.slice();
			this.i = this.i.slice();
			this.f = this.f.slice();
			this.o = this.o.slice();
			this.ff = this.ff.slice();
			this.ii = this.ii.slice();
			this.copyOnWrite = false;
		}
	},
	overrideBlendMode: function(blendMode) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).OVERRIDE_BLEND_MODE);
		this.o.push(blendMode);
	},
	overrideMatrix: function(matrix) {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).OVERRIDE_MATRIX);
		this.o.push(matrix);
	},
	windingEvenOdd: function() {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).WINDING_EVEN_ODD);
	},
	windingNonZero: function() {
		this.prepareWrite();
		this.types.push((openfl__$internal_renderer_DrawCommandType().default).WINDING_NON_ZERO);
	},
	get_length: function() {
		return this.types.length;
	}
};
DrawCommandBuffer.prototype.__class__ = DrawCommandBuffer.prototype.constructor = $hxClasses["openfl._internal.renderer.DrawCommandBuffer"] = DrawCommandBuffer;

// Init



// Statics


DrawCommandBuffer.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, fields : { o : { SuppressWarnings : ["checkstyle:Dynamic"]}}}
DrawCommandBuffer.empty = new DrawCommandBuffer()

// Export

exports.default = DrawCommandBuffer;