// Class: lime.graphics._WebGL2RenderContext.WebGL2RenderContext_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var WebGL2RenderContext_Impl_ = function(){}

// Meta

WebGL2RenderContext_Impl_.__name__ = "lime.graphics._WebGL2RenderContext.WebGL2RenderContext_Impl_";
WebGL2RenderContext_Impl_.__isInterface__ = false;
WebGL2RenderContext_Impl_.prototype = {
	
};
WebGL2RenderContext_Impl_.prototype.__class__ = WebGL2RenderContext_Impl_.prototype.constructor = $hxClasses["lime.graphics._WebGL2RenderContext.WebGL2RenderContext_Impl_"] = WebGL2RenderContext_Impl_;

// Init



// Statics

WebGL2RenderContext_Impl_.bufferData = function(this1,target,srcData,usage,srcOffset,length) {
	if(srcOffset != null) {
		this1.bufferData(target,srcData,usage,srcOffset,length);
	} else {
		this1.bufferData(target,srcData,usage);
	}
}
WebGL2RenderContext_Impl_.bufferSubData = function(this1,target,dstByteOffset,srcData,srcOffset,length) {
	if(srcOffset != null) {
		this1.bufferSubData(target,dstByteOffset,srcData,srcOffset,length);
	} else {
		this1.bufferSubData(target,dstByteOffset,srcData);
	}
}
WebGL2RenderContext_Impl_.compressedTexImage2D = function(this1,target,level,internalformat,width,height,border,srcData,srcOffset,srcLengthOverride) {
	if(srcOffset != null) {
		this1.compressedTexImage2D(target,level,internalformat,width,height,border,srcData,srcOffset,srcLengthOverride);
	} else {
		this1.compressedTexImage2D(target,level,internalformat,width,height,border,srcData);
	}
}
WebGL2RenderContext_Impl_.compressedTexSubImage2D = function(this1,target,level,xoffset,yoffset,width,height,format,srcData,srcOffset,srcLengthOverride) {
	if(srcOffset != null) {
		this1.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,srcData,srcOffset,srcLengthOverride);
	} else {
		this1.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,srcData);
	}
}
WebGL2RenderContext_Impl_.getBufferSubData = function(this1,target,srcByteOffset,dstData,srcOffset,length) {
	if(srcOffset != null) {
		this1.getBufferSubData(target,srcByteOffset,dstData,srcOffset,length);
	} else {
		this1.getBufferSubData(target,srcByteOffset,dstData);
	}
}
WebGL2RenderContext_Impl_.readPixels = function(this1,x,y,width,height,format,type,pixels,dstOffset) {
	if(dstOffset != null) {
		this1.readPixels(x,y,width,height,format,type,pixels,dstOffset);
	} else {
		this1.readPixels(x,y,width,height,format,type,pixels);
	}
}
WebGL2RenderContext_Impl_.texImage2D = function(this1,target,level,internalformat,width,height,border,format,type,srcData,srcOffset) {
	if(srcOffset != null) {
		this1.texImage2D(target,level,internalformat,width,height,border,format,type,srcData,srcOffset);
	} else if(format != null) {
		this1.texImage2D(target,level,internalformat,width,height,border,format,type,srcData);
	} else {
		this1.texImage2D(target,level,internalformat,width,height,border);
	}
}
WebGL2RenderContext_Impl_.texSubImage2D = function(this1,target,level,xoffset,yoffset,width,height,format,type,srcData,srcOffset) {
	if(srcOffset != null) {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,srcData,srcOffset);
	} else if(type != null) {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,srcData);
	} else {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format);
	}
}
WebGL2RenderContext_Impl_.uniform1fv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform1fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform1fv(location,data);
	}
}
WebGL2RenderContext_Impl_.uniform1iv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform1iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform1iv(location,data);
	}
}
WebGL2RenderContext_Impl_.uniform2fv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform2fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform2fv(location,data);
	}
}
WebGL2RenderContext_Impl_.uniform2iv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform2iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform2iv(location,data);
	}
}
WebGL2RenderContext_Impl_.uniform3fv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform3fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform3fv(location,data);
	}
}
WebGL2RenderContext_Impl_.uniform3iv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform3iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform3iv(location,data);
	}
}
WebGL2RenderContext_Impl_.uniform4fv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform4fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform4fv(location,data);
	}
}
WebGL2RenderContext_Impl_.uniform4iv = function(this1,location,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniform4iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform4iv(location,data);
	}
}
WebGL2RenderContext_Impl_.uniformMatrix2fv = function(this1,location,transpose,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniformMatrix2fv(location,transpose,data,srcOffset,srcLength);
	} else {
		this1.uniformMatrix2fv(location,transpose,data);
	}
}
WebGL2RenderContext_Impl_.uniformMatrix3fv = function(this1,location,transpose,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniformMatrix3fv(location,transpose,data,srcOffset,srcLength);
	} else {
		this1.uniformMatrix3fv(location,transpose,data);
	}
}
WebGL2RenderContext_Impl_.uniformMatrix4fv = function(this1,location,transpose,data,srcOffset,srcLength) {
	if(srcOffset != null) {
		this1.uniformMatrix4fv(location,transpose,data,srcOffset,srcLength);
	} else {
		this1.uniformMatrix4fv(location,transpose,data);
	}
}
WebGL2RenderContext_Impl_.fromGL = function(gl) {
	return null;
}
WebGL2RenderContext_Impl_.fromRenderContext = function(context) {
	return context.webgl2;
}
WebGL2RenderContext_Impl_.toWebGLRenderContext = function(gl) {
	return gl;
}


// Export

exports.default = WebGL2RenderContext_Impl_;