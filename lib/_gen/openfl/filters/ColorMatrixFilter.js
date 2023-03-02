// Class: openfl.filters.ColorMatrixFilter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_filters_BitmapFilter() {return require("./../../openfl/filters/BitmapFilter");}
function lime__$internal_graphics_ImageCanvasUtil() {return require("./../../lime/_internal/graphics/ImageCanvasUtil");}
function Std() {return require("./../../Std");}
function lime_math__$RGBA_RGBA_$Impl_$() {return require("./../../lime/math/_RGBA/RGBA_Impl_");}
function openfl_filters__$ColorMatrixFilter_ColorMatrixShader() {return require("./../../openfl/filters/_ColorMatrixFilter/ColorMatrixShader");}

// Constructor

var ColorMatrixFilter = function(matrix) {
	(openfl_filters_BitmapFilter().default).call(this);
	this.set_matrix(matrix);
	this.__numShaderPasses = 1;
	this.__needSecondBitmapData = false;
}

// Meta

ColorMatrixFilter.__name__ = "openfl.filters.ColorMatrixFilter";
ColorMatrixFilter.__isInterface__ = false;
ColorMatrixFilter.__super__ = (openfl_filters_BitmapFilter().default);
ColorMatrixFilter.prototype = $extend((openfl_filters_BitmapFilter().default).prototype, {
	clone: function() {
		return new ColorMatrixFilter(this.__matrix);
	},
	__applyFilter: function(destBitmapData,sourceBitmapData,sourceRect,destPoint) {
		var sourceImage = sourceBitmapData.image;
		var image = destBitmapData.image;
		(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(sourceImage);
		(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(image);
		var sourceData = sourceImage.get_data();
		var destData = image.get_data();
		var offsetX = (Std().default).int(destPoint.x - sourceRect.x);
		var offsetY = (Std().default).int(destPoint.y - sourceRect.y);
		var sourceStride = sourceBitmapData.width * 4;
		var destStride = destBitmapData.width * 4;
		var sourceFormat = sourceImage.buffer.format;
		var destFormat = image.buffer.format;
		var sourcePremultiplied = sourceImage.buffer.premultiplied;
		var destPremultiplied = image.buffer.premultiplied;
		var sourcePixel;
		var destPixel = 0;
		var sourceOffset;
		var destOffset;
		var _g = (Std().default).int(sourceRect.y);
		var _g1 = (Std().default).int(sourceRect.height);
		while(_g < _g1) {
			var row = _g++;
			var _g2 = (Std().default).int(sourceRect.x);
			var _g11 = (Std().default).int(sourceRect.width);
			while(_g2 < _g11) {
				var column = _g2++;
				sourceOffset = row * sourceStride + column * 4;
				destOffset = (row + offsetX) * destStride + (column + offsetY) * 4;
				var format = sourceFormat;
				var premultiplied = sourcePremultiplied;
				if(premultiplied == null) {
					premultiplied = false;
				}
				if(format == null) {
					format = 0;
				}
				switch(format) {
				case 0:
					sourcePixel = (sourceData[sourceOffset] & 255) << 24 | (sourceData[sourceOffset + 1] & 255) << 16 | (sourceData[sourceOffset + 2] & 255) << 8 | sourceData[sourceOffset + 3] & 255;
					break;
				case 1:
					sourcePixel = (sourceData[sourceOffset + 1] & 255) << 24 | (sourceData[sourceOffset + 2] & 255) << 16 | (sourceData[sourceOffset + 3] & 255) << 8 | sourceData[sourceOffset] & 255;
					break;
				case 2:
					sourcePixel = (sourceData[sourceOffset + 2] & 255) << 24 | (sourceData[sourceOffset + 1] & 255) << 16 | (sourceData[sourceOffset] & 255) << 8 | sourceData[sourceOffset + 3] & 255;
					break;
				}
				if(premultiplied) {
					if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (sourcePixel & 255);
						sourcePixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | sourcePixel & 255 & 255;
					}
				}
				if((sourcePixel & 255) == 0) {
					destPixel = 0;
				} else {
					var value = (Std().default).int(Math.max(0,Math.min(this.__matrix[0] * (sourcePixel >>> 24 & 255) + this.__matrix[1] * (sourcePixel >>> 16 & 255) + this.__matrix[2] * (sourcePixel >>> 8 & 255) + this.__matrix[3] * (sourcePixel & 255) + this.__matrix[4],255)));
					destPixel = (value & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
					var value1 = (Std().default).int(Math.max(0,Math.min(this.__matrix[5] * (sourcePixel >>> 24 & 255) + this.__matrix[6] * (sourcePixel >>> 16 & 255) + this.__matrix[7] * (sourcePixel >>> 8 & 255) + this.__matrix[8] * (sourcePixel & 255) + this.__matrix[9],255)));
					destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (value1 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
					var value2 = (Std().default).int(Math.max(0,Math.min(this.__matrix[10] * (sourcePixel >>> 24 & 255) + this.__matrix[11] * (sourcePixel >>> 16 & 255) + this.__matrix[12] * (sourcePixel >>> 8 & 255) + this.__matrix[13] * (sourcePixel & 255) + this.__matrix[14],255)));
					destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (value2 & 255) << 8 | destPixel & 255 & 255;
					var value3 = (Std().default).int(Math.max(0,Math.min(this.__matrix[15] * (sourcePixel >>> 24 & 255) + this.__matrix[16] * (sourcePixel >>> 16 & 255) + this.__matrix[17] * (sourcePixel >>> 8 & 255) + this.__matrix[18] * (sourcePixel & 255) + this.__matrix[19],255)));
					destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | value3 & 255;
				}
				var format1 = destFormat;
				var premultiplied1 = destPremultiplied;
				if(premultiplied1 == null) {
					premultiplied1 = false;
				}
				if(format1 == null) {
					format1 = 0;
				}
				if(premultiplied1) {
					if((destPixel & 255) == 0) {
						if(destPixel != 0) {
							destPixel = 0;
						}
					} else if((destPixel & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[destPixel & 255];
						destPixel = ((destPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((destPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((destPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
					}
				}
				switch(format1) {
				case 0:
					destData[destOffset] = destPixel >>> 24 & 255;
					destData[destOffset + 1] = destPixel >>> 16 & 255;
					destData[destOffset + 2] = destPixel >>> 8 & 255;
					destData[destOffset + 3] = destPixel & 255;
					break;
				case 1:
					destData[destOffset] = destPixel & 255;
					destData[destOffset + 1] = destPixel >>> 24 & 255;
					destData[destOffset + 2] = destPixel >>> 16 & 255;
					destData[destOffset + 3] = destPixel >>> 8 & 255;
					break;
				case 2:
					destData[destOffset] = destPixel >>> 8 & 255;
					destData[destOffset + 1] = destPixel >>> 16 & 255;
					destData[destOffset + 2] = destPixel >>> 24 & 255;
					destData[destOffset + 3] = destPixel & 255;
					break;
				}
			}
		}
		destBitmapData.image.dirty = true;
		return destBitmapData;
	},
	__initShader: function(renderer,pass) {
		ColorMatrixFilter.__colorMatrixShader.init(this.get_matrix());
		return ColorMatrixFilter.__colorMatrixShader;
	},
	get_matrix: function() {
		return this.__matrix;
	},
	set_matrix: function(value) {
		if(value == null) {
			value = [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];
		}
		return this.__matrix = value;
	}
});
ColorMatrixFilter.prototype.__class__ = ColorMatrixFilter.prototype.constructor = $hxClasses["openfl.filters.ColorMatrixFilter"] = ColorMatrixFilter;

// Init

Object.defineProperties(ColorMatrixFilter.prototype,{ matrix : { get : function () { return this.get_matrix (); }, set : function (v) { return this.set_matrix (v); }}});

// Statics


ColorMatrixFilter.__colorMatrixShader = new (openfl_filters__$ColorMatrixFilter_ColorMatrixShader().default)()

// Export

exports.default = ColorMatrixFilter;