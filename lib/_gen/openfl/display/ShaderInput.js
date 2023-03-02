// Class: openfl.display.ShaderInput

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var ShaderInput = function() {
	this.channels = 0;
	this.filter = "nearest";
	this.height = 0;
	this.index = 0;
	this.mipFilter = "mipnone";
	this.width = 0;
	this.wrap = "clamp";
}

// Meta

ShaderInput.__name__ = "openfl.display.ShaderInput";
ShaderInput.__isInterface__ = false;
ShaderInput.prototype = {
	__disableGL: function(context,id) {
		var gl = context.gl;
		context.setTextureAt(id,null);
	},
	__updateGL: function(context,id,overrideInput,overrideFilter,overrideMipFilter,overrideWrap) {
		var gl = context.gl;
		var input = overrideInput != null ? overrideInput : this.input;
		var filter = overrideFilter != null ? overrideFilter : this.filter;
		var mipFilter = overrideMipFilter != null ? overrideMipFilter : this.mipFilter;
		var wrap = overrideWrap != null ? overrideWrap : this.wrap;
		if(input != null) {
			var bitmapData = input;
			context.setTextureAt(id,bitmapData.getTexture(context));
			context.setSamplerStateAt(id,wrap,filter,mipFilter);
		} else {
			context.setTextureAt(id,null);
		}
	}
};
ShaderInput.prototype.__class__ = ShaderInput.prototype.constructor = $hxClasses["openfl.display.ShaderInput"] = ShaderInput;

// Init



// Statics


ShaderInput.__meta__ = { fields : { index : { SuppressWarnings : ["checkstyle:Dynamic"]}, name : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}

// Export

exports.default = ShaderInput;