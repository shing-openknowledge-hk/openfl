// Class: lime._internal.graphics.ImageDataUtil

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime__$internal_graphics__$ImageDataUtil_ImageDataView() {return require("./../../../lime/_internal/graphics/_ImageDataUtil/ImageDataView");}
function Std() {return require("./../../../Std");}
function lime_math__$RGBA_RGBA_$Impl_$() {return require("./../../../lime/math/_RGBA/RGBA_Impl_");}
function lime_math_Vector4() {return require("./../../../lime/math/Vector4");}
function lime_math__$ColorMatrix_ColorMatrix_$Impl_$() {return require("./../../../lime/math/_ColorMatrix/ColorMatrix_Impl_");}
function lime_math_Rectangle() {return require("./../../../lime/math/Rectangle");}
function lime__$internal_graphics_StackBlur() {return require("./../../../lime/_internal/graphics/StackBlur");}
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function lime_graphics_ImageBuffer() {return require("./../../../lime/graphics/ImageBuffer");}
function _$UInt_UInt_$Impl_$() {return require("./../../../_UInt/UInt_Impl_");}
function lime_system_Endian() {return require("./../../../lime/system/Endian");}

// Constructor

var ImageDataUtil = function(){}

// Meta

ImageDataUtil.__name__ = "lime._internal.graphics.ImageDataUtil";
ImageDataUtil.__isInterface__ = false;
ImageDataUtil.prototype = {
	
};
ImageDataUtil.prototype.__class__ = ImageDataUtil.prototype.constructor = $hxClasses["lime._internal.graphics.ImageDataUtil"] = ImageDataUtil;

// Init



// Statics

ImageDataUtil.displaceMap = function(target,source,map,mapPoint,componentX,componentY,smooth) {
	var targetData = target.buffer.data;
	var sourceData = source.buffer.data;
	var mapData = map.buffer.data;
	var targetFormat = target.buffer.format;
	var sourceFormat = source.buffer.format;
	var mapFormat = map.buffer.format;
	var targetPremultiplied = target.get_premultiplied();
	var sourcePremultiplied = source.get_premultiplied();
	var mapPremultiplied = map.get_premultiplied();
	var sourceView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(source);
	var mapView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(map);
	var row;
	var sourceOffset;
	var sourcePixel;
	var mapPixel;
	var targetPixel;
	var mapPixelX;
	var mapPixelY;
	var mapPixelA;
	var s1;
	var s2;
	var s3;
	var s4;
	var mPointXFloor;
	var mPointYFloor;
	var disOffsetXFloor;
	var disOffsetYFloor;
	var disX;
	var disY;
	var _g = 0;
	var _g1 = sourceView.height;
	while(_g < _g1) {
		var y = _g++;
		row = sourceView.row(y);
		var _g2 = 0;
		var _g11 = sourceView.width;
		while(_g2 < _g11) {
			var x = _g2++;
			sourceOffset = row + x * 4;
			mPointXFloor = (Std().default).int(mapPoint.x);
			mPointYFloor = (Std().default).int(mapPoint.y);
			if(smooth) {
				var offset = sourceView.row(y - mPointYFloor + 1) + (x - mPointXFloor) * 4;
				var format = mapFormat;
				var premultiplied = mapPremultiplied;
				if(premultiplied == null) {
					premultiplied = false;
				}
				if(format == null) {
					format = 0;
				}
				switch(format) {
				case 0:
					s1 = (mapData[offset] & 255) << 24 | (mapData[offset + 1] & 255) << 16 | (mapData[offset + 2] & 255) << 8 | mapData[offset + 3] & 255;
					break;
				case 1:
					s1 = (mapData[offset + 1] & 255) << 24 | (mapData[offset + 2] & 255) << 16 | (mapData[offset + 3] & 255) << 8 | mapData[offset] & 255;
					break;
				case 2:
					s1 = (mapData[offset + 2] & 255) << 24 | (mapData[offset + 1] & 255) << 16 | (mapData[offset] & 255) << 8 | mapData[offset + 3] & 255;
					break;
				}
				if(premultiplied) {
					if((s1 & 255) != 0 && (s1 & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (s1 & 255);
						s1 = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s1 >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s1 >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s1 >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | s1 & 255 & 255;
					}
				}
				var offset1 = sourceView.row(y - mPointYFloor) + (x - mPointXFloor + 1) * 4;
				var format1 = mapFormat;
				var premultiplied1 = mapPremultiplied;
				if(premultiplied1 == null) {
					premultiplied1 = false;
				}
				if(format1 == null) {
					format1 = 0;
				}
				switch(format1) {
				case 0:
					s2 = (mapData[offset1] & 255) << 24 | (mapData[offset1 + 1] & 255) << 16 | (mapData[offset1 + 2] & 255) << 8 | mapData[offset1 + 3] & 255;
					break;
				case 1:
					s2 = (mapData[offset1 + 1] & 255) << 24 | (mapData[offset1 + 2] & 255) << 16 | (mapData[offset1 + 3] & 255) << 8 | mapData[offset1] & 255;
					break;
				case 2:
					s2 = (mapData[offset1 + 2] & 255) << 24 | (mapData[offset1 + 1] & 255) << 16 | (mapData[offset1] & 255) << 8 | mapData[offset1 + 3] & 255;
					break;
				}
				if(premultiplied1) {
					if((s2 & 255) != 0 && (s2 & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (s2 & 255);
						s2 = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s2 >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s2 >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s2 >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | s2 & 255 & 255;
					}
				}
				var offset2 = sourceView.row(y - mPointYFloor + 1) + (x - mPointXFloor + 1) * 4;
				var format2 = mapFormat;
				var premultiplied2 = mapPremultiplied;
				if(premultiplied2 == null) {
					premultiplied2 = false;
				}
				if(format2 == null) {
					format2 = 0;
				}
				switch(format2) {
				case 0:
					s3 = (mapData[offset2] & 255) << 24 | (mapData[offset2 + 1] & 255) << 16 | (mapData[offset2 + 2] & 255) << 8 | mapData[offset2 + 3] & 255;
					break;
				case 1:
					s3 = (mapData[offset2 + 1] & 255) << 24 | (mapData[offset2 + 2] & 255) << 16 | (mapData[offset2 + 3] & 255) << 8 | mapData[offset2] & 255;
					break;
				case 2:
					s3 = (mapData[offset2 + 2] & 255) << 24 | (mapData[offset2 + 1] & 255) << 16 | (mapData[offset2] & 255) << 8 | mapData[offset2 + 3] & 255;
					break;
				}
				if(premultiplied2) {
					if((s3 & 255) != 0 && (s3 & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (s3 & 255);
						s3 = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s3 >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s3 >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s3 >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | s3 & 255 & 255;
					}
				}
				var offset3 = sourceView.row(y - mPointYFloor) + (x - mPointXFloor) * 4;
				var format3 = mapFormat;
				var premultiplied3 = mapPremultiplied;
				if(premultiplied3 == null) {
					premultiplied3 = false;
				}
				if(format3 == null) {
					format3 = 0;
				}
				switch(format3) {
				case 0:
					s4 = (mapData[offset3] & 255) << 24 | (mapData[offset3 + 1] & 255) << 16 | (mapData[offset3 + 2] & 255) << 8 | mapData[offset3 + 3] & 255;
					break;
				case 1:
					s4 = (mapData[offset3 + 1] & 255) << 24 | (mapData[offset3 + 2] & 255) << 16 | (mapData[offset3 + 3] & 255) << 8 | mapData[offset3] & 255;
					break;
				case 2:
					s4 = (mapData[offset3 + 2] & 255) << 24 | (mapData[offset3 + 1] & 255) << 16 | (mapData[offset3] & 255) << 8 | mapData[offset3 + 3] & 255;
					break;
				}
				if(premultiplied3) {
					if((s4 & 255) != 0 && (s4 & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (s4 & 255);
						s4 = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s4 >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s4 >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s4 >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | s4 & 255 & 255;
					}
				}
				mapPixel = ImageDataUtil.bilinear(s1,s2,s3,s4,mapPoint.x - mPointXFloor,mapPoint.y - mPointYFloor);
			} else {
				var offset4 = mapView.row(y - mPointYFloor) + (x - mPointXFloor) * 4;
				var format4 = mapFormat;
				var premultiplied4 = mapPremultiplied;
				if(premultiplied4 == null) {
					premultiplied4 = false;
				}
				if(format4 == null) {
					format4 = 0;
				}
				switch(format4) {
				case 0:
					mapPixel = (mapData[offset4] & 255) << 24 | (mapData[offset4 + 1] & 255) << 16 | (mapData[offset4 + 2] & 255) << 8 | mapData[offset4 + 3] & 255;
					break;
				case 1:
					mapPixel = (mapData[offset4 + 1] & 255) << 24 | (mapData[offset4 + 2] & 255) << 16 | (mapData[offset4 + 3] & 255) << 8 | mapData[offset4] & 255;
					break;
				case 2:
					mapPixel = (mapData[offset4 + 2] & 255) << 24 | (mapData[offset4 + 1] & 255) << 16 | (mapData[offset4] & 255) << 8 | mapData[offset4 + 3] & 255;
					break;
				}
				if(premultiplied4) {
					if((mapPixel & 255) != 0 && (mapPixel & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (mapPixel & 255);
						mapPixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((mapPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((mapPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((mapPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | mapPixel & 255 & 255;
					}
				}
			}
			mapPixelA = (mapPixel & 255) / 255.0;
			mapPixelX = ((mapPixel >>> 24 & 255) - 128) / 255.0 * mapPixelA;
			mapPixelY = ((mapPixel >>> 16 & 255) - 128) / 255.0 * mapPixelA;
			disX = mapPixelX * componentX.x + mapPixelY * componentY.x;
			disY = mapPixelX * componentX.y + mapPixelY * componentY.y;
			disOffsetXFloor = Math.floor(disX * sourceView.width);
			disOffsetYFloor = Math.floor(disY * sourceView.height);
			if(smooth) {
				var offset5 = sourceView.row(y + disOffsetYFloor + 1) + (x + disOffsetXFloor) * 4;
				var format5 = sourceFormat;
				var premultiplied5 = sourcePremultiplied;
				if(premultiplied5 == null) {
					premultiplied5 = false;
				}
				if(format5 == null) {
					format5 = 0;
				}
				switch(format5) {
				case 0:
					s1 = (sourceData[offset5] & 255) << 24 | (sourceData[offset5 + 1] & 255) << 16 | (sourceData[offset5 + 2] & 255) << 8 | sourceData[offset5 + 3] & 255;
					break;
				case 1:
					s1 = (sourceData[offset5 + 1] & 255) << 24 | (sourceData[offset5 + 2] & 255) << 16 | (sourceData[offset5 + 3] & 255) << 8 | sourceData[offset5] & 255;
					break;
				case 2:
					s1 = (sourceData[offset5 + 2] & 255) << 24 | (sourceData[offset5 + 1] & 255) << 16 | (sourceData[offset5] & 255) << 8 | sourceData[offset5 + 3] & 255;
					break;
				}
				if(premultiplied5) {
					if((s1 & 255) != 0 && (s1 & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (s1 & 255);
						s1 = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s1 >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s1 >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s1 >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | s1 & 255 & 255;
					}
				}
				var offset6 = sourceView.row(y + disOffsetYFloor) + (x + disOffsetXFloor + 1) * 4;
				var format6 = sourceFormat;
				var premultiplied6 = sourcePremultiplied;
				if(premultiplied6 == null) {
					premultiplied6 = false;
				}
				if(format6 == null) {
					format6 = 0;
				}
				switch(format6) {
				case 0:
					s2 = (sourceData[offset6] & 255) << 24 | (sourceData[offset6 + 1] & 255) << 16 | (sourceData[offset6 + 2] & 255) << 8 | sourceData[offset6 + 3] & 255;
					break;
				case 1:
					s2 = (sourceData[offset6 + 1] & 255) << 24 | (sourceData[offset6 + 2] & 255) << 16 | (sourceData[offset6 + 3] & 255) << 8 | sourceData[offset6] & 255;
					break;
				case 2:
					s2 = (sourceData[offset6 + 2] & 255) << 24 | (sourceData[offset6 + 1] & 255) << 16 | (sourceData[offset6] & 255) << 8 | sourceData[offset6 + 3] & 255;
					break;
				}
				if(premultiplied6) {
					if((s2 & 255) != 0 && (s2 & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (s2 & 255);
						s2 = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s2 >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s2 >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s2 >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | s2 & 255 & 255;
					}
				}
				var offset7 = sourceView.row(y + disOffsetYFloor + 1) + (x + disOffsetXFloor + 1) * 4;
				var format7 = sourceFormat;
				var premultiplied7 = sourcePremultiplied;
				if(premultiplied7 == null) {
					premultiplied7 = false;
				}
				if(format7 == null) {
					format7 = 0;
				}
				switch(format7) {
				case 0:
					s3 = (sourceData[offset7] & 255) << 24 | (sourceData[offset7 + 1] & 255) << 16 | (sourceData[offset7 + 2] & 255) << 8 | sourceData[offset7 + 3] & 255;
					break;
				case 1:
					s3 = (sourceData[offset7 + 1] & 255) << 24 | (sourceData[offset7 + 2] & 255) << 16 | (sourceData[offset7 + 3] & 255) << 8 | sourceData[offset7] & 255;
					break;
				case 2:
					s3 = (sourceData[offset7 + 2] & 255) << 24 | (sourceData[offset7 + 1] & 255) << 16 | (sourceData[offset7] & 255) << 8 | sourceData[offset7 + 3] & 255;
					break;
				}
				if(premultiplied7) {
					if((s3 & 255) != 0 && (s3 & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (s3 & 255);
						s3 = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s3 >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s3 >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s3 >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | s3 & 255 & 255;
					}
				}
				var offset8 = sourceView.row(y + disOffsetYFloor) + (x + disOffsetXFloor) * 4;
				var format8 = sourceFormat;
				var premultiplied8 = sourcePremultiplied;
				if(premultiplied8 == null) {
					premultiplied8 = false;
				}
				if(format8 == null) {
					format8 = 0;
				}
				switch(format8) {
				case 0:
					s4 = (sourceData[offset8] & 255) << 24 | (sourceData[offset8 + 1] & 255) << 16 | (sourceData[offset8 + 2] & 255) << 8 | sourceData[offset8 + 3] & 255;
					break;
				case 1:
					s4 = (sourceData[offset8 + 1] & 255) << 24 | (sourceData[offset8 + 2] & 255) << 16 | (sourceData[offset8 + 3] & 255) << 8 | sourceData[offset8] & 255;
					break;
				case 2:
					s4 = (sourceData[offset8 + 2] & 255) << 24 | (sourceData[offset8 + 1] & 255) << 16 | (sourceData[offset8] & 255) << 8 | sourceData[offset8 + 3] & 255;
					break;
				}
				if(premultiplied8) {
					if((s4 & 255) != 0 && (s4 & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (s4 & 255);
						s4 = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s4 >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s4 >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((s4 >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | s4 & 255 & 255;
					}
				}
				sourcePixel = ImageDataUtil.bilinear(s1,s2,s3,s4,disX * sourceView.width - disOffsetXFloor,disY * sourceView.height - disOffsetYFloor);
			} else {
				var offset9 = sourceView.row(y + disOffsetYFloor) + (x + disOffsetXFloor) * 4;
				var format9 = sourceFormat;
				var premultiplied9 = sourcePremultiplied;
				if(premultiplied9 == null) {
					premultiplied9 = false;
				}
				if(format9 == null) {
					format9 = 0;
				}
				switch(format9) {
				case 0:
					sourcePixel = (sourceData[offset9] & 255) << 24 | (sourceData[offset9 + 1] & 255) << 16 | (sourceData[offset9 + 2] & 255) << 8 | sourceData[offset9 + 3] & 255;
					break;
				case 1:
					sourcePixel = (sourceData[offset9 + 1] & 255) << 24 | (sourceData[offset9 + 2] & 255) << 16 | (sourceData[offset9 + 3] & 255) << 8 | sourceData[offset9] & 255;
					break;
				case 2:
					sourcePixel = (sourceData[offset9 + 2] & 255) << 24 | (sourceData[offset9 + 1] & 255) << 16 | (sourceData[offset9] & 255) << 8 | sourceData[offset9 + 3] & 255;
					break;
				}
				if(premultiplied9) {
					if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (sourcePixel & 255);
						sourcePixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | sourcePixel & 255 & 255;
					}
				}
			}
			var format10 = targetFormat;
			var premultiplied10 = targetPremultiplied;
			if(premultiplied10 == null) {
				premultiplied10 = false;
			}
			if(format10 == null) {
				format10 = 0;
			}
			if(premultiplied10) {
				if((sourcePixel & 255) == 0) {
					if(sourcePixel != 0) {
						sourcePixel = 0;
					}
				} else if((sourcePixel & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[sourcePixel & 255];
					sourcePixel = ((sourcePixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((sourcePixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((sourcePixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | sourcePixel & 255 & 255;
				}
			}
			switch(format10) {
			case 0:
				targetData[sourceOffset] = sourcePixel >>> 24 & 255;
				targetData[sourceOffset + 1] = sourcePixel >>> 16 & 255;
				targetData[sourceOffset + 2] = sourcePixel >>> 8 & 255;
				targetData[sourceOffset + 3] = sourcePixel & 255;
				break;
			case 1:
				targetData[sourceOffset] = sourcePixel & 255;
				targetData[sourceOffset + 1] = sourcePixel >>> 24 & 255;
				targetData[sourceOffset + 2] = sourcePixel >>> 16 & 255;
				targetData[sourceOffset + 3] = sourcePixel >>> 8 & 255;
				break;
			case 2:
				targetData[sourceOffset] = sourcePixel >>> 8 & 255;
				targetData[sourceOffset + 1] = sourcePixel >>> 16 & 255;
				targetData[sourceOffset + 2] = sourcePixel >>> 24 & 255;
				targetData[sourceOffset + 3] = sourcePixel & 255;
				break;
			}
		}
	}
	target.dirty = true;
	target.version++;
}
ImageDataUtil.bilinear = function(s1,s2,s3,s4,su,sv) {
	return ImageDataUtil.lerpRGBA(ImageDataUtil.lerpRGBA(s4,s2,su),ImageDataUtil.lerpRGBA(s1,s3,su),sv);
}
ImageDataUtil.lerpRGBA = function(v0,v1,x) {
	var this1 = 0;
	var result = this1;
	var value = Math.floor(ImageDataUtil.lerp(v0 >>> 24 & 255,v1 >>> 24 & 255,x));
	result = (value & 255) << 24 | (result >>> 16 & 255 & 255) << 16 | (result >>> 8 & 255 & 255) << 8 | result & 255 & 255;
	var value1 = Math.floor(ImageDataUtil.lerp(v0 >>> 16 & 255,v1 >>> 16 & 255,x));
	result = (result >>> 24 & 255 & 255) << 24 | (value1 & 255) << 16 | (result >>> 8 & 255 & 255) << 8 | result & 255 & 255;
	var value2 = Math.floor(ImageDataUtil.lerp(v0 >>> 8 & 255,v1 >>> 8 & 255,x));
	result = (result >>> 24 & 255 & 255) << 24 | (result >>> 16 & 255 & 255) << 16 | (value2 & 255) << 8 | result & 255 & 255;
	var value3 = Math.floor(ImageDataUtil.lerp(v0 & 255,v1 & 255,x));
	result = (result >>> 24 & 255 & 255) << 24 | (result >>> 16 & 255 & 255) << 16 | (result >>> 8 & 255 & 255) << 8 | value3 & 255;
	return result;
}
ImageDataUtil.lerp4f = function(v0,v1,x) {
	return new (lime_math_Vector4().default)(ImageDataUtil.lerp(v0.x,v1.x,x),ImageDataUtil.lerp(v0.y,v1.y,x),ImageDataUtil.lerp(v0.z,v1.z,x),ImageDataUtil.lerp(v0.w,v1.w,x));
}
ImageDataUtil.lerp = function(v0,v1,x) {
	return (1.0 - x) * v0 + x * v1;
}
ImageDataUtil.colorTransform = function(image,rect,colorMatrix) {
	var data = image.buffer.data;
	if(data == null) {
		return;
	}
	var format = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	var dataView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(image,rect);
	var alphaTable = (lime_math__$ColorMatrix_ColorMatrix_$Impl_$().default).getAlphaTable(colorMatrix);
	var redTable = (lime_math__$ColorMatrix_ColorMatrix_$Impl_$().default).getRedTable(colorMatrix);
	var greenTable = (lime_math__$ColorMatrix_ColorMatrix_$Impl_$().default).getGreenTable(colorMatrix);
	var blueTable = (lime_math__$ColorMatrix_ColorMatrix_$Impl_$().default).getBlueTable(colorMatrix);
	var row;
	var offset;
	var pixel;
	var _g = 0;
	var _g1 = dataView.height;
	while(_g < _g1) {
		var y = _g++;
		row = dataView.row(y);
		var _g2 = 0;
		var _g11 = dataView.width;
		while(_g2 < _g11) {
			var x = _g2++;
			offset = row + x * 4;
			var format1 = format;
			var premultiplied1 = premultiplied;
			if(premultiplied1 == null) {
				premultiplied1 = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			switch(format1) {
			case 0:
				pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
				break;
			case 1:
				pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
				break;
			case 2:
				pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
				break;
			}
			if(premultiplied1) {
				if((pixel & 255) != 0 && (pixel & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (pixel & 255);
					pixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | pixel & 255 & 255;
				}
			}
			pixel = (redTable[pixel >>> 24 & 255] & 255) << 24 | (greenTable[pixel >>> 16 & 255] & 255) << 16 | (blueTable[pixel >>> 8 & 255] & 255) << 8 | alphaTable[pixel & 255] & 255;
			var format2 = format;
			var premultiplied2 = premultiplied;
			if(premultiplied2 == null) {
				premultiplied2 = false;
			}
			if(format2 == null) {
				format2 = 0;
			}
			if(premultiplied2) {
				if((pixel & 255) == 0) {
					if(pixel != 0) {
						pixel = 0;
					}
				} else if((pixel & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[pixel & 255];
					pixel = ((pixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((pixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((pixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | pixel & 255 & 255;
				}
			}
			switch(format2) {
			case 0:
				data[offset] = pixel >>> 24 & 255;
				data[offset + 1] = pixel >>> 16 & 255;
				data[offset + 2] = pixel >>> 8 & 255;
				data[offset + 3] = pixel & 255;
				break;
			case 1:
				data[offset] = pixel & 255;
				data[offset + 1] = pixel >>> 24 & 255;
				data[offset + 2] = pixel >>> 16 & 255;
				data[offset + 3] = pixel >>> 8 & 255;
				break;
			case 2:
				data[offset] = pixel >>> 8 & 255;
				data[offset + 1] = pixel >>> 16 & 255;
				data[offset + 2] = pixel >>> 24 & 255;
				data[offset + 3] = pixel & 255;
				break;
			}
		}
	}
	image.dirty = true;
	image.version++;
}
ImageDataUtil.copyChannel = function(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
	var destIdx;
	switch(destChannel._hx_index) {
	case 0:
		destIdx = 0;
		break;
	case 1:
		destIdx = 1;
		break;
	case 2:
		destIdx = 2;
		break;
	case 3:
		destIdx = 3;
		break;
	}
	var srcIdx;
	switch(sourceChannel._hx_index) {
	case 0:
		srcIdx = 0;
		break;
	case 1:
		srcIdx = 1;
		break;
	case 2:
		srcIdx = 2;
		break;
	case 3:
		srcIdx = 3;
		break;
	}
	var srcData = sourceImage.buffer.data;
	var destData = image.buffer.data;
	if(srcData == null || destData == null) {
		return;
	}
	var srcView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(sourceImage,sourceRect);
	var destView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(image,new (lime_math_Rectangle().default)(destPoint.x,destPoint.y,srcView.width,srcView.height));
	var srcFormat = sourceImage.buffer.format;
	var destFormat = image.buffer.format;
	var srcPremultiplied = sourceImage.buffer.premultiplied;
	var destPremultiplied = image.buffer.premultiplied;
	var srcPosition;
	var destPosition;
	var srcPixel;
	var destPixel;
	var value = 0;
	var _g = 0;
	var _g1 = destView.height;
	while(_g < _g1) {
		var y = _g++;
		srcPosition = srcView.row(y);
		destPosition = destView.row(y);
		var _g2 = 0;
		var _g11 = destView.width;
		while(_g2 < _g11) {
			var x = _g2++;
			var format = srcFormat;
			var premultiplied = srcPremultiplied;
			if(premultiplied == null) {
				premultiplied = false;
			}
			if(format == null) {
				format = 0;
			}
			switch(format) {
			case 0:
				srcPixel = (srcData[srcPosition] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition + 2] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			case 1:
				srcPixel = (srcData[srcPosition + 1] & 255) << 24 | (srcData[srcPosition + 2] & 255) << 16 | (srcData[srcPosition + 3] & 255) << 8 | srcData[srcPosition] & 255;
				break;
			case 2:
				srcPixel = (srcData[srcPosition + 2] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			}
			if(premultiplied) {
				if((srcPixel & 255) != 0 && (srcPixel & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (srcPixel & 255);
					srcPixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((srcPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((srcPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((srcPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | srcPixel & 255 & 255;
				}
			}
			var format1 = destFormat;
			var premultiplied1 = destPremultiplied;
			if(premultiplied1 == null) {
				premultiplied1 = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			switch(format1) {
			case 0:
				destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			case 1:
				destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
				break;
			case 2:
				destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			}
			if(premultiplied1) {
				if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (destPixel & 255);
					destPixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((destPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((destPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((destPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | destPixel & 255 & 255;
				}
			}
			switch(srcIdx) {
			case 0:
				value = srcPixel >>> 24 & 255;
				break;
			case 1:
				value = srcPixel >>> 16 & 255;
				break;
			case 2:
				value = srcPixel >>> 8 & 255;
				break;
			case 3:
				value = srcPixel & 255;
				break;
			}
			switch(destIdx) {
			case 0:
				destPixel = (value & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
				break;
			case 1:
				destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (value & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
				break;
			case 2:
				destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (value & 255) << 8 | destPixel & 255 & 255;
				break;
			case 3:
				destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | value & 255;
				break;
			}
			var format2 = destFormat;
			var premultiplied2 = destPremultiplied;
			if(premultiplied2 == null) {
				premultiplied2 = false;
			}
			if(format2 == null) {
				format2 = 0;
			}
			if(premultiplied2) {
				if((destPixel & 255) == 0) {
					if(destPixel != 0) {
						destPixel = 0;
					}
				} else if((destPixel & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[destPixel & 255];
					destPixel = ((destPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((destPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((destPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
				}
			}
			switch(format2) {
			case 0:
				destData[destPosition] = destPixel >>> 24 & 255;
				destData[destPosition + 1] = destPixel >>> 16 & 255;
				destData[destPosition + 2] = destPixel >>> 8 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			case 1:
				destData[destPosition] = destPixel & 255;
				destData[destPosition + 1] = destPixel >>> 24 & 255;
				destData[destPosition + 2] = destPixel >>> 16 & 255;
				destData[destPosition + 3] = destPixel >>> 8 & 255;
				break;
			case 2:
				destData[destPosition] = destPixel >>> 8 & 255;
				destData[destPosition + 1] = destPixel >>> 16 & 255;
				destData[destPosition + 2] = destPixel >>> 24 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			}
			srcPosition += 4;
			destPosition += 4;
		}
	}
	image.dirty = true;
	image.version++;
}
ImageDataUtil.copyPixels = function(image,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) {
		mergeAlpha = false;
	}
	if(image.width == sourceImage.width && image.height == sourceImage.height && sourceRect.width == sourceImage.width && sourceRect.height == sourceImage.height && sourceRect.x == 0 && sourceRect.y == 0 && destPoint.x == 0 && destPoint.y == 0 && alphaImage == null && alphaPoint == null && mergeAlpha == false && image.get_format() == sourceImage.get_format()) {
		image.buffer.data.set(sourceImage.buffer.data);
	} else {
		var sourceData = sourceImage.buffer.data;
		var destData = image.buffer.data;
		if(sourceData == null || destData == null) {
			return;
		}
		var sourceView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(sourceImage,sourceRect);
		var destRect = new (lime_math_Rectangle().default)(destPoint.x,destPoint.y,sourceView.width,sourceView.height);
		var destView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(image,destRect);
		var sourceFormat = sourceImage.buffer.format;
		var destFormat = image.buffer.format;
		var sourcePosition;
		var destPosition;
		var sourceAlpha;
		var destAlpha;
		var oneMinusSourceAlpha;
		var blendAlpha;
		var sourcePixel;
		var destPixel;
		var sourcePremultiplied = sourceImage.buffer.premultiplied;
		var destPremultiplied = image.buffer.premultiplied;
		var sourceBytesPerPixel = (Std().default).int(sourceImage.buffer.bitsPerPixel / 8);
		var destBytesPerPixel = (Std().default).int(image.buffer.bitsPerPixel / 8);
		var useAlphaImage = alphaImage != null && alphaImage.get_transparent();
		var blend = mergeAlpha || useAlphaImage && !image.get_transparent() || !mergeAlpha && !image.get_transparent() && sourceImage.get_transparent();
		if(!useAlphaImage) {
			if(blend) {
				var _g = 0;
				var _g1 = destView.height;
				while(_g < _g1) {
					var y = _g++;
					sourcePosition = sourceView.row(y);
					destPosition = destView.row(y);
					var _g2 = 0;
					var _g11 = destView.width;
					while(_g2 < _g11) {
						var x = _g2++;
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
							sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						case 1:
							sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
							break;
						case 2:
							sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						}
						if(premultiplied) {
							if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
								(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (sourcePixel & 255);
								sourcePixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | sourcePixel & 255 & 255;
							}
						}
						var format1 = destFormat;
						var premultiplied1 = destPremultiplied;
						if(premultiplied1 == null) {
							premultiplied1 = false;
						}
						if(format1 == null) {
							format1 = 0;
						}
						switch(format1) {
						case 0:
							destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
							break;
						case 1:
							destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
							break;
						case 2:
							destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
							break;
						}
						if(premultiplied1) {
							if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
								(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (destPixel & 255);
								destPixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((destPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((destPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((destPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | destPixel & 255 & 255;
							}
						}
						sourceAlpha = (sourcePixel & 255) / 255.0;
						destAlpha = (destPixel & 255) / 255.0;
						oneMinusSourceAlpha = 1 - sourceAlpha;
						blendAlpha = sourceAlpha + destAlpha * oneMinusSourceAlpha;
						if(blendAlpha == 0) {
							destPixel = 0;
						} else {
							var value = (lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round(((sourcePixel >>> 24 & 255) * sourceAlpha + (destPixel >>> 24 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha)];
							destPixel = (value & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
							var value1 = (lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round(((sourcePixel >>> 16 & 255) * sourceAlpha + (destPixel >>> 16 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha)];
							destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (value1 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
							var value2 = (lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round(((sourcePixel >>> 8 & 255) * sourceAlpha + (destPixel >>> 8 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha)];
							destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (value2 & 255) << 8 | destPixel & 255 & 255;
							var value3 = (lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round(blendAlpha * 255.0)];
							destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | value3 & 255;
						}
						var format2 = destFormat;
						var premultiplied2 = destPremultiplied;
						if(premultiplied2 == null) {
							premultiplied2 = false;
						}
						if(format2 == null) {
							format2 = 0;
						}
						if(premultiplied2) {
							if((destPixel & 255) == 0) {
								if(destPixel != 0) {
									destPixel = 0;
								}
							} else if((destPixel & 255) != 255) {
								(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[destPixel & 255];
								destPixel = ((destPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((destPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((destPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
							}
						}
						switch(format2) {
						case 0:
							destData[destPosition] = destPixel >>> 24 & 255;
							destData[destPosition + 1] = destPixel >>> 16 & 255;
							destData[destPosition + 2] = destPixel >>> 8 & 255;
							destData[destPosition + 3] = destPixel & 255;
							break;
						case 1:
							destData[destPosition] = destPixel & 255;
							destData[destPosition + 1] = destPixel >>> 24 & 255;
							destData[destPosition + 2] = destPixel >>> 16 & 255;
							destData[destPosition + 3] = destPixel >>> 8 & 255;
							break;
						case 2:
							destData[destPosition] = destPixel >>> 8 & 255;
							destData[destPosition + 1] = destPixel >>> 16 & 255;
							destData[destPosition + 2] = destPixel >>> 24 & 255;
							destData[destPosition + 3] = destPixel & 255;
							break;
						}
						sourcePosition += 4;
						destPosition += 4;
					}
				}
			} else if(sourceFormat == destFormat && sourcePremultiplied == destPremultiplied && sourceBytesPerPixel == destBytesPerPixel) {
				var _g3 = 0;
				var _g12 = destView.height;
				while(_g3 < _g12) {
					var y1 = _g3++;
					sourcePosition = sourceView.row(y1);
					destPosition = destView.row(y1);
					destData.set(sourceData.subarray(sourcePosition,sourcePosition + destView.width * destBytesPerPixel),destPosition);
				}
			} else {
				var _g4 = 0;
				var _g13 = destView.height;
				while(_g4 < _g13) {
					var y2 = _g4++;
					sourcePosition = sourceView.row(y2);
					destPosition = destView.row(y2);
					var _g5 = 0;
					var _g14 = destView.width;
					while(_g5 < _g14) {
						var x1 = _g5++;
						var format3 = sourceFormat;
						var premultiplied3 = sourcePremultiplied;
						if(premultiplied3 == null) {
							premultiplied3 = false;
						}
						if(format3 == null) {
							format3 = 0;
						}
						switch(format3) {
						case 0:
							sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						case 1:
							sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
							break;
						case 2:
							sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						}
						if(premultiplied3) {
							if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
								(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (sourcePixel & 255);
								sourcePixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | sourcePixel & 255 & 255;
							}
						}
						var format4 = destFormat;
						var premultiplied4 = destPremultiplied;
						if(premultiplied4 == null) {
							premultiplied4 = false;
						}
						if(format4 == null) {
							format4 = 0;
						}
						if(premultiplied4) {
							if((sourcePixel & 255) == 0) {
								if(sourcePixel != 0) {
									sourcePixel = 0;
								}
							} else if((sourcePixel & 255) != 255) {
								(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[sourcePixel & 255];
								sourcePixel = ((sourcePixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((sourcePixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((sourcePixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | sourcePixel & 255 & 255;
							}
						}
						switch(format4) {
						case 0:
							destData[destPosition] = sourcePixel >>> 24 & 255;
							destData[destPosition + 1] = sourcePixel >>> 16 & 255;
							destData[destPosition + 2] = sourcePixel >>> 8 & 255;
							destData[destPosition + 3] = sourcePixel & 255;
							break;
						case 1:
							destData[destPosition] = sourcePixel & 255;
							destData[destPosition + 1] = sourcePixel >>> 24 & 255;
							destData[destPosition + 2] = sourcePixel >>> 16 & 255;
							destData[destPosition + 3] = sourcePixel >>> 8 & 255;
							break;
						case 2:
							destData[destPosition] = sourcePixel >>> 8 & 255;
							destData[destPosition + 1] = sourcePixel >>> 16 & 255;
							destData[destPosition + 2] = sourcePixel >>> 24 & 255;
							destData[destPosition + 3] = sourcePixel & 255;
							break;
						}
						sourcePosition += 4;
						destPosition += 4;
					}
				}
			}
		} else {
			var alphaData = alphaImage.buffer.data;
			var alphaFormat = alphaImage.buffer.format;
			var alphaPosition;
			var alphaPixel;
			var alphaView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(alphaImage,new (lime_math_Rectangle().default)(sourceView.x + (alphaPoint == null ? 0 : alphaPoint.x),sourceView.y + (alphaPoint == null ? 0 : alphaPoint.y),sourceView.width,sourceView.height));
			destView.clip((Std().default).int(destPoint.x),(Std().default).int(destPoint.y),alphaView.width,alphaView.height);
			if(blend) {
				var _g6 = 0;
				var _g15 = destView.height;
				while(_g6 < _g15) {
					var y3 = _g6++;
					sourcePosition = sourceView.row(y3);
					destPosition = destView.row(y3);
					alphaPosition = alphaView.row(y3);
					var _g7 = 0;
					var _g16 = destView.width;
					while(_g7 < _g16) {
						var x2 = _g7++;
						var format5 = sourceFormat;
						var premultiplied5 = sourcePremultiplied;
						if(premultiplied5 == null) {
							premultiplied5 = false;
						}
						if(format5 == null) {
							format5 = 0;
						}
						switch(format5) {
						case 0:
							sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						case 1:
							sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
							break;
						case 2:
							sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						}
						if(premultiplied5) {
							if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
								(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (sourcePixel & 255);
								sourcePixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | sourcePixel & 255 & 255;
							}
						}
						var format6 = destFormat;
						var premultiplied6 = destPremultiplied;
						if(premultiplied6 == null) {
							premultiplied6 = false;
						}
						if(format6 == null) {
							format6 = 0;
						}
						switch(format6) {
						case 0:
							destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
							break;
						case 1:
							destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
							break;
						case 2:
							destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
							break;
						}
						if(premultiplied6) {
							if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
								(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (destPixel & 255);
								destPixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((destPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((destPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((destPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | destPixel & 255 & 255;
							}
						}
						var format7 = alphaFormat;
						var premultiplied7 = false;
						if(premultiplied7 == null) {
							premultiplied7 = false;
						}
						if(format7 == null) {
							format7 = 0;
						}
						switch(format7) {
						case 0:
							alphaPixel = (alphaData[alphaPosition] & 255) << 24 | (alphaData[alphaPosition + 1] & 255) << 16 | (alphaData[alphaPosition + 2] & 255) << 8 | alphaData[alphaPosition + 3] & 255;
							break;
						case 1:
							alphaPixel = (alphaData[alphaPosition + 1] & 255) << 24 | (alphaData[alphaPosition + 2] & 255) << 16 | (alphaData[alphaPosition + 3] & 255) << 8 | alphaData[alphaPosition] & 255;
							break;
						case 2:
							alphaPixel = (alphaData[alphaPosition + 2] & 255) << 24 | (alphaData[alphaPosition + 1] & 255) << 16 | (alphaData[alphaPosition] & 255) << 8 | alphaData[alphaPosition + 3] & 255;
							break;
						}
						if(premultiplied7) {
							if((alphaPixel & 255) != 0 && (alphaPixel & 255) != 255) {
								(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (alphaPixel & 255);
								alphaPixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((alphaPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((alphaPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((alphaPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | alphaPixel & 255 & 255;
							}
						}
						sourceAlpha = (alphaPixel & 255) / 255.0 * ((sourcePixel & 255) / 255.0);
						if(sourceAlpha > 0) {
							destAlpha = (destPixel & 255) / 255.0;
							oneMinusSourceAlpha = 1 - sourceAlpha;
							blendAlpha = sourceAlpha + destAlpha * oneMinusSourceAlpha;
							var value4 = (lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round(((sourcePixel >>> 24 & 255) * sourceAlpha + (destPixel >>> 24 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha)];
							destPixel = (value4 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
							var value5 = (lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round(((sourcePixel >>> 16 & 255) * sourceAlpha + (destPixel >>> 16 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha)];
							destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (value5 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
							var value6 = (lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round(((sourcePixel >>> 8 & 255) * sourceAlpha + (destPixel >>> 8 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha)];
							destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (value6 & 255) << 8 | destPixel & 255 & 255;
							var value7 = (lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round(blendAlpha * 255.0)];
							destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | value7 & 255;
							var format8 = destFormat;
							var premultiplied8 = destPremultiplied;
							if(premultiplied8 == null) {
								premultiplied8 = false;
							}
							if(format8 == null) {
								format8 = 0;
							}
							if(premultiplied8) {
								if((destPixel & 255) == 0) {
									if(destPixel != 0) {
										destPixel = 0;
									}
								} else if((destPixel & 255) != 255) {
									(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[destPixel & 255];
									destPixel = ((destPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((destPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((destPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
								}
							}
							switch(format8) {
							case 0:
								destData[destPosition] = destPixel >>> 24 & 255;
								destData[destPosition + 1] = destPixel >>> 16 & 255;
								destData[destPosition + 2] = destPixel >>> 8 & 255;
								destData[destPosition + 3] = destPixel & 255;
								break;
							case 1:
								destData[destPosition] = destPixel & 255;
								destData[destPosition + 1] = destPixel >>> 24 & 255;
								destData[destPosition + 2] = destPixel >>> 16 & 255;
								destData[destPosition + 3] = destPixel >>> 8 & 255;
								break;
							case 2:
								destData[destPosition] = destPixel >>> 8 & 255;
								destData[destPosition + 1] = destPixel >>> 16 & 255;
								destData[destPosition + 2] = destPixel >>> 24 & 255;
								destData[destPosition + 3] = destPixel & 255;
								break;
							}
						}
						sourcePosition += 4;
						destPosition += 4;
						alphaPosition += 4;
					}
				}
			} else {
				var _g8 = 0;
				var _g17 = destView.height;
				while(_g8 < _g17) {
					var y4 = _g8++;
					sourcePosition = sourceView.row(y4);
					destPosition = destView.row(y4);
					alphaPosition = alphaView.row(y4);
					var _g9 = 0;
					var _g18 = destView.width;
					while(_g9 < _g18) {
						var x3 = _g9++;
						var format9 = sourceFormat;
						var premultiplied9 = sourcePremultiplied;
						if(premultiplied9 == null) {
							premultiplied9 = false;
						}
						if(format9 == null) {
							format9 = 0;
						}
						switch(format9) {
						case 0:
							sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						case 1:
							sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
							break;
						case 2:
							sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
							break;
						}
						if(premultiplied9) {
							if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
								(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (sourcePixel & 255);
								sourcePixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | sourcePixel & 255 & 255;
							}
						}
						var format10 = alphaFormat;
						var premultiplied10 = false;
						if(premultiplied10 == null) {
							premultiplied10 = false;
						}
						if(format10 == null) {
							format10 = 0;
						}
						switch(format10) {
						case 0:
							alphaPixel = (alphaData[alphaPosition] & 255) << 24 | (alphaData[alphaPosition + 1] & 255) << 16 | (alphaData[alphaPosition + 2] & 255) << 8 | alphaData[alphaPosition + 3] & 255;
							break;
						case 1:
							alphaPixel = (alphaData[alphaPosition + 1] & 255) << 24 | (alphaData[alphaPosition + 2] & 255) << 16 | (alphaData[alphaPosition + 3] & 255) << 8 | alphaData[alphaPosition] & 255;
							break;
						case 2:
							alphaPixel = (alphaData[alphaPosition + 2] & 255) << 24 | (alphaData[alphaPosition + 1] & 255) << 16 | (alphaData[alphaPosition] & 255) << 8 | alphaData[alphaPosition + 3] & 255;
							break;
						}
						if(premultiplied10) {
							if((alphaPixel & 255) != 0 && (alphaPixel & 255) != 255) {
								(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (alphaPixel & 255);
								alphaPixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((alphaPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((alphaPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((alphaPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | alphaPixel & 255 & 255;
							}
						}
						var value8 = Math.round((sourcePixel & 255) * ((alphaPixel & 255) / 255));
						sourcePixel = (sourcePixel >>> 24 & 255 & 255) << 24 | (sourcePixel >>> 16 & 255 & 255) << 16 | (sourcePixel >>> 8 & 255 & 255) << 8 | value8 & 255;
						var format11 = destFormat;
						var premultiplied11 = destPremultiplied;
						if(premultiplied11 == null) {
							premultiplied11 = false;
						}
						if(format11 == null) {
							format11 = 0;
						}
						if(premultiplied11) {
							if((sourcePixel & 255) == 0) {
								if(sourcePixel != 0) {
									sourcePixel = 0;
								}
							} else if((sourcePixel & 255) != 255) {
								(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[sourcePixel & 255];
								sourcePixel = ((sourcePixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((sourcePixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((sourcePixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | sourcePixel & 255 & 255;
							}
						}
						switch(format11) {
						case 0:
							destData[destPosition] = sourcePixel >>> 24 & 255;
							destData[destPosition + 1] = sourcePixel >>> 16 & 255;
							destData[destPosition + 2] = sourcePixel >>> 8 & 255;
							destData[destPosition + 3] = sourcePixel & 255;
							break;
						case 1:
							destData[destPosition] = sourcePixel & 255;
							destData[destPosition + 1] = sourcePixel >>> 24 & 255;
							destData[destPosition + 2] = sourcePixel >>> 16 & 255;
							destData[destPosition + 3] = sourcePixel >>> 8 & 255;
							break;
						case 2:
							destData[destPosition] = sourcePixel >>> 8 & 255;
							destData[destPosition + 1] = sourcePixel >>> 16 & 255;
							destData[destPosition + 2] = sourcePixel >>> 24 & 255;
							destData[destPosition + 3] = sourcePixel & 255;
							break;
						}
						sourcePosition += 4;
						destPosition += 4;
						alphaPosition += 4;
					}
				}
			}
		}
	}
	image.dirty = true;
	image.version++;
}
ImageDataUtil.fillRect = function(image,rect,color,format) {
	var fillColor;
	switch(format) {
	case 1:
		var argb = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		fillColor = rgba;
		break;
	case 2:
		var bgra = color;
		var this2 = 0;
		var rgba1 = this2;
		rgba1 = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		fillColor = rgba1;
		break;
	default:
		fillColor = color;
	}
	if(!image.get_transparent()) {
		fillColor = (fillColor >>> 24 & 255 & 255) << 24 | (fillColor >>> 16 & 255 & 255) << 16 | (fillColor >>> 8 & 255 & 255) << 8 | 255;
	}
	var data = image.buffer.data;
	if(data == null) {
		return;
	}
	var format1 = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	if(premultiplied) {
		if((fillColor & 255) == 0) {
			if(fillColor != 0) {
				fillColor = 0;
			}
		} else if((fillColor & 255) != 255) {
			(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[fillColor & 255];
			fillColor = ((fillColor >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((fillColor >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((fillColor >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | fillColor & 255 & 255;
		}
	}
	var dataView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(image,rect);
	var row;
	var _g = 0;
	var _g1 = dataView.height;
	while(_g < _g1) {
		var y = _g++;
		row = dataView.row(y);
		var _g2 = 0;
		var _g11 = dataView.width;
		while(_g2 < _g11) {
			var x = _g2++;
			var offset = row + x * 4;
			var format2 = format1;
			var premultiplied1 = false;
			if(premultiplied1 == null) {
				premultiplied1 = false;
			}
			if(format2 == null) {
				format2 = 0;
			}
			if(premultiplied1) {
				if((fillColor & 255) == 0) {
					if(fillColor != 0) {
						fillColor = 0;
					}
				} else if((fillColor & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[fillColor & 255];
					fillColor = ((fillColor >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((fillColor >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((fillColor >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | fillColor & 255 & 255;
				}
			}
			switch(format2) {
			case 0:
				data[offset] = fillColor >>> 24 & 255;
				data[offset + 1] = fillColor >>> 16 & 255;
				data[offset + 2] = fillColor >>> 8 & 255;
				data[offset + 3] = fillColor & 255;
				break;
			case 1:
				data[offset] = fillColor & 255;
				data[offset + 1] = fillColor >>> 24 & 255;
				data[offset + 2] = fillColor >>> 16 & 255;
				data[offset + 3] = fillColor >>> 8 & 255;
				break;
			case 2:
				data[offset] = fillColor >>> 8 & 255;
				data[offset + 1] = fillColor >>> 16 & 255;
				data[offset + 2] = fillColor >>> 24 & 255;
				data[offset + 3] = fillColor & 255;
				break;
			}
		}
	}
	image.dirty = true;
	image.version++;
}
ImageDataUtil.floodFill = function(image,x,y,color,format) {
	var data = image.buffer.data;
	if(data == null) {
		return;
	}
	if(format == 1) {
		color = (color & 16777215) << 8 | color >> 24 & 255;
	}
	var format1 = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	var fillColor = color;
	var hitColor;
	var offset = (y + image.offsetY) * (image.buffer.width * 4) + (x + image.offsetX) * 4;
	var format2 = format1;
	var premultiplied1 = premultiplied;
	if(premultiplied1 == null) {
		premultiplied1 = false;
	}
	if(format2 == null) {
		format2 = 0;
	}
	switch(format2) {
	case 0:
		hitColor = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		hitColor = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	case 2:
		hitColor = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	}
	if(premultiplied1) {
		if((hitColor & 255) != 0 && (hitColor & 255) != 255) {
			(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (hitColor & 255);
			hitColor = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((hitColor >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((hitColor >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((hitColor >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | hitColor & 255 & 255;
		}
	}
	if(!image.get_transparent()) {
		fillColor = (fillColor >>> 24 & 255 & 255) << 24 | (fillColor >>> 16 & 255 & 255) << 16 | (fillColor >>> 8 & 255 & 255) << 8 | 255;
		hitColor = (hitColor >>> 24 & 255 & 255) << 24 | (hitColor >>> 16 & 255 & 255) << 16 | (hitColor >>> 8 & 255 & 255) << 8 | 255;
	}
	if(fillColor == hitColor) {
		return;
	}
	if(premultiplied) {
		if((fillColor & 255) == 0) {
			if(fillColor != 0) {
				fillColor = 0;
			}
		} else if((fillColor & 255) != 255) {
			(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[fillColor & 255];
			fillColor = ((fillColor >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((fillColor >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((fillColor >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | fillColor & 255 & 255;
		}
	}
	var dx = [0,-1,1,0];
	var dy = [-1,0,0,1];
	var minX = -image.offsetX;
	var minY = -image.offsetY;
	var maxX = minX + image.width;
	var maxY = minY + image.height;
	var queue = [];
	queue.push(x);
	queue.push(y);
	var curPointX;
	var curPointY;
	var nextPointX;
	var nextPointY;
	var nextPointOffset;
	var readColor;
	while(queue.length > 0) {
		curPointY = queue.pop();
		curPointX = queue.pop();
		var _g = 0;
		while(_g < 4) {
			var i = _g++;
			nextPointX = curPointX + dx[i];
			nextPointY = curPointY + dy[i];
			if(nextPointX < minX || nextPointY < minY || nextPointX >= maxX || nextPointY >= maxY) {
				continue;
			}
			nextPointOffset = (nextPointY * image.width + nextPointX) * 4;
			var format3 = format1;
			var premultiplied2 = premultiplied;
			if(premultiplied2 == null) {
				premultiplied2 = false;
			}
			if(format3 == null) {
				format3 = 0;
			}
			switch(format3) {
			case 0:
				readColor = (data[nextPointOffset] & 255) << 24 | (data[nextPointOffset + 1] & 255) << 16 | (data[nextPointOffset + 2] & 255) << 8 | data[nextPointOffset + 3] & 255;
				break;
			case 1:
				readColor = (data[nextPointOffset + 1] & 255) << 24 | (data[nextPointOffset + 2] & 255) << 16 | (data[nextPointOffset + 3] & 255) << 8 | data[nextPointOffset] & 255;
				break;
			case 2:
				readColor = (data[nextPointOffset + 2] & 255) << 24 | (data[nextPointOffset + 1] & 255) << 16 | (data[nextPointOffset] & 255) << 8 | data[nextPointOffset + 3] & 255;
				break;
			}
			if(premultiplied2) {
				if((readColor & 255) != 0 && (readColor & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (readColor & 255);
					readColor = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((readColor >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((readColor >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((readColor >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | readColor & 255 & 255;
				}
			}
			if(readColor == hitColor) {
				var format4 = format1;
				var premultiplied3 = false;
				if(premultiplied3 == null) {
					premultiplied3 = false;
				}
				if(format4 == null) {
					format4 = 0;
				}
				if(premultiplied3) {
					if((fillColor & 255) == 0) {
						if(fillColor != 0) {
							fillColor = 0;
						}
					} else if((fillColor & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[fillColor & 255];
						fillColor = ((fillColor >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((fillColor >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((fillColor >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | fillColor & 255 & 255;
					}
				}
				switch(format4) {
				case 0:
					data[nextPointOffset] = fillColor >>> 24 & 255;
					data[nextPointOffset + 1] = fillColor >>> 16 & 255;
					data[nextPointOffset + 2] = fillColor >>> 8 & 255;
					data[nextPointOffset + 3] = fillColor & 255;
					break;
				case 1:
					data[nextPointOffset] = fillColor & 255;
					data[nextPointOffset + 1] = fillColor >>> 24 & 255;
					data[nextPointOffset + 2] = fillColor >>> 16 & 255;
					data[nextPointOffset + 3] = fillColor >>> 8 & 255;
					break;
				case 2:
					data[nextPointOffset] = fillColor >>> 8 & 255;
					data[nextPointOffset + 1] = fillColor >>> 16 & 255;
					data[nextPointOffset + 2] = fillColor >>> 24 & 255;
					data[nextPointOffset + 3] = fillColor & 255;
					break;
				}
				queue.push(nextPointX);
				queue.push(nextPointY);
			}
		}
	}
	image.dirty = true;
	image.version++;
}
ImageDataUtil.gaussianBlur = function(image,sourceImage,sourceRect,destPoint,blurX,blurY,quality,strength,color) {
	if(strength == null) {
		strength = 1;
	}
	if(quality == null) {
		quality = 1;
	}
	if(blurY == null) {
		blurY = 4;
	}
	if(blurX == null) {
		blurX = 4;
	}
	var imagePremultiplied = image.get_premultiplied();
	if(imagePremultiplied) {
		image.set_premultiplied(false);
	}
	(lime__$internal_graphics_StackBlur().default).blur(image,sourceImage,sourceRect,destPoint,blurX,blurY,quality);
	image.dirty = true;
	image.version++;
	if(imagePremultiplied) {
		image.set_premultiplied(true);
	}
	return image;
}
ImageDataUtil.getColorBoundsRect = function(image,mask,color,findColor,format) {
	var left = image.width + 1;
	var right = 0;
	var top = image.height + 1;
	var bottom = 0;
	var _color;
	var _mask;
	switch(format) {
	case 1:
		var argb = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		_color = rgba;
		var argb1 = mask;
		var this2 = 0;
		var rgba1 = this2;
		rgba1 = (argb1 >>> 16 & 255 & 255) << 24 | (argb1 >>> 8 & 255 & 255) << 16 | (argb1 & 255 & 255) << 8 | argb1 >>> 24 & 255 & 255;
		_mask = rgba1;
		break;
	case 2:
		var bgra = color;
		var this3 = 0;
		var rgba2 = this3;
		rgba2 = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		_color = rgba2;
		var bgra1 = mask;
		var this4 = 0;
		var rgba3 = this4;
		rgba3 = (bgra1 >>> 8 & 255 & 255) << 24 | (bgra1 >>> 16 & 255 & 255) << 16 | (bgra1 >>> 24 & 255 & 255) << 8 | bgra1 & 255 & 255;
		_mask = rgba3;
		break;
	default:
		_color = color;
		_mask = mask;
	}
	if(!image.get_transparent()) {
		_color = (_color >>> 24 & 255 & 255) << 24 | (_color >>> 16 & 255 & 255) << 16 | (_color >>> 8 & 255 & 255) << 8 | 255;
		_mask = (_mask >>> 24 & 255 & 255) << 24 | (_mask >>> 16 & 255 & 255) << 16 | (_mask >>> 8 & 255 & 255) << 8 | 255;
	}
	var pixel;
	var hit;
	var _g = 0;
	var _g1 = image.width;
	while(_g < _g1) {
		var x = _g++;
		hit = false;
		var _g2 = 0;
		var _g11 = image.height;
		while(_g2 < _g11) {
			var y = _g2++;
			pixel = image.getPixel32(x,y,0);
			hit = findColor ? (pixel & _mask) == _color : (pixel & _mask) != _color;
			if(hit) {
				if(x < left) {
					left = x;
				}
				break;
			}
		}
		if(hit) {
			break;
		}
	}
	var ix;
	var _g21 = 0;
	var _g3 = image.width;
	while(_g21 < _g3) {
		var x1 = _g21++;
		ix = image.width - 1 - x1;
		hit = false;
		var _g22 = 0;
		var _g31 = image.height;
		while(_g22 < _g31) {
			var y1 = _g22++;
			pixel = image.getPixel32(ix,y1,0);
			hit = findColor ? (pixel & _mask) == _color : (pixel & _mask) != _color;
			if(hit) {
				if(ix > right) {
					right = ix;
				}
				break;
			}
		}
		if(hit) {
			break;
		}
	}
	var _g4 = 0;
	var _g5 = image.height;
	while(_g4 < _g5) {
		var y2 = _g4++;
		hit = false;
		var _g41 = 0;
		var _g51 = image.width;
		while(_g41 < _g51) {
			var x2 = _g41++;
			pixel = image.getPixel32(x2,y2,0);
			hit = findColor ? (pixel & _mask) == _color : (pixel & _mask) != _color;
			if(hit) {
				if(y2 < top) {
					top = y2;
				}
				break;
			}
		}
		if(hit) {
			break;
		}
	}
	var iy;
	var _g6 = 0;
	var _g7 = image.height;
	while(_g6 < _g7) {
		var y3 = _g6++;
		iy = image.height - 1 - y3;
		hit = false;
		var _g61 = 0;
		var _g71 = image.width;
		while(_g61 < _g71) {
			var x3 = _g61++;
			pixel = image.getPixel32(x3,iy,0);
			hit = findColor ? (pixel & _mask) == _color : (pixel & _mask) != _color;
			if(hit) {
				if(iy > bottom) {
					bottom = iy;
				}
				break;
			}
		}
		if(hit) {
			break;
		}
	}
	var w = right - left;
	var h = bottom - top;
	if(w > 0) {
		++w;
	}
	if(h > 0) {
		++h;
	}
	if(w < 0) {
		w = 0;
	}
	if(h < 0) {
		h = 0;
	}
	if(left == right) {
		w = 1;
	}
	if(top == bottom) {
		h = 1;
	}
	if(left > image.width) {
		left = 0;
	}
	if(top > image.height) {
		top = 0;
	}
	return new (lime_math_Rectangle().default)(left,top,w,h);
}
ImageDataUtil.getPixel = function(image,x,y,format) {
	var pixel;
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	var format1 = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format1 == null) {
		format1 = 0;
	}
	switch(format1) {
	case 0:
		pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	case 2:
		pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	}
	if(premultiplied) {
		if((pixel & 255) != 0 && (pixel & 255) != 255) {
			(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (pixel & 255);
			pixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | pixel & 255 & 255;
		}
	}
	pixel = (pixel >>> 24 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 8 & 255 & 255) << 8 | 0;
	switch(format) {
	case 1:
		var this1 = 0;
		var argb = this1;
		argb = (pixel & 255 & 255) << 24 | (pixel >>> 24 & 255 & 255) << 16 | (pixel >>> 16 & 255 & 255) << 8 | pixel >>> 8 & 255 & 255;
		return argb;
	case 2:
		var this2 = 0;
		var bgra = this2;
		bgra = (pixel >>> 8 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 24 & 255 & 255) << 8 | pixel & 255 & 255;
		return bgra;
	default:
		return pixel;
	}
}
ImageDataUtil.getPixel32 = function(image,x,y,format) {
	var pixel;
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	var format1 = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format1 == null) {
		format1 = 0;
	}
	switch(format1) {
	case 0:
		pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	case 2:
		pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	}
	if(premultiplied) {
		if((pixel & 255) != 0 && (pixel & 255) != 255) {
			(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (pixel & 255);
			pixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | pixel & 255 & 255;
		}
	}
	switch(format) {
	case 1:
		var this1 = 0;
		var argb = this1;
		argb = (pixel & 255 & 255) << 24 | (pixel >>> 24 & 255 & 255) << 16 | (pixel >>> 16 & 255 & 255) << 8 | pixel >>> 8 & 255 & 255;
		return argb;
	case 2:
		var this2 = 0;
		var bgra = this2;
		bgra = (pixel >>> 8 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 24 & 255 & 255) << 8 | pixel & 255 & 255;
		return bgra;
	default:
		return pixel;
	}
}
ImageDataUtil.getPixels = function(image,rect,format) {
	if(image.buffer.data == null) {
		return null;
	}
	var length = (Std().default).int(rect.width * rect.height);
	var bytes = (haxe_io_Bytes().default).alloc(length * 4);
	var data = image.buffer.data;
	var sourceFormat = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	var dataView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(image,rect);
	var position;
	var argb;
	var bgra;
	var pixel;
	var destPosition = 0;
	var _g = 0;
	var _g1 = dataView.height;
	while(_g < _g1) {
		var y = _g++;
		position = dataView.row(y);
		var _g2 = 0;
		var _g11 = dataView.width;
		while(_g2 < _g11) {
			var x = _g2++;
			var format1 = sourceFormat;
			var premultiplied1 = premultiplied;
			if(premultiplied1 == null) {
				premultiplied1 = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			switch(format1) {
			case 0:
				pixel = (data[position] & 255) << 24 | (data[position + 1] & 255) << 16 | (data[position + 2] & 255) << 8 | data[position + 3] & 255;
				break;
			case 1:
				pixel = (data[position + 1] & 255) << 24 | (data[position + 2] & 255) << 16 | (data[position + 3] & 255) << 8 | data[position] & 255;
				break;
			case 2:
				pixel = (data[position + 2] & 255) << 24 | (data[position + 1] & 255) << 16 | (data[position] & 255) << 8 | data[position + 3] & 255;
				break;
			}
			if(premultiplied1) {
				if((pixel & 255) != 0 && (pixel & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (pixel & 255);
					pixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | pixel & 255 & 255;
				}
			}
			switch(format) {
			case 1:
				var this1 = 0;
				var argb1 = this1;
				argb1 = (pixel & 255 & 255) << 24 | (pixel >>> 24 & 255 & 255) << 16 | (pixel >>> 16 & 255 & 255) << 8 | pixel >>> 8 & 255 & 255;
				argb = argb1;
				pixel = argb;
				break;
			case 2:
				var this2 = 0;
				var bgra1 = this2;
				bgra1 = (pixel >>> 8 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 24 & 255 & 255) << 8 | pixel & 255 & 255;
				bgra = bgra1;
				pixel = bgra;
				break;
			default:
			}
			bytes.set(destPosition++,pixel >>> 24 & 255);
			bytes.set(destPosition++,pixel >>> 16 & 255);
			bytes.set(destPosition++,pixel >>> 8 & 255);
			bytes.set(destPosition++,pixel & 255);
			position += 4;
		}
	}
	return bytes;
}
ImageDataUtil.merge = function(image,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier) {
	if(image.buffer.data == null || sourceImage.buffer.data == null) {
		return;
	}
	var sourceView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(sourceImage,sourceRect);
	var destView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(image,new (lime_math_Rectangle().default)(destPoint.x,destPoint.y,sourceView.width,sourceView.height));
	var sourceData = sourceImage.buffer.data;
	var destData = image.buffer.data;
	var sourceFormat = sourceImage.buffer.format;
	var destFormat = image.buffer.format;
	var sourcePremultiplied = sourceImage.buffer.premultiplied;
	var destPremultiplied = image.buffer.premultiplied;
	var sourcePosition;
	var destPosition;
	var sourcePixel;
	var destPixel;
	var _g = 0;
	var _g1 = destView.height;
	while(_g < _g1) {
		var y = _g++;
		sourcePosition = sourceView.row(y);
		destPosition = destView.row(y);
		var _g2 = 0;
		var _g11 = destView.width;
		while(_g2 < _g11) {
			var x = _g2++;
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
				sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
				break;
			case 1:
				sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
				break;
			case 2:
				sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
				break;
			}
			if(premultiplied) {
				if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (sourcePixel & 255);
					sourcePixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((sourcePixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | sourcePixel & 255 & 255;
				}
			}
			var format1 = destFormat;
			var premultiplied1 = destPremultiplied;
			if(premultiplied1 == null) {
				premultiplied1 = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			switch(format1) {
			case 0:
				destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			case 1:
				destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
				break;
			case 2:
				destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			}
			if(premultiplied1) {
				if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (destPixel & 255);
					destPixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((destPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((destPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((destPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | destPixel & 255 & 255;
				}
			}
			var value = (Std().default).int(((sourcePixel >>> 24 & 255) * redMultiplier + (destPixel >>> 24 & 255) * (256 - redMultiplier)) / 256);
			destPixel = (value & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
			var value1 = (Std().default).int(((sourcePixel >>> 16 & 255) * greenMultiplier + (destPixel >>> 16 & 255) * (256 - greenMultiplier)) / 256);
			destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (value1 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
			var value2 = (Std().default).int(((sourcePixel >>> 8 & 255) * blueMultiplier + (destPixel >>> 8 & 255) * (256 - blueMultiplier)) / 256);
			destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (value2 & 255) << 8 | destPixel & 255 & 255;
			var value3 = (Std().default).int(((sourcePixel & 255) * alphaMultiplier + (destPixel & 255) * (256 - alphaMultiplier)) / 256);
			destPixel = (destPixel >>> 24 & 255 & 255) << 24 | (destPixel >>> 16 & 255 & 255) << 16 | (destPixel >>> 8 & 255 & 255) << 8 | value3 & 255;
			var format2 = destFormat;
			var premultiplied2 = destPremultiplied;
			if(premultiplied2 == null) {
				premultiplied2 = false;
			}
			if(format2 == null) {
				format2 = 0;
			}
			if(premultiplied2) {
				if((destPixel & 255) == 0) {
					if(destPixel != 0) {
						destPixel = 0;
					}
				} else if((destPixel & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[destPixel & 255];
					destPixel = ((destPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((destPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((destPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
				}
			}
			switch(format2) {
			case 0:
				destData[destPosition] = destPixel >>> 24 & 255;
				destData[destPosition + 1] = destPixel >>> 16 & 255;
				destData[destPosition + 2] = destPixel >>> 8 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			case 1:
				destData[destPosition] = destPixel & 255;
				destData[destPosition + 1] = destPixel >>> 24 & 255;
				destData[destPosition + 2] = destPixel >>> 16 & 255;
				destData[destPosition + 3] = destPixel >>> 8 & 255;
				break;
			case 2:
				destData[destPosition] = destPixel >>> 8 & 255;
				destData[destPosition + 1] = destPixel >>> 16 & 255;
				destData[destPosition + 2] = destPixel >>> 24 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			}
			sourcePosition += 4;
			destPosition += 4;
		}
	}
	image.dirty = true;
	image.version++;
}
ImageDataUtil.multiplyAlpha = function(image) {
	var data = image.buffer.data;
	if(data == null || !image.buffer.transparent) {
		return;
	}
	var format = image.buffer.format;
	var length = (Std().default).int(data.length / 4);
	var pixel;
	var _g = 0;
	var _g1 = length;
	while(_g < _g1) {
		var i = _g++;
		var offset = i * 4;
		var format1 = format;
		var premultiplied = false;
		if(premultiplied == null) {
			premultiplied = false;
		}
		if(format1 == null) {
			format1 = 0;
		}
		switch(format1) {
		case 0:
			pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 1:
			pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
			break;
		case 2:
			pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
			break;
		}
		if(premultiplied) {
			if((pixel & 255) != 0 && (pixel & 255) != 255) {
				(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (pixel & 255);
				pixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | pixel & 255 & 255;
			}
		}
		var offset1 = i * 4;
		var format2 = format;
		var premultiplied1 = true;
		if(premultiplied1 == null) {
			premultiplied1 = false;
		}
		if(format2 == null) {
			format2 = 0;
		}
		if(premultiplied1) {
			if((pixel & 255) == 0) {
				if(pixel != 0) {
					pixel = 0;
				}
			} else if((pixel & 255) != 255) {
				(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[pixel & 255];
				pixel = ((pixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((pixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((pixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | pixel & 255 & 255;
			}
		}
		switch(format2) {
		case 0:
			data[offset1] = pixel >>> 24 & 255;
			data[offset1 + 1] = pixel >>> 16 & 255;
			data[offset1 + 2] = pixel >>> 8 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 1:
			data[offset1] = pixel & 255;
			data[offset1 + 1] = pixel >>> 24 & 255;
			data[offset1 + 2] = pixel >>> 16 & 255;
			data[offset1 + 3] = pixel >>> 8 & 255;
			break;
		case 2:
			data[offset1] = pixel >>> 8 & 255;
			data[offset1 + 1] = pixel >>> 16 & 255;
			data[offset1 + 2] = pixel >>> 24 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		}
	}
	image.buffer.premultiplied = true;
	image.dirty = true;
	image.version++;
}
ImageDataUtil.resize = function(image,newWidth,newHeight) {
	var buffer = image.buffer;
	if(buffer.width == newWidth && buffer.height == newHeight) {
		return;
	}
	var elements = newWidth * newHeight * 4;
	var array = null;
	var view = null;
	var buffer1 = null;
	var len = null;
	var this1;
	if(elements != null) {
		this1 = new Uint8Array(elements);
	} else if(array != null) {
		this1 = new Uint8Array(array);
	} else if(view != null) {
		this1 = new Uint8Array(view);
	} else if(buffer1 != null) {
		if(len == null) {
			this1 = new Uint8Array(buffer1,0);
		} else {
			this1 = new Uint8Array(buffer1,0,len);
		}
	} else {
		this1 = null;
	}
	var newBuffer = new (lime_graphics_ImageBuffer().default)(this1,newWidth,newHeight);
	var imageWidth = image.width;
	var imageHeight = image.height;
	var data = image.get_data();
	var newData = newBuffer.data;
	var sourceIndex;
	var sourceIndexX;
	var sourceIndexY;
	var sourceIndexXY;
	var index;
	var sourceX;
	var sourceY;
	var u;
	var v;
	var uRatio;
	var vRatio;
	var uOpposite;
	var vOpposite;
	var _g = 0;
	var _g1 = newHeight;
	while(_g < _g1) {
		var y = _g++;
		var _g2 = 0;
		var _g11 = newWidth;
		while(_g2 < _g11) {
			var x = _g2++;
			u = (x + 0.5) / newWidth * imageWidth - 0.5;
			v = (y + 0.5) / newHeight * imageHeight - 0.5;
			sourceX = (Std().default).int(u);
			sourceY = (Std().default).int(v);
			sourceIndex = (sourceY * imageWidth + sourceX) * 4;
			sourceIndexX = sourceX < imageWidth - 1 ? sourceIndex + 4 : sourceIndex;
			sourceIndexY = sourceY < imageHeight - 1 ? sourceIndex + imageWidth * 4 : sourceIndex;
			sourceIndexXY = sourceIndexX != sourceIndex ? sourceIndexY + 4 : sourceIndexY;
			index = (y * newWidth + x) * 4;
			uRatio = u - sourceX;
			vRatio = v - sourceY;
			uOpposite = 1 - uRatio;
			vOpposite = 1 - vRatio;
			newData[index] = (Std().default).int(((_$UInt_UInt_$Impl_$().default).toFloat(data[sourceIndex]) * uOpposite + (_$UInt_UInt_$Impl_$().default).toFloat(data[sourceIndexX]) * uRatio) * vOpposite + ((_$UInt_UInt_$Impl_$().default).toFloat(data[sourceIndexY]) * uOpposite + (_$UInt_UInt_$Impl_$().default).toFloat(data[sourceIndexXY]) * uRatio) * vRatio);
			newData[index + 1] = (Std().default).int(((_$UInt_UInt_$Impl_$().default).toFloat(data[sourceIndex + 1]) * uOpposite + (_$UInt_UInt_$Impl_$().default).toFloat(data[sourceIndexX + 1]) * uRatio) * vOpposite + ((_$UInt_UInt_$Impl_$().default).toFloat(data[sourceIndexY + 1]) * uOpposite + (_$UInt_UInt_$Impl_$().default).toFloat(data[sourceIndexXY + 1]) * uRatio) * vRatio);
			newData[index + 2] = (Std().default).int(((_$UInt_UInt_$Impl_$().default).toFloat(data[sourceIndex + 2]) * uOpposite + (_$UInt_UInt_$Impl_$().default).toFloat(data[sourceIndexX + 2]) * uRatio) * vOpposite + ((_$UInt_UInt_$Impl_$().default).toFloat(data[sourceIndexY + 2]) * uOpposite + (_$UInt_UInt_$Impl_$().default).toFloat(data[sourceIndexXY + 2]) * uRatio) * vRatio);
			if(data[sourceIndexX + 3] == 0 || data[sourceIndexY + 3] == 0 || data[sourceIndexXY + 3] == 0) {
				newData[index + 3] = 0;
			} else {
				newData[index + 3] = data[sourceIndex + 3];
			}
		}
	}
	buffer.data = newBuffer.data;
	buffer.width = newWidth;
	buffer.height = newHeight;
	buffer.__srcImage = null;
	buffer.__srcImageData = null;
	buffer.__srcCanvas = null;
	buffer.__srcContext = null;
	image.dirty = true;
	image.version++;
}
ImageDataUtil.resizeBuffer = function(image,newWidth,newHeight) {
	var buffer = image.buffer;
	var data = image.get_data();
	var elements = newWidth * newHeight * 4;
	var array = null;
	var view = null;
	var buffer1 = null;
	var len = null;
	var this1;
	if(elements != null) {
		this1 = new Uint8Array(elements);
	} else if(array != null) {
		this1 = new Uint8Array(array);
	} else if(view != null) {
		this1 = new Uint8Array(view);
	} else if(buffer1 != null) {
		if(len == null) {
			this1 = new Uint8Array(buffer1,0);
		} else {
			this1 = new Uint8Array(buffer1,0,len);
		}
	} else {
		this1 = null;
	}
	var newData = this1;
	var sourceIndex;
	var index;
	var _g = 0;
	var _g1 = buffer.height;
	while(_g < _g1) {
		var y = _g++;
		var _g2 = 0;
		var _g11 = buffer.width;
		while(_g2 < _g11) {
			var x = _g2++;
			sourceIndex = (y * buffer.width + x) * 4;
			index = (y * newWidth + x) * 4;
			newData[index] = data[sourceIndex];
			newData[index + 1] = data[sourceIndex + 1];
			newData[index + 2] = data[sourceIndex + 2];
			newData[index + 3] = data[sourceIndex + 3];
		}
	}
	buffer.data = newData;
	buffer.width = newWidth;
	buffer.height = newHeight;
	buffer.__srcImage = null;
	buffer.__srcImageData = null;
	buffer.__srcCanvas = null;
	buffer.__srcContext = null;
	image.dirty = true;
	image.version++;
}
ImageDataUtil.setFormat = function(image,format) {
	var data = image.buffer.data;
	if(data == null) {
		return;
	}
	var index;
	var a16;
	var length = (Std().default).int(data.length / 4);
	var r1;
	var g1;
	var b1;
	var a1;
	var r2;
	var g2;
	var b2;
	var a2;
	var r;
	var g;
	var b;
	var a;
	switch(image.get_format()) {
	case 0:
		r1 = 0;
		g1 = 1;
		b1 = 2;
		a1 = 3;
		break;
	case 1:
		r1 = 1;
		g1 = 2;
		b1 = 3;
		a1 = 0;
		break;
	case 2:
		r1 = 2;
		g1 = 1;
		b1 = 0;
		a1 = 3;
		break;
	}
	switch(format) {
	case 0:
		r2 = 0;
		g2 = 1;
		b2 = 2;
		a2 = 3;
		break;
	case 1:
		r2 = 1;
		g2 = 2;
		b2 = 3;
		a2 = 0;
		break;
	case 2:
		r2 = 2;
		g2 = 1;
		b2 = 0;
		a2 = 3;
		break;
	}
	var _g1 = 0;
	var _g2 = length;
	while(_g1 < _g2) {
		var i = _g1++;
		index = i * 4;
		r = data[index + r1];
		g = data[index + g1];
		b = data[index + b1];
		a = data[index + a1];
		data[index + r2] = r;
		data[index + g2] = g;
		data[index + b2] = b;
		data[index + a2] = a;
	}
	image.buffer.format = format;
	image.dirty = true;
	image.version++;
}
ImageDataUtil.setPixel = function(image,x,y,color,format) {
	var pixel;
	switch(format) {
	case 1:
		var argb = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		pixel = rgba;
		break;
	case 2:
		var bgra = color;
		var this2 = 0;
		var rgba1 = this2;
		rgba1 = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		pixel = rgba1;
		break;
	default:
		pixel = color;
	}
	var this3 = 0;
	var source = this3;
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	var format1 = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format1 == null) {
		format1 = 0;
	}
	switch(format1) {
	case 0:
		source = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		source = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	case 2:
		source = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	}
	if(premultiplied) {
		if((source & 255) != 0 && (source & 255) != 255) {
			(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (source & 255);
			source = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((source >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((source >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((source >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | source & 255 & 255;
		}
	}
	var value = source & 255;
	pixel = (pixel >>> 24 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 8 & 255 & 255) << 8 | value & 255;
	var data1 = image.buffer.data;
	var offset1 = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	var format2 = image.buffer.format;
	var premultiplied1 = image.buffer.premultiplied;
	if(premultiplied1 == null) {
		premultiplied1 = false;
	}
	if(format2 == null) {
		format2 = 0;
	}
	if(premultiplied1) {
		if((pixel & 255) == 0) {
			if(pixel != 0) {
				pixel = 0;
			}
		} else if((pixel & 255) != 255) {
			(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[pixel & 255];
			pixel = ((pixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((pixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((pixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | pixel & 255 & 255;
		}
	}
	switch(format2) {
	case 0:
		data1[offset1] = pixel >>> 24 & 255;
		data1[offset1 + 1] = pixel >>> 16 & 255;
		data1[offset1 + 2] = pixel >>> 8 & 255;
		data1[offset1 + 3] = pixel & 255;
		break;
	case 1:
		data1[offset1] = pixel & 255;
		data1[offset1 + 1] = pixel >>> 24 & 255;
		data1[offset1 + 2] = pixel >>> 16 & 255;
		data1[offset1 + 3] = pixel >>> 8 & 255;
		break;
	case 2:
		data1[offset1] = pixel >>> 8 & 255;
		data1[offset1 + 1] = pixel >>> 16 & 255;
		data1[offset1 + 2] = pixel >>> 24 & 255;
		data1[offset1 + 3] = pixel & 255;
		break;
	}
	image.dirty = true;
	image.version++;
}
ImageDataUtil.setPixel32 = function(image,x,y,color,format) {
	var pixel;
	switch(format) {
	case 1:
		var argb = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		pixel = rgba;
		break;
	case 2:
		var bgra = color;
		var this2 = 0;
		var rgba1 = this2;
		rgba1 = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		pixel = rgba1;
		break;
	default:
		pixel = color;
	}
	if(!image.get_transparent()) {
		pixel = (pixel >>> 24 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 8 & 255 & 255) << 8 | 255;
	}
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	var format1 = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	if(premultiplied == null) {
		premultiplied = false;
	}
	if(format1 == null) {
		format1 = 0;
	}
	if(premultiplied) {
		if((pixel & 255) == 0) {
			if(pixel != 0) {
				pixel = 0;
			}
		} else if((pixel & 255) != 255) {
			(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[pixel & 255];
			pixel = ((pixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((pixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((pixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | pixel & 255 & 255;
		}
	}
	switch(format1) {
	case 0:
		data[offset] = pixel >>> 24 & 255;
		data[offset + 1] = pixel >>> 16 & 255;
		data[offset + 2] = pixel >>> 8 & 255;
		data[offset + 3] = pixel & 255;
		break;
	case 1:
		data[offset] = pixel & 255;
		data[offset + 1] = pixel >>> 24 & 255;
		data[offset + 2] = pixel >>> 16 & 255;
		data[offset + 3] = pixel >>> 8 & 255;
		break;
	case 2:
		data[offset] = pixel >>> 8 & 255;
		data[offset + 1] = pixel >>> 16 & 255;
		data[offset + 2] = pixel >>> 24 & 255;
		data[offset + 3] = pixel & 255;
		break;
	}
	image.dirty = true;
	image.version++;
}
ImageDataUtil.setPixels = function(image,rect,bytePointer,format,endian) {
	if(image.buffer.data == null) {
		return;
	}
	var data = image.buffer.data;
	var sourceFormat = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	var dataView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(image,rect);
	var row;
	var color;
	var pixel;
	var transparent = image.get_transparent();
	var bytes = bytePointer.bytes;
	var dataPosition = bytePointer.offset;
	var littleEndian = endian != (lime_system_Endian().default).BIG_ENDIAN;
	var _g = 0;
	var _g1 = dataView.height;
	while(_g < _g1) {
		var y = _g++;
		row = dataView.row(y);
		var _g2 = 0;
		var _g11 = dataView.width;
		while(_g2 < _g11) {
			var x = _g2++;
			if(littleEndian) {
				color = bytes.getInt32(dataPosition);
			} else {
				color = bytes.get(dataPosition + 3) | bytes.get(dataPosition + 2) << 8 | bytes.get(dataPosition + 1) << 16 | bytes.get(dataPosition) << 24;
			}
			dataPosition += 4;
			switch(format) {
			case 1:
				var argb = color;
				var this1 = 0;
				var rgba = this1;
				rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
				pixel = rgba;
				break;
			case 2:
				var bgra = color;
				var this2 = 0;
				var rgba1 = this2;
				rgba1 = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
				pixel = rgba1;
				break;
			default:
				pixel = color;
			}
			if(!transparent) {
				pixel = (pixel >>> 24 & 255 & 255) << 24 | (pixel >>> 16 & 255 & 255) << 16 | (pixel >>> 8 & 255 & 255) << 8 | 255;
			}
			var offset = row + x * 4;
			var format1 = sourceFormat;
			var premultiplied1 = premultiplied;
			if(premultiplied1 == null) {
				premultiplied1 = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			if(premultiplied1) {
				if((pixel & 255) == 0) {
					if(pixel != 0) {
						pixel = 0;
					}
				} else if((pixel & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[pixel & 255];
					pixel = ((pixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((pixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((pixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | pixel & 255 & 255;
				}
			}
			switch(format1) {
			case 0:
				data[offset] = pixel >>> 24 & 255;
				data[offset + 1] = pixel >>> 16 & 255;
				data[offset + 2] = pixel >>> 8 & 255;
				data[offset + 3] = pixel & 255;
				break;
			case 1:
				data[offset] = pixel & 255;
				data[offset + 1] = pixel >>> 24 & 255;
				data[offset + 2] = pixel >>> 16 & 255;
				data[offset + 3] = pixel >>> 8 & 255;
				break;
			case 2:
				data[offset] = pixel >>> 8 & 255;
				data[offset + 1] = pixel >>> 16 & 255;
				data[offset + 2] = pixel >>> 24 & 255;
				data[offset + 3] = pixel & 255;
				break;
			}
		}
	}
	image.dirty = true;
	image.version++;
}
ImageDataUtil.threshold = function(image,sourceImage,sourceRect,destPoint,operation,threshold,color,mask,copySource,format) {
	var _color;
	var _mask;
	var _threshold;
	switch(format) {
	case 1:
		var argb = color;
		var this1 = 0;
		var rgba = this1;
		rgba = (argb >>> 16 & 255 & 255) << 24 | (argb >>> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >>> 24 & 255 & 255;
		_color = rgba;
		var argb1 = mask;
		var this2 = 0;
		var rgba1 = this2;
		rgba1 = (argb1 >>> 16 & 255 & 255) << 24 | (argb1 >>> 8 & 255 & 255) << 16 | (argb1 & 255 & 255) << 8 | argb1 >>> 24 & 255 & 255;
		_mask = rgba1;
		var argb2 = threshold;
		var this3 = 0;
		var rgba2 = this3;
		rgba2 = (argb2 >>> 16 & 255 & 255) << 24 | (argb2 >>> 8 & 255 & 255) << 16 | (argb2 & 255 & 255) << 8 | argb2 >>> 24 & 255 & 255;
		_threshold = rgba2;
		break;
	case 2:
		var bgra = color;
		var this4 = 0;
		var rgba3 = this4;
		rgba3 = (bgra >>> 8 & 255 & 255) << 24 | (bgra >>> 16 & 255 & 255) << 16 | (bgra >>> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		_color = rgba3;
		var bgra1 = mask;
		var this5 = 0;
		var rgba4 = this5;
		rgba4 = (bgra1 >>> 8 & 255 & 255) << 24 | (bgra1 >>> 16 & 255 & 255) << 16 | (bgra1 >>> 24 & 255 & 255) << 8 | bgra1 & 255 & 255;
		_mask = rgba4;
		var bgra2 = threshold;
		var this6 = 0;
		var rgba5 = this6;
		rgba5 = (bgra2 >>> 8 & 255 & 255) << 24 | (bgra2 >>> 16 & 255 & 255) << 16 | (bgra2 >>> 24 & 255 & 255) << 8 | bgra2 & 255 & 255;
		_threshold = rgba5;
		break;
	default:
		_color = color;
		_mask = mask;
		_threshold = threshold;
	}
	var _operation;
	switch(operation) {
	case "!=":
		_operation = 0;
		break;
	case "<":
		_operation = 2;
		break;
	case "<=":
		_operation = 3;
		break;
	case "==":
		_operation = 1;
		break;
	case ">":
		_operation = 4;
		break;
	case ">=":
		_operation = 5;
		break;
	default:
		_operation = -1;
	}
	if(_operation == -1) {
		return 0;
	}
	var srcData = sourceImage.buffer.data;
	var destData = image.buffer.data;
	if(srcData == null || destData == null) {
		return 0;
	}
	var hits = 0;
	var srcView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(sourceImage,sourceRect);
	var destView = new (lime__$internal_graphics__$ImageDataUtil_ImageDataView().default)(image,new (lime_math_Rectangle().default)(destPoint.x,destPoint.y,srcView.width,srcView.height));
	var srcFormat = sourceImage.buffer.format;
	var destFormat = image.buffer.format;
	var srcPremultiplied = sourceImage.buffer.premultiplied;
	var destPremultiplied = image.buffer.premultiplied;
	var srcPosition;
	var destPosition;
	var srcPixel;
	var destPixel;
	var pixelMask;
	var test;
	var value;
	var _g = 0;
	var _g1 = destView.height;
	while(_g < _g1) {
		var y = _g++;
		srcPosition = srcView.row(y);
		destPosition = destView.row(y);
		var _g2 = 0;
		var _g11 = destView.width;
		while(_g2 < _g11) {
			var x = _g2++;
			var format1 = srcFormat;
			var premultiplied = srcPremultiplied;
			if(premultiplied == null) {
				premultiplied = false;
			}
			if(format1 == null) {
				format1 = 0;
			}
			switch(format1) {
			case 0:
				srcPixel = (srcData[srcPosition] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition + 2] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			case 1:
				srcPixel = (srcData[srcPosition + 1] & 255) << 24 | (srcData[srcPosition + 2] & 255) << 16 | (srcData[srcPosition + 3] & 255) << 8 | srcData[srcPosition] & 255;
				break;
			case 2:
				srcPixel = (srcData[srcPosition + 2] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			}
			if(premultiplied) {
				if((srcPixel & 255) != 0 && (srcPixel & 255) != 255) {
					(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (srcPixel & 255);
					srcPixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((srcPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((srcPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((srcPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | srcPixel & 255 & 255;
				}
			}
			pixelMask = srcPixel & _mask;
			value = ImageDataUtil.__pixelCompare(pixelMask,_threshold);
			switch(_operation) {
			case 0:
				test = value != 0;
				break;
			case 1:
				test = value == 0;
				break;
			case 2:
				test = value == -1;
				break;
			case 3:
				test = value == 0 || value == -1;
				break;
			case 4:
				test = value == 1;
				break;
			case 5:
				test = value == 0 || value == 1;
				break;
			default:
				test = false;
			}
			if(test) {
				var format2 = destFormat;
				var premultiplied1 = destPremultiplied;
				if(premultiplied1 == null) {
					premultiplied1 = false;
				}
				if(format2 == null) {
					format2 = 0;
				}
				if(premultiplied1) {
					if((_color & 255) == 0) {
						if(_color != 0) {
							_color = 0;
						}
					} else if((_color & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[_color & 255];
						_color = ((_color >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((_color >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((_color >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | _color & 255 & 255;
					}
				}
				switch(format2) {
				case 0:
					destData[destPosition] = _color >>> 24 & 255;
					destData[destPosition + 1] = _color >>> 16 & 255;
					destData[destPosition + 2] = _color >>> 8 & 255;
					destData[destPosition + 3] = _color & 255;
					break;
				case 1:
					destData[destPosition] = _color & 255;
					destData[destPosition + 1] = _color >>> 24 & 255;
					destData[destPosition + 2] = _color >>> 16 & 255;
					destData[destPosition + 3] = _color >>> 8 & 255;
					break;
				case 2:
					destData[destPosition] = _color >>> 8 & 255;
					destData[destPosition + 1] = _color >>> 16 & 255;
					destData[destPosition + 2] = _color >>> 24 & 255;
					destData[destPosition + 3] = _color & 255;
					break;
				}
				++hits;
			} else if(copySource) {
				var format3 = destFormat;
				var premultiplied2 = destPremultiplied;
				if(premultiplied2 == null) {
					premultiplied2 = false;
				}
				if(format3 == null) {
					format3 = 0;
				}
				if(premultiplied2) {
					if((srcPixel & 255) == 0) {
						if(srcPixel != 0) {
							srcPixel = 0;
						}
					} else if((srcPixel & 255) != 255) {
						(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[srcPixel & 255];
						srcPixel = ((srcPixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((srcPixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((srcPixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | srcPixel & 255 & 255;
					}
				}
				switch(format3) {
				case 0:
					destData[destPosition] = srcPixel >>> 24 & 255;
					destData[destPosition + 1] = srcPixel >>> 16 & 255;
					destData[destPosition + 2] = srcPixel >>> 8 & 255;
					destData[destPosition + 3] = srcPixel & 255;
					break;
				case 1:
					destData[destPosition] = srcPixel & 255;
					destData[destPosition + 1] = srcPixel >>> 24 & 255;
					destData[destPosition + 2] = srcPixel >>> 16 & 255;
					destData[destPosition + 3] = srcPixel >>> 8 & 255;
					break;
				case 2:
					destData[destPosition] = srcPixel >>> 8 & 255;
					destData[destPosition + 1] = srcPixel >>> 16 & 255;
					destData[destPosition + 2] = srcPixel >>> 24 & 255;
					destData[destPosition + 3] = srcPixel & 255;
					break;
				}
			}
			srcPosition += 4;
			destPosition += 4;
		}
	}
	if(hits > 0) {
		image.dirty = true;
		image.version++;
	}
	return hits;
}
ImageDataUtil.unmultiplyAlpha = function(image) {
	var data = image.buffer.data;
	if(data == null) {
		return;
	}
	var format = image.buffer.format;
	var length = (Std().default).int(data.length / 4);
	var pixel;
	var _g = 0;
	var _g1 = length;
	while(_g < _g1) {
		var i = _g++;
		var offset = i * 4;
		var format1 = format;
		var premultiplied = true;
		if(premultiplied == null) {
			premultiplied = false;
		}
		if(format1 == null) {
			format1 = 0;
		}
		switch(format1) {
		case 0:
			pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 1:
			pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
			break;
		case 2:
			pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
			break;
		}
		if(premultiplied) {
			if((pixel & 255) != 0 && (pixel & 255) != 255) {
				(lime_math__$RGBA_RGBA_$Impl_$().default).unmult = 255.0 / (pixel & 255);
				pixel = ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 24 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 16 | ((lime_math__$RGBA_RGBA_$Impl_$().default).__clamp[Math.round((pixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).unmult)] & 255) << 8 | pixel & 255 & 255;
			}
		}
		var offset1 = i * 4;
		var format2 = format;
		var premultiplied1 = false;
		if(premultiplied1 == null) {
			premultiplied1 = false;
		}
		if(format2 == null) {
			format2 = 0;
		}
		if(premultiplied1) {
			if((pixel & 255) == 0) {
				if(pixel != 0) {
					pixel = 0;
				}
			} else if((pixel & 255) != 255) {
				(lime_math__$RGBA_RGBA_$Impl_$().default).a16 = (lime_math__$RGBA_RGBA_$Impl_$().default).__alpha16[pixel & 255];
				pixel = ((pixel >>> 24 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 24 | ((pixel >>> 16 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 16 | ((pixel >>> 8 & 255) * (lime_math__$RGBA_RGBA_$Impl_$().default).a16 >> 16 & 255) << 8 | pixel & 255 & 255;
			}
		}
		switch(format2) {
		case 0:
			data[offset1] = pixel >>> 24 & 255;
			data[offset1 + 1] = pixel >>> 16 & 255;
			data[offset1 + 2] = pixel >>> 8 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 1:
			data[offset1] = pixel & 255;
			data[offset1 + 1] = pixel >>> 24 & 255;
			data[offset1 + 2] = pixel >>> 16 & 255;
			data[offset1 + 3] = pixel >>> 8 & 255;
			break;
		case 2:
			data[offset1] = pixel >>> 8 & 255;
			data[offset1 + 1] = pixel >>> 16 & 255;
			data[offset1 + 2] = pixel >>> 24 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		}
	}
	image.buffer.premultiplied = false;
	image.dirty = true;
	image.version++;
}
ImageDataUtil.__boxBlur = function(imgA,imgB,w,h,bx,by) {
	imgB.set(imgA);
	var bx1 = (Std().default).int(bx);
	var by1 = (Std().default).int(by);
	ImageDataUtil.__boxBlurH(imgB,imgA,w,h,bx1,0);
	ImageDataUtil.__boxBlurH(imgB,imgA,w,h,bx1,1);
	ImageDataUtil.__boxBlurH(imgB,imgA,w,h,bx1,2);
	ImageDataUtil.__boxBlurH(imgB,imgA,w,h,bx1,3);
	ImageDataUtil.__boxBlurT(imgA,imgB,w,h,by1,0);
	ImageDataUtil.__boxBlurT(imgA,imgB,w,h,by1,1);
	ImageDataUtil.__boxBlurT(imgA,imgB,w,h,by1,2);
	ImageDataUtil.__boxBlurT(imgA,imgB,w,h,by1,3);
}
ImageDataUtil.__boxBlurH = function(imgA,imgB,w,h,r,off) {
	var iarr = 1 / (r + r + 1);
	var ti;
	var li;
	var ri;
	var fv;
	var lv;
	var val;
	var _g = 0;
	var _g1 = h;
	while(_g < _g1) {
		var i = _g++;
		ti = i * w;
		li = ti;
		ri = ti + r;
		fv = imgA[ti * 4 + off];
		lv = imgA[(ti + w - 1) * 4 + off];
		val = (r + 1) * fv;
		var _g2 = 0;
		var _g11 = r;
		while(_g2 < _g11) {
			var j = _g2++;
			val = val + imgA[(ti + j) * 4 + off];
		}
		var _g21 = 0;
		var _g3 = r + 1;
		while(_g21 < _g3) {
			var j1 = _g21++;
			val = val + (imgA[ri * 4 + off] - fv);
			imgB[ti * 4 + off] = Math.round((_$UInt_UInt_$Impl_$().default).toFloat(val) * iarr);
			++ri;
			++ti;
		}
		var _g4 = r + 1;
		var _g5 = w - r;
		while(_g4 < _g5) {
			var j2 = _g4++;
			val = val + (imgA[ri * 4 + off] - imgA[li * 4 + off]);
			imgB[ti * 4 + off] = Math.round((_$UInt_UInt_$Impl_$().default).toFloat(val) * iarr);
			++ri;
			++li;
			++ti;
		}
		var _g6 = w - r;
		var _g7 = w;
		while(_g6 < _g7) {
			var j3 = _g6++;
			val = val + (lv - imgA[li * 4 + off]);
			imgB[ti * 4 + off] = Math.round((_$UInt_UInt_$Impl_$().default).toFloat(val) * iarr);
			++li;
			++ti;
		}
	}
}
ImageDataUtil.__boxBlurT = function(imgA,imgB,w,h,r,off) {
	var iarr = 1 / (r + r + 1);
	var ws = w * 4;
	var ti;
	var li;
	var ri;
	var fv;
	var lv;
	var val;
	var _g = 0;
	var _g1 = w;
	while(_g < _g1) {
		var i = _g++;
		ti = i * 4 + off;
		li = ti;
		ri = ti + r * ws;
		fv = imgA[ti];
		lv = imgA[ti + ws * (h - 1)];
		val = (r + 1) * fv;
		var _g2 = 0;
		var _g11 = r;
		while(_g2 < _g11) {
			var j = _g2++;
			val = val + imgA[ti + j * ws];
		}
		var _g21 = 0;
		var _g3 = r + 1;
		while(_g21 < _g3) {
			var j1 = _g21++;
			val = val + (imgA[ri] - fv);
			imgB[ti] = Math.round((_$UInt_UInt_$Impl_$().default).toFloat(val) * iarr);
			ri += ws;
			ti += ws;
		}
		var _g4 = r + 1;
		var _g5 = h - r;
		while(_g4 < _g5) {
			var j2 = _g4++;
			val = val + (imgA[ri] - imgA[li]);
			imgB[ti] = Math.round((_$UInt_UInt_$Impl_$().default).toFloat(val) * iarr);
			li += ws;
			ri += ws;
			ti += ws;
		}
		var _g6 = h - r;
		var _g7 = h;
		while(_g6 < _g7) {
			var j3 = _g6++;
			val = val + (lv - imgA[li]);
			imgB[ti] = Math.round((_$UInt_UInt_$Impl_$().default).toFloat(val) * iarr);
			li += ws;
			ti += ws;
		}
	}
}
ImageDataUtil.__calculateSourceOffset = function(sourceRect,destPoint,destX,destY) {
	var sourceX = destX - (Std().default).int(destPoint.x);
	var sourceY = destY - (Std().default).int(destPoint.y);
	var offset = 0;
	if(sourceX < 0 || sourceY < 0 || sourceX >= sourceRect.width || sourceY >= sourceRect.height) {
		offset = -1;
	} else {
		offset = 4 * (sourceY * (Std().default).int(sourceRect.width) + sourceX);
	}
	return offset;
}
ImageDataUtil.__getBoxesForGaussianBlur = function(sigma,n) {
	var wIdeal = Math.sqrt(12 * sigma * sigma / n + 1);
	var wl = Math.floor(wIdeal);
	if(wl % 2 == 0) {
		--wl;
	}
	var wu = wl + 2;
	var mIdeal = (12 * sigma * sigma - n * wl * wl - 4 * n * wl - 3 * n) / (-4 * wl - 4);
	var m = Math.round(mIdeal);
	var sizes = [];
	var _g = 0;
	var _g1 = n;
	while(_g < _g1) {
		var i = _g++;
		sizes.push(i < m ? wl : wu);
	}
	return sizes;
}
ImageDataUtil.__pixelCompare = function(n1,n2) {
	var tmp1 = n1 >>> 24 & 255;
	var tmp2 = n2 >>> 24 & 255;
	if(tmp1 != tmp2) {
		if((_$UInt_UInt_$Impl_$().default).gt(tmp1,tmp2)) {
			return 1;
		} else {
			return -1;
		}
	} else {
		tmp1 = n1 >>> 16 & 255;
		tmp2 = n2 >>> 16 & 255;
		if(tmp1 != tmp2) {
			if((_$UInt_UInt_$Impl_$().default).gt(tmp1,tmp2)) {
				return 1;
			} else {
				return -1;
			}
		} else {
			tmp1 = n1 >>> 8 & 255;
			tmp2 = n2 >>> 8 & 255;
			if(tmp1 != tmp2) {
				if((_$UInt_UInt_$Impl_$().default).gt(tmp1,tmp2)) {
					return 1;
				} else {
					return -1;
				}
			} else {
				tmp1 = n1 & 255;
				tmp2 = n2 & 255;
				if(tmp1 != tmp2) {
					if((_$UInt_UInt_$Impl_$().default).gt(tmp1,tmp2)) {
						return 1;
					} else {
						return -1;
					}
				} else {
					return 0;
				}
			}
		}
	}
}
ImageDataUtil.__translatePixel = function(imgB,sourceRect,destRect,destPoint,destX,destY,strength) {
	var d = 4 * (destY * (Std().default).int(destRect.width) + destX);
	var s = ImageDataUtil.__calculateSourceOffset(sourceRect,destPoint,destX,destY);
	if(s < 0) {
		imgB[d] = imgB[d + 1] = imgB[d + 2] = imgB[d + 3] = 0;
	} else {
		imgB[d] = imgB[s];
		imgB[d + 1] = imgB[s + 1];
		imgB[d + 2] = imgB[s + 2];
		var a = (Std().default).int((_$UInt_UInt_$Impl_$().default).toFloat(imgB[s + 3]) * strength);
		imgB[d + 3] = a < 0 ? 0 : a > 255 ? 255 : a;
	}
}


// Export

exports.default = ImageDataUtil;