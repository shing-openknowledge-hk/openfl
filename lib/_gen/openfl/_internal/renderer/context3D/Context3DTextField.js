// Class: openfl._internal.renderer.context3D.Context3DTextField

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl__$internal_renderer_canvas_CanvasTextField() {return require("./../../../../openfl/_internal/renderer/canvas/CanvasTextField");}

// Constructor

var Context3DTextField = function(){}

// Meta

Context3DTextField.__name__ = "openfl._internal.renderer.context3D.Context3DTextField";
Context3DTextField.__isInterface__ = false;
Context3DTextField.prototype = {
	
};
Context3DTextField.prototype.__class__ = Context3DTextField.prototype.constructor = $hxClasses["openfl._internal.renderer.context3D.Context3DTextField"] = Context3DTextField;

// Init



// Statics

Context3DTextField.render = function(textField,renderer) {
	(openfl__$internal_renderer_canvas_CanvasTextField().default).render(textField,renderer.__softwareRenderer,textField.__worldTransform);
	textField.__graphics.__hardwareDirty = false;
}
Context3DTextField.renderMask = function(textField,renderer) {
	(openfl__$internal_renderer_canvas_CanvasTextField().default).render(textField,renderer.__softwareRenderer,textField.__worldTransform);
	textField.__graphics.__hardwareDirty = false;
}
Context3DTextField.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = Context3DTextField;