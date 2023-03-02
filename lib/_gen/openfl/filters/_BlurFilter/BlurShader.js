// Class: openfl.filters._BlurFilter.BlurShader

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

var BlurShader = function() {
	if(this.__glFragmentSource == null) {
		this.__glFragmentSource = "uniform sampler2D openfl_Texture;\n\n\t\tvarying vec2 vBlurCoords[7];\n\n\t\tvoid main(void) {\n\n\t\t\tvec4 sum = vec4(0.0);\n\t\t\tsum += texture2D(openfl_Texture, vBlurCoords[0]) * 0.00443;\n\t\t\tsum += texture2D(openfl_Texture, vBlurCoords[1]) * 0.05399;\n\t\t\tsum += texture2D(openfl_Texture, vBlurCoords[2]) * 0.24197;\n\t\t\tsum += texture2D(openfl_Texture, vBlurCoords[3]) * 0.39894;\n\t\t\tsum += texture2D(openfl_Texture, vBlurCoords[4]) * 0.24197;\n\t\t\tsum += texture2D(openfl_Texture, vBlurCoords[5]) * 0.05399;\n\t\t\tsum += texture2D(openfl_Texture, vBlurCoords[6]) * 0.00443;\n\n\t\t\tgl_FragColor = sum;\n\n\t\t}";
	}
	if(this.__glVertexSource == null) {
		this.__glVertexSource = "attribute vec4 openfl_Position;\n\t\tattribute vec2 openfl_TextureCoord;\n\n\t\tuniform mat4 openfl_Matrix;\n\n\t\tuniform vec2 uRadius;\n\t\tvarying vec2 vBlurCoords[7];\n\t\tuniform vec2 uTextureSize;\n\n\t\tvoid main(void) {\n\n\t\t\tgl_Position = openfl_Matrix * openfl_Position;\n\n\t\t\tvec2 r = uRadius / uTextureSize;\n\t\t\tvBlurCoords[0] = openfl_TextureCoord - r * 1.0;\n\t\t\tvBlurCoords[1] = openfl_TextureCoord - r * 0.75;\n\t\t\tvBlurCoords[2] = openfl_TextureCoord - r * 0.5;\n\t\t\tvBlurCoords[3] = openfl_TextureCoord;\n\t\t\tvBlurCoords[4] = openfl_TextureCoord + r * 0.5;\n\t\t\tvBlurCoords[5] = openfl_TextureCoord + r * 0.75;\n\t\t\tvBlurCoords[6] = openfl_TextureCoord + r * 1.0;\n\n\t\t}";
	}
	(openfl_filters_BitmapFilterShader().default).call(this);
	this.uRadius.value = [0,0];
	this.__isGenerated = true;
	this.__initGL();
}

// Meta

BlurShader.__name__ = "openfl.filters._BlurFilter.BlurShader";
BlurShader.__isInterface__ = false;
BlurShader.__super__ = (openfl_filters_BitmapFilterShader().default);
BlurShader.prototype = $extend((openfl_filters_BitmapFilterShader().default).prototype, {
	__update: function() {
		this.uTextureSize.value = [this.__texture.input.width,this.__texture.input.height];
		(openfl_filters_BitmapFilterShader().default).prototype.__update.call(this);
	}
});
BlurShader.prototype.__class__ = BlurShader.prototype.constructor = $hxClasses["openfl.filters._BlurFilter.BlurShader"] = BlurShader;

// Init



// Statics




// Export

exports.default = BlurShader;