// Class: openfl.filters.ConvolutionFilter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_filters_BitmapFilter() {return require("./../../openfl/filters/BitmapFilter");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_filters__$ConvolutionFilter_ConvolutionShader() {return require("./../../openfl/filters/_ConvolutionFilter/ConvolutionShader");}

// Constructor

var ConvolutionFilter = function(matrixX,matrixY,matrix,divisor,bias,preserveAlpha,clamp,color,alpha) {
	if(alpha == null) {
		alpha = 0.0;
	}
	if(color == null) {
		color = 0;
	}
	if(clamp == null) {
		clamp = true;
	}
	if(preserveAlpha == null) {
		preserveAlpha = true;
	}
	if(bias == null) {
		bias = 0.0;
	}
	if(divisor == null) {
		divisor = 1.0;
	}
	if(matrixY == null) {
		matrixY = 0;
	}
	if(matrixX == null) {
		matrixX = 0;
	}
	(openfl_filters_BitmapFilter().default).call(this);
	this.matrixX = matrixX;
	this.matrixY = matrixY;
	this.__matrix = matrix;
	this.divisor = divisor;
	this.bias = bias;
	this.preserveAlpha = preserveAlpha;
	this.clamp = clamp;
	this.color = color;
	this.alpha = alpha;
	this.__numShaderPasses = 1;
}

// Meta

ConvolutionFilter.__name__ = "openfl.filters.ConvolutionFilter";
ConvolutionFilter.__isInterface__ = false;
ConvolutionFilter.__super__ = (openfl_filters_BitmapFilter().default);
ConvolutionFilter.prototype = $extend((openfl_filters_BitmapFilter().default).prototype, {
	clone: function() {
		return new ConvolutionFilter(this.matrixX,this.matrixY,this.__matrix,this.divisor,this.bias,this.preserveAlpha,this.clamp,this.color,this.alpha);
	},
	__initShader: function(renderer,pass) {
		ConvolutionFilter.__convolutionShader.uConvoMatrix.value = this.get_matrix();
		ConvolutionFilter.__convolutionShader.uDivisor.value[0] = this.divisor;
		ConvolutionFilter.__convolutionShader.uBias.value[0] = this.bias;
		ConvolutionFilter.__convolutionShader.uPreserveAlpha.value[0] = this.preserveAlpha;
		return ConvolutionFilter.__convolutionShader;
	},
	get_matrix: function() {
		return this.__matrix;
	},
	set_matrix: function(v) {
		if(v == null) {
			v = [0,0,0,0,1,0,0,0,0];
		}
		if(v.length != 9) {
			throw new (js__$Boot_HaxeError().default)("Only a 3x3 matrix is supported");
		}
		return this.__matrix = v;
	}
});
ConvolutionFilter.prototype.__class__ = ConvolutionFilter.prototype.constructor = $hxClasses["openfl.filters.ConvolutionFilter"] = ConvolutionFilter;

// Init

Object.defineProperties(ConvolutionFilter.prototype,{ matrix : { get : function () { return this.get_matrix (); }, set : function (v) { return this.set_matrix (v); }}});

// Statics


ConvolutionFilter.__convolutionShader = new (openfl_filters__$ConvolutionFilter_ConvolutionShader().default)()

// Export

exports.default = ConvolutionFilter;