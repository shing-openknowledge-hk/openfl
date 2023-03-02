// Class: openfl._internal.renderer.dom.DOMVideo

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function Std() {return require("./../../../../Std");}

// Constructor

var DOMVideo = function(){}

// Meta

DOMVideo.__name__ = "openfl._internal.renderer.dom.DOMVideo";
DOMVideo.__isInterface__ = false;
DOMVideo.prototype = {
	
};
DOMVideo.prototype.__class__ = DOMVideo.prototype.constructor = $hxClasses["openfl._internal.renderer.dom.DOMVideo"] = DOMVideo;

// Init



// Statics

DOMVideo.clear = function(video,renderer) {
	if(video.__active) {
		renderer.element.removeChild(video.__stream.__video);
		video.__active = false;
	}
}
DOMVideo.render = function(video,renderer) {
	if(video.stage != null && video.__stream != null && video.__worldVisible && video.__renderable) {
		if(!video.__active) {
			renderer.__initializeElement(video,video.__stream.__video);
			video.__active = true;
			video.__dirty = true;
		}
		if(video.__dirty) {
			video.__stream.__video.width = (Std().default).int(video.__width);
			video.__stream.__video.height = (Std().default).int(video.__height);
			video.__dirty = false;
		}
		renderer.__updateClip(video);
		renderer.__applyStyle(video,true,true,true);
	} else {
		DOMVideo.clear(video,renderer);
	}
}
DOMVideo.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = DOMVideo;