// Class: openfl._internal.renderer.dom.DOMDisplayObject

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl__$internal_renderer_dom_DOMBitmap() {return require("./../../../../openfl/_internal/renderer/dom/DOMBitmap");}
function openfl__$internal_renderer_dom_DOMShape() {return require("./../../../../openfl/_internal/renderer/dom/DOMShape");}

// Constructor

var DOMDisplayObject = function(){}

// Meta

DOMDisplayObject.__name__ = "openfl._internal.renderer.dom.DOMDisplayObject";
DOMDisplayObject.__isInterface__ = false;
DOMDisplayObject.prototype = {
	
};
DOMDisplayObject.prototype.__class__ = DOMDisplayObject.prototype.constructor = $hxClasses["openfl._internal.renderer.dom.DOMDisplayObject"] = DOMDisplayObject;

// Init



// Statics

DOMDisplayObject.clear = function(displayObject,renderer) {
	if(displayObject.__cacheBitmap != null) {
		(openfl__$internal_renderer_dom_DOMBitmap().default).clear(displayObject.__cacheBitmap,renderer);
	}
	(openfl__$internal_renderer_dom_DOMShape().default).clear(displayObject,renderer);
}
DOMDisplayObject.render = function(displayObject,renderer) {
	var tmp = displayObject.opaqueBackground != null && !displayObject.__isCacheBitmapRender && displayObject.get_width() > 0 && displayObject.get_height() > 0;
	(openfl__$internal_renderer_dom_DOMShape().default).render(displayObject,renderer);
}
DOMDisplayObject.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = DOMDisplayObject;