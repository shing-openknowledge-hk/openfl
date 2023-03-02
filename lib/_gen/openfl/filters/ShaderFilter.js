// Class: openfl.filters.ShaderFilter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_filters_BitmapFilter() {return require("./../../openfl/filters/BitmapFilter");}

// Constructor

var ShaderFilter = function(shader) {
	(openfl_filters_BitmapFilter().default).call(this);
	this.shader = shader;
	this.__numShaderPasses = 1;
}

// Meta

ShaderFilter.__name__ = "openfl.filters.ShaderFilter";
ShaderFilter.__isInterface__ = false;
ShaderFilter.__super__ = (openfl_filters_BitmapFilter().default);
ShaderFilter.prototype = $extend((openfl_filters_BitmapFilter().default).prototype, {
	clone: function() {
		var filter = new ShaderFilter(this.shader);
		filter.bottomExtension = this.bottomExtension;
		filter.leftExtension = this.leftExtension;
		filter.rightExtension = this.rightExtension;
		filter.topExtension = this.topExtension;
		return filter;
	},
	__initShader: function(renderer,pass) {
		this.__shaderBlendMode = this.blendMode;
		return this.shader;
	}
});
ShaderFilter.prototype.__class__ = ShaderFilter.prototype.constructor = $hxClasses["openfl.filters.ShaderFilter"] = ShaderFilter;

// Init



// Statics


ShaderFilter.__meta__ = { fields : { blendMode : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}

// Export

exports.default = ShaderFilter;