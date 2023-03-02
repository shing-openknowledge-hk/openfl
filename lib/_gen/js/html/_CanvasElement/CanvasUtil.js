// Class: js.html._CanvasElement.CanvasUtil

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var CanvasUtil = function(){}

// Meta

CanvasUtil.__name__ = "js.html._CanvasElement.CanvasUtil";
CanvasUtil.__isInterface__ = false;
CanvasUtil.prototype = {
	
};
CanvasUtil.prototype.__class__ = CanvasUtil.prototype.constructor = $hxClasses["js.html._CanvasElement.CanvasUtil"] = CanvasUtil;

// Init



// Statics

CanvasUtil.getContextWebGL = function(canvas,attribs) {
	var name = "webgl";
	var ctx = canvas.getContext(name,attribs);
	if(ctx != null) {
		return ctx;
	}
	var name1 = "experimental-webgl";
	var ctx1 = canvas.getContext(name1,attribs);
	if(ctx1 != null) {
		return ctx1;
	}
	return null;
}


// Export

exports.default = CanvasUtil;