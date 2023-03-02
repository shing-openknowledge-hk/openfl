// Class: openfl._internal.renderer.canvas.CanvasShape

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl__$internal_renderer_canvas_CanvasGraphics() {return require("./../../../../openfl/_internal/renderer/canvas/CanvasGraphics");}

// Constructor

var CanvasShape = function(){}

// Meta

CanvasShape.__name__ = "openfl._internal.renderer.canvas.CanvasShape";
CanvasShape.__isInterface__ = false;
CanvasShape.prototype = {
	
};
CanvasShape.prototype.__class__ = CanvasShape.prototype.constructor = $hxClasses["openfl._internal.renderer.canvas.CanvasShape"] = CanvasShape;

// Init



// Statics

CanvasShape.render = function(shape,renderer) {
	if(!shape.__renderable) {
		return;
	}
	var alpha = renderer.__getAlpha(shape.__worldAlpha);
	if(alpha <= 0) {
		return;
	}
	var graphics = shape.__graphics;
	if(graphics != null) {
		(openfl__$internal_renderer_canvas_CanvasGraphics().default).render(graphics,renderer);
		var width = graphics.__width;
		var height = graphics.__height;
		var canvas = graphics.__canvas;
		if(canvas != null && graphics.__visible && width >= 1 && height >= 1) {
			var transform = graphics.__worldTransform;
			var context = renderer.context;
			var scrollRect = shape.__scrollRect;
			var scale9Grid = shape.__worldScale9Grid;
			if(scrollRect == null || scrollRect.width > 0 && scrollRect.height > 0) {
				renderer.__setBlendMode(shape.__worldBlendMode);
				renderer.__pushMaskObject(shape);
				context.globalAlpha = alpha;
				if(scale9Grid != null && transform.b == 0 && transform.c == 0) {
					context.setTransform(1,0,0,1,transform.tx,transform.ty);
					var bounds = graphics.__bounds;
					var scaleX = graphics.__renderTransform.a;
					var scaleY = graphics.__renderTransform.d;
					var renderScaleX = transform.a;
					var renderScaleY = transform.d;
					var left = Math.max(1,Math.round(scale9Grid.x * scaleX));
					var top = Math.round(scale9Grid.y * scaleY);
					var right = Math.max(1,Math.round((bounds.get_right() - scale9Grid.get_right()) * scaleX));
					var bottom = Math.round((bounds.get_bottom() - scale9Grid.get_bottom()) * scaleY);
					var centerWidth = Math.round(scale9Grid.width * scaleX);
					var centerHeight = Math.round(scale9Grid.height * scaleY);
					var renderLeft = Math.round(scale9Grid.x * renderScaleX);
					var renderTop = Math.round(scale9Grid.y * renderScaleY);
					var renderRight = Math.round((bounds.get_right() - scale9Grid.get_right()) * renderScaleX);
					var renderBottom = Math.round((bounds.get_bottom() - scale9Grid.get_bottom()) * renderScaleY);
					var renderCenterWidth = Math.round(width * renderScaleX) - renderLeft - renderRight;
					var renderCenterHeight = Math.round(height * renderScaleY) - renderTop - renderBottom;
					renderer.applySmoothing(context,false);
					if(centerWidth != 0 && centerHeight != 0) {
						context.drawImage(canvas,0,0,left,top,0,0,renderLeft,renderTop);
						context.drawImage(canvas,left,0,centerWidth,top,renderLeft,0,renderCenterWidth,renderTop);
						context.drawImage(canvas,left + centerWidth,0,right,top,renderLeft + renderCenterWidth,0,renderRight,renderTop);
						context.drawImage(canvas,0,top,left,centerHeight,0,renderTop,renderLeft,renderCenterHeight);
						context.drawImage(canvas,left,top,centerWidth,centerHeight,renderLeft,renderTop,renderCenterWidth,renderCenterHeight);
						context.drawImage(canvas,left + centerWidth,top,right,centerHeight,renderLeft + renderCenterWidth,renderTop,renderRight,renderCenterHeight);
						context.drawImage(canvas,0,top + centerHeight,left,bottom,0,renderTop + renderCenterHeight,renderLeft,renderBottom);
						context.drawImage(canvas,left,top + centerHeight,centerWidth,bottom,renderLeft,renderTop + renderCenterHeight,renderCenterWidth,renderBottom);
						context.drawImage(canvas,left + centerWidth,top + centerHeight,right,bottom,renderLeft + renderCenterWidth,renderTop + renderCenterHeight,renderRight,renderBottom);
					} else if(centerWidth == 0 && centerHeight != 0) {
						var renderWidth = renderLeft + renderCenterWidth + renderRight;
						context.drawImage(canvas,0,0,width,top,0,0,renderWidth,renderTop);
						context.drawImage(canvas,0,top,width,centerHeight,0,renderTop,renderWidth,renderCenterHeight);
						context.drawImage(canvas,0,top + centerHeight,width,bottom,0,renderTop + renderCenterHeight,renderWidth,renderBottom);
					} else if(centerHeight == 0 && centerWidth != 0) {
						var renderHeight = renderTop + renderCenterHeight + renderBottom;
						context.drawImage(canvas,0,0,left,height,0,0,renderLeft,renderHeight);
						context.drawImage(canvas,left,0,centerWidth,height,renderLeft,0,renderCenterWidth,renderHeight);
						context.drawImage(canvas,left + centerWidth,0,right,height,renderLeft + renderCenterWidth,0,renderRight,renderHeight);
					}
				} else {
					renderer.setTransform(transform,context);
					if(renderer.__isDOM) {
						var reverseScale = 1 / renderer.pixelRatio;
						context.scale(reverseScale,reverseScale);
					}
					context.drawImage(canvas,0,0,width,height);
				}
				renderer.__popMaskObject(shape);
			}
		}
	}
}
CanvasShape.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = CanvasShape;