// Class: openfl._internal.renderer.dom.DOMTilemap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl__$internal_renderer_canvas_CanvasTilemap() {return require("./../../../../openfl/_internal/renderer/canvas/CanvasTilemap");}

// Constructor

var DOMTilemap = function(){}

// Meta

DOMTilemap.__name__ = "openfl._internal.renderer.dom.DOMTilemap";
DOMTilemap.__isInterface__ = false;
DOMTilemap.prototype = {
	
};
DOMTilemap.prototype.__class__ = DOMTilemap.prototype.constructor = $hxClasses["openfl._internal.renderer.dom.DOMTilemap"] = DOMTilemap;

// Init



// Statics

DOMTilemap.clear = function(tilemap,renderer) {
	if(tilemap.__canvas != null) {
		renderer.element.removeChild(tilemap.__canvas);
		tilemap.__canvas = null;
		tilemap.__style = null;
	}
}
DOMTilemap.render = function(tilemap,renderer) {
	if(tilemap.stage != null && tilemap.__worldVisible && tilemap.__renderable && tilemap.__group.__tiles.length > 0) {
		if(tilemap.__canvas == null) {
			tilemap.__canvas = window.document.createElement("canvas");
			tilemap.__context = tilemap.__canvas.getContext("2d");
			renderer.__initializeElement(tilemap,tilemap.__canvas);
		}
		tilemap.__canvas.width = tilemap.__width;
		tilemap.__canvas.height = tilemap.__height;
		renderer.__canvasRenderer.context = tilemap.__context;
		(openfl__$internal_renderer_canvas_CanvasTilemap().default).render(tilemap,renderer.__canvasRenderer);
		renderer.__canvasRenderer.context = null;
		renderer.__updateClip(tilemap);
		renderer.__applyStyle(tilemap,true,false,true);
	} else {
		DOMTilemap.clear(tilemap,renderer);
	}
}
DOMTilemap.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = DOMTilemap;