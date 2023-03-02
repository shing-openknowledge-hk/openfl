// Class: openfl.filters._ColorMatrixFilter.ColorMatrixShader

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

var ColorMatrixShader = function() {
	if(this.__glFragmentSource == null) {
		this.__glFragmentSource = "varying vec2 openfl_TextureCoordv;\n\t\tuniform sampler2D openfl_Texture;\n\n\t\tuniform mat4 uMultipliers;\n\t\tuniform vec4 uOffsets;\n\n\t\tvoid main(void) {\n\n\t\t\tvec4 color = texture2D (openfl_Texture, openfl_TextureCoordv);\n\n\t\t\tif (color.a == 0.0) {\n\n\t\t\t\tgl_FragColor = vec4 (0.0, 0.0, 0.0, 0.0);\n\n\t\t\t} else {\n\n\t\t\t\tcolor = vec4 (color.rgb / color.a, color.a);\n\t\t\t\tcolor = uOffsets + color * uMultipliers;\n\n\t\t\t\tgl_FragColor = vec4 (color.rgb * color.a, color.a);\n\n\t\t\t}\n\n\t\t}";
	}
	if(this.__glVertexSource == null) {
		this.__glVertexSource = "attribute vec4 openfl_Position;\n\t\tattribute vec2 openfl_TextureCoord;\n\n\t\tvarying vec2 openfl_TextureCoordv;\n\n\t\tuniform mat4 openfl_Matrix;\n\t\tuniform vec2 openfl_TextureSize;\n\n\n\t\tvoid main(void) {\n\n\t\t\topenfl_TextureCoordv = openfl_TextureCoord;\n\n\t\tgl_Position = openfl_Matrix * openfl_Position;\n\n\n\t\t}";
	}
	(openfl_filters_BitmapFilterShader().default).call(this);
	this.uMultipliers.value = [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
	this.uOffsets.value = [0,0,0,0];
	this.__isGenerated = true;
	this.__initGL();
}

// Meta

ColorMatrixShader.__name__ = "openfl.filters._ColorMatrixFilter.ColorMatrixShader";
ColorMatrixShader.__isInterface__ = false;
ColorMatrixShader.__super__ = (openfl_filters_BitmapFilterShader().default);
ColorMatrixShader.prototype = $extend((openfl_filters_BitmapFilterShader().default).prototype, {
	init: function(matrix) {
		var multipliers = this.uMultipliers.value;
		var offsets = this.uOffsets.value;
		multipliers[0] = matrix[0];
		multipliers[1] = matrix[1];
		multipliers[2] = matrix[2];
		multipliers[3] = matrix[3];
		multipliers[4] = matrix[5];
		multipliers[5] = matrix[6];
		multipliers[6] = matrix[7];
		multipliers[7] = matrix[8];
		multipliers[8] = matrix[10];
		multipliers[9] = matrix[11];
		multipliers[10] = matrix[12];
		multipliers[11] = matrix[13];
		multipliers[12] = matrix[15];
		multipliers[13] = matrix[16];
		multipliers[14] = matrix[17];
		multipliers[15] = matrix[18];
		offsets[0] = matrix[4] / 255.0;
		offsets[1] = matrix[9] / 255.0;
		offsets[2] = matrix[14] / 255.0;
		offsets[3] = matrix[19] / 255.0;
	}
});
ColorMatrixShader.prototype.__class__ = ColorMatrixShader.prototype.constructor = $hxClasses["openfl.filters._ColorMatrixFilter.ColorMatrixShader"] = ColorMatrixShader;

// Init



// Statics


ColorMatrixShader.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = ColorMatrixShader;