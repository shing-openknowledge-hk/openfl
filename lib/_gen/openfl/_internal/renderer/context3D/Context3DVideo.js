// Class: openfl._internal.renderer.context3D.Context3DVideo

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl__$internal_renderer_context3D_Context3DMaskShader() {return require("./../../../../openfl/_internal/renderer/context3D/Context3DMaskShader");}

// Constructor

var Context3DVideo = function(){}

// Meta

Context3DVideo.__name__ = "openfl._internal.renderer.context3D.Context3DVideo";
Context3DVideo.__isInterface__ = false;
Context3DVideo.prototype = {
	
};
Context3DVideo.prototype.__class__ = Context3DVideo.prototype.constructor = $hxClasses["openfl._internal.renderer.context3D.Context3DVideo"] = Context3DVideo;

// Init



// Statics

Context3DVideo.render = function(video,renderer) {
	if(!video.__renderable || video.__worldAlpha <= 0 || video.__stream == null) {
		return;
	}
	if(video.__stream.__video != null) {
		var context = renderer.__context3D;
		var gl = context.gl;
		var texture = video.__getTexture(context);
		if(texture == null) {
			return;
		}
		renderer.__setBlendMode(video.__worldBlendMode);
		renderer.__pushMaskObject(video);
		var shader = renderer.__initDisplayShader(video.__worldShader);
		renderer.setShader(shader);
		renderer.applyBitmapData(null,true,false);
		renderer.applyMatrix(renderer.__getMatrix(video.__renderTransform,"auto"));
		renderer.applyAlpha(video.__worldAlpha);
		renderer.applyColorTransform(video.__worldColorTransform);
		if(shader.__textureSize != null) {
			Context3DVideo.__textureSizeValue[0] = video.__stream != null ? video.__stream.__video.videoWidth : 0;
			Context3DVideo.__textureSizeValue[1] = video.__stream != null ? video.__stream.__video.videoHeight : 0;
			shader.__textureSize.value = Context3DVideo.__textureSizeValue;
		}
		renderer.updateShader();
		context.setTextureAt(0,video.__getTexture(context));
		context.__flushGLTextures();
		gl.uniform1i(shader.__texture.index,0);
		if(video.smoothing) {
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
		} else {
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
		}
		var vertexBuffer = video.__getVertexBuffer(context);
		if(shader.__position != null) {
			context.setVertexBufferAt(shader.__position.index,vertexBuffer,0,"float3");
		}
		if(shader.__textureCoord != null) {
			context.setVertexBufferAt(shader.__textureCoord.index,vertexBuffer,3,"float2");
		}
		var indexBuffer = video.__getIndexBuffer(context);
		context.drawTriangles(indexBuffer);
		renderer.__clearShader();
		renderer.__popMaskObject(video);
	}
}
Context3DVideo.renderMask = function(video,renderer) {
	if(video.__stream == null) {
		return;
	}
	if(video.__stream.__video != null) {
		var context = renderer.__context3D;
		var gl = context.gl;
		var shader = renderer.__maskShader;
		renderer.setShader(shader);
		renderer.applyBitmapData((openfl__$internal_renderer_context3D_Context3DMaskShader().default).opaqueBitmapData,true);
		renderer.applyMatrix(renderer.__getMatrix(video.__renderTransform,"auto"));
		renderer.updateShader();
		var vertexBuffer = video.__getVertexBuffer(context);
		if(shader.__position != null) {
			context.setVertexBufferAt(shader.__position.index,vertexBuffer,0,"float3");
		}
		if(shader.__textureCoord != null) {
			context.setVertexBufferAt(shader.__textureCoord.index,vertexBuffer,3,"float2");
		}
		var indexBuffer = video.__getIndexBuffer(context);
		context.drawTriangles(indexBuffer);
		renderer.__clearShader();
	}
}
Context3DVideo.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}
Context3DVideo.__textureSizeValue = [0,0.]

// Export

exports.default = Context3DVideo;