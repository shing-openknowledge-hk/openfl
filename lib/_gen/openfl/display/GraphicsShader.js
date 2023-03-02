// Class: openfl.display.GraphicsShader

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

var GraphicsShader = function(code) {
	if(this.__glFragmentSource == null) {
		this.__glFragmentSource = "varying float openfl_Alphav;\n\t\tvarying vec4 openfl_ColorMultiplierv;\n\t\tvarying vec4 openfl_ColorOffsetv;\n\t\tvarying vec2 openfl_TextureCoordv;\n\n\t\tuniform bool openfl_HasColorTransform;\n\t\tuniform vec2 openfl_TextureSize;\n\t\tuniform sampler2D bitmap;\n\n\t\tvoid main(void) {\n\n\t\t\tvec4 color = texture2D (bitmap, openfl_TextureCoordv);\n\n\t\tif (color.a == 0.0) {\n\n\t\t\tgl_FragColor = vec4 (0.0, 0.0, 0.0, 0.0);\n\n\t\t} else if (openfl_HasColorTransform) {\n\n\t\t\tcolor = vec4 (color.rgb / color.a, color.a);\n\n\t\t\tmat4 colorMultiplier = mat4 (0);\n\t\t\tcolorMultiplier[0][0] = openfl_ColorMultiplierv.x;\n\t\t\tcolorMultiplier[1][1] = openfl_ColorMultiplierv.y;\n\t\t\tcolorMultiplier[2][2] = openfl_ColorMultiplierv.z;\n\t\t\tcolorMultiplier[3][3] = 1.0; // openfl_ColorMultiplierv.w;\n\n\t\t\tcolor = clamp (openfl_ColorOffsetv + (color * colorMultiplier), 0.0, 1.0);\n\n\t\t\tif (color.a > 0.0) {\n\n\t\t\t\tgl_FragColor = vec4 (color.rgb * color.a * openfl_Alphav, color.a * openfl_Alphav);\n\n\t\t\t} else {\n\n\t\t\t\tgl_FragColor = vec4 (0.0, 0.0, 0.0, 0.0);\n\n\t\t\t}\n\n\t\t} else {\n\n\t\t\tgl_FragColor = color * openfl_Alphav;\n\n\t\t}\n\n\t\t}";
	}
	if(this.__glVertexSource == null) {
		this.__glVertexSource = "attribute float openfl_Alpha;\n\t\tattribute vec4 openfl_ColorMultiplier;\n\t\tattribute vec4 openfl_ColorOffset;\n\t\tattribute vec4 openfl_Position;\n\t\tattribute vec2 openfl_TextureCoord;\n\n\t\tvarying float openfl_Alphav;\n\t\tvarying vec4 openfl_ColorMultiplierv;\n\t\tvarying vec4 openfl_ColorOffsetv;\n\t\tvarying vec2 openfl_TextureCoordv;\n\n\t\tuniform mat4 openfl_Matrix;\n\t\tuniform bool openfl_HasColorTransform;\n\t\tuniform vec2 openfl_TextureSize;\n\n\t\tvoid main(void) {\n\n\t\t\topenfl_Alphav = openfl_Alpha;\n\t\topenfl_TextureCoordv = openfl_TextureCoord;\n\n\t\tif (openfl_HasColorTransform) {\n\n\t\t\topenfl_ColorMultiplierv = openfl_ColorMultiplier;\n\t\t\topenfl_ColorOffsetv = openfl_ColorOffset / 255.0;\n\n\t\t}\n\n\t\tgl_Position = openfl_Matrix * openfl_Position;\n\n\t\t}";
	}
	(openfl_display_Shader().default).call(this,code);
	this.__isGenerated = true;
	this.__initGL();
}

// Meta

GraphicsShader.__name__ = "openfl.display.GraphicsShader";
GraphicsShader.__isInterface__ = false;
GraphicsShader.__super__ = (openfl_display_Shader().default);
GraphicsShader.prototype = $extend((openfl_display_Shader().default).prototype, {
	
});
GraphicsShader.prototype.__class__ = GraphicsShader.prototype.constructor = $hxClasses["openfl.display.GraphicsShader"] = GraphicsShader;

// Init



// Statics




// Export

exports.default = GraphicsShader;