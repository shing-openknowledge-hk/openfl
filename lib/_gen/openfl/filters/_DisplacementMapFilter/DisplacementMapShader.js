// Class: openfl.filters._DisplacementMapFilter.DisplacementMapShader

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

var DisplacementMapShader = function() {
	if(this.__glFragmentSource == null) {
		this.__glFragmentSource = "\n\n\t\tuniform sampler2D openfl_Texture;\n\t\tuniform sampler2D mapTexture;\n\n\t\tuniform mat4 openfl_Matrix;\n\n\t\tuniform vec4 uOffsets;\n\t\tuniform mat4 uDisplacements;\n\n\t\tvarying vec2 openfl_TextureCoordV;\n\t\tvarying vec2 mapTextureCoords;\n\n\t\tvoid main(void) {\n\n\t\t\tvec4 map_color = texture2D(mapTexture, mapTextureCoords);\n\t\t\tvec4 map_color_mod = map_color - uOffsets;\n\n\t\t\tmap_color_mod = map_color_mod * vec4(map_color.w, map_color.w, 1.0, 1.0);\n\n\t\t\tvec4 displacements_multiplied = map_color_mod * uDisplacements;\n\t\t\tvec4 result = vec4(openfl_TextureCoordV.x, openfl_TextureCoordV.y, 0.0, 1.0) + displacements_multiplied;\n\n\t\t\tgl_FragColor = texture2D(openfl_Texture, vec2(result));\n\n\t\t}\n\n\t";
	}
	if(this.__glVertexSource == null) {
		this.__glVertexSource = "\n\n\t\tuniform mat4 openfl_Matrix;\n\n\t\tuniform vec2 mapTextureCoordsOffset;\n\n\t\tattribute vec4 openfl_Position;\n\t\tattribute vec2 openfl_TextureCoord;\n\n\t\tvarying vec2 openfl_TextureCoordV;\n\n\t\tvarying vec2 mapTextureCoords;\n\n\t\tvoid main(void) {\n\n\t\t\tgl_Position = openfl_Matrix * openfl_Position;\n\n\t\t\topenfl_TextureCoordV = openfl_TextureCoord;\n\t\t\tmapTextureCoords = openfl_TextureCoord - mapTextureCoordsOffset;\n\n\t\t}\n\n\t";
	}
	(openfl_filters_BitmapFilterShader().default).call(this);
	this.__isGenerated = true;
	this.__initGL();
}

// Meta

DisplacementMapShader.__name__ = "openfl.filters._DisplacementMapFilter.DisplacementMapShader";
DisplacementMapShader.__isInterface__ = false;
DisplacementMapShader.__super__ = (openfl_filters_BitmapFilterShader().default);
DisplacementMapShader.prototype = $extend((openfl_filters_BitmapFilterShader().default).prototype, {
	
});
DisplacementMapShader.prototype.__class__ = DisplacementMapShader.prototype.constructor = $hxClasses["openfl.filters._DisplacementMapFilter.DisplacementMapShader"] = DisplacementMapShader;

// Init



// Statics




// Export

exports.default = DisplacementMapShader;