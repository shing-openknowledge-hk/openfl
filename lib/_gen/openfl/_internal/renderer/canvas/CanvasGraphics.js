// Class: openfl._internal.renderer.canvas.CanvasGraphics

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl__$internal_renderer_DrawCommandBuffer() {return require("./../../../../openfl/_internal/renderer/DrawCommandBuffer");}
function lime__$internal_graphics_ImageCanvasUtil() {return require("./../../../../lime/_internal/graphics/ImageCanvasUtil");}
function openfl_geom_Matrix() {return require("./../../../../openfl/geom/Matrix");}
function openfl_geom_Point() {return require("./../../../../openfl/geom/Point");}
function openfl__$internal_renderer_DrawCommandReader() {return require("./../../../../openfl/_internal/renderer/DrawCommandReader");}
function openfl__$internal_renderer_DrawCommandType() {return require("./../../../../openfl/_internal/renderer/DrawCommandType");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../../../openfl/_Vector/Vector_Impl_");}
function StringTools() {return require("./../../../../StringTools");}
function openfl_geom_Rectangle() {return require("./../../../../openfl/geom/Rectangle");}
function Std() {return require("./../../../../Std");}
function openfl_display_BitmapData() {return require("./../../../../openfl/display/BitmapData");}

// Constructor

var CanvasGraphics = function(){}

// Meta

CanvasGraphics.__name__ = "openfl._internal.renderer.canvas.CanvasGraphics";
CanvasGraphics.__isInterface__ = false;
CanvasGraphics.prototype = {
	
};
CanvasGraphics.prototype.__class__ = CanvasGraphics.prototype.constructor = $hxClasses["openfl._internal.renderer.canvas.CanvasGraphics"] = CanvasGraphics;

// Init

{
	CanvasGraphics.hitTestCanvas = typeof(window) != "undefined" ? window.document.createElement("canvas") : null;
	CanvasGraphics.hitTestContext = typeof(window) != "undefined" ? CanvasGraphics.hitTestCanvas.getContext("2d") : null;
};

// Statics

CanvasGraphics.closePath = function(strokeBefore) {
	if(strokeBefore == null) {
		strokeBefore = false;
	}
	if(CanvasGraphics.context.strokeStyle == null) {
		return;
	}
	if(!strokeBefore) {
		CanvasGraphics.context.closePath();
	}
	CanvasGraphics.context.stroke();
	if(strokeBefore) {
		CanvasGraphics.context.closePath();
	}
	CanvasGraphics.context.beginPath();
}
CanvasGraphics.createBitmapFill = function(bitmap,bitmapRepeat,smooth) {
	(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(bitmap.image);
	CanvasGraphics.setSmoothing(smooth);
	return CanvasGraphics.context.createPattern(bitmap.image.get_src(),bitmapRepeat ? "repeat" : "no-repeat");
}
CanvasGraphics.createGradientPattern = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	var gradientFill = null;
	var point = null;
	var point2 = null;
	var releaseMatrix = false;
	if(matrix == null) {
		matrix = (openfl_geom_Matrix().default).__pool.get();
		releaseMatrix = true;
	}
	switch(type) {
	case "linear":
		point = (openfl_geom_Point().default).__pool.get();
		point.setTo(-819.2,0);
		matrix.__transformPoint(point);
		point2 = (openfl_geom_Point().default).__pool.get();
		point2.setTo(819.2,0);
		matrix.__transformPoint(point2);
		gradientFill = CanvasGraphics.context.createLinearGradient(point.x,point.y,point2.x,point2.y);
		break;
	case "radial":
		point = (openfl_geom_Point().default).__pool.get();
		point.setTo(1638.4,0);
		matrix.__transformPoint(point);
		gradientFill = CanvasGraphics.context.createRadialGradient(matrix.tx,matrix.ty,0,matrix.tx,matrix.ty,Math.abs((point.x - matrix.tx) / 2));
		break;
	}
	var rgb;
	var alpha;
	var r;
	var g;
	var b;
	var ratio;
	var _g = 0;
	var _g1 = colors.length;
	while(_g < _g1) {
		var i = _g++;
		rgb = colors[i];
		alpha = alphas[i];
		r = (rgb & 16711680) >>> 16;
		g = (rgb & 65280) >>> 8;
		b = rgb & 255;
		ratio = ratios[i] / 255;
		if(ratio < 0) {
			ratio = 0;
		}
		if(ratio > 1) {
			ratio = 1;
		}
		gradientFill.addColorStop(ratio,"rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")");
	}
	if(point != null) {
		(openfl_geom_Point().default).__pool.release(point);
	}
	if(point2 != null) {
		(openfl_geom_Point().default).__pool.release(point2);
	}
	if(releaseMatrix) {
		(openfl_geom_Matrix().default).__pool.release(matrix);
	}
	return gradientFill;
}
CanvasGraphics.createTempPatternCanvas = function(bitmap,repeat,width,height) {
	var canvas = window.document.createElement("canvas");
	var context = canvas.getContext("2d");
	canvas.width = width;
	canvas.height = height;
	var tmp = bitmap.image.get_src();
	context.fillStyle = context.createPattern(tmp,repeat ? "repeat" : "no-repeat");
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(0,height);
	context.lineTo(width,height);
	context.lineTo(width,0);
	context.lineTo(0,0);
	context.closePath();
	if(!CanvasGraphics.hitTesting) {
		context.fill(CanvasGraphics.windingRule);
	}
	return canvas;
}
CanvasGraphics.drawRoundRect = function(x,y,width,height,ellipseWidth,ellipseHeight) {
	if(ellipseHeight == null) {
		ellipseHeight = ellipseWidth;
	}
	ellipseWidth *= 0.5;
	ellipseHeight *= 0.5;
	if(ellipseWidth > width / 2) {
		ellipseWidth = width / 2;
	}
	if(ellipseHeight > height / 2) {
		ellipseHeight = height / 2;
	}
	var xe = x + width;
	var ye = y + height;
	var cx1 = -ellipseWidth + ellipseWidth * 0.70710678118654752440084436210485;
	var cx2 = -ellipseWidth + ellipseWidth * 0.4142135623730950488016887242097;
	var cy1 = -ellipseHeight + ellipseHeight * 0.70710678118654752440084436210485;
	var cy2 = -ellipseHeight + ellipseHeight * 0.4142135623730950488016887242097;
	CanvasGraphics.context.moveTo(xe,ye - ellipseHeight);
	CanvasGraphics.context.quadraticCurveTo(xe,ye + cy2,xe + cx1,ye + cy1);
	CanvasGraphics.context.quadraticCurveTo(xe + cx2,ye,xe - ellipseWidth,ye);
	CanvasGraphics.context.lineTo(x + ellipseWidth,ye);
	CanvasGraphics.context.quadraticCurveTo(x - cx2,ye,x - cx1,ye + cy1);
	CanvasGraphics.context.quadraticCurveTo(x,ye + cy2,x,ye - ellipseHeight);
	CanvasGraphics.context.lineTo(x,y + ellipseHeight);
	CanvasGraphics.context.quadraticCurveTo(x,y - cy2,x - cx1,y - cy1);
	CanvasGraphics.context.quadraticCurveTo(x - cx2,y,x + ellipseWidth,y);
	CanvasGraphics.context.lineTo(xe - ellipseWidth,y);
	CanvasGraphics.context.quadraticCurveTo(xe + cx2,y,xe + cx1,y - cy1);
	CanvasGraphics.context.quadraticCurveTo(xe,y - cy2,xe,y + ellipseHeight);
	CanvasGraphics.context.lineTo(xe,ye - ellipseHeight);
}
CanvasGraphics.endFill = function() {
	CanvasGraphics.context.beginPath();
	CanvasGraphics.playCommands(CanvasGraphics.fillCommands,false);
	CanvasGraphics.fillCommands.clear();
}
CanvasGraphics.endStroke = function() {
	CanvasGraphics.context.beginPath();
	CanvasGraphics.playCommands(CanvasGraphics.strokeCommands,true);
	CanvasGraphics.context.closePath();
	CanvasGraphics.strokeCommands.clear();
}
CanvasGraphics.hitTest = function(graphics,x,y) {
	CanvasGraphics.bounds = graphics.__bounds;
	CanvasGraphics.graphics = graphics;
	if(graphics.__commands.get_length() == 0 || CanvasGraphics.bounds == null || CanvasGraphics.bounds.width <= 0 || CanvasGraphics.bounds.height <= 0) {
		return false;
	} else {
		CanvasGraphics.hitTesting = true;
		var transform = graphics.__renderTransform;
		var px = transform.__transformX(x,y);
		var py = transform.__transformY(x,y);
		x = px;
		y = py;
		x -= transform.__transformX(CanvasGraphics.bounds.x,CanvasGraphics.bounds.y);
		y -= transform.__transformY(CanvasGraphics.bounds.x,CanvasGraphics.bounds.y);
		var cacheCanvas = graphics.__canvas;
		var cacheContext = graphics.__context;
		graphics.__canvas = CanvasGraphics.hitTestCanvas;
		graphics.__context = CanvasGraphics.hitTestContext;
		CanvasGraphics.context = graphics.__context;
		CanvasGraphics.context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		CanvasGraphics.fillCommands.clear();
		CanvasGraphics.strokeCommands.clear();
		CanvasGraphics.hasFill = false;
		CanvasGraphics.hasStroke = false;
		CanvasGraphics.bitmapFill = null;
		CanvasGraphics.bitmapRepeat = false;
		CanvasGraphics.windingRule = "evenodd";
		var data = new (openfl__$internal_renderer_DrawCommandReader().default)(graphics.__commands);
		var _g = 0;
		var _g1 = graphics.__commands.types;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			switch(type._hx_index) {
			case 0:case 1:case 2:case 3:
				CanvasGraphics.endFill();
				if(CanvasGraphics.hasFill && CanvasGraphics.context.isPointInPath(x,y,CanvasGraphics.windingRule)) {
					data.destroy();
					graphics.__canvas = cacheCanvas;
					graphics.__context = cacheContext;
					return true;
				}
				CanvasGraphics.endStroke();
				if(CanvasGraphics.hasStroke && CanvasGraphics.context.isPointInStroke(x,y)) {
					data.destroy();
					graphics.__canvas = cacheCanvas;
					graphics.__context = cacheContext;
					return true;
				}
				if(type == (openfl__$internal_renderer_DrawCommandType().default).BEGIN_BITMAP_FILL) {
					var c = data.readBeginBitmapFill();
					CanvasGraphics.fillCommands.beginBitmapFill(c.obj(0),c.obj(1),c.bool(0),c.bool(1));
					CanvasGraphics.strokeCommands.beginBitmapFill(c.obj(0),c.obj(1),c.bool(0),c.bool(1));
				} else if(type == (openfl__$internal_renderer_DrawCommandType().default).BEGIN_GRADIENT_FILL) {
					var c1 = data.readBeginGradientFill();
					CanvasGraphics.fillCommands.beginGradientFill(c1.obj(0),c1.iArr(0),c1.fArr(0),c1.iArr(1),c1.obj(1),c1.obj(2),c1.obj(3),c1.float(0));
					CanvasGraphics.strokeCommands.beginGradientFill(c1.obj(0),c1.iArr(0),c1.fArr(0),c1.iArr(1),c1.obj(1),c1.obj(2),c1.obj(3),c1.float(0));
				} else if(type == (openfl__$internal_renderer_DrawCommandType().default).BEGIN_SHADER_FILL) {
					var c2 = data.readBeginShaderFill();
					CanvasGraphics.fillCommands.beginShaderFill(c2.obj(0));
					CanvasGraphics.strokeCommands.beginShaderFill(c2.obj(0));
				} else {
					var c3 = data.readBeginFill();
					CanvasGraphics.fillCommands.beginFill(c3.int(0),1);
					CanvasGraphics.strokeCommands.beginFill(c3.int(0),1);
				}
				break;
			case 4:
				var c4 = data.readCubicCurveTo();
				CanvasGraphics.fillCommands.cubicCurveTo(c4.float(0),c4.float(1),c4.float(2),c4.float(3),c4.float(4),c4.float(5));
				CanvasGraphics.strokeCommands.cubicCurveTo(c4.float(0),c4.float(1),c4.float(2),c4.float(3),c4.float(4),c4.float(5));
				break;
			case 5:
				var c5 = data.readCurveTo();
				CanvasGraphics.fillCommands.curveTo(c5.float(0),c5.float(1),c5.float(2),c5.float(3));
				CanvasGraphics.strokeCommands.curveTo(c5.float(0),c5.float(1),c5.float(2),c5.float(3));
				break;
			case 6:
				var c6 = data.readDrawCircle();
				CanvasGraphics.fillCommands.drawCircle(c6.float(0),c6.float(1),c6.float(2));
				CanvasGraphics.strokeCommands.drawCircle(c6.float(0),c6.float(1),c6.float(2));
				break;
			case 7:
				var c7 = data.readDrawEllipse();
				CanvasGraphics.fillCommands.drawEllipse(c7.float(0),c7.float(1),c7.float(2),c7.float(3));
				CanvasGraphics.strokeCommands.drawEllipse(c7.float(0),c7.float(1),c7.float(2),c7.float(3));
				break;
			case 9:
				var c8 = data.readDrawRect();
				CanvasGraphics.fillCommands.drawRect(c8.float(0),c8.float(1),c8.float(2),c8.float(3));
				CanvasGraphics.strokeCommands.drawRect(c8.float(0),c8.float(1),c8.float(2),c8.float(3));
				break;
			case 10:
				var c9 = data.readDrawRoundRect();
				CanvasGraphics.fillCommands.drawRoundRect(c9.float(0),c9.float(1),c9.float(2),c9.float(3),c9.float(4),c9.obj(0));
				CanvasGraphics.strokeCommands.drawRoundRect(c9.float(0),c9.float(1),c9.float(2),c9.float(3),c9.float(4),c9.obj(0));
				break;
			case 13:
				data.readEndFill();
				CanvasGraphics.endFill();
				if(CanvasGraphics.hasFill && CanvasGraphics.context.isPointInPath(x,y,CanvasGraphics.windingRule)) {
					data.destroy();
					graphics.__canvas = cacheCanvas;
					graphics.__context = cacheContext;
					return true;
				}
				CanvasGraphics.endStroke();
				if(CanvasGraphics.hasStroke && CanvasGraphics.context.isPointInStroke(x,y)) {
					data.destroy();
					graphics.__canvas = cacheCanvas;
					graphics.__context = cacheContext;
					return true;
				}
				CanvasGraphics.hasFill = false;
				CanvasGraphics.bitmapFill = null;
				break;
			case 14:
				var c10 = data.readLineBitmapStyle();
				CanvasGraphics.strokeCommands.lineBitmapStyle(c10.obj(0),c10.obj(1),c10.bool(0),c10.bool(1));
				break;
			case 15:
				var c11 = data.readLineGradientStyle();
				CanvasGraphics.strokeCommands.lineGradientStyle(c11.obj(0),c11.iArr(0),c11.fArr(0),c11.iArr(1),c11.obj(1),c11.obj(2),c11.obj(3),c11.float(0));
				break;
			case 16:
				var c12 = data.readLineStyle();
				CanvasGraphics.strokeCommands.lineStyle(c12.obj(0),c12.int(0),1,c12.bool(0),c12.obj(1),c12.obj(2),c12.obj(3),c12.float(1));
				break;
			case 17:
				var c13 = data.readLineTo();
				CanvasGraphics.fillCommands.lineTo(c13.float(0),c13.float(1));
				CanvasGraphics.strokeCommands.lineTo(c13.float(0),c13.float(1));
				break;
			case 18:
				var c14 = data.readMoveTo();
				CanvasGraphics.fillCommands.moveTo(c14.float(0),c14.float(1));
				CanvasGraphics.strokeCommands.moveTo(c14.float(0),c14.float(1));
				break;
			case 21:
				CanvasGraphics.windingRule = "evenodd";
				break;
			case 22:
				CanvasGraphics.windingRule = "nonzero";
				break;
			default:
				data.skip(type);
			}
		}
		var hitTest = false;
		if(CanvasGraphics.fillCommands.get_length() > 0) {
			CanvasGraphics.endFill();
		}
		if(CanvasGraphics.hasFill && CanvasGraphics.context.isPointInPath(x,y,CanvasGraphics.windingRule)) {
			hitTest = true;
		}
		if(CanvasGraphics.strokeCommands.get_length() > 0) {
			CanvasGraphics.endStroke();
		}
		if(CanvasGraphics.hasStroke && CanvasGraphics.context.isPointInStroke(x,y)) {
			hitTest = true;
		}
		data.destroy();
		graphics.__canvas = cacheCanvas;
		graphics.__context = cacheContext;
		return hitTest;
	}
}
CanvasGraphics.isCCW = function(x1,y1,x2,y2,x3,y3) {
	return (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1) < 0;
}
CanvasGraphics.normalizeUVT = function(uvt,skipT) {
	if(skipT == null) {
		skipT = false;
	}
	var max = -Infinity;
	var tmp = -Infinity;
	var len = uvt.get_length();
	var _g = 1;
	var _g1 = len + 1;
	while(_g < _g1) {
		var t = _g++;
		if(skipT && t % 3 == 0) {
			continue;
		}
		tmp = uvt[t - 1];
		if(max < tmp) {
			max = tmp;
		}
	}
	if(!skipT) {
		return { max : max, uvt : uvt};
	}
	var result = (openfl__$Vector_Vector_$Impl_$().default)._new();
	var _g2 = 1;
	var _g3 = len + 1;
	while(_g2 < _g3) {
		var t1 = _g2++;
		if(skipT && t1 % 3 == 0) {
			continue;
		}
		(openfl__$Vector_Vector_$Impl_$().default).push(result,uvt[t1 - 1]);
	}
	return { max : max, uvt : result};
}
CanvasGraphics.playCommands = function(commands,stroke) {
	if(stroke == null) {
		stroke = false;
	}
	CanvasGraphics.bounds = CanvasGraphics.graphics.__bounds;
	var offsetX = CanvasGraphics.bounds.x;
	var offsetY = CanvasGraphics.bounds.y;
	var positionX = 0.0;
	var positionY = 0.0;
	var closeGap = false;
	var startX = 0.0;
	var startY = 0.0;
	var setStart = false;
	CanvasGraphics.windingRule = "evenodd";
	CanvasGraphics.setSmoothing(true);
	var hasPath = false;
	var data = new (openfl__$internal_renderer_DrawCommandReader().default)(commands);
	var x;
	var y;
	var width;
	var height;
	var kappa = .5522848;
	var ox;
	var oy;
	var xe;
	var ye;
	var xm;
	var ym;
	var r;
	var g;
	var b;
	var optimizationUsed;
	var canOptimizeMatrix;
	var st;
	var sr;
	var sb;
	var sl;
	var stl = null;
	var sbr = null;
	var _g = 0;
	var _g1 = commands.types;
	_hx_loop1: while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		switch(type._hx_index) {
		case 0:
			var c = data.readBeginBitmapFill();
			CanvasGraphics.bitmapFill = c.obj(0);
			var tmp = c.obj(0);
			var tmp1 = c.bool(0);
			var tmp2 = c.bool(1);
			CanvasGraphics.context.fillStyle = CanvasGraphics.createBitmapFill(tmp,tmp1,tmp2);
			CanvasGraphics.hasFill = true;
			if(c.obj(1) != null) {
				CanvasGraphics.pendingMatrix = c.obj(1);
				CanvasGraphics.inversePendingMatrix = c.obj(1).clone();
				CanvasGraphics.inversePendingMatrix.invert();
			} else {
				CanvasGraphics.pendingMatrix = null;
				CanvasGraphics.inversePendingMatrix = null;
			}
			break;
		case 1:
			var c1 = data.readBeginFill();
			if(c1.float(0) < 0.005) {
				CanvasGraphics.hasFill = false;
			} else {
				if(c1.float(0) == 1) {
					var tmp3 = (StringTools().default).hex(c1.int(0) & 16777215,6);
					CanvasGraphics.context.fillStyle = "#" + tmp3;
				} else {
					r = (c1.int(0) & 16711680) >>> 16;
					g = (c1.int(0) & 65280) >>> 8;
					b = c1.int(0) & 255;
					var tmp4 = "rgba(" + r + ", " + g + ", " + b + ", " + c1.float(0);
					CanvasGraphics.context.fillStyle = tmp4 + ")";
				}
				CanvasGraphics.bitmapFill = null;
				CanvasGraphics.setSmoothing(true);
				CanvasGraphics.hasFill = true;
			}
			break;
		case 2:
			var c2 = data.readBeginGradientFill();
			var tmp5 = c2.obj(0);
			var tmp6 = c2.iArr(0);
			var tmp7 = c2.fArr(0);
			var tmp8 = c2.iArr(1);
			var tmp9 = c2.obj(1);
			var tmp10 = c2.obj(2);
			var tmp11 = c2.obj(3);
			CanvasGraphics.context.fillStyle = CanvasGraphics.createGradientPattern(tmp5,tmp6,tmp7,tmp8,tmp9,tmp10,tmp11,c2.float(0));
			CanvasGraphics.bitmapFill = null;
			CanvasGraphics.setSmoothing(true);
			CanvasGraphics.hasFill = true;
			break;
		case 3:
			var c3 = data.readBeginShaderFill();
			var shaderBuffer = c3.obj(0);
			if(shaderBuffer.inputCount > 0) {
				CanvasGraphics.bitmapFill = shaderBuffer.inputs[0];
				CanvasGraphics.context.fillStyle = CanvasGraphics.createBitmapFill(CanvasGraphics.bitmapFill,shaderBuffer.inputWrap[0] != "clamp",shaderBuffer.inputFilter[0] != "nearest");
				CanvasGraphics.hasFill = true;
				CanvasGraphics.pendingMatrix = null;
				CanvasGraphics.inversePendingMatrix = null;
			}
			break;
		case 4:
			var c4 = data.readCubicCurveTo();
			hasPath = true;
			CanvasGraphics.context.bezierCurveTo(c4.float(0) - offsetX,c4.float(1) - offsetY,c4.float(2) - offsetX,c4.float(3) - offsetY,c4.float(4) - offsetX,c4.float(5) - offsetY);
			break;
		case 5:
			var c5 = data.readCurveTo();
			hasPath = true;
			CanvasGraphics.context.quadraticCurveTo(c5.float(0) - offsetX,c5.float(1) - offsetY,c5.float(2) - offsetX,c5.float(3) - offsetY);
			break;
		case 6:
			var c6 = data.readDrawCircle();
			hasPath = true;
			CanvasGraphics.context.moveTo(c6.float(0) - offsetX + c6.float(2),c6.float(1) - offsetY);
			CanvasGraphics.context.arc(c6.float(0) - offsetX,c6.float(1) - offsetY,c6.float(2),0,Math.PI * 2,true);
			break;
		case 7:
			var c7 = data.readDrawEllipse();
			hasPath = true;
			x = c7.float(0);
			y = c7.float(1);
			width = c7.float(2);
			height = c7.float(3);
			x -= offsetX;
			y -= offsetY;
			ox = width / 2 * kappa;
			oy = height / 2 * kappa;
			xe = x + width;
			ye = y + height;
			xm = x + width / 2;
			ym = y + height / 2;
			CanvasGraphics.context.moveTo(x,ym);
			CanvasGraphics.context.bezierCurveTo(x,ym - oy,xm - ox,y,xm,y);
			CanvasGraphics.context.bezierCurveTo(xm + ox,y,xe,ym - oy,xe,ym);
			CanvasGraphics.context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
			CanvasGraphics.context.bezierCurveTo(xm - ox,ye,x,ym + oy,x,ym);
			break;
		case 8:
			var c8 = data.readDrawQuads();
			var rects = c8.obj(0);
			var indices = c8.obj(1);
			var transforms = c8.obj(2);
			var hasIndices = indices != null;
			var transformABCD = false;
			var transformXY = false;
			var length = hasIndices ? indices.get_length() : Math.floor(rects.get_length() / 4);
			if(length == 0) {
				return;
			}
			if(transforms != null) {
				if(transforms.get_length() >= length * 6) {
					transformABCD = true;
					transformXY = true;
				} else if(transforms.get_length() >= length * 4) {
					transformABCD = true;
				} else if(transforms.get_length() >= length * 2) {
					transformXY = true;
				}
			}
			var tileRect = (openfl_geom_Rectangle().default).__pool.get();
			var tileTransform = (openfl_geom_Matrix().default).__pool.get();
			var transform = CanvasGraphics.graphics.__renderTransform;
			var alpha = CanvasGraphics.worldAlpha;
			var ri;
			var ti;
			CanvasGraphics.context.save();
			var _g2 = 0;
			var _g11 = length;
			while(_g2 < _g11) {
				var i = _g2++;
				ri = hasIndices ? indices[i] * 4 : i * 4;
				if(ri < 0) {
					continue;
				}
				tileRect.setTo(rects[ri],rects[ri + 1],rects[ri + 2],rects[ri + 3]);
				if(tileRect.width <= 0 || tileRect.height <= 0) {
					continue;
				}
				if(transformABCD && transformXY) {
					ti = i * 6;
					tileTransform.setTo(transforms[ti],transforms[ti + 1],transforms[ti + 2],transforms[ti + 3],transforms[ti + 4],transforms[ti + 5]);
				} else if(transformABCD) {
					ti = i * 4;
					tileTransform.setTo(transforms[ti],transforms[ti + 1],transforms[ti + 2],transforms[ti + 3],tileRect.x,tileRect.y);
				} else if(transformXY) {
					ti = i * 2;
					tileTransform.tx = transforms[ti];
					tileTransform.ty = transforms[ti + 1];
				} else {
					tileTransform.tx = tileRect.x;
					tileTransform.ty = tileRect.y;
				}
				tileTransform.tx += positionX - offsetX;
				tileTransform.ty += positionY - offsetY;
				tileTransform.concat(transform);
				CanvasGraphics.context.setTransform(tileTransform.a,tileTransform.b,tileTransform.c,tileTransform.d,tileTransform.tx,tileTransform.ty);
				if(CanvasGraphics.bitmapFill != null) {
					CanvasGraphics.context.drawImage(CanvasGraphics.bitmapFill.image.get_src(),tileRect.x,tileRect.y,tileRect.width,tileRect.height,0,0,tileRect.width,tileRect.height);
				} else {
					CanvasGraphics.context.fillRect(0,0,tileRect.width,tileRect.height);
				}
			}
			(openfl_geom_Rectangle().default).__pool.release(tileRect);
			(openfl_geom_Matrix().default).__pool.release(tileTransform);
			CanvasGraphics.context.restore();
			break;
		case 9:
			var c9 = data.readDrawRect();
			optimizationUsed = false;
			if(CanvasGraphics.bitmapFill != null && !CanvasGraphics.hitTesting) {
				st = 0;
				sr = 0;
				sb = 0;
				sl = 0;
				canOptimizeMatrix = true;
				if(CanvasGraphics.pendingMatrix != null) {
					if(CanvasGraphics.pendingMatrix.b != 0 || CanvasGraphics.pendingMatrix.c != 0) {
						canOptimizeMatrix = false;
					} else {
						if(stl == null) {
							stl = (openfl_geom_Point().default).__pool.get();
						}
						if(sbr == null) {
							sbr = (openfl_geom_Point().default).__pool.get();
						}
						stl.setTo(c9.float(0),c9.float(1));
						CanvasGraphics.inversePendingMatrix.__transformPoint(stl);
						sbr.setTo(c9.float(0) + c9.float(2),c9.float(1) + c9.float(3));
						CanvasGraphics.inversePendingMatrix.__transformPoint(sbr);
						st = stl.y;
						sl = stl.x;
						sb = sbr.y;
						sr = sbr.x;
					}
				} else {
					st = c9.float(1);
					sl = c9.float(0);
					sb = c9.float(1) + c9.float(3);
					sr = c9.float(0) + c9.float(2);
				}
				if(canOptimizeMatrix && st >= 0 && sl >= 0 && sr <= CanvasGraphics.bitmapFill.width && sb <= CanvasGraphics.bitmapFill.height) {
					optimizationUsed = true;
					if(!CanvasGraphics.hitTesting) {
						CanvasGraphics.context.drawImage(CanvasGraphics.bitmapFill.image.get_src(),sl,st,sr - sl,sb - st,c9.float(0) - offsetX,c9.float(1) - offsetY,c9.float(2),c9.float(3));
					}
				}
			}
			if(!optimizationUsed) {
				hasPath = true;
				CanvasGraphics.context.rect(c9.float(0) - offsetX,c9.float(1) - offsetY,c9.float(2),c9.float(3));
			}
			break;
		case 10:
			var c10 = data.readDrawRoundRect();
			hasPath = true;
			CanvasGraphics.drawRoundRect(c10.float(0) - offsetX,c10.float(1) - offsetY,c10.float(2),c10.float(3),c10.float(4),c10.obj(0));
			break;
		case 12:
			var c11 = data.readDrawTriangles();
			var v = c11.obj(0);
			var ind = c11.obj(1);
			var uvt = c11.obj(2);
			var pattern = null;
			var colorFill = CanvasGraphics.bitmapFill == null;
			if(colorFill && uvt != null) {
				break _hx_loop1;
			}
			if(!colorFill) {
				if(uvt == null) {
					uvt = (openfl__$Vector_Vector_$Impl_$().default)._new();
					var _g3 = 0;
					var _g12 = (Std().default).int(v.get_length() / 2);
					while(_g3 < _g12) {
						var i1 = _g3++;
						(openfl__$Vector_Vector_$Impl_$().default).push(uvt,v[i1 * 2] - offsetX / CanvasGraphics.bitmapFill.width);
						(openfl__$Vector_Vector_$Impl_$().default).push(uvt,v[i1 * 2 + 1] - offsetY / CanvasGraphics.bitmapFill.height);
					}
				}
				var skipT = uvt.get_length() != v.get_length();
				var normalizedUVT = CanvasGraphics.normalizeUVT(uvt,skipT);
				var maxUVT = normalizedUVT.max;
				uvt = normalizedUVT.uvt;
				if(maxUVT > 1) {
					pattern = CanvasGraphics.createTempPatternCanvas(CanvasGraphics.bitmapFill,CanvasGraphics.bitmapRepeat,(Std().default).int(CanvasGraphics.bounds.width),(Std().default).int(CanvasGraphics.bounds.height));
				} else {
					pattern = CanvasGraphics.createTempPatternCanvas(CanvasGraphics.bitmapFill,CanvasGraphics.bitmapRepeat,CanvasGraphics.bitmapFill.width,CanvasGraphics.bitmapFill.height);
				}
			}
			var i2 = 0;
			var l = ind.get_length();
			var a_;
			var b_;
			var c_;
			var iax;
			var iay;
			var ibx;
			var iby;
			var icx;
			var icy;
			var x1;
			var y1;
			var x2;
			var y2;
			var x3;
			var y3;
			var uvx1;
			var uvy1;
			var uvx2;
			var uvy2;
			var uvx3;
			var uvy3;
			var denom;
			var t1;
			var t2;
			var t3;
			var t4;
			var dx;
			var dy;
			while(i2 < l) {
				a_ = i2;
				b_ = i2 + 1;
				c_ = i2 + 2;
				iax = ind[a_] * 2;
				iay = ind[a_] * 2 + 1;
				ibx = ind[b_] * 2;
				iby = ind[b_] * 2 + 1;
				icx = ind[c_] * 2;
				icy = ind[c_] * 2 + 1;
				x1 = v[iax] - offsetX;
				y1 = v[iay] - offsetY;
				x2 = v[ibx] - offsetX;
				y2 = v[iby] - offsetY;
				x3 = v[icx] - offsetX;
				y3 = v[icy] - offsetY;
				switch(c11.obj(3)) {
				case "negative":
					if(CanvasGraphics.isCCW(x1,y1,x2,y2,x3,y3)) {
						i2 += 3;
						continue;
					}
					break;
				case "positive":
					if(!CanvasGraphics.isCCW(x1,y1,x2,y2,x3,y3)) {
						i2 += 3;
						continue;
					}
					break;
				default:
				}
				if(colorFill) {
					CanvasGraphics.context.beginPath();
					CanvasGraphics.context.moveTo(x1,y1);
					CanvasGraphics.context.lineTo(x2,y2);
					CanvasGraphics.context.lineTo(x3,y3);
					CanvasGraphics.context.closePath();
					if(!CanvasGraphics.hitTesting) {
						CanvasGraphics.context.fill(CanvasGraphics.windingRule);
					}
					i2 += 3;
					continue;
				}
				uvx1 = uvt[iax] * pattern.width;
				uvx2 = uvt[ibx] * pattern.width;
				uvx3 = uvt[icx] * pattern.width;
				uvy1 = uvt[iay] * pattern.height;
				uvy2 = uvt[iby] * pattern.height;
				uvy3 = uvt[icy] * pattern.height;
				denom = uvx1 * (uvy3 - uvy2) - uvx2 * uvy3 + uvx3 * uvy2 + (uvx2 - uvx3) * uvy1;
				if(denom == 0) {
					i2 += 3;
					CanvasGraphics.context.restore();
					continue;
				}
				CanvasGraphics.context.save();
				CanvasGraphics.context.beginPath();
				CanvasGraphics.context.moveTo(x1,y1);
				CanvasGraphics.context.lineTo(x2,y2);
				CanvasGraphics.context.lineTo(x3,y3);
				CanvasGraphics.context.closePath();
				CanvasGraphics.context.clip();
				t1 = -(uvy1 * (x3 - x2) - uvy2 * x3 + uvy3 * x2 + (uvy2 - uvy3) * x1) / denom;
				t2 = (uvy2 * y3 + uvy1 * (y2 - y3) - uvy3 * y2 + (uvy3 - uvy2) * y1) / denom;
				t3 = (uvx1 * (x3 - x2) - uvx2 * x3 + uvx3 * x2 + (uvx2 - uvx3) * x1) / denom;
				t4 = -(uvx2 * y3 + uvx1 * (y2 - y3) - uvx3 * y2 + (uvx3 - uvx2) * y1) / denom;
				dx = (uvx1 * (uvy3 * x2 - uvy2 * x3) + uvy1 * (uvx2 * x3 - uvx3 * x2) + (uvx3 * uvy2 - uvx2 * uvy3) * x1) / denom;
				dy = (uvx1 * (uvy3 * y2 - uvy2 * y3) + uvy1 * (uvx2 * y3 - uvx3 * y2) + (uvx3 * uvy2 - uvx2 * uvy3) * y1) / denom;
				CanvasGraphics.context.transform(t1,t2,t3,t4,dx,dy);
				CanvasGraphics.context.drawImage(pattern,0,0,pattern.width,pattern.height);
				CanvasGraphics.context.restore();
				i2 += 3;
			}
			break;
		case 14:
			var c12 = data.readLineBitmapStyle();
			if(stroke && CanvasGraphics.hasStroke) {
				CanvasGraphics.closePath();
			}
			CanvasGraphics.context.moveTo(positionX - offsetX,positionY - offsetY);
			var tmp12 = c12.obj(0);
			var tmp13 = c12.bool(0);
			CanvasGraphics.context.strokeStyle = CanvasGraphics.createBitmapFill(tmp12,tmp13,c12.bool(1));
			CanvasGraphics.hasStroke = true;
			break;
		case 15:
			var c13 = data.readLineGradientStyle();
			if(stroke && CanvasGraphics.hasStroke) {
				CanvasGraphics.closePath();
			}
			CanvasGraphics.context.moveTo(positionX - offsetX,positionY - offsetY);
			var tmp14 = c13.obj(0);
			var tmp15 = c13.iArr(0);
			var tmp16 = c13.fArr(0);
			var tmp17 = c13.iArr(1);
			var tmp18 = c13.obj(1);
			var tmp19 = c13.obj(2);
			var tmp20 = c13.obj(3);
			CanvasGraphics.context.strokeStyle = CanvasGraphics.createGradientPattern(tmp14,tmp15,tmp16,tmp17,tmp18,tmp19,tmp20,c13.float(0));
			CanvasGraphics.setSmoothing(true);
			CanvasGraphics.hasStroke = true;
			break;
		case 16:
			var c14 = data.readLineStyle();
			if(stroke && CanvasGraphics.hasStroke) {
				CanvasGraphics.closePath(true);
			}
			CanvasGraphics.context.moveTo(positionX - offsetX,positionY - offsetY);
			if(c14.obj(0) == null) {
				CanvasGraphics.hasStroke = false;
			} else {
				var tmp21 = c14.obj(0) > 0 ? c14.obj(0) : 1;
				CanvasGraphics.context.lineWidth = tmp21;
				var tmp22 = c14.obj(3) == null ? "round" : (Std().default).string(c14.obj(3)).toLowerCase();
				CanvasGraphics.context.lineJoin = tmp22;
				var tmp23 = c14.obj(2) == null ? "round" : c14.obj(2) == "none" ? "butt" : (Std().default).string(c14.obj(2)).toLowerCase();
				CanvasGraphics.context.lineCap = tmp23;
				CanvasGraphics.context.miterLimit = c14.float(1);
				if(c14.float(0) == 1) {
					var tmp24 = (StringTools().default).hex(c14.int(0) & 16777215,6);
					CanvasGraphics.context.strokeStyle = "#" + tmp24;
				} else {
					r = (c14.int(0) & 16711680) >>> 16;
					g = (c14.int(0) & 65280) >>> 8;
					b = c14.int(0) & 255;
					var tmp25 = "rgba(" + r + ", " + g + ", " + b + ", " + c14.float(0);
					CanvasGraphics.context.strokeStyle = tmp25 + ")";
				}
				CanvasGraphics.setSmoothing(true);
				CanvasGraphics.hasStroke = true;
			}
			break;
		case 17:
			var c15 = data.readLineTo();
			hasPath = true;
			CanvasGraphics.context.lineTo(c15.float(0) - offsetX,c15.float(1) - offsetY);
			positionX = c15.float(0);
			positionY = c15.float(1);
			if(positionX == startX && positionY == startY) {
				closeGap = true;
			}
			break;
		case 18:
			var c16 = data.readMoveTo();
			CanvasGraphics.context.moveTo(c16.float(0) - offsetX,c16.float(1) - offsetY);
			positionX = c16.float(0);
			positionY = c16.float(1);
			if(setStart) {
				closeGap = true;
			}
			startX = c16.float(0);
			startY = c16.float(1);
			setStart = true;
			break;
		case 21:
			CanvasGraphics.windingRule = "evenodd";
			break;
		case 22:
			CanvasGraphics.windingRule = "nonzero";
			break;
		default:
			data.skip(type);
		}
	}
	if(stl != null) {
		(openfl_geom_Point().default).__pool.release(stl);
	}
	if(sbr != null) {
		(openfl_geom_Point().default).__pool.release(sbr);
	}
	data.destroy();
	if(hasPath) {
		if(stroke && CanvasGraphics.hasStroke) {
			if(CanvasGraphics.hasFill && closeGap) {
				CanvasGraphics.context.lineTo(startX - offsetX,startY - offsetY);
				CanvasGraphics.closePath(false);
			} else if(closeGap && positionX == startX && positionY == startY) {
				CanvasGraphics.closePath(false);
			}
			if(!CanvasGraphics.hitTesting) {
				CanvasGraphics.context.stroke();
			}
		}
		if(!stroke) {
			if(CanvasGraphics.hasFill || CanvasGraphics.bitmapFill != null) {
				CanvasGraphics.context.translate(-CanvasGraphics.bounds.x,-CanvasGraphics.bounds.y);
				if(CanvasGraphics.pendingMatrix != null) {
					CanvasGraphics.context.transform(CanvasGraphics.pendingMatrix.a,CanvasGraphics.pendingMatrix.b,CanvasGraphics.pendingMatrix.c,CanvasGraphics.pendingMatrix.d,CanvasGraphics.pendingMatrix.tx,CanvasGraphics.pendingMatrix.ty);
					if(!CanvasGraphics.hitTesting) {
						CanvasGraphics.context.fill(CanvasGraphics.windingRule);
					}
					CanvasGraphics.context.transform(CanvasGraphics.inversePendingMatrix.a,CanvasGraphics.inversePendingMatrix.b,CanvasGraphics.inversePendingMatrix.c,CanvasGraphics.inversePendingMatrix.d,CanvasGraphics.inversePendingMatrix.tx,CanvasGraphics.inversePendingMatrix.ty);
				} else if(!CanvasGraphics.hitTesting) {
					CanvasGraphics.context.fill(CanvasGraphics.windingRule);
				}
				CanvasGraphics.context.translate(CanvasGraphics.bounds.x,CanvasGraphics.bounds.y);
				CanvasGraphics.context.closePath();
			}
		}
	}
}
CanvasGraphics.render = function(graphics,renderer) {
	graphics.__update(renderer.__worldTransform);
	if(graphics.__softwareDirty) {
		CanvasGraphics.hitTesting = false;
		CanvasGraphics.graphics = graphics;
		CanvasGraphics.allowSmoothing = renderer.__allowSmoothing;
		CanvasGraphics.worldAlpha = renderer.__getAlpha(graphics.__owner.__worldAlpha);
		CanvasGraphics.bounds = graphics.__bounds;
		var width = graphics.__width;
		var height = graphics.__height;
		if(!graphics.__visible || graphics.__commands.get_length() == 0 || CanvasGraphics.bounds == null || width < 1 || height < 1) {
			graphics.__canvas = null;
			graphics.__context = null;
			graphics.__bitmap = null;
		} else {
			if(graphics.__canvas == null) {
				graphics.__canvas = window.document.createElement("canvas");
				graphics.__context = graphics.__canvas.getContext("2d");
			}
			CanvasGraphics.context = graphics.__context;
			var transform = graphics.__renderTransform;
			var canvas = graphics.__canvas;
			var scale = renderer.pixelRatio;
			var scaledWidth = (Std().default).int(width * scale);
			var scaledHeight = (Std().default).int(height * scale);
			renderer.__setBlendModeContext(CanvasGraphics.context,"normal");
			if(renderer.__isDOM) {
				if(canvas.width == scaledWidth && canvas.height == scaledHeight) {
					CanvasGraphics.context.clearRect(0,0,scaledWidth,scaledHeight);
				} else {
					canvas.width = scaledWidth;
					canvas.height = scaledHeight;
					canvas.style.width = width + "px";
					canvas.style.height = height + "px";
				}
				var transform1 = graphics.__renderTransform;
				CanvasGraphics.context.setTransform(transform1.a * scale,transform1.b * scale,transform1.c * scale,transform1.d * scale,transform1.tx * scale,transform1.ty * scale);
			} else {
				if(canvas.width == scaledWidth && canvas.height == scaledHeight) {
					CanvasGraphics.context.closePath();
					CanvasGraphics.context.setTransform(1,0,0,1,0,0);
					CanvasGraphics.context.clearRect(0,0,scaledWidth,scaledHeight);
				} else {
					canvas.width = width;
					canvas.height = height;
				}
				CanvasGraphics.context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			}
			CanvasGraphics.fillCommands.clear();
			CanvasGraphics.strokeCommands.clear();
			CanvasGraphics.hasFill = false;
			CanvasGraphics.hasStroke = false;
			CanvasGraphics.bitmapFill = null;
			CanvasGraphics.bitmapRepeat = false;
			var hasLineStyle = false;
			var initStrokeX = 0.0;
			var initStrokeY = 0.0;
			CanvasGraphics.windingRule = "evenodd";
			var data = new (openfl__$internal_renderer_DrawCommandReader().default)(graphics.__commands);
			var _g = 0;
			var _g1 = graphics.__commands.types;
			while(_g < _g1.length) {
				var type = _g1[_g];
				++_g;
				switch(type._hx_index) {
				case 0:case 1:case 2:case 3:
					CanvasGraphics.endFill();
					CanvasGraphics.endStroke();
					if(type == (openfl__$internal_renderer_DrawCommandType().default).BEGIN_BITMAP_FILL) {
						var c = data.readBeginBitmapFill();
						CanvasGraphics.fillCommands.beginBitmapFill(c.obj(0),c.obj(1),c.bool(0),c.bool(1));
						CanvasGraphics.strokeCommands.beginBitmapFill(c.obj(0),c.obj(1),c.bool(0),c.bool(1));
					} else if(type == (openfl__$internal_renderer_DrawCommandType().default).BEGIN_GRADIENT_FILL) {
						var c1 = data.readBeginGradientFill();
						CanvasGraphics.fillCommands.beginGradientFill(c1.obj(0),c1.iArr(0),c1.fArr(0),c1.iArr(1),c1.obj(1),c1.obj(2),c1.obj(3),c1.float(0));
						CanvasGraphics.strokeCommands.beginGradientFill(c1.obj(0),c1.iArr(0),c1.fArr(0),c1.iArr(1),c1.obj(1),c1.obj(2),c1.obj(3),c1.float(0));
					} else if(type == (openfl__$internal_renderer_DrawCommandType().default).BEGIN_SHADER_FILL) {
						var c2 = data.readBeginShaderFill();
						CanvasGraphics.fillCommands.beginShaderFill(c2.obj(0));
						CanvasGraphics.strokeCommands.beginShaderFill(c2.obj(0));
					} else {
						var c3 = data.readBeginFill();
						CanvasGraphics.fillCommands.beginFill(c3.int(0),c3.float(0));
						CanvasGraphics.strokeCommands.beginFill(c3.int(0),c3.float(0));
					}
					break;
				case 4:
					var c4 = data.readCubicCurveTo();
					CanvasGraphics.fillCommands.cubicCurveTo(c4.float(0),c4.float(1),c4.float(2),c4.float(3),c4.float(4),c4.float(5));
					if(hasLineStyle) {
						CanvasGraphics.strokeCommands.cubicCurveTo(c4.float(0),c4.float(1),c4.float(2),c4.float(3),c4.float(4),c4.float(5));
					} else {
						initStrokeX = c4.float(4);
						initStrokeY = c4.float(5);
					}
					break;
				case 5:
					var c5 = data.readCurveTo();
					CanvasGraphics.fillCommands.curveTo(c5.float(0),c5.float(1),c5.float(2),c5.float(3));
					if(hasLineStyle) {
						CanvasGraphics.strokeCommands.curveTo(c5.float(0),c5.float(1),c5.float(2),c5.float(3));
					} else {
						initStrokeX = c5.float(2);
						initStrokeY = c5.float(3);
					}
					break;
				case 6:
					var c6 = data.readDrawCircle();
					CanvasGraphics.fillCommands.drawCircle(c6.float(0),c6.float(1),c6.float(2));
					if(hasLineStyle) {
						CanvasGraphics.strokeCommands.drawCircle(c6.float(0),c6.float(1),c6.float(2));
					}
					break;
				case 7:
					var c7 = data.readDrawEllipse();
					CanvasGraphics.fillCommands.drawEllipse(c7.float(0),c7.float(1),c7.float(2),c7.float(3));
					if(hasLineStyle) {
						CanvasGraphics.strokeCommands.drawEllipse(c7.float(0),c7.float(1),c7.float(2),c7.float(3));
					}
					break;
				case 8:
					var c8 = data.readDrawQuads();
					CanvasGraphics.fillCommands.drawQuads(c8.obj(0),c8.obj(1),c8.obj(2));
					break;
				case 9:
					var c9 = data.readDrawRect();
					CanvasGraphics.fillCommands.drawRect(c9.float(0),c9.float(1),c9.float(2),c9.float(3));
					if(hasLineStyle) {
						CanvasGraphics.strokeCommands.drawRect(c9.float(0),c9.float(1),c9.float(2),c9.float(3));
					}
					break;
				case 10:
					var c10 = data.readDrawRoundRect();
					CanvasGraphics.fillCommands.drawRoundRect(c10.float(0),c10.float(1),c10.float(2),c10.float(3),c10.float(4),c10.obj(0));
					if(hasLineStyle) {
						CanvasGraphics.strokeCommands.drawRoundRect(c10.float(0),c10.float(1),c10.float(2),c10.float(3),c10.float(4),c10.obj(0));
					}
					break;
				case 12:
					var c11 = data.readDrawTriangles();
					CanvasGraphics.fillCommands.drawTriangles(c11.obj(0),c11.obj(1),c11.obj(2),c11.obj(3));
					break;
				case 13:
					data.readEndFill();
					CanvasGraphics.endFill();
					CanvasGraphics.endStroke();
					CanvasGraphics.hasFill = false;
					hasLineStyle = false;
					CanvasGraphics.bitmapFill = null;
					initStrokeX = 0;
					initStrokeY = 0;
					break;
				case 14:
					var c12 = data.readLineBitmapStyle();
					if(!hasLineStyle && (initStrokeX != 0 || initStrokeY != 0)) {
						CanvasGraphics.strokeCommands.moveTo(initStrokeX,initStrokeY);
						initStrokeX = 0;
						initStrokeY = 0;
					}
					hasLineStyle = true;
					CanvasGraphics.strokeCommands.lineBitmapStyle(c12.obj(0),c12.obj(1),c12.bool(0),c12.bool(1));
					break;
				case 15:
					var c13 = data.readLineGradientStyle();
					if(!hasLineStyle && (initStrokeX != 0 || initStrokeY != 0)) {
						CanvasGraphics.strokeCommands.moveTo(initStrokeX,initStrokeY);
						initStrokeX = 0;
						initStrokeY = 0;
					}
					hasLineStyle = true;
					CanvasGraphics.strokeCommands.lineGradientStyle(c13.obj(0),c13.iArr(0),c13.fArr(0),c13.iArr(1),c13.obj(1),c13.obj(2),c13.obj(3),c13.float(0));
					break;
				case 16:
					var c14 = data.readLineStyle();
					if(!hasLineStyle && c14.obj(0) != null) {
						if(initStrokeX != 0 || initStrokeY != 0) {
							CanvasGraphics.strokeCommands.moveTo(initStrokeX,initStrokeY);
							initStrokeX = 0;
							initStrokeY = 0;
						}
					}
					hasLineStyle = c14.obj(0) != null;
					CanvasGraphics.strokeCommands.lineStyle(c14.obj(0),c14.int(0),c14.float(0),c14.bool(0),c14.obj(1),c14.obj(2),c14.obj(3),c14.float(1));
					break;
				case 17:
					var c15 = data.readLineTo();
					CanvasGraphics.fillCommands.lineTo(c15.float(0),c15.float(1));
					if(hasLineStyle) {
						CanvasGraphics.strokeCommands.lineTo(c15.float(0),c15.float(1));
					} else {
						initStrokeX = c15.float(0);
						initStrokeY = c15.float(1);
					}
					break;
				case 18:
					var c16 = data.readMoveTo();
					CanvasGraphics.fillCommands.moveTo(c16.float(0),c16.float(1));
					if(hasLineStyle) {
						CanvasGraphics.strokeCommands.moveTo(c16.float(0),c16.float(1));
					} else {
						initStrokeX = c16.float(0);
						initStrokeY = c16.float(1);
					}
					break;
				case 19:
					var c17 = data.readOverrideBlendMode();
					renderer.__setBlendModeContext(CanvasGraphics.context,c17.obj(0));
					break;
				case 21:
					data.readWindingEvenOdd();
					CanvasGraphics.fillCommands.windingEvenOdd();
					CanvasGraphics.windingRule = "evenodd";
					break;
				case 22:
					data.readWindingNonZero();
					CanvasGraphics.fillCommands.windingNonZero();
					CanvasGraphics.windingRule = "nonzero";
					break;
				default:
					data.skip(type);
				}
			}
			if(CanvasGraphics.fillCommands.get_length() > 0) {
				CanvasGraphics.endFill();
			}
			if(CanvasGraphics.strokeCommands.get_length() > 0) {
				CanvasGraphics.endStroke();
			}
			data.destroy();
			graphics.__bitmap = (openfl_display_BitmapData().default).fromCanvas(graphics.__canvas);
		}
		graphics.__softwareDirty = false;
		graphics.set___dirty(false);
	}
}
CanvasGraphics.renderMask = function(graphics,renderer) {
	if(graphics.__commands.get_length() != 0) {
		CanvasGraphics.context = renderer.context;
		var positionX = 0.0;
		var positionY = 0.0;
		var offsetX = 0;
		var offsetY = 0;
		var data = new (openfl__$internal_renderer_DrawCommandReader().default)(graphics.__commands);
		var x;
		var y;
		var width;
		var height;
		var kappa = .5522848;
		var ox;
		var oy;
		var xe;
		var ye;
		var xm;
		var ym;
		var _g = 0;
		var _g1 = graphics.__commands.types;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			switch(type._hx_index) {
			case 4:
				var c = data.readCubicCurveTo();
				CanvasGraphics.context.bezierCurveTo(c.float(0) - offsetX,c.float(1) - offsetY,c.float(2) - offsetX,c.float(3) - offsetY,c.float(4) - offsetX,c.float(5) - offsetY);
				positionX = c.float(4);
				positionY = c.float(5);
				break;
			case 5:
				var c1 = data.readCurveTo();
				CanvasGraphics.context.quadraticCurveTo(c1.float(0) - offsetX,c1.float(1) - offsetY,c1.float(2) - offsetX,c1.float(3) - offsetY);
				positionX = c1.float(2);
				positionY = c1.float(3);
				break;
			case 6:
				var c2 = data.readDrawCircle();
				CanvasGraphics.context.arc(c2.float(0) - offsetX,c2.float(1) - offsetY,c2.float(2),0,Math.PI * 2,true);
				break;
			case 7:
				var c3 = data.readDrawEllipse();
				x = c3.float(0);
				y = c3.float(1);
				width = c3.float(2);
				height = c3.float(3);
				x -= offsetX;
				y -= offsetY;
				ox = width / 2 * kappa;
				oy = height / 2 * kappa;
				xe = x + width;
				ye = y + height;
				xm = x + width / 2;
				ym = y + height / 2;
				CanvasGraphics.context.moveTo(x,ym);
				CanvasGraphics.context.bezierCurveTo(x,ym - oy,xm - ox,y,xm,y);
				CanvasGraphics.context.bezierCurveTo(xm + ox,y,xe,ym - oy,xe,ym);
				CanvasGraphics.context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
				CanvasGraphics.context.bezierCurveTo(xm - ox,ye,x,ym + oy,x,ym);
				break;
			case 9:
				var c4 = data.readDrawRect();
				CanvasGraphics.context.beginPath();
				CanvasGraphics.context.rect(c4.float(0) - offsetX,c4.float(1) - offsetY,c4.float(2),c4.float(3));
				CanvasGraphics.context.closePath();
				break;
			case 10:
				var c5 = data.readDrawRoundRect();
				CanvasGraphics.drawRoundRect(c5.float(0) - offsetX,c5.float(1) - offsetY,c5.float(2),c5.float(3),c5.float(4),c5.obj(0));
				break;
			case 17:
				var c6 = data.readLineTo();
				CanvasGraphics.context.lineTo(c6.float(0) - offsetX,c6.float(1) - offsetY);
				positionX = c6.float(0);
				positionY = c6.float(1);
				break;
			case 18:
				var c7 = data.readMoveTo();
				CanvasGraphics.context.moveTo(c7.float(0) - offsetX,c7.float(1) - offsetY);
				positionX = c7.float(0);
				positionY = c7.float(1);
				break;
			default:
				data.skip(type);
			}
		}
		data.destroy();
	}
}
CanvasGraphics.setSmoothing = function(smooth) {
	if(!CanvasGraphics.allowSmoothing) {
		smooth = false;
	}
	if(CanvasGraphics.context.imageSmoothingEnabled != smooth) {
		CanvasGraphics.context.imageSmoothingEnabled = smooth;
	}
}
CanvasGraphics.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, statics : { windingRule : { SuppressWarnings : ["checkstyle:Dynamic"]}, createBitmapFill : { SuppressWarnings : ["checkstyle:Dynamic"]}, createGradientPattern : { SuppressWarnings : ["checkstyle:Dynamic"]}}}
CanvasGraphics.SIN45 = 0.70710678118654752440084436210485
CanvasGraphics.TAN22 = 0.4142135623730950488016887242097
CanvasGraphics.fillCommands = new (openfl__$internal_renderer_DrawCommandBuffer().default)()
CanvasGraphics.strokeCommands = new (openfl__$internal_renderer_DrawCommandBuffer().default)()

// Export

exports.default = CanvasGraphics;