// Class: lime.graphics.opengl.GL

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_utils__$DataPointer_DataPointer_$Impl_$() {return require("./../../../lime/utils/_DataPointer/DataPointer_Impl_");}
function lime_graphics__$WebGL2RenderContext_WebGL2RenderContext_$Impl_$() {return require("./../../../lime/graphics/_WebGL2RenderContext/WebGL2RenderContext_Impl_");}

// Constructor

var GL = function(){}

// Meta

GL.__name__ = "lime.graphics.opengl.GL";
GL.__isInterface__ = false;
GL.prototype = {
	
};
GL.prototype.__class__ = GL.prototype.constructor = $hxClasses["lime.graphics.opengl.GL"] = GL;

// Init



// Statics

GL.activeTexture = function(texture) {
	GL.context.activeTexture(texture);
}
GL.attachShader = function(program,shader) {
	GL.context.attachShader(program,shader);
}
GL.beginQuery = function(target,query) {
	GL.context.beginQuery(target,query);
}
GL.beginTransformFeedback = function(primitiveNode) {
	GL.context.beginTransformFeedback(primitiveNode);
}
GL.bindAttribLocation = function(program,index,name) {
	GL.context.bindAttribLocation(program,index,name);
}
GL.bindBuffer = function(target,buffer) {
	GL.context.bindBuffer(target,buffer);
}
GL.bindBufferBase = function(target,index,buffer) {
	GL.context.bindBufferBase(target,index,buffer);
}
GL.bindBufferRange = function(target,index,buffer,offset,size) {
	GL.context.bindBufferRange(target,index,buffer,offset,(lime_utils__$DataPointer_DataPointer_$Impl_$().default).fromFloat(size));
}
GL.bindFramebuffer = function(target,framebuffer) {
	GL.context.bindFramebuffer(target,framebuffer);
}
GL.bindRenderbuffer = function(target,renderbuffer) {
	GL.context.bindRenderbuffer(target,renderbuffer);
}
GL.bindSampler = function(unit,sampler) {
	GL.context.bindSampler(unit,sampler);
}
GL.bindTexture = function(target,texture) {
	GL.context.bindTexture(target,texture);
}
GL.bindTransformFeedback = function(target,transformFeedback) {
	GL.context.bindTransformFeedback(target,transformFeedback);
}
GL.bindVertexArray = function(vertexArray) {
	GL.context.bindVertexArray(vertexArray);
}
GL.blitFramebuffer = function(srcX0,srcY0,srcX1,srcY1,dstX0,dstY0,dstX1,dstY1,mask,filter) {
	GL.context.blitFramebuffer(srcX0,srcY0,srcX1,srcY1,dstX0,dstY0,dstX1,dstY1,mask,filter);
}
GL.blendColor = function(red,green,blue,alpha) {
	GL.context.blendColor(red,green,blue,alpha);
}
GL.blendEquation = function(mode) {
	GL.context.blendEquation(mode);
}
GL.blendEquationSeparate = function(modeRGB,modeAlpha) {
	GL.context.blendEquationSeparate(modeRGB,modeAlpha);
}
GL.blendFunc = function(sfactor,dfactor) {
	GL.context.blendFunc(sfactor,dfactor);
}
GL.blendFuncSeparate = function(srcRGB,dstRGB,srcAlpha,dstAlpha) {
	GL.context.blendFuncSeparate(srcRGB,dstRGB,srcAlpha,dstAlpha);
}
GL.bufferDataWEBGL = function(target,srcData,usage,srcOffset,length) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.bufferData(target,srcData,usage,srcOffset,length);
	} else {
		this1.bufferData(target,srcData,usage);
	}
}
GL.bufferSubDataWEBGL = function(target,dstByteOffset,srcData,srcOffset,length) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.bufferSubData(target,dstByteOffset,srcData,srcOffset,length);
	} else {
		this1.bufferSubData(target,dstByteOffset,srcData);
	}
}
GL.checkFramebufferStatus = function(target) {
	return GL.context.checkFramebufferStatus(target);
}
GL.clear = function(mask) {
	GL.context.clear(mask);
}
GL.clearBufferfi = function(buffer,drawbuffer,depth,stencil) {
	GL.context.clearBufferfi(buffer,drawbuffer,depth,stencil);
}
GL.clearBufferfvWEBGL = function(buffer,drawbuffer,values,srcOffset) {
	GL.context.clearBufferfv(buffer,drawbuffer,values,srcOffset);
}
GL.clearBufferivWEBGL = function(buffer,drawbuffer,values,srcOffset) {
	GL.context.clearBufferiv(buffer,drawbuffer,values,srcOffset);
}
GL.clearBufferuivWEBGL = function(buffer,drawbuffer,values,srcOffset) {
	GL.context.clearBufferuiv(buffer,drawbuffer,values,srcOffset);
}
GL.clearColor = function(red,green,blue,alpha) {
	GL.context.clearColor(red,green,blue,alpha);
}
GL.clearDepth = function(depth) {
	GL.context.clearDepth(depth);
}
GL.clearStencil = function(s) {
	GL.context.clearStencil(s);
}
GL.clientWaitSync = function(sync,flags,timeout) {
	return GL.context.clientWaitSync(sync,flags,timeout);
}
GL.colorMask = function(red,green,blue,alpha) {
	GL.context.colorMask(red,green,blue,alpha);
}
GL.compileShader = function(shader) {
	GL.context.compileShader(shader);
}
GL.compressedTexImage2DWEBGL = function(target,level,internalformat,width,height,border,srcData,srcOffset,srcLengthOverride) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.compressedTexImage2D(target,level,internalformat,width,height,border,srcData,srcOffset,srcLengthOverride);
	} else {
		this1.compressedTexImage2D(target,level,internalformat,width,height,border,srcData);
	}
}
GL.compressedTexImage3DWEBGL = function(target,level,internalformat,width,height,depth,border,srcData,srcOffset,srcLengthOverride) {
	GL.context.compressedTexImage3D(target,level,internalformat,width,height,depth,border,srcData,srcOffset,srcLengthOverride);
}
GL.compressedTexSubImage2DWEBGL = function(target,level,xoffset,yoffset,width,height,format,srcData,srcOffset,srcLengthOverride) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,srcData,srcOffset,srcLengthOverride);
	} else {
		this1.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,srcData);
	}
}
GL.compressedTexSubImage3DWEBGL = function(target,level,xoffset,yoffset,zoffset,width,height,depth,format,srcData,srcOffset,srcLengthOverride) {
	GL.context.compressedTexSubImage3D(target,level,xoffset,yoffset,zoffset,width,height,depth,format,srcData,srcOffset,srcLengthOverride);
}
GL.copyTexImage2D = function(target,level,internalformat,x,y,width,height,border) {
	GL.context.copyTexImage2D(target,level,internalformat,x,y,width,height,border);
}
GL.copyTexSubImage2D = function(target,level,xoffset,yoffset,x,y,width,height) {
	GL.context.copyTexSubImage2D(target,level,xoffset,yoffset,x,y,width,height);
}
GL.copyTexSubImage3D = function(target,level,xoffset,yoffset,zoffset,x,y,width,height) {
	GL.context.copyTexSubImage3D(target,level,xoffset,yoffset,zoffset,x,y,width,height);
}
GL.createBuffer = function() {
	return GL.context.createBuffer();
}
GL.createFramebuffer = function() {
	return GL.context.createFramebuffer();
}
GL.createProgram = function() {
	return GL.context.createProgram();
}
GL.createQuery = function() {
	return GL.context.createQuery();
}
GL.createRenderbuffer = function() {
	return GL.context.createRenderbuffer();
}
GL.createSampler = function() {
	return GL.context.createSampler();
}
GL.createShader = function(type) {
	return GL.context.createShader(type);
}
GL.createTexture = function() {
	return GL.context.createTexture();
}
GL.createTransformFeedback = function() {
	return GL.context.createTransformFeedback();
}
GL.createVertexArray = function() {
	return GL.context.createVertexArray();
}
GL.cullFace = function(mode) {
	GL.context.cullFace(mode);
}
GL.deleteBuffer = function(buffer) {
	GL.context.deleteBuffer(buffer);
}
GL.deleteFramebuffer = function(framebuffer) {
	GL.context.deleteFramebuffer(framebuffer);
}
GL.deleteProgram = function(program) {
	GL.context.deleteProgram(program);
}
GL.deleteQuery = function(query) {
	GL.context.deleteQuery(query);
}
GL.deleteRenderbuffer = function(renderbuffer) {
	GL.context.deleteRenderbuffer(renderbuffer);
}
GL.deleteSampler = function(sampler) {
	GL.context.deleteSampler(sampler);
}
GL.deleteShader = function(shader) {
	GL.context.deleteShader(shader);
}
GL.deleteSync = function(sync) {
	GL.context.deleteSync(sync);
}
GL.deleteTexture = function(texture) {
	GL.context.deleteTexture(texture);
}
GL.deleteTransformFeedback = function(transformFeedback) {
	GL.context.deleteTransformFeedback(transformFeedback);
}
GL.deleteVertexArray = function(vertexArray) {
	GL.context.deleteVertexArray(vertexArray);
}
GL.depthFunc = function(func) {
	GL.context.depthFunc(func);
}
GL.depthMask = function(flag) {
	GL.context.depthMask(flag);
}
GL.depthRange = function(zNear,zFar) {
	GL.context.depthRange(zNear,zFar);
}
GL.detachShader = function(program,shader) {
	GL.context.detachShader(program,shader);
}
GL.disable = function(cap) {
	GL.context.disable(cap);
}
GL.disableVertexAttribArray = function(index) {
	GL.context.disableVertexAttribArray(index);
}
GL.drawArrays = function(mode,first,count) {
	GL.context.drawArrays(mode,first,count);
}
GL.drawArraysInstanced = function(mode,first,count,instanceCount) {
	GL.context.drawArraysInstanced(mode,first,count,instanceCount);
}
GL.drawBuffers = function(buffers) {
	GL.context.drawBuffers(buffers);
}
GL.drawElements = function(mode,count,type,offset) {
	GL.context.drawElements(mode,count,type,offset);
}
GL.drawElementsInstanced = function(mode,count,type,offset,instanceCount) {
	GL.context.drawElementsInstanced(mode,count,type,offset,instanceCount);
}
GL.drawRangeElements = function(mode,start,end,count,type,offset) {
	GL.context.drawRangeElements(mode,start,end,count,type,offset);
}
GL.enable = function(cap) {
	GL.context.enable(cap);
}
GL.enableVertexAttribArray = function(index) {
	GL.context.enableVertexAttribArray(index);
}
GL.endQuery = function(target) {
	GL.context.endQuery(target);
}
GL.endTransformFeedback = function() {
	GL.context.endTransformFeedback();
}
GL.fenceSync = function(condition,flags) {
	return GL.context.fenceSync(condition,flags);
}
GL.finish = function() {
	GL.context.finish();
}
GL.flush = function() {
	GL.context.flush();
}
GL.framebufferRenderbuffer = function(target,attachment,renderbuffertarget,renderbuffer) {
	GL.context.framebufferRenderbuffer(target,attachment,renderbuffertarget,renderbuffer);
}
GL.framebufferTexture2D = function(target,attachment,textarget,texture,level) {
	GL.context.framebufferTexture2D(target,attachment,textarget,texture,level);
}
GL.framebufferTextureLayer = function(target,attachment,texture,level,layer) {
	GL.context.framebufferTextureLayer(target,attachment,texture,level,layer);
}
GL.frontFace = function(mode) {
	GL.context.frontFace(mode);
}
GL.generateMipmap = function(target) {
	GL.context.generateMipmap(target);
}
GL.getActiveAttrib = function(program,index) {
	return GL.context.getActiveAttrib(program,index);
}
GL.getActiveUniform = function(program,index) {
	return GL.context.getActiveUniform(program,index);
}
GL.getActiveUniformBlockName = function(program,uniformBlockIndex) {
	return GL.context.getActiveUniformBlockName(program,uniformBlockIndex);
}
GL.getActiveUniformBlockParameter = function(program,uniformBlockIndex,pname) {
	return GL.context.getActiveUniformBlockParameter(program,uniformBlockIndex,pname);
}
GL.getActiveUniforms = function(program,uniformIndices,pname) {
	return GL.context.getActiveUniforms(program,uniformIndices,pname);
}
GL.getAttachedShaders = function(program) {
	return GL.context.getAttachedShaders(program);
}
GL.getAttribLocation = function(program,name) {
	return GL.context.getAttribLocation(program,name);
}
GL.getBufferParameter = function(target,pname) {
	return GL.context.getBufferParameter(target,pname);
}
GL.getBufferSubDataWEBGL = function(target,srcByteOffset,dstData,srcOffset,length) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.getBufferSubData(target,srcByteOffset,dstData,srcOffset,length);
	} else {
		this1.getBufferSubData(target,srcByteOffset,dstData);
	}
}
GL.getContextAttributes = function() {
	return GL.context.getContextAttributes();
}
GL.getError = function() {
	return GL.context.getError();
}
GL.getExtension = function(name) {
	return GL.context.getExtension(name);
}
GL.getFragDataLocation = function(program,name) {
	return GL.context.getFragDataLocation(program,name);
}
GL.getFramebufferAttachmentParameter = function(target,attachment,pname) {
	return GL.context.getFramebufferAttachmentParameter(target,attachment,pname);
}
GL.getIndexedParameter = function(target,index) {
	return GL.context.getIndexedParameter(target,index);
}
GL.getInternalformatParameter = function(target,internalformat,pname) {
	return GL.context.getInternalformatParameter(target,internalformat,pname);
}
GL.getParameter = function(pname) {
	return GL.context.getParameter(pname);
}
GL.getProgramInfoLog = function(program) {
	return GL.context.getProgramInfoLog(program);
}
GL.getProgramParameter = function(program,pname) {
	return GL.context.getProgramParameter(program,pname);
}
GL.getQuery = function(target,pname) {
	return GL.context.getQuery(target,pname);
}
GL.getQueryParameter = function(query,pname) {
	return GL.context.getQueryParameter(query,pname);
}
GL.getRenderbufferParameter = function(target,pname) {
	return GL.context.getRenderbufferParameter(target,pname);
}
GL.getSamplerParameter = function(sampler,pname) {
	return GL.context.getSamplerParameter(sampler,pname);
}
GL.getShaderInfoLog = function(shader) {
	return GL.context.getShaderInfoLog(shader);
}
GL.getShaderParameter = function(shader,pname) {
	return GL.context.getShaderParameter(shader,pname);
}
GL.getShaderPrecisionFormat = function(shadertype,precisiontype) {
	return GL.context.getShaderPrecisionFormat(shadertype,precisiontype);
}
GL.getShaderSource = function(shader) {
	return GL.context.getShaderSource(shader);
}
GL.getSupportedExtensions = function() {
	return GL.context.getSupportedExtensions();
}
GL.getSyncParameter = function(sync,pname) {
	return GL.context.getSyncParameter(sync,pname);
}
GL.getTexParameter = function(target,pname) {
	return GL.context.getTexParameter(target,pname);
}
GL.getTransformFeedbackVarying = function(program,index) {
	return GL.context.getTransformFeedbackVarying(program,index);
}
GL.getUniform = function(program,location) {
	return GL.context.getUniform(program,location);
}
GL.getUniformBlockIndex = function(program,uniformBlockName) {
	return GL.context.getUniformBlockIndex(program,uniformBlockName);
}
GL.getUniformIndices = function(program,uniformNames) {
	return GL.context.getUniformIndices(program,uniformNames);
}
GL.getUniformLocation = function(program,name) {
	return GL.context.getUniformLocation(program,name);
}
GL.getVertexAttrib = function(index,pname) {
	return GL.context.getVertexAttrib(index,pname);
}
GL.getVertexAttribOffset = function(index,pname) {
	return (lime_utils__$DataPointer_DataPointer_$Impl_$().default).fromFloat(GL.context.getVertexAttribOffset(index,pname));
}
GL.hint = function(target,mode) {
	GL.context.hint(target,mode);
}
GL.invalidateFramebuffer = function(target,attachments) {
	GL.context.invalidateFramebuffer(target,attachments);
}
GL.invalidateSubFramebuffer = function(target,attachments,x,y,width,height) {
	GL.context.invalidateSubFramebuffer(target,attachments,x,y,width,height);
}
GL.isBuffer = function(buffer) {
	return GL.context.isBuffer(buffer);
}
GL.isContextLost = function() {
	return GL.context.isContextLost();
}
GL.isEnabled = function(cap) {
	return GL.context.isEnabled(cap);
}
GL.isFramebuffer = function(framebuffer) {
	return GL.context.isFramebuffer(framebuffer);
}
GL.isProgram = function(program) {
	return GL.context.isProgram(program);
}
GL.isQuery = function(query) {
	return GL.context.isQuery(query);
}
GL.isRenderbuffer = function(renderbuffer) {
	return GL.context.isRenderbuffer(renderbuffer);
}
GL.isSampler = function(sampler) {
	return GL.context.isSampler(sampler);
}
GL.isShader = function(shader) {
	return GL.context.isShader(shader);
}
GL.isSync = function(sync) {
	return GL.context.isSync(sync);
}
GL.isTexture = function(texture) {
	return GL.context.isTexture(texture);
}
GL.isTransformFeedback = function(transformFeedback) {
	return GL.context.isTransformFeedback(transformFeedback);
}
GL.isVertexArray = function(vertexArray) {
	return GL.context.isVertexArray(vertexArray);
}
GL.lineWidth = function(width) {
	GL.context.lineWidth(width);
}
GL.linkProgram = function(program) {
	GL.context.linkProgram(program);
}
GL.pauseTransformFeedback = function() {
	GL.context.pauseTransformFeedback();
}
GL.pixelStorei = function(pname,param) {
	GL.context.pixelStorei(pname,param);
}
GL.polygonOffset = function(factor,units) {
	GL.context.polygonOffset(factor,units);
}
GL.readBuffer = function(src) {
	GL.context.readBuffer(src);
}
GL.readPixelsWEBGL = function(x,y,width,height,format,type,pixels,dstOffset) {
	var this1 = GL.context;
	if(dstOffset != null) {
		this1.readPixels(x,y,width,height,format,type,pixels,dstOffset);
	} else {
		this1.readPixels(x,y,width,height,format,type,pixels);
	}
}
GL.renderbufferStorage = function(target,internalformat,width,height) {
	GL.context.renderbufferStorage(target,internalformat,width,height);
}
GL.renderbufferStorageMultisample = function(target,samples,internalformat,width,height) {
	GL.context.renderbufferStorageMultisample(target,samples,internalformat,width,height);
}
GL.resumeTransformFeedback = function() {
	GL.context.resumeTransformFeedback();
}
GL.sampleCoverage = function(value,invert) {
	GL.context.sampleCoverage(value,invert);
}
GL.samplerParameterf = function(sampler,pname,param) {
	GL.context.samplerParameterf(sampler,pname,param);
}
GL.samplerParameteri = function(sampler,pname,param) {
	GL.context.samplerParameteri(sampler,pname,param);
}
GL.scissor = function(x,y,width,height) {
	GL.context.scissor(x,y,width,height);
}
GL.shaderSource = function(shader,source) {
	GL.context.shaderSource(shader,source);
}
GL.stencilFunc = function(func,ref,mask) {
	GL.context.stencilFunc(func,ref,mask);
}
GL.stencilFuncSeparate = function(face,func,ref,mask) {
	GL.context.stencilFuncSeparate(face,func,ref,mask);
}
GL.stencilMask = function(mask) {
	GL.context.stencilMask(mask);
}
GL.stencilMaskSeparate = function(face,mask) {
	GL.context.stencilMaskSeparate(face,mask);
}
GL.stencilOp = function(fail,zfail,zpass) {
	GL.context.stencilOp(fail,zfail,zpass);
}
GL.stencilOpSeparate = function(face,fail,zfail,zpass) {
	GL.context.stencilOpSeparate(face,fail,zfail,zpass);
}
GL.texImage2DWEBGL = function(target,level,internalformat,width,height,border,format,type,srcData,srcOffset) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.texImage2D(target,level,internalformat,width,height,border,format,type,srcData,srcOffset);
	} else if(format != null) {
		this1.texImage2D(target,level,internalformat,width,height,border,format,type,srcData);
	} else {
		this1.texImage2D(target,level,internalformat,width,height,border);
	}
}
GL.texImage3DWEBGL = function(target,level,internalformat,width,height,depth,border,format,type,srcData,srcOffset) {
	GL.context.texImage3D(target,level,internalformat,width,height,depth,border,format,type,srcData,srcOffset);
}
GL.texStorage2D = function(target,level,internalformat,width,height) {
	GL.context.texStorage2D(target,level,internalformat,width,height);
}
GL.texStorage3D = function(target,level,internalformat,width,height,depth) {
	GL.context.texStorage3D(target,level,internalformat,width,height,depth);
}
GL.texParameterf = function(target,pname,param) {
	GL.context.texParameterf(target,pname,param);
}
GL.texParameteri = function(target,pname,param) {
	GL.context.texParameteri(target,pname,param);
}
GL.texSubImage2DWEBGL = function(target,level,xoffset,yoffset,width,height,format,type,srcData,srcOffset) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,srcData,srcOffset);
	} else if(type != null) {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,srcData);
	} else {
		this1.texSubImage2D(target,level,xoffset,yoffset,width,height,format);
	}
}
GL.texSubImage3DWEBGL = function(target,level,xoffset,yoffset,zoffset,width,height,depth,format,type,source,srcOffset) {
	GL.context.texSubImage3D(target,level,xoffset,yoffset,zoffset,width,height,depth,format,type,source,srcOffset);
}
GL.transformFeedbackVaryings = function(program,varyings,bufferMode) {
	GL.context.transformFeedbackVaryings(program,varyings,bufferMode);
}
GL.uniform1f = function(location,v0) {
	GL.context.uniform1f(location,v0);
}
GL.uniform1fvWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.uniform1fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform1fv(location,data);
	}
}
GL.uniform1i = function(location,v0) {
	GL.context.uniform1i(location,v0);
}
GL.uniform1ivWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.uniform1iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform1iv(location,data);
	}
}
GL.uniform1ui = function(location,v0) {
	GL.context.uniform1ui(location,v0);
}
GL.uniform1uivWEBGL = function(location,data,srcOffset,srcLength) {
	GL.context.uniform1uiv(location,data,srcOffset,srcLength);
}
GL.uniform2f = function(location,v0,v1) {
	GL.context.uniform2f(location,v0,v1);
}
GL.uniform2fvWEBGL = function(location,data,srcOffset,srcLength) {
	(lime_graphics__$WebGL2RenderContext_WebGL2RenderContext_$Impl_$().default).uniform2fv(GL.context,location,data,srcOffset,srcLength);
}
GL.uniform2i = function(location,x,y) {
	GL.context.uniform2i(location,x,y);
}
GL.uniform2ivWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.uniform2iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform2iv(location,data);
	}
}
GL.uniform2ui = function(location,x,y) {
	GL.context.uniform2ui(location,x,y);
}
GL.uniform2uivWEBGL = function(location,data,srcOffset,srcLength) {
	GL.context.uniform2uiv(location,data,srcOffset,srcLength);
}
GL.uniform3f = function(location,v0,v1,v2) {
	GL.context.uniform3f(location,v0,v1,v2);
}
GL.uniform3fvWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.uniform3fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform3fv(location,data);
	}
}
GL.uniform3i = function(location,v0,v1,v2) {
	GL.context.uniform3i(location,v0,v1,v2);
}
GL.uniform3ivWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.uniform3iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform3iv(location,data);
	}
}
GL.uniform3ui = function(location,v0,v1,v2) {
	GL.context.uniform3ui(location,v0,v1,v2);
}
GL.uniform3uivWEBGL = function(location,data,srcOffset,srcLength) {
	GL.context.uniform3uiv(location,data,srcOffset,srcLength);
}
GL.uniform4f = function(location,v0,v1,v2,v3) {
	GL.context.uniform4f(location,v0,v1,v2,v3);
}
GL.uniform4fvWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.uniform4fv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform4fv(location,data);
	}
}
GL.uniform4i = function(location,v0,v1,v2,v3) {
	GL.context.uniform4i(location,v0,v1,v2,v3);
}
GL.uniform4ivWEBGL = function(location,data,srcOffset,srcLength) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.uniform4iv(location,data,srcOffset,srcLength);
	} else {
		this1.uniform4iv(location,data);
	}
}
GL.uniform4ui = function(location,v0,v1,v2,v3) {
	GL.context.uniform4ui(location,v0,v1,v2,v3);
}
GL.uniform4uivWEBGL = function(location,data,srcOffset,srcLength) {
	GL.context.uniform4uiv(location,data,srcOffset,srcLength);
}
GL.uniformBlockBinding = function(program,uniformBlockIndex,uniformBlockBinding) {
	GL.context.uniformBlockBinding(program,uniformBlockIndex,uniformBlockBinding);
}
GL.uniformMatrix2fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.uniformMatrix2fv(location,transpose,v,srcOffset,srcLength);
	} else {
		this1.uniformMatrix2fv(location,transpose,v);
	}
}
GL.uniformMatrix2x3fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	GL.context.uniformMatrix2x3fv(location,transpose,v,srcOffset,srcLength);
}
GL.uniformMatrix2x4fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	GL.context.uniformMatrix2x4fv(location,transpose,v,srcOffset,srcLength);
}
GL.uniformMatrix3fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.uniformMatrix3fv(location,transpose,v,srcOffset,srcLength);
	} else {
		this1.uniformMatrix3fv(location,transpose,v);
	}
}
GL.uniformMatrix3x2fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	GL.context.uniformMatrix3x2fv(location,transpose,v,srcOffset,srcLength);
}
GL.uniformMatrix3x4fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	GL.context.uniformMatrix3x4fv(location,transpose,v,srcOffset,srcLength);
}
GL.uniformMatrix4fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	var this1 = GL.context;
	if(srcOffset != null) {
		this1.uniformMatrix4fv(location,transpose,v,srcOffset,srcLength);
	} else {
		this1.uniformMatrix4fv(location,transpose,v);
	}
}
GL.uniformMatrix4x2fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	GL.context.uniformMatrix4x2fv(location,transpose,v,srcOffset,srcLength);
}
GL.uniformMatrix4x3fvWEBGL = function(location,transpose,v,srcOffset,srcLength) {
	GL.context.uniformMatrix4x3fv(location,transpose,v,srcOffset,srcLength);
}
GL.useProgram = function(program) {
	GL.context.useProgram(program);
}
GL.validateProgram = function(program) {
	GL.context.validateProgram(program);
}
GL.vertexAttrib1f = function(index,v0) {
	GL.context.vertexAttrib1f(index,v0);
}
GL.vertexAttrib1fv = function(index,v) {
	GL.context.vertexAttrib1fv(index,v);
}
GL.vertexAttrib1fvWEBGL = function(index,v) {
	GL.context.vertexAttrib1fv(index,v);
}
GL.vertexAttrib2f = function(index,v0,v1) {
	GL.context.vertexAttrib2f(index,v0,v1);
}
GL.vertexAttrib2fv = function(index,v) {
	GL.context.vertexAttrib2fv(index,v);
}
GL.vertexAttrib2fvWEBGL = function(index,v) {
	GL.context.vertexAttrib2fv(index,v);
}
GL.vertexAttrib3f = function(index,v0,v1,v2) {
	GL.context.vertexAttrib3f(index,v0,v1,v2);
}
GL.vertexAttrib3fv = function(index,v) {
	GL.context.vertexAttrib3fv(index,v);
}
GL.vertexAttrib3fvWEBGL = function(index,v) {
	GL.context.vertexAttrib3fv(index,v);
}
GL.vertexAttrib4f = function(index,v0,v1,v2,v3) {
	GL.context.vertexAttrib4f(index,v0,v1,v2,v3);
}
GL.vertexAttrib4fv = function(index,v) {
	GL.context.vertexAttrib4fv(index,v);
}
GL.vertexAttrib4fvWEBGL = function(index,v) {
	GL.context.vertexAttrib4fv(index,v);
}
GL.vertexAttribDivisor = function(index,divisor) {
	GL.context.vertexAttribDivisor(index,divisor);
}
GL.vertexAttribI4i = function(index,v0,v1,v2,v3) {
	GL.context.vertexAttribI4i(index,v0,v1,v2,v3);
}
GL.vertexAttribI4iv = function(index,v) {
	GL.context.vertexAttribI4iv(index,v);
}
GL.vertexAttribI4ivWEBGL = function(index,v) {
	GL.context.vertexAttribI4iv(index,v);
}
GL.vertexAttribI4ui = function(index,v0,v1,v2,v3) {
	GL.context.vertexAttribI4ui(index,v0,v1,v2,v3);
}
GL.vertexAttribI4uiv = function(index,v) {
	GL.context.vertexAttribI4uiv(index,v);
}
GL.vertexAttribI4uivWEBGL = function(index,v) {
	GL.context.vertexAttribI4uiv(index,v);
}
GL.vertexAttribIPointer = function(index,size,type,stride,offset) {
	GL.context.vertexAttribIPointer(index,size,type,stride,offset);
}
GL.vertexAttribPointer = function(index,size,type,normalized,stride,offset) {
	GL.context.vertexAttribPointer(index,size,type,normalized,stride,offset);
}
GL.viewport = function(x,y,width,height) {
	GL.context.viewport(x,y,width,height);
}
GL.waitSync = function(sync,flags,timeout) {
	GL.context.waitSync(sync,flags,timeout);
}
GL.__getObjectID = function(object) {
	if(object == null) {
		return 0;
	} else {
		return object.id;
	}
}
GL.DEPTH_BUFFER_BIT = 256
GL.STENCIL_BUFFER_BIT = 1024
GL.COLOR_BUFFER_BIT = 16384
GL.POINTS = 0
GL.LINES = 1
GL.LINE_LOOP = 2
GL.LINE_STRIP = 3
GL.TRIANGLES = 4
GL.TRIANGLE_STRIP = 5
GL.TRIANGLE_FAN = 6
GL.ZERO = 0
GL.ONE = 1
GL.SRC_COLOR = 768
GL.ONE_MINUS_SRC_COLOR = 769
GL.SRC_ALPHA = 770
GL.ONE_MINUS_SRC_ALPHA = 771
GL.DST_ALPHA = 772
GL.ONE_MINUS_DST_ALPHA = 773
GL.DST_COLOR = 774
GL.ONE_MINUS_DST_COLOR = 775
GL.SRC_ALPHA_SATURATE = 776
GL.FUNC_ADD = 32774
GL.BLEND_EQUATION = 32777
GL.BLEND_EQUATION_RGB = 32777
GL.BLEND_EQUATION_ALPHA = 34877
GL.FUNC_SUBTRACT = 32778
GL.FUNC_REVERSE_SUBTRACT = 32779
GL.BLEND_DST_RGB = 32968
GL.BLEND_SRC_RGB = 32969
GL.BLEND_DST_ALPHA = 32970
GL.BLEND_SRC_ALPHA = 32971
GL.CONSTANT_COLOR = 32769
GL.ONE_MINUS_CONSTANT_COLOR = 32770
GL.CONSTANT_ALPHA = 32771
GL.ONE_MINUS_CONSTANT_ALPHA = 32772
GL.BLEND_COLOR = 32773
GL.ARRAY_BUFFER = 34962
GL.ELEMENT_ARRAY_BUFFER = 34963
GL.ARRAY_BUFFER_BINDING = 34964
GL.ELEMENT_ARRAY_BUFFER_BINDING = 34965
GL.STREAM_DRAW = 35040
GL.STATIC_DRAW = 35044
GL.DYNAMIC_DRAW = 35048
GL.BUFFER_SIZE = 34660
GL.BUFFER_USAGE = 34661
GL.CURRENT_VERTEX_ATTRIB = 34342
GL.FRONT = 1028
GL.BACK = 1029
GL.FRONT_AND_BACK = 1032
GL.CULL_FACE = 2884
GL.BLEND = 3042
GL.DITHER = 3024
GL.STENCIL_TEST = 2960
GL.DEPTH_TEST = 2929
GL.SCISSOR_TEST = 3089
GL.POLYGON_OFFSET_FILL = 32823
GL.SAMPLE_ALPHA_TO_COVERAGE = 32926
GL.SAMPLE_COVERAGE = 32928
GL.NO_ERROR = 0
GL.INVALID_ENUM = 1280
GL.INVALID_VALUE = 1281
GL.INVALID_OPERATION = 1282
GL.OUT_OF_MEMORY = 1285
GL.CW = 2304
GL.CCW = 2305
GL.LINE_WIDTH = 2849
GL.ALIASED_POINT_SIZE_RANGE = 33901
GL.ALIASED_LINE_WIDTH_RANGE = 33902
GL.CULL_FACE_MODE = 2885
GL.FRONT_FACE = 2886
GL.DEPTH_RANGE = 2928
GL.DEPTH_WRITEMASK = 2930
GL.DEPTH_CLEAR_VALUE = 2931
GL.DEPTH_FUNC = 2932
GL.STENCIL_CLEAR_VALUE = 2961
GL.STENCIL_FUNC = 2962
GL.STENCIL_FAIL = 2964
GL.STENCIL_PASS_DEPTH_FAIL = 2965
GL.STENCIL_PASS_DEPTH_PASS = 2966
GL.STENCIL_REF = 2967
GL.STENCIL_VALUE_MASK = 2963
GL.STENCIL_WRITEMASK = 2968
GL.STENCIL_BACK_FUNC = 34816
GL.STENCIL_BACK_FAIL = 34817
GL.STENCIL_BACK_PASS_DEPTH_FAIL = 34818
GL.STENCIL_BACK_PASS_DEPTH_PASS = 34819
GL.STENCIL_BACK_REF = 36003
GL.STENCIL_BACK_VALUE_MASK = 36004
GL.STENCIL_BACK_WRITEMASK = 36005
GL.VIEWPORT = 2978
GL.SCISSOR_BOX = 3088
GL.COLOR_CLEAR_VALUE = 3106
GL.COLOR_WRITEMASK = 3107
GL.UNPACK_ALIGNMENT = 3317
GL.PACK_ALIGNMENT = 3333
GL.MAX_TEXTURE_SIZE = 3379
GL.MAX_VIEWPORT_DIMS = 3386
GL.SUBPIXEL_BITS = 3408
GL.RED_BITS = 3410
GL.GREEN_BITS = 3411
GL.BLUE_BITS = 3412
GL.ALPHA_BITS = 3413
GL.DEPTH_BITS = 3414
GL.STENCIL_BITS = 3415
GL.POLYGON_OFFSET_UNITS = 10752
GL.POLYGON_OFFSET_FACTOR = 32824
GL.TEXTURE_BINDING_2D = 32873
GL.SAMPLE_BUFFERS = 32936
GL.SAMPLES = 32937
GL.SAMPLE_COVERAGE_VALUE = 32938
GL.SAMPLE_COVERAGE_INVERT = 32939
GL.NUM_COMPRESSED_TEXTURE_FORMATS = 34466
GL.COMPRESSED_TEXTURE_FORMATS = 34467
GL.DONT_CARE = 4352
GL.FASTEST = 4353
GL.NICEST = 4354
GL.GENERATE_MIPMAP_HINT = 33170
GL.BYTE = 5120
GL.UNSIGNED_BYTE = 5121
GL.SHORT = 5122
GL.UNSIGNED_SHORT = 5123
GL.INT = 5124
GL.UNSIGNED_INT = 5125
GL.FLOAT = 5126
GL.DEPTH_COMPONENT = 6402
GL.ALPHA = 6406
GL.RGB = 6407
GL.RGBA = 6408
GL.LUMINANCE = 6409
GL.LUMINANCE_ALPHA = 6410
GL.UNSIGNED_SHORT_4_4_4_4 = 32819
GL.UNSIGNED_SHORT_5_5_5_1 = 32820
GL.UNSIGNED_SHORT_5_6_5 = 33635
GL.FRAGMENT_SHADER = 35632
GL.VERTEX_SHADER = 35633
GL.MAX_VERTEX_ATTRIBS = 34921
GL.MAX_VERTEX_UNIFORM_VECTORS = 36347
GL.MAX_VARYING_VECTORS = 36348
GL.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661
GL.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660
GL.MAX_TEXTURE_IMAGE_UNITS = 34930
GL.MAX_FRAGMENT_UNIFORM_VECTORS = 36349
GL.SHADER_TYPE = 35663
GL.DELETE_STATUS = 35712
GL.LINK_STATUS = 35714
GL.VALIDATE_STATUS = 35715
GL.ATTACHED_SHADERS = 35717
GL.ACTIVE_UNIFORMS = 35718
GL.ACTIVE_ATTRIBUTES = 35721
GL.SHADING_LANGUAGE_VERSION = 35724
GL.CURRENT_PROGRAM = 35725
GL.NEVER = 512
GL.LESS = 513
GL.EQUAL = 514
GL.LEQUAL = 515
GL.GREATER = 516
GL.NOTEQUAL = 517
GL.GEQUAL = 518
GL.ALWAYS = 519
GL.KEEP = 7680
GL.REPLACE = 7681
GL.INCR = 7682
GL.DECR = 7683
GL.INVERT = 5386
GL.INCR_WRAP = 34055
GL.DECR_WRAP = 34056
GL.VENDOR = 7936
GL.RENDERER = 7937
GL.VERSION = 7938
GL.EXTENSIONS = 7939
GL.NEAREST = 9728
GL.LINEAR = 9729
GL.NEAREST_MIPMAP_NEAREST = 9984
GL.LINEAR_MIPMAP_NEAREST = 9985
GL.NEAREST_MIPMAP_LINEAR = 9986
GL.LINEAR_MIPMAP_LINEAR = 9987
GL.TEXTURE_MAG_FILTER = 10240
GL.TEXTURE_MIN_FILTER = 10241
GL.TEXTURE_WRAP_S = 10242
GL.TEXTURE_WRAP_T = 10243
GL.TEXTURE_2D = 3553
GL.TEXTURE = 5890
GL.TEXTURE_CUBE_MAP = 34067
GL.TEXTURE_BINDING_CUBE_MAP = 34068
GL.TEXTURE_CUBE_MAP_POSITIVE_X = 34069
GL.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070
GL.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071
GL.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072
GL.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073
GL.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074
GL.MAX_CUBE_MAP_TEXTURE_SIZE = 34076
GL.TEXTURE0 = 33984
GL.TEXTURE1 = 33985
GL.TEXTURE2 = 33986
GL.TEXTURE3 = 33987
GL.TEXTURE4 = 33988
GL.TEXTURE5 = 33989
GL.TEXTURE6 = 33990
GL.TEXTURE7 = 33991
GL.TEXTURE8 = 33992
GL.TEXTURE9 = 33993
GL.TEXTURE10 = 33994
GL.TEXTURE11 = 33995
GL.TEXTURE12 = 33996
GL.TEXTURE13 = 33997
GL.TEXTURE14 = 33998
GL.TEXTURE15 = 33999
GL.TEXTURE16 = 34000
GL.TEXTURE17 = 34001
GL.TEXTURE18 = 34002
GL.TEXTURE19 = 34003
GL.TEXTURE20 = 34004
GL.TEXTURE21 = 34005
GL.TEXTURE22 = 34006
GL.TEXTURE23 = 34007
GL.TEXTURE24 = 34008
GL.TEXTURE25 = 34009
GL.TEXTURE26 = 34010
GL.TEXTURE27 = 34011
GL.TEXTURE28 = 34012
GL.TEXTURE29 = 34013
GL.TEXTURE30 = 34014
GL.TEXTURE31 = 34015
GL.ACTIVE_TEXTURE = 34016
GL.REPEAT = 10497
GL.CLAMP_TO_EDGE = 33071
GL.MIRRORED_REPEAT = 33648
GL.FLOAT_VEC2 = 35664
GL.FLOAT_VEC3 = 35665
GL.FLOAT_VEC4 = 35666
GL.INT_VEC2 = 35667
GL.INT_VEC3 = 35668
GL.INT_VEC4 = 35669
GL.BOOL = 35670
GL.BOOL_VEC2 = 35671
GL.BOOL_VEC3 = 35672
GL.BOOL_VEC4 = 35673
GL.FLOAT_MAT2 = 35674
GL.FLOAT_MAT3 = 35675
GL.FLOAT_MAT4 = 35676
GL.SAMPLER_2D = 35678
GL.SAMPLER_CUBE = 35680
GL.VERTEX_ATTRIB_ARRAY_ENABLED = 34338
GL.VERTEX_ATTRIB_ARRAY_SIZE = 34339
GL.VERTEX_ATTRIB_ARRAY_STRIDE = 34340
GL.VERTEX_ATTRIB_ARRAY_TYPE = 34341
GL.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922
GL.VERTEX_ATTRIB_ARRAY_POINTER = 34373
GL.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975
GL.IMPLEMENTATION_COLOR_READ_TYPE = 35738
GL.IMPLEMENTATION_COLOR_READ_FORMAT = 35739
GL.VERTEX_PROGRAM_POINT_SIZE = 34370
GL.POINT_SPRITE = 34913
GL.COMPILE_STATUS = 35713
GL.LOW_FLOAT = 36336
GL.MEDIUM_FLOAT = 36337
GL.HIGH_FLOAT = 36338
GL.LOW_INT = 36339
GL.MEDIUM_INT = 36340
GL.HIGH_INT = 36341
GL.FRAMEBUFFER = 36160
GL.RENDERBUFFER = 36161
GL.RGBA4 = 32854
GL.RGB5_A1 = 32855
GL.RGB565 = 36194
GL.DEPTH_COMPONENT16 = 33189
GL.STENCIL_INDEX = 6401
GL.STENCIL_INDEX8 = 36168
GL.DEPTH_STENCIL = 34041
GL.RENDERBUFFER_WIDTH = 36162
GL.RENDERBUFFER_HEIGHT = 36163
GL.RENDERBUFFER_INTERNAL_FORMAT = 36164
GL.RENDERBUFFER_RED_SIZE = 36176
GL.RENDERBUFFER_GREEN_SIZE = 36177
GL.RENDERBUFFER_BLUE_SIZE = 36178
GL.RENDERBUFFER_ALPHA_SIZE = 36179
GL.RENDERBUFFER_DEPTH_SIZE = 36180
GL.RENDERBUFFER_STENCIL_SIZE = 36181
GL.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048
GL.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049
GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050
GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051
GL.COLOR_ATTACHMENT0 = 36064
GL.DEPTH_ATTACHMENT = 36096
GL.STENCIL_ATTACHMENT = 36128
GL.DEPTH_STENCIL_ATTACHMENT = 33306
GL.NONE = 0
GL.FRAMEBUFFER_COMPLETE = 36053
GL.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054
GL.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055
GL.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057
GL.FRAMEBUFFER_UNSUPPORTED = 36061
GL.FRAMEBUFFER_BINDING = 36006
GL.RENDERBUFFER_BINDING = 36007
GL.MAX_RENDERBUFFER_SIZE = 34024
GL.INVALID_FRAMEBUFFER_OPERATION = 1286
GL.UNPACK_FLIP_Y_WEBGL = 37440
GL.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441
GL.CONTEXT_LOST_WEBGL = 37442
GL.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443
GL.BROWSER_DEFAULT_WEBGL = 37444
GL.READ_BUFFER = 3074
GL.UNPACK_ROW_LENGTH = 3314
GL.UNPACK_SKIP_ROWS = 3315
GL.UNPACK_SKIP_PIXELS = 3316
GL.PACK_ROW_LENGTH = 3330
GL.PACK_SKIP_ROWS = 3331
GL.PACK_SKIP_PIXELS = 3332
GL.TEXTURE_BINDING_3D = 32874
GL.UNPACK_SKIP_IMAGES = 32877
GL.UNPACK_IMAGE_HEIGHT = 32878
GL.MAX_3D_TEXTURE_SIZE = 32883
GL.MAX_ELEMENTS_VERTICES = 33000
GL.MAX_ELEMENTS_INDICES = 33001
GL.MAX_TEXTURE_LOD_BIAS = 34045
GL.MAX_FRAGMENT_UNIFORM_COMPONENTS = 35657
GL.MAX_VERTEX_UNIFORM_COMPONENTS = 35658
GL.MAX_ARRAY_TEXTURE_LAYERS = 35071
GL.MIN_PROGRAM_TEXEL_OFFSET = 35076
GL.MAX_PROGRAM_TEXEL_OFFSET = 35077
GL.MAX_VARYING_COMPONENTS = 35659
GL.FRAGMENT_SHADER_DERIVATIVE_HINT = 35723
GL.RASTERIZER_DISCARD = 35977
GL.VERTEX_ARRAY_BINDING = 34229
GL.MAX_VERTEX_OUTPUT_COMPONENTS = 37154
GL.MAX_FRAGMENT_INPUT_COMPONENTS = 37157
GL.MAX_SERVER_WAIT_TIMEOUT = 37137
GL.MAX_ELEMENT_INDEX = 36203
GL.RED = 6403
GL.RGB8 = 32849
GL.RGBA8 = 32856
GL.RGB10_A2 = 32857
GL.TEXTURE_3D = 32879
GL.TEXTURE_WRAP_R = 32882
GL.TEXTURE_MIN_LOD = 33082
GL.TEXTURE_MAX_LOD = 33083
GL.TEXTURE_BASE_LEVEL = 33084
GL.TEXTURE_MAX_LEVEL = 33085
GL.TEXTURE_COMPARE_MODE = 34892
GL.TEXTURE_COMPARE_FUNC = 34893
GL.SRGB = 35904
GL.SRGB8 = 35905
GL.SRGB8_ALPHA8 = 35907
GL.COMPARE_REF_TO_TEXTURE = 34894
GL.RGBA32F = 34836
GL.RGB32F = 34837
GL.RGBA16F = 34842
GL.RGB16F = 34843
GL.TEXTURE_2D_ARRAY = 35866
GL.TEXTURE_BINDING_2D_ARRAY = 35869
GL.R11F_G11F_B10F = 35898
GL.RGB9_E5 = 35901
GL.RGBA32UI = 36208
GL.RGB32UI = 36209
GL.RGBA16UI = 36214
GL.RGB16UI = 36215
GL.RGBA8UI = 36220
GL.RGB8UI = 36221
GL.RGBA32I = 36226
GL.RGB32I = 36227
GL.RGBA16I = 36232
GL.RGB16I = 36233
GL.RGBA8I = 36238
GL.RGB8I = 36239
GL.RED_INTEGER = 36244
GL.RGB_INTEGER = 36248
GL.RGBA_INTEGER = 36249
GL.R8 = 33321
GL.RG8 = 33323
GL.R16F = 33325
GL.R32F = 33326
GL.RG16F = 33327
GL.RG32F = 33328
GL.R8I = 33329
GL.R8UI = 33330
GL.R16I = 33331
GL.R16UI = 33332
GL.R32I = 33333
GL.R32UI = 33334
GL.RG8I = 33335
GL.RG8UI = 33336
GL.RG16I = 33337
GL.RG16UI = 33338
GL.RG32I = 33339
GL.RG32UI = 33340
GL.R8_SNORM = 36756
GL.RG8_SNORM = 36757
GL.RGB8_SNORM = 36758
GL.RGBA8_SNORM = 36759
GL.RGB10_A2UI = 36975
GL.TEXTURE_IMMUTABLE_FORMAT = 37167
GL.TEXTURE_IMMUTABLE_LEVELS = 33503
GL.UNSIGNED_INT_2_10_10_10_REV = 33640
GL.UNSIGNED_INT_10F_11F_11F_REV = 35899
GL.UNSIGNED_INT_5_9_9_9_REV = 35902
GL.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269
GL.UNSIGNED_INT_24_8 = 34042
GL.HALF_FLOAT = 5131
GL.RG = 33319
GL.RG_INTEGER = 33320
GL.INT_2_10_10_10_REV = 36255
GL.CURRENT_QUERY = 34917
GL.QUERY_RESULT = 34918
GL.QUERY_RESULT_AVAILABLE = 34919
GL.ANY_SAMPLES_PASSED = 35887
GL.ANY_SAMPLES_PASSED_CONSERVATIVE = 36202
GL.MAX_DRAW_BUFFERS = 34852
GL.DRAW_BUFFER0 = 34853
GL.DRAW_BUFFER1 = 34854
GL.DRAW_BUFFER2 = 34855
GL.DRAW_BUFFER3 = 34856
GL.DRAW_BUFFER4 = 34857
GL.DRAW_BUFFER5 = 34858
GL.DRAW_BUFFER6 = 34859
GL.DRAW_BUFFER7 = 34860
GL.DRAW_BUFFER8 = 34861
GL.DRAW_BUFFER9 = 34862
GL.DRAW_BUFFER10 = 34863
GL.DRAW_BUFFER11 = 34864
GL.DRAW_BUFFER12 = 34865
GL.DRAW_BUFFER13 = 34866
GL.DRAW_BUFFER14 = 34867
GL.DRAW_BUFFER15 = 34868
GL.MAX_COLOR_ATTACHMENTS = 36063
GL.COLOR_ATTACHMENT1 = 36065
GL.COLOR_ATTACHMENT2 = 36066
GL.COLOR_ATTACHMENT3 = 36067
GL.COLOR_ATTACHMENT4 = 36068
GL.COLOR_ATTACHMENT5 = 36069
GL.COLOR_ATTACHMENT6 = 36070
GL.COLOR_ATTACHMENT7 = 36071
GL.COLOR_ATTACHMENT8 = 36072
GL.COLOR_ATTACHMENT9 = 36073
GL.COLOR_ATTACHMENT10 = 36074
GL.COLOR_ATTACHMENT11 = 36075
GL.COLOR_ATTACHMENT12 = 36076
GL.COLOR_ATTACHMENT13 = 36077
GL.COLOR_ATTACHMENT14 = 36078
GL.COLOR_ATTACHMENT15 = 36079
GL.SAMPLER_3D = 35679
GL.SAMPLER_2D_SHADOW = 35682
GL.SAMPLER_2D_ARRAY = 36289
GL.SAMPLER_2D_ARRAY_SHADOW = 36292
GL.SAMPLER_CUBE_SHADOW = 36293
GL.INT_SAMPLER_2D = 36298
GL.INT_SAMPLER_3D = 36299
GL.INT_SAMPLER_CUBE = 36300
GL.INT_SAMPLER_2D_ARRAY = 36303
GL.UNSIGNED_INT_SAMPLER_2D = 36306
GL.UNSIGNED_INT_SAMPLER_3D = 36307
GL.UNSIGNED_INT_SAMPLER_CUBE = 36308
GL.UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311
GL.MAX_SAMPLES = 36183
GL.SAMPLER_BINDING = 35097
GL.PIXEL_PACK_BUFFER = 35051
GL.PIXEL_UNPACK_BUFFER = 35052
GL.PIXEL_PACK_BUFFER_BINDING = 35053
GL.PIXEL_UNPACK_BUFFER_BINDING = 35055
GL.COPY_READ_BUFFER = 36662
GL.COPY_WRITE_BUFFER = 36663
GL.COPY_READ_BUFFER_BINDING = 36662
GL.COPY_WRITE_BUFFER_BINDING = 36663
GL.FLOAT_MAT2x3 = 35685
GL.FLOAT_MAT2x4 = 35686
GL.FLOAT_MAT3x2 = 35687
GL.FLOAT_MAT3x4 = 35688
GL.FLOAT_MAT4x2 = 35689
GL.FLOAT_MAT4x3 = 35690
GL.UNSIGNED_INT_VEC2 = 36294
GL.UNSIGNED_INT_VEC3 = 36295
GL.UNSIGNED_INT_VEC4 = 36296
GL.UNSIGNED_NORMALIZED = 35863
GL.SIGNED_NORMALIZED = 36764
GL.VERTEX_ATTRIB_ARRAY_INTEGER = 35069
GL.VERTEX_ATTRIB_ARRAY_DIVISOR = 35070
GL.TRANSFORM_FEEDBACK_BUFFER_MODE = 35967
GL.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 35968
GL.TRANSFORM_FEEDBACK_VARYINGS = 35971
GL.TRANSFORM_FEEDBACK_BUFFER_START = 35972
GL.TRANSFORM_FEEDBACK_BUFFER_SIZE = 35973
GL.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 35976
GL.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 35978
GL.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 35979
GL.INTERLEAVED_ATTRIBS = 35980
GL.SEPARATE_ATTRIBS = 35981
GL.TRANSFORM_FEEDBACK_BUFFER = 35982
GL.TRANSFORM_FEEDBACK_BUFFER_BINDING = 35983
GL.TRANSFORM_FEEDBACK = 36386
GL.TRANSFORM_FEEDBACK_PAUSED = 36387
GL.TRANSFORM_FEEDBACK_ACTIVE = 36388
GL.TRANSFORM_FEEDBACK_BINDING = 36389
GL.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 33296
GL.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 33297
GL.FRAMEBUFFER_ATTACHMENT_RED_SIZE = 33298
GL.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 33299
GL.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 33300
GL.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 33301
GL.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 33302
GL.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 33303
GL.FRAMEBUFFER_DEFAULT = 33304
GL.DEPTH24_STENCIL8 = 35056
GL.DRAW_FRAMEBUFFER_BINDING = 36006
GL.READ_FRAMEBUFFER = 36008
GL.DRAW_FRAMEBUFFER = 36009
GL.READ_FRAMEBUFFER_BINDING = 36010
GL.RENDERBUFFER_SAMPLES = 36011
GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 36052
GL.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 36182
GL.UNIFORM_BUFFER = 35345
GL.UNIFORM_BUFFER_BINDING = 35368
GL.UNIFORM_BUFFER_START = 35369
GL.UNIFORM_BUFFER_SIZE = 35370
GL.MAX_VERTEX_UNIFORM_BLOCKS = 35371
GL.MAX_FRAGMENT_UNIFORM_BLOCKS = 35373
GL.MAX_COMBINED_UNIFORM_BLOCKS = 35374
GL.MAX_UNIFORM_BUFFER_BINDINGS = 35375
GL.MAX_UNIFORM_BLOCK_SIZE = 35376
GL.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 35377
GL.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 35379
GL.UNIFORM_BUFFER_OFFSET_ALIGNMENT = 35380
GL.ACTIVE_UNIFORM_BLOCKS = 35382
GL.UNIFORM_TYPE = 35383
GL.UNIFORM_SIZE = 35384
GL.UNIFORM_BLOCK_INDEX = 35386
GL.UNIFORM_OFFSET = 35387
GL.UNIFORM_ARRAY_STRIDE = 35388
GL.UNIFORM_MATRIX_STRIDE = 35389
GL.UNIFORM_IS_ROW_MAJOR = 35390
GL.UNIFORM_BLOCK_BINDING = 35391
GL.UNIFORM_BLOCK_DATA_SIZE = 35392
GL.UNIFORM_BLOCK_ACTIVE_UNIFORMS = 35394
GL.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 35395
GL.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 35396
GL.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 35398
GL.OBJECT_TYPE = 37138
GL.SYNC_CONDITION = 37139
GL.SYNC_STATUS = 37140
GL.SYNC_FLAGS = 37141
GL.SYNC_FENCE = 37142
GL.SYNC_GPU_COMMANDS_COMPLETE = 37143
GL.UNSIGNALED = 37144
GL.SIGNALED = 37145
GL.ALREADY_SIGNALED = 37146
GL.TIMEOUT_EXPIRED = 37147
GL.CONDITION_SATISFIED = 37148
GL.WAIT_FAILED = 37149
GL.SYNC_FLUSH_COMMANDS_BIT = 1
GL.COLOR = 6144
GL.DEPTH = 6145
GL.STENCIL = 6146
GL.MIN = 32775
GL.MAX = 32776
GL.DEPTH_COMPONENT24 = 33190
GL.STREAM_READ = 35041
GL.STREAM_COPY = 35042
GL.STATIC_READ = 35045
GL.STATIC_COPY = 35046
GL.DYNAMIC_READ = 35049
GL.DYNAMIC_COPY = 35050
GL.DEPTH_COMPONENT32F = 36012
GL.DEPTH32F_STENCIL8 = 36013
GL.INVALID_INDEX = -1
GL.TIMEOUT_IGNORED = -1
GL.MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 37447

// Export

exports.default = GL;