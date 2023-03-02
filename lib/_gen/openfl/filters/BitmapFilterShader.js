// Class: openfl.filters.BitmapFilterShader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_Shader() {return require("./../../openfl/display/Shader");}

// Constructor

var BitmapFilterShader = function(code) {
	if(this.__glFragmentSource == null) {
		this.__glFragmentSource = "varying vec2 openfl_TextureCoordv;\n\n\t\tuniform sampler2D openfl_Texture;\n\t\tuniform vec2 openfl_TextureSize;\n\n\t\tvoid main(void) {\n\n\t\t\tgl_FragColor = texture2D (openfl_Texture, openfl_TextureCoordv);\n\n\t\t}";
	}
	if(this.__glVertexSource == null) {
		this.__glVertexSource = "attribute vec4 openfl_Position;\n\t\tattribute vec2 openfl_TextureCoord;\n\n\t\tvarying vec2 openfl_TextureCoordv;\n\n\t\tuniform mat4 openfl_Matrix;\n\t\tuniform vec2 openfl_TextureSize;\n\n\t\tvoid main(void) {\n\n\t\t\topenfl_TextureCoordv = openfl_TextureCoord;\n\n\t\tgl_Position = openfl_Matrix * openfl_Position;\n\n\t\t}";
	}
	(openfl_display_Shader().default).call(this,code);
	this.__isGenerated = true;
	this.__initGL();
}

// Meta

BitmapFilterShader.__name__ = "openfl.filters.BitmapFilterShader";
BitmapFilterShader.__isInterface__ = false;
BitmapFilterShader.__super__ = (openfl_display_Shader().default);
BitmapFilterShader.prototype = $extend((openfl_display_Shader().default).prototype, {
	
});
BitmapFilterShader.prototype.__class__ = BitmapFilterShader.prototype.constructor = $hxClasses["openfl.filters.BitmapFilterShader"] = BitmapFilterShader;

// Init



// Statics




// Export

exports.default = BitmapFilterShader;