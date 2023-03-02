// Class: openfl._internal.renderer.context3D.Context3DMaskShader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
var $extend = require("./../../../../extend_stub").default;
function openfl_display_Shader() {return require("./../../../../openfl/display/Shader");}
function openfl_display_BitmapData() {return require("./../../../../openfl/display/BitmapData");}

// Constructor

var Context3DMaskShader = function() {
	if(this.__glFragmentSource == null) {
		this.__glFragmentSource = "varying vec2 openfl_TextureCoordv;\n\t\t\n\t\tuniform sampler2D openfl_Texture;\n\t\t\n\t\tvoid main(void) {\n\t\t\t\n\t\t\tvec4 color = texture2D (openfl_Texture, openfl_TextureCoordv);\n\t\t\t\n\t\t\tif (color.a == 0.0) {\n\t\t\t\t\n\t\t\t\tdiscard;\n\t\t\t\t\n\t\t\t} else {\n\t\t\t\t\n\t\t\t\tgl_FragColor = color;\n\t\t\t\t\n\t\t\t}\n\t\t\t\n\t\t}";
	}
	if(this.__glVertexSource == null) {
		this.__glVertexSource = "attribute vec4 openfl_Position;\n\t\tattribute vec2 openfl_TextureCoord;\n\t\tvarying vec2 openfl_TextureCoordv;\n\t\t\n\t\tuniform mat4 openfl_Matrix;\n\t\t\n\t\tvoid main(void) {\n\t\t\t\n\t\t\topenfl_TextureCoordv = openfl_TextureCoord;\n\t\t\t\n\t\t\tgl_Position = openfl_Matrix * openfl_Position;\n\t\t\t\n\t\t}";
	}
	(openfl_display_Shader().default).call(this);
	this.__isGenerated = true;
	this.__initGL();
}

// Meta

Context3DMaskShader.__name__ = "openfl._internal.renderer.context3D.Context3DMaskShader";
Context3DMaskShader.__isInterface__ = false;
Context3DMaskShader.__super__ = (openfl_display_Shader().default);
Context3DMaskShader.prototype = $extend((openfl_display_Shader().default).prototype, {
	
});
Context3DMaskShader.prototype.__class__ = Context3DMaskShader.prototype.constructor = $hxClasses["openfl._internal.renderer.context3D.Context3DMaskShader"] = Context3DMaskShader;

// Init



// Statics


Context3DMaskShader.opaqueBitmapData = new (openfl_display_BitmapData().default)(1,1,false,0)

// Export

exports.default = Context3DMaskShader;