// Class: lime.graphics.opengl._GLShader.GLShader_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function lime_utils_Log() {return require("./../../../../lime/utils/Log");}

// Constructor

var GLShader_Impl_ = function(){}

// Meta

GLShader_Impl_.__name__ = "lime.graphics.opengl._GLShader.GLShader_Impl_";
GLShader_Impl_.__isInterface__ = false;
GLShader_Impl_.prototype = {
	
};
GLShader_Impl_.prototype.__class__ = GLShader_Impl_.prototype.constructor = $hxClasses["lime.graphics.opengl._GLShader.GLShader_Impl_"] = GLShader_Impl_;

// Init



// Statics

GLShader_Impl_.fromSource = function(gl,source,type) {
	var shader = gl.createShader(type);
	gl.shaderSource(shader,source);
	gl.compileShader(shader);
	if(gl.getShaderParameter(shader,gl.COMPILE_STATUS) == 0) {
		var message;
		if(type == gl.VERTEX_SHADER) {
			message = "Error compiling vertex shader";
		} else if(type == gl.FRAGMENT_SHADER) {
			message = "Error compiling fragment shader";
		} else {
			message = "Error compiling unknown shader type";
		}
		message += "\n" + gl.getShaderInfoLog(shader);
		(lime_utils_Log().default).error(message,{ fileName : "../node_modules/lime/src/lime/graphics/opengl/GLShader.hx", lineNumber : 40, className : "lime.graphics.opengl._GLShader.GLShader_Impl_", methodName : "fromSource"});
	}
	return shader;
}


// Export

exports.default = GLShader_Impl_;