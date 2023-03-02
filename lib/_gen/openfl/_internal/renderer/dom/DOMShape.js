// Class: openfl._internal.renderer.dom.DOMShape

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl__$internal_renderer_canvas_CanvasGraphics() {return require("./../../../../openfl/_internal/renderer/canvas/CanvasGraphics");}

// Constructor

var DOMShape = function(){}

// Meta

DOMShape.__name__ = "openfl._internal.renderer.dom.DOMShape";
DOMShape.__isInterface__ = false;
DOMShape.prototype = {
	
};
DOMShape.prototype.__class__ = DOMShape.prototype.constructor = $hxClasses["openfl._internal.renderer.dom.DOMShape"] = DOMShape;

// Init



// Statics

DOMShape.clear = function(shape,renderer) {
	if(shape.__canvas != null) {
		renderer.element.removeChild(shape.__canvas);
		shape.__canvas = null;
		shape.__style = null;
	}
}
DOMShape.render = function(shape,renderer) {
	var graphics = shape.__graphics;
	if(shape.stage != null && shape.__worldVisible && shape.__renderable && graphics != null) {
		(openfl__$internal_renderer_canvas_CanvasGraphics().default).render(graphics,renderer.__canvasRenderer);
		if(graphics.__softwareDirty || shape.__worldAlphaChanged || shape.__canvas != graphics.__canvas) {
			if(graphics.__canvas != null) {
				if(shape.__canvas != graphics.__canvas) {
					if(shape.__canvas != null) {
						renderer.element.removeChild(shape.__canvas);
					}
					shape.__canvas = graphics.__canvas;
					shape.__context = graphics.__context;
					renderer.__initializeElement(shape,shape.__canvas);
				}
			} else {
				DOMShape.clear(shape,renderer);
			}
		}
		if(shape.__canvas != null) {
			renderer.__pushMaskObject(shape);
			var cacheTransform = shape.__renderTransform;
			shape.__renderTransform = graphics.__worldTransform;
			if(graphics.__transformDirty) {
				graphics.__transformDirty = false;
				shape.__renderTransformChanged = true;
			}
			renderer.__updateClip(shape);
			renderer.__applyStyle(shape,true,true,true);
			shape.__renderTransform = cacheTransform;
			renderer.__popMaskObject(shape);
		}
	} else {
		DOMShape.clear(shape,renderer);
	}
}
DOMShape.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = DOMShape;