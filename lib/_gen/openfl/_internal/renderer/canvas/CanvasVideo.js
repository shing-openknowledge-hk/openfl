// Class: openfl._internal.renderer.canvas.CanvasVideo

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;

// Constructor

var CanvasVideo = function(){}

// Meta

CanvasVideo.__name__ = "openfl._internal.renderer.canvas.CanvasVideo";
CanvasVideo.__isInterface__ = false;
CanvasVideo.prototype = {
	
};
CanvasVideo.prototype.__class__ = CanvasVideo.prototype.constructor = $hxClasses["openfl._internal.renderer.canvas.CanvasVideo"] = CanvasVideo;

// Init



// Statics

CanvasVideo.render = function(video,renderer) {
	if(!video.__renderable || video.__stream == null) {
		return;
	}
	var alpha = renderer.__getAlpha(video.__worldAlpha);
	if(alpha <= 0) {
		return;
	}
	var context = renderer.context;
	if(video.__stream.__video != null) {
		renderer.__setBlendMode(video.__worldBlendMode);
		renderer.__pushMaskObject(video);
		context.globalAlpha = alpha;
		var scrollRect = video.__scrollRect;
		var smoothing = video.smoothing;
		renderer.setTransform(video.__worldTransform,context);
		if(!smoothing) {
			context.imageSmoothingEnabled = false;
		}
		if(scrollRect == null) {
			context.drawImage(video.__stream.__video,0,0,video.get_width(),video.get_height());
		} else {
			context.drawImage(video.__stream.__video,scrollRect.x,scrollRect.y,scrollRect.width,scrollRect.height,scrollRect.x,scrollRect.y,scrollRect.width,scrollRect.height);
		}
		if(!smoothing) {
			context.imageSmoothingEnabled = true;
		}
		renderer.__popMaskObject(video);
	}
}
CanvasVideo.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = CanvasVideo;