// Class: openfl.filters._GlowFilter.GlowShader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function openfl_filters_BitmapFilterShader() {return require("./../../../openfl/filters/BitmapFilterShader");}

// Constructor

var GlowShader = function() {
	if(this.__glFragmentSource == null) {
		this.__glFragmentSource = "uniform sampler2D openfl_Texture;\n\t\t\n\t\tuniform vec4 uColor;\n\t\t\n\t\tvarying vec2 vBlurCoords[7];\n\t\t\n\t\tvoid main(void) {\n\t\t\t\n\t\t\tfloat a = 0.0;\n\t\t\ta += texture2D(openfl_Texture, vBlurCoords[0]).a * 0.00443;\n\t\t\ta += texture2D(openfl_Texture, vBlurCoords[1]).a * 0.05399;\n\t\t\ta += texture2D(openfl_Texture, vBlurCoords[2]).a * 0.24197;\n\t\t\ta += texture2D(openfl_Texture, vBlurCoords[3]).a * 0.39894;\n\t\t\ta += texture2D(openfl_Texture, vBlurCoords[4]).a * 0.24197;\n\t\t\ta += texture2D(openfl_Texture, vBlurCoords[5]).a * 0.05399;\n\t\t\ta += texture2D(openfl_Texture, vBlurCoords[6]).a * 0.00443;\n\t\t\ta *= uColor.a;\n\t\t\t\n\t\t\tgl_FragColor = vec4(uColor.rgb * a, a);\n\t\t\t\n\t\t}";
	}
	if(this.__glVertexSource == null) {
		this.__glVertexSource = "attribute vec4 openfl_Position;\n\t\tattribute vec2 openfl_TextureCoord;\n\t\t\n\t\tuniform mat4 openfl_Matrix;\n\t\tuniform vec2 openfl_TextureSize;\n\t\t\n\t\tuniform vec2 uRadius;\n\t\tvarying vec2 vBlurCoords[7];\n\t\t\n\t\tvoid main(void) {\n\t\t\t\n\t\t\tgl_Position = openfl_Matrix * openfl_Position;\n\t\t\t\n\t\t\tvec2 r = uRadius / openfl_TextureSize;\n\t\t\tvBlurCoords[0] = openfl_TextureCoord - r * 1.0;\n\t\t\tvBlurCoords[1] = openfl_TextureCoord - r * 0.75;\n\t\t\tvBlurCoords[2] = openfl_TextureCoord - r * 0.5;\n\t\t\tvBlurCoords[3] = openfl_TextureCoord;\n\t\t\tvBlurCoords[4] = openfl_TextureCoord + r * 0.5;\n\t\t\tvBlurCoords[5] = openfl_TextureCoord + r * 0.75;\n\t\t\tvBlurCoords[6] = openfl_TextureCoord + r * 1.0;\n\t\t\t\n\t\t}";
	}
	(openfl_filters_BitmapFilterShader().default).call(this);
	this.uRadius.value = [0,0];
	this.uColor.value = [0,0,0,0];
	this.__isGenerated = true;
	this.__initGL();
}

// Meta

GlowShader.__name__ = "openfl.filters._GlowFilter.GlowShader";
GlowShader.__isInterface__ = false;
GlowShader.__super__ = (openfl_filters_BitmapFilterShader().default);
GlowShader.prototype = $extend((openfl_filters_BitmapFilterShader().default).prototype, {
	
});
GlowShader.prototype.__class__ = GlowShader.prototype.constructor = $hxClasses["openfl.filters._GlowFilter.GlowShader"] = GlowShader;

// Init



// Statics




// Export

exports.default = GlowShader;