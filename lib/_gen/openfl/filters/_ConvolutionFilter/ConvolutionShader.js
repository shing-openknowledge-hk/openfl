// Class: openfl.filters._ConvolutionFilter.ConvolutionShader

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

var ConvolutionShader = function() {
	if(this.__glFragmentSource == null) {
		this.__glFragmentSource = "varying vec2 vBlurCoords[9];\n\n\t\tuniform sampler2D openfl_Texture;\n\n\t\tuniform float uBias;\n\t\tuniform mat3 uConvoMatrix;\n\t\tuniform float uDivisor;\n\t\tuniform bool uPreserveAlpha;\n\n\t\tvoid main(void) {\n\n\t\t\tvec4 tc = texture2D (openfl_Texture, vBlurCoords[4]);\n\t\t\tvec4 c = vec4 (0.0);\n\n\t\t\tc += texture2D (openfl_Texture, vBlurCoords[0]) * uConvoMatrix[0][0];\n\t\t\tc += texture2D (openfl_Texture, vBlurCoords[1]) * uConvoMatrix[0][1];\n\t\t\tc += texture2D (openfl_Texture, vBlurCoords[2]) * uConvoMatrix[0][2];\n\n\t\t\tc += texture2D (openfl_Texture, vBlurCoords[3]) * uConvoMatrix[1][0];\n\t\t\tc += tc * uConvoMatrix[1][1];\n\t\t\tc += texture2D (openfl_Texture, vBlurCoords[5]) * uConvoMatrix[1][2];\n\n\t\t\tc += texture2D (openfl_Texture, vBlurCoords[6]) * uConvoMatrix[2][0];\n\t\t\tc += texture2D (openfl_Texture, vBlurCoords[7]) * uConvoMatrix[2][1];\n\t\t\tc += texture2D (openfl_Texture, vBlurCoords[8]) * uConvoMatrix[2][2];\n\n\t\t\tif (uDivisor > 0.0) {\n\n\t\t\t\tc /= vec4 (uDivisor, uDivisor, uDivisor, uDivisor);\n\n\t\t\t}\n\n\t\t\tc += vec4 (uBias, uBias, uBias, uBias);\n\n\t\t\tif (uPreserveAlpha) {\n\n\t\t\t\tc.a = tc.a;\n\n\t\t\t}\n\n\t\t\tgl_FragColor = c;\n\n\t\t}";
	}
	if(this.__glVertexSource == null) {
		this.__glVertexSource = "attribute vec4 openfl_Position;\n\t\tattribute vec2 openfl_TextureCoord;\n\n\t\tvarying vec2 vBlurCoords[9];\n\n\t\tuniform mat4 openfl_Matrix;\n\t\tuniform vec2 openfl_TextureSize;\n\n\t\tvoid main(void) {\n\n\t\t\tvec2 r = vec2 (1.0, 1.0) / openfl_TextureSize;\n\t\t\tvec2 t = openfl_TextureCoord;\n\n\t\t\tvBlurCoords[0] = t + r * vec2 (-1.0, -1.0);\n\t\t\tvBlurCoords[1] = t + r * vec2 (0.0, -1.0);\n\t\t\tvBlurCoords[2] = t + r * vec2 (1.0, -1.0);\n\n\t\t\tvBlurCoords[3] = t + r * vec2 (-1.0, 0.0);\n\t\t\tvBlurCoords[4] = t;\n\t\t\tvBlurCoords[5] = t + r * vec2 (1.0, 0.0);\n\n\t\t\tvBlurCoords[6] = t + r * vec2 (-1.0, 1.0);\n\t\t\tvBlurCoords[7] = t + r * vec2 (0.0, 1.0);\n\t\t\tvBlurCoords[8] = t + r * vec2 (1.0, 1.0);\n\n\t\t\tgl_Position = openfl_Matrix * openfl_Position;\n\n\t\t}";
	}
	(openfl_filters_BitmapFilterShader().default).call(this);
	this.uDivisor.value = [1];
	this.uBias.value = [0];
	this.uPreserveAlpha.value = [true];
	this.__isGenerated = true;
	this.__initGL();
}

// Meta

ConvolutionShader.__name__ = "openfl.filters._ConvolutionFilter.ConvolutionShader";
ConvolutionShader.__isInterface__ = false;
ConvolutionShader.__super__ = (openfl_filters_BitmapFilterShader().default);
ConvolutionShader.prototype = $extend((openfl_filters_BitmapFilterShader().default).prototype, {
	
});
ConvolutionShader.prototype.__class__ = ConvolutionShader.prototype.constructor = $hxClasses["openfl.filters._ConvolutionFilter.ConvolutionShader"] = ConvolutionShader;

// Init



// Statics




// Export

exports.default = ConvolutionShader;