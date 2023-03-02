// Class: lime.graphics._WebGLRenderContext.WebGLRenderContext_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_graphics_opengl_GL() {return require("./../../../lime/graphics/opengl/GL");}

// Constructor

var WebGLRenderContext_Impl_ = function(){}

// Meta

WebGLRenderContext_Impl_.__name__ = "lime.graphics._WebGLRenderContext.WebGLRenderContext_Impl_";
WebGLRenderContext_Impl_.__isInterface__ = false;
WebGLRenderContext_Impl_.prototype = {
	
};
WebGLRenderContext_Impl_.prototype.__class__ = WebGLRenderContext_Impl_.prototype.constructor = $hxClasses["lime.graphics._WebGLRenderContext.WebGLRenderContext_Impl_"] = WebGLRenderContext_Impl_;

// Init



// Statics

WebGLRenderContext_Impl_.bufferData = function(this1,target,srcData,usage) {
	var srcOffset = null;
	if(srcOffset != null) {
		this1.bufferData(target,srcData,usage,srcOffset,null);
	} else {
		this1.bufferData(target,srcData,usage);
	}
}
WebGLRenderContext_Impl_.bufferSubData = function(this1,target,offset,srcData) {
	var srcOffset = null;
	if(srcOffset != null) {
		this1.bufferSubData(target,offset,srcData,srcOffset,null);
	} else {
		this1.bufferSubData(target,offset,srcData);
	}
}
WebGLRenderContext_Impl_.compressedTexImage2D = function(this1,target,level,internalformat,width,height,border,srcData) {
	var srcOffset = null;
	if(srcOffset != null) {
		this1.compressedTexImage2D(target,level,internalformat,width,height,border,srcData,srcOffset,null);
	} else {
		this1.compressedTexImage2D(target,level,internalformat,width,height,border,srcData);
	}
}
WebGLRenderContext_Impl_.compressedTexSubImage2D = function(this1,target,level,xoffset,yoffset,width,height,format,srcData) {
	var srcOffset = null;
	if(srcOffset != null) {
		this1.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,srcData,srcOffset,null);
	} else {
		this1.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,srcData);
	}
}
WebGLRenderContext_Impl_.readPixels = function(this1,x,y,width,height,format,type,pixels) {
	var dstOffset = null;
	if(dstOffset != null) {
		this1.readPixels(x,y,width,height,format,type,pixels,dstOffset);
	} else {
		this1.readPixels(x,y,width,height,format,type,pixels);
	}
}
WebGLRenderContext_Impl_.texImage2D = function(this1,target,level,internalformat,width,height,border,format,type,srcData) {
	var srcOffset = null;
	if(srcOffset != null) {
		this1.texImage2D(target,level,internalformat,width,height,border,format,type,srcData,srcOffset);
	} else if(format != null) {
		this1.texImage2D(target,level,internalformat,width,height,border,format,type,srcData);
	} else {
		this1.texImage2D(target,level,internalformat,width,height,border);
	}
}
WebGLRenderContext_Impl_.texSubImage2D = function(this1,target,level,xoffset,yoffset,width,height,format,type,srcData) {
	var srcOffset = null;
	if(srcOffset != null) {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,srcData,srcOffset);
	} else if(type != null) {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,srcData);
	} else {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format);
	}
}
WebGLRenderContext_Impl_.uniformMatrix2fv = function(this1,location,transpose,v) {
	var data = v;
	var srcOffset = null;
	if(srcOffset != null) {
		this1.uniformMatrix2fv(location,transpose,data,srcOffset,null);
	} else {
		this1.uniformMatrix2fv(location,transpose,data);
	}
}
WebGLRenderContext_Impl_.uniformMatrix3fv = function(this1,location,transpose,v) {
	var data = v;
	var srcOffset = null;
	if(srcOffset != null) {
		this1.uniformMatrix3fv(location,transpose,data,srcOffset,null);
	} else {
		this1.uniformMatrix3fv(location,transpose,data);
	}
}
WebGLRenderContext_Impl_.uniformMatrix4fv = function(this1,location,transpose,v) {
	var data = v;
	var srcOffset = null;
	if(srcOffset != null) {
		this1.uniformMatrix4fv(location,transpose,data,srcOffset,null);
	} else {
		this1.uniformMatrix4fv(location,transpose,data);
	}
}
WebGLRenderContext_Impl_.fromWebGL2RenderContext = function(gl) {
	return gl;
}
WebGLRenderContext_Impl_.fromRenderContext = function(context) {
	return context.webgl;
}
WebGLRenderContext_Impl_.fromGL = function(gl) {
	return (lime_graphics_opengl_GL().default).context;
}


// Export

exports.default = WebGLRenderContext_Impl_;