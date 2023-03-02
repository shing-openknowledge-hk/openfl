// Class: openfl._internal.renderer.context3D.Context3DBitmap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl__$internal_renderer_context3D_Context3DMaskShader() {return require("./../../../../openfl/_internal/renderer/context3D/Context3DMaskShader");}

// Constructor

var Context3DBitmap = function(){}

// Meta

Context3DBitmap.__name__ = "openfl._internal.renderer.context3D.Context3DBitmap";
Context3DBitmap.__isInterface__ = false;
Context3DBitmap.prototype = {
	
};
Context3DBitmap.prototype.__class__ = Context3DBitmap.prototype.constructor = $hxClasses["openfl._internal.renderer.context3D.Context3DBitmap"] = Context3DBitmap;

// Init



// Statics

Context3DBitmap.render = function(bitmap,renderer) {
	if(!bitmap.__renderable || bitmap.__worldAlpha <= 0) {
		return;
	}
	if(bitmap.__bitmapData != null && bitmap.__bitmapData.__isValid) {
		var context = renderer.__context3D;
		renderer.__setBlendMode(bitmap.__worldBlendMode);
		renderer.__pushMaskObject(bitmap);
		var shader = renderer.__initDisplayShader(bitmap.__worldShader);
		renderer.setShader(shader);
		renderer.applyBitmapData(bitmap.__bitmapData,renderer.__allowSmoothing && (bitmap.smoothing || renderer.__upscaled));
		renderer.applyMatrix(renderer.__getMatrix(bitmap.__renderTransform,bitmap.pixelSnapping));
		renderer.applyAlpha(bitmap.__worldAlpha);
		renderer.applyColorTransform(bitmap.__worldColorTransform);
		renderer.updateShader();
		var vertexBuffer = bitmap.__bitmapData.getVertexBuffer(context);
		if(shader.__position != null) {
			context.setVertexBufferAt(shader.__position.index,vertexBuffer,0,"float3");
		}
		if(shader.__textureCoord != null) {
			context.setVertexBufferAt(shader.__textureCoord.index,vertexBuffer,3,"float2");
		}
		var indexBuffer = bitmap.__bitmapData.getIndexBuffer(context);
		context.drawTriangles(indexBuffer);
		renderer.__clearShader();
		renderer.__popMaskObject(bitmap);
	}
}
Context3DBitmap.renderMask = function(bitmap,renderer) {
	if(bitmap.__bitmapData != null && bitmap.__bitmapData.__isValid) {
		var context = renderer.__context3D;
		var shader = renderer.__maskShader;
		renderer.setShader(shader);
		renderer.applyBitmapData((openfl__$internal_renderer_context3D_Context3DMaskShader().default).opaqueBitmapData,true);
		renderer.applyMatrix(renderer.__getMatrix(bitmap.__renderTransform,bitmap.pixelSnapping));
		renderer.updateShader();
		var vertexBuffer = bitmap.__bitmapData.getVertexBuffer(context);
		if(shader.__position != null) {
			context.setVertexBufferAt(shader.__position.index,vertexBuffer,0,"float3");
		}
		if(shader.__textureCoord != null) {
			context.setVertexBufferAt(shader.__textureCoord.index,vertexBuffer,3,"float2");
		}
		var indexBuffer = bitmap.__bitmapData.getIndexBuffer(context);
		context.drawTriangles(indexBuffer);
		renderer.__clearShader();
	}
}
Context3DBitmap.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = Context3DBitmap;