// Class: openfl._internal.renderer.context3D.Context3DShape

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl__$internal_renderer_context3D_Context3DGraphics() {return require("./../../../../openfl/_internal/renderer/context3D/Context3DGraphics");}

// Constructor

var Context3DShape = function(){}

// Meta

Context3DShape.__name__ = "openfl._internal.renderer.context3D.Context3DShape";
Context3DShape.__isInterface__ = false;
Context3DShape.prototype = {
	
};
Context3DShape.prototype.__class__ = Context3DShape.prototype.constructor = $hxClasses["openfl._internal.renderer.context3D.Context3DShape"] = Context3DShape;

// Init



// Statics

Context3DShape.render = function(shape,renderer) {
	if(!shape.__renderable || shape.__worldAlpha <= 0) {
		return;
	}
	var graphics = shape.__graphics;
	if(graphics != null) {
		renderer.__setBlendMode(shape.__worldBlendMode);
		renderer.__pushMaskObject(shape);
		(openfl__$internal_renderer_context3D_Context3DGraphics().default).render(graphics,renderer);
		if(graphics.__bitmap != null && graphics.__visible) {
			var context = renderer.__context3D;
			var scale9Grid = shape.__worldScale9Grid;
			var shader = renderer.__initDisplayShader(shape.__worldShader);
			renderer.setShader(shader);
			renderer.applyBitmapData(graphics.__bitmap,true);
			renderer.applyMatrix(renderer.__getMatrix(graphics.__worldTransform,"auto"));
			renderer.applyAlpha(shape.__worldAlpha);
			renderer.applyColorTransform(shape.__worldColorTransform);
			renderer.updateShader();
			var vertexBuffer = graphics.__bitmap.getVertexBuffer(context);
			if(shader.__position != null) {
				context.setVertexBufferAt(shader.__position.index,vertexBuffer,0,"float3");
			}
			if(shader.__textureCoord != null) {
				context.setVertexBufferAt(shader.__textureCoord.index,vertexBuffer,3,"float2");
			}
			var indexBuffer = graphics.__bitmap.getIndexBuffer(context);
			context.drawTriangles(indexBuffer);
			renderer.__clearShader();
		}
		renderer.__popMaskObject(shape);
	}
}
Context3DShape.renderMask = function(shape,renderer) {
	var graphics = shape.__graphics;
	if(graphics != null) {
		(openfl__$internal_renderer_context3D_Context3DGraphics().default).renderMask(graphics,renderer);
		if(graphics.__bitmap != null) {
			var context = renderer.__context3D;
			var shader = renderer.__maskShader;
			renderer.setShader(shader);
			renderer.applyBitmapData(graphics.__bitmap,true);
			renderer.applyMatrix(renderer.__getMatrix(graphics.__worldTransform,"auto"));
			renderer.updateShader();
			var vertexBuffer = graphics.__bitmap.getVertexBuffer(context);
			if(shader.__position != null) {
				context.setVertexBufferAt(shader.__position.index,vertexBuffer,0,"float3");
			}
			if(shader.__textureCoord != null) {
				context.setVertexBufferAt(shader.__textureCoord.index,vertexBuffer,3,"float2");
			}
			var indexBuffer = graphics.__bitmap.getIndexBuffer(context);
			context.drawTriangles(indexBuffer);
			renderer.__clearShader();
		}
	}
}
Context3DShape.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = Context3DShape;