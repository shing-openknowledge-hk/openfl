// Class: lime.graphics.opengl._GLProgram.GLProgram_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function lime_graphics_opengl__$GLShader_GLShader_$Impl_$() {return require("./../../../../lime/graphics/opengl/_GLShader/GLShader_Impl_");}
function lime_graphics_opengl_GL() {return require("./../../../../lime/graphics/opengl/GL");}
function lime_utils_Log() {return require("./../../../../lime/utils/Log");}

// Constructor

var GLProgram_Impl_ = function(){}

// Meta

GLProgram_Impl_.__name__ = "lime.graphics.opengl._GLProgram.GLProgram_Impl_";
GLProgram_Impl_.__isInterface__ = false;
GLProgram_Impl_.prototype = {
	
};
GLProgram_Impl_.prototype.__class__ = GLProgram_Impl_.prototype.constructor = $hxClasses["lime.graphics.opengl._GLProgram.GLProgram_Impl_"] = GLProgram_Impl_;

// Init



// Statics

GLProgram_Impl_.fromSources = function(gl,vertexSource,fragmentSource) {
	var vertexShader = (lime_graphics_opengl__$GLShader_GLShader_$Impl_$().default).fromSource(gl,vertexSource,gl.VERTEX_SHADER);
	var fragmentShader = (lime_graphics_opengl__$GLShader_GLShader_$Impl_$().default).fromSource(gl,fragmentSource,gl.FRAGMENT_SHADER);
	var program = gl.createProgram();
	gl.attachShader(program,vertexShader);
	gl.attachShader(program,fragmentShader);
	gl.linkProgram(program);
	if(gl.getProgramParameter(program,35714) == 0) {
		var message = "Unable to initialize the shader program";
		message += "\n" + (lime_graphics_opengl_GL().default).getProgramInfoLog(program);
		(lime_utils_Log().default).error(message,{ fileName : "../node_modules/lime/src/lime/graphics/opengl/GLProgram.hx", lineNumber : 39, className : "lime.graphics.opengl._GLProgram.GLProgram_Impl_", methodName : "fromSources"});
	}
	return program;
}


// Export

exports.default = GLProgram_Impl_;