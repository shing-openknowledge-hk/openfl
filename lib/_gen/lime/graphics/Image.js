// Class: lime.graphics.Image

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_graphics_ImageType() {return require("./../../lime/graphics/ImageType");}
function lime__$internal_graphics_ImageCanvasUtil() {return require("./../../lime/_internal/graphics/ImageCanvasUtil");}
function lime__$internal_graphics_ImageDataUtil() {return require("./../../lime/_internal/graphics/ImageDataUtil");}
function lime_math__$ColorMatrix_ColorMatrix_$Impl_$() {return require("./../../lime/math/_ColorMatrix/ColorMatrix_Impl_");}
function lime_graphics_ImageChannel() {return require("./../../lime/graphics/ImageChannel");}
function lime__$internal_format_PNG() {return require("./../../lime/_internal/format/PNG");}
function lime__$internal_format_BMP() {return require("./../../lime/_internal/format/BMP");}
function lime__$internal_format_JPEG() {return require("./../../lime/_internal/format/JPEG");}
function lime_math_Rectangle() {return require("./../../lime/math/Rectangle");}
function lime_math_Vector2() {return require("./../../lime/math/Vector2");}
function lime_system_Endian() {return require("./../../lime/system/Endian");}
function lime_graphics_ImageBuffer() {return require("./../../lime/graphics/ImageBuffer");}
function lime__$internal_format_Base64() {return require("./../../lime/_internal/format/Base64");}
function lime__$internal_backend_html5_HTML5HTTPRequest() {return require("./../../lime/_internal/backend/html5/HTML5HTTPRequest");}
function lime_app_Future() {return require("./../../lime/app/Future");}

// Constructor

var Image = function(buffer,offsetX,offsetY,width,height,color,type) {
	if(height == null) {
		height = -1;
	}
	if(width == null) {
		width = -1;
	}
	if(offsetY == null) {
		offsetY = 0;
	}
	if(offsetX == null) {
		offsetX = 0;
	}
	this.offsetX = offsetX;
	this.offsetY = offsetY;
	this.width = width;
	this.height = height;
	this.version = 0;
	if(type == null) {
		type = (lime_graphics_ImageType().default).CANVAS;
	}
	this.type = type;
	if(buffer == null) {
		if(width > 0 && height > 0) {
			switch(this.type._hx_index) {
			case 0:
				this.buffer = new (lime_graphics_ImageBuffer().default)(null,width,height);
				(lime__$internal_graphics_ImageCanvasUtil().default).createCanvas(this,width,height);
				if(color != null && color != 0) {
					this.fillRect(new (lime_math_Rectangle().default)(0,0,width,height),color);
				}
				break;
			case 1:
				var elements = width * height * 4;
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
				this.buffer = new (lime_graphics_ImageBuffer().default)(this1,width,height);
				if(color != null && color != 0) {
					this.fillRect(new (lime_math_Rectangle().default)(0,0,width,height),color);
				}
				break;
			case 2:
				break;
			default:
			}
		}
	} else {
		this.__fromImageBuffer(buffer);
	}
}

// Meta

Image.__name__ = "lime.graphics.Image";
Image.__isInterface__ = false;
Image.prototype = {
	clone: function() {
		if(this.buffer != null) {
			if(this.type == (lime_graphics_ImageType().default).CANVAS) {
				(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(this);
			} else {
				(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			}
			var image = new Image(this.buffer.clone(),this.offsetX,this.offsetY,this.width,this.height,null,this.type);
			image.version = this.version;
			return image;
		} else {
			return new Image(null,this.offsetX,this.offsetY,this.width,this.height,null,this.type);
		}
	},
	colorTransform: function(rect,colorMatrix) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			(lime__$internal_graphics_ImageCanvasUtil().default).colorTransform(this,rect,colorMatrix);
			break;
		case 1:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			(lime__$internal_graphics_ImageDataUtil().default).colorTransform(this,rect,colorMatrix);
			break;
		case 2:
			rect.offset(this.offsetX,this.offsetY);
			this.buffer.__srcBitmapData.colorTransform(rect.__toFlashRectangle(),(lime_math__$ColorMatrix_ColorMatrix_$Impl_$().default).__toFlashColorTransform(colorMatrix));
			break;
		default:
		}
	},
	copyChannel: function(sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
		sourceRect = this.__clipRect(sourceRect);
		if(this.buffer == null || sourceRect == null) {
			return;
		}
		if(destChannel == (lime_graphics_ImageChannel().default).ALPHA && !this.get_transparent()) {
			return;
		}
		if(sourceRect.width <= 0 || sourceRect.height <= 0) {
			return;
		}
		if(sourceRect.x + sourceRect.width > sourceImage.width) {
			sourceRect.width = sourceImage.width - sourceRect.x;
		}
		if(sourceRect.y + sourceRect.height > sourceImage.height) {
			sourceRect.height = sourceImage.height - sourceRect.y;
		}
		switch(this.type._hx_index) {
		case 0:
			(lime__$internal_graphics_ImageCanvasUtil().default).copyChannel(this,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
			break;
		case 1:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(sourceImage);
			(lime__$internal_graphics_ImageDataUtil().default).copyChannel(this,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
			break;
		case 2:
			var srcChannel;
			switch(sourceChannel._hx_index) {
			case 0:
				srcChannel = 1;
				break;
			case 1:
				srcChannel = 2;
				break;
			case 2:
				srcChannel = 4;
				break;
			case 3:
				srcChannel = 8;
				break;
			}
			var dstChannel;
			switch(destChannel._hx_index) {
			case 0:
				dstChannel = 1;
				break;
			case 1:
				dstChannel = 2;
				break;
			case 2:
				dstChannel = 4;
				break;
			case 3:
				dstChannel = 8;
				break;
			}
			sourceRect.offset(sourceImage.offsetX,sourceImage.offsetY);
			destPoint.offset(this.offsetX,this.offsetY);
			this.buffer.__srcBitmapData.copyChannel(sourceImage.buffer.get_src(),sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),srcChannel,dstChannel);
			break;
		default:
		}
	},
	copyPixels: function(sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) {
			mergeAlpha = false;
		}
		if(this.buffer == null || sourceImage == null) {
			return;
		}
		if(sourceRect.width <= 0 || sourceRect.height <= 0) {
			return;
		}
		if(this.width <= 0 || this.height <= 0) {
			return;
		}
		if(sourceRect.x + sourceRect.width > sourceImage.width) {
			sourceRect.width = sourceImage.width - sourceRect.x;
		}
		if(sourceRect.y + sourceRect.height > sourceImage.height) {
			sourceRect.height = sourceImage.height - sourceRect.y;
		}
		if(sourceRect.x < 0) {
			sourceRect.width += sourceRect.x;
			sourceRect.x = 0;
		}
		if(sourceRect.y < 0) {
			sourceRect.height += sourceRect.y;
			sourceRect.y = 0;
		}
		if(destPoint.x + sourceRect.width > this.width) {
			sourceRect.width = this.width - destPoint.x;
		}
		if(destPoint.y + sourceRect.height > this.height) {
			sourceRect.height = this.height - destPoint.y;
		}
		if(destPoint.x < 0) {
			sourceRect.width += destPoint.x;
			sourceRect.x -= destPoint.x;
			destPoint.x = 0;
		}
		if(destPoint.y < 0) {
			sourceRect.height += destPoint.y;
			sourceRect.y -= destPoint.y;
			destPoint.y = 0;
		}
		if(sourceImage == this && destPoint.x < sourceRect.get_right() && destPoint.y < sourceRect.get_bottom()) {
			sourceImage = this.clone();
		}
		if(alphaImage == sourceImage && (alphaPoint == null || alphaPoint.x == 0 && alphaPoint.y == 0)) {
			alphaImage = null;
			alphaPoint = null;
		}
		switch(this.type._hx_index) {
		case 0:
			if(alphaImage != null) {
				(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
				(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(sourceImage);
				if(alphaImage != null) {
					(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(alphaImage);
				}
				(lime__$internal_graphics_ImageDataUtil().default).copyPixels(this,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
			} else {
				(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(this);
				(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(sourceImage);
				(lime__$internal_graphics_ImageCanvasUtil().default).copyPixels(this,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
			}
			break;
		case 1:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(sourceImage);
			if(alphaImage != null) {
				(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(alphaImage);
			}
			(lime__$internal_graphics_ImageDataUtil().default).copyPixels(this,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
			break;
		case 2:
			sourceRect.offset(sourceImage.offsetX,sourceImage.offsetY);
			destPoint.offset(this.offsetX,this.offsetY);
			if(alphaImage != null && alphaPoint != null) {
				alphaPoint.offset(alphaImage.offsetX,alphaImage.offsetY);
			}
			this.buffer.__srcBitmapData.copyPixels(sourceImage.buffer.__srcBitmapData,sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),alphaImage != null ? alphaImage.buffer.get_src() : null,alphaPoint != null ? alphaPoint.__toFlashPoint() : null,mergeAlpha);
			break;
		default:
		}
	},
	encode: function(format,quality) {
		if(quality == null) {
			quality = 90;
		}
		if(format == null) {
			return (lime__$internal_format_PNG().default).encode(this);
		} else {
			switch(format._hx_index) {
			case 0:
				return (lime__$internal_format_BMP().default).encode(this);
			case 1:
				return (lime__$internal_format_JPEG().default).encode(this,quality);
			case 2:
				return (lime__$internal_format_PNG().default).encode(this);
			}
		}
	},
	fillRect: function(rect,color,format) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			(lime__$internal_graphics_ImageCanvasUtil().default).fillRect(this,rect,color,format);
			break;
		case 1:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			if(this.buffer.data.length == 0) {
				return;
			}
			(lime__$internal_graphics_ImageDataUtil().default).fillRect(this,rect,color,format);
			break;
		case 2:
			rect.offset(this.offsetX,this.offsetY);
			var argb;
			if(format == null) {
				var rgba = color;
				var this1 = 0;
				var argb1 = this1;
				argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
				argb = argb1;
			} else {
				switch(format) {
				case 1:
					argb = color;
					break;
				case 2:
					var bgra = color;
					var this2 = 0;
					var argb2 = this2;
					argb2 = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
					argb = argb2;
					break;
				default:
					var rgba1 = color;
					var this3 = 0;
					var argb3 = this3;
					argb3 = (rgba1 & 255 & 255) << 24 | (rgba1 >>> 24 & 255 & 255) << 16 | (rgba1 >>> 16 & 255 & 255) << 8 | rgba1 >>> 8 & 255 & 255;
					argb = argb3;
				}
			}
			this.buffer.__srcBitmapData.fillRect(rect.__toFlashRectangle(),argb);
			break;
		default:
		}
	},
	floodFill: function(x,y,color,format) {
		if(this.buffer == null) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			(lime__$internal_graphics_ImageCanvasUtil().default).floodFill(this,x,y,color,format);
			break;
		case 1:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			(lime__$internal_graphics_ImageDataUtil().default).floodFill(this,x,y,color,format);
			break;
		case 2:
			var argb;
			if(format == null) {
				var rgba = color;
				var this1 = 0;
				var argb1 = this1;
				argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
				argb = argb1;
			} else {
				switch(format) {
				case 1:
					argb = color;
					break;
				case 2:
					var bgra = color;
					var this2 = 0;
					var argb2 = this2;
					argb2 = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
					argb = argb2;
					break;
				default:
					var rgba1 = color;
					var this3 = 0;
					var argb3 = this3;
					argb3 = (rgba1 & 255 & 255) << 24 | (rgba1 >>> 24 & 255 & 255) << 16 | (rgba1 >>> 16 & 255 & 255) << 8 | rgba1 >>> 8 & 255 & 255;
					argb = argb3;
				}
			}
			this.buffer.__srcBitmapData.floodFill(x + this.offsetX,y + this.offsetY,argb);
			break;
		default:
		}
	},
	getColorBoundsRect: function(mask,color,findColor,format) {
		if(findColor == null) {
			findColor = true;
		}
		if(this.buffer == null) {
			return null;
		}
		switch(this.type._hx_index) {
		case 0:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			return (lime__$internal_graphics_ImageDataUtil().default).getColorBoundsRect(this,mask,color,findColor,format);
		case 1:
			return (lime__$internal_graphics_ImageDataUtil().default).getColorBoundsRect(this,mask,color,findColor,format);
		case 2:
			var rect = this.buffer.__srcBitmapData.getColorBoundsRect(mask,color,findColor);
			return new (lime_math_Rectangle().default)(rect.x,rect.y,rect.width,rect.height);
		default:
			return null;
		}
	},
	getPixel: function(x,y,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) {
			return 0;
		}
		switch(this.type._hx_index) {
		case 0:
			return (lime__$internal_graphics_ImageCanvasUtil().default).getPixel(this,x,y,format);
		case 1:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			return (lime__$internal_graphics_ImageDataUtil().default).getPixel(this,x,y,format);
		case 2:
			var color = this.buffer.__srcBitmapData.getPixel(x + this.offsetX,y + this.offsetY);
			if(format == null) {
				var this1 = 0;
				var rgba = this1;
				rgba = (color >>> 16 & 255 & 255) << 24 | (color >>> 8 & 255 & 255) << 16 | (color & 255 & 255) << 8 | color >>> 24 & 255 & 255;
				var rgba1 = rgba;
				return rgba1;
			} else {
				switch(format) {
				case 1:
					return color;
				case 2:
					var this2 = 0;
					var bgra = this2;
					bgra = (color & 255 & 255) << 24 | (color >>> 8 & 255 & 255) << 16 | (color >>> 16 & 255 & 255) << 8 | color >>> 24 & 255 & 255;
					var bgra1 = bgra;
					return bgra1;
				default:
					var this3 = 0;
					var rgba2 = this3;
					rgba2 = (color >>> 16 & 255 & 255) << 24 | (color >>> 8 & 255 & 255) << 16 | (color & 255 & 255) << 8 | color >>> 24 & 255 & 255;
					var rgba3 = rgba2;
					return rgba3;
				}
			}
			break;
		default:
			return 0;
		}
	},
	getPixel32: function(x,y,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) {
			return 0;
		}
		switch(this.type._hx_index) {
		case 0:
			return (lime__$internal_graphics_ImageCanvasUtil().default).getPixel32(this,x,y,format);
		case 1:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			return (lime__$internal_graphics_ImageDataUtil().default).getPixel32(this,x,y,format);
		case 2:
			var color = this.buffer.__srcBitmapData.getPixel32(x + this.offsetX,y + this.offsetY);
			if(format == null) {
				var this1 = 0;
				var rgba = this1;
				rgba = (color >>> 16 & 255 & 255) << 24 | (color >>> 8 & 255 & 255) << 16 | (color & 255 & 255) << 8 | color >>> 24 & 255 & 255;
				var rgba1 = rgba;
				return rgba1;
			} else {
				switch(format) {
				case 1:
					return color;
				case 2:
					var this2 = 0;
					var bgra = this2;
					bgra = (color & 255 & 255) << 24 | (color >>> 8 & 255 & 255) << 16 | (color >>> 16 & 255 & 255) << 8 | color >>> 24 & 255 & 255;
					var bgra1 = bgra;
					return bgra1;
				default:
					var this3 = 0;
					var rgba2 = this3;
					rgba2 = (color >>> 16 & 255 & 255) << 24 | (color >>> 8 & 255 & 255) << 16 | (color & 255 & 255) << 8 | color >>> 24 & 255 & 255;
					var rgba3 = rgba2;
					return rgba3;
				}
			}
			break;
		default:
			return 0;
		}
	},
	getPixels: function(rect,format) {
		if(this.buffer == null) {
			return null;
		}
		switch(this.type._hx_index) {
		case 0:
			return (lime__$internal_graphics_ImageCanvasUtil().default).getPixels(this,rect,format);
		case 1:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			return (lime__$internal_graphics_ImageDataUtil().default).getPixels(this,rect,format);
		case 2:
			return null;
		default:
			return null;
		}
	},
	merge: function(sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier) {
		if(this.buffer == null || sourceImage == null) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(this);
			(lime__$internal_graphics_ImageCanvasUtil().default).merge(this,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
			break;
		case 1:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(sourceImage);
			(lime__$internal_graphics_ImageDataUtil().default).merge(this,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
			break;
		case 2:
			sourceRect.offset(this.offsetX,this.offsetY);
			this.buffer.__srcBitmapData.merge(sourceImage.buffer.__srcBitmapData,sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
			break;
		default:
			return;
		}
	},
	resize: function(newWidth,newHeight) {
		switch(this.type._hx_index) {
		case 0:
			(lime__$internal_graphics_ImageCanvasUtil().default).resize(this,newWidth,newHeight);
			break;
		case 1:
			(lime__$internal_graphics_ImageDataUtil().default).resize(this,newWidth,newHeight);
			break;
		case 2:
			break;
		default:
		}
		this.buffer.width = newWidth;
		this.buffer.height = newHeight;
		this.offsetX = 0;
		this.offsetY = 0;
		this.width = newWidth;
		this.height = newHeight;
	},
	scroll: function(x,y) {
		if(this.buffer == null) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			(lime__$internal_graphics_ImageCanvasUtil().default).scroll(this,x,y);
			break;
		case 1:
			this.copyPixels(this,this.get_rect(),new (lime_math_Vector2().default)(x,y));
			break;
		case 2:
			this.buffer.__srcBitmapData.scroll(x + this.offsetX,y + this.offsetX);
			break;
		default:
		}
	},
	setPixel: function(x,y,color,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			(lime__$internal_graphics_ImageCanvasUtil().default).setPixel(this,x,y,color,format);
			break;
		case 1:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			(lime__$internal_graphics_ImageDataUtil().default).setPixel(this,x,y,color,format);
			break;
		case 2:
			var argb;
			if(format == null) {
				var rgba = color;
				var this1 = 0;
				var argb1 = this1;
				argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
				argb = argb1;
			} else {
				switch(format) {
				case 1:
					argb = color;
					break;
				case 2:
					var bgra = color;
					var this2 = 0;
					var argb2 = this2;
					argb2 = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
					argb = argb2;
					break;
				default:
					var rgba1 = color;
					var this3 = 0;
					var argb3 = this3;
					argb3 = (rgba1 & 255 & 255) << 24 | (rgba1 >>> 24 & 255 & 255) << 16 | (rgba1 >>> 16 & 255 & 255) << 8 | rgba1 >>> 8 & 255 & 255;
					argb = argb3;
				}
			}
			this.buffer.__srcBitmapData.setPixel(x + this.offsetX,y + this.offsetX,argb);
			break;
		default:
		}
	},
	setPixel32: function(x,y,color,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) {
			return;
		}
		switch(this.type._hx_index) {
		case 0:
			(lime__$internal_graphics_ImageCanvasUtil().default).setPixel32(this,x,y,color,format);
			break;
		case 1:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			(lime__$internal_graphics_ImageDataUtil().default).setPixel32(this,x,y,color,format);
			break;
		case 2:
			var argb;
			if(format == null) {
				var rgba = color;
				var this1 = 0;
				var argb1 = this1;
				argb1 = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
				argb = argb1;
			} else {
				switch(format) {
				case 1:
					argb = color;
					break;
				case 2:
					var bgra = color;
					var this2 = 0;
					var argb2 = this2;
					argb2 = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
					argb = argb2;
					break;
				default:
					var rgba1 = color;
					var this3 = 0;
					var argb3 = this3;
					argb3 = (rgba1 & 255 & 255) << 24 | (rgba1 >>> 24 & 255 & 255) << 16 | (rgba1 >>> 16 & 255 & 255) << 8 | rgba1 >>> 8 & 255 & 255;
					argb = argb3;
				}
			}
			this.buffer.__srcBitmapData.setPixel32(x + this.offsetX,y + this.offsetY,argb);
			break;
		default:
		}
	},
	setPixels: function(rect,bytePointer,format,endian) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) {
			return;
		}
		if(endian == null) {
			endian = (lime_system_Endian().default).BIG_ENDIAN;
		}
		switch(this.type._hx_index) {
		case 0:
			(lime__$internal_graphics_ImageCanvasUtil().default).setPixels(this,rect,bytePointer,format,endian);
			break;
		case 1:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			(lime__$internal_graphics_ImageDataUtil().default).setPixels(this,rect,bytePointer,format,endian);
			break;
		case 2:
			break;
		default:
		}
	},
	threshold: function(sourceImage,sourceRect,destPoint,operation,threshold,color,mask,copySource,format) {
		if(copySource == null) {
			copySource = false;
		}
		if(mask == null) {
			mask = -1;
		}
		if(color == null) {
			color = 0;
		}
		if(this.buffer == null || sourceImage == null || sourceRect == null) {
			return 0;
		}
		switch(this.type._hx_index) {
		case 0:case 1:
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(sourceImage);
			return (lime__$internal_graphics_ImageDataUtil().default).threshold(this,sourceImage,sourceRect,destPoint,operation,threshold,color,mask,copySource,format);
		case 2:
			var _color;
			if(format == null) {
				var rgba = color;
				var this1 = 0;
				var argb = this1;
				argb = (rgba & 255 & 255) << 24 | (rgba >>> 24 & 255 & 255) << 16 | (rgba >>> 16 & 255 & 255) << 8 | rgba >>> 8 & 255 & 255;
				_color = argb;
			} else {
				switch(format) {
				case 1:
					_color = color;
					break;
				case 2:
					var bgra = color;
					var this2 = 0;
					var argb1 = this2;
					argb1 = (bgra & 255 & 255) << 24 | (bgra >>> 8 & 255 & 255) << 16 | (bgra >>> 16 & 255 & 255) << 8 | bgra >>> 24 & 255 & 255;
					_color = argb1;
					break;
				default:
					var rgba1 = color;
					var this3 = 0;
					var argb2 = this3;
					argb2 = (rgba1 & 255 & 255) << 24 | (rgba1 >>> 24 & 255 & 255) << 16 | (rgba1 >>> 16 & 255 & 255) << 8 | rgba1 >>> 8 & 255 & 255;
					_color = argb2;
				}
			}
			var _mask;
			if(format == null) {
				var rgba2 = mask;
				var this4 = 0;
				var argb3 = this4;
				argb3 = (rgba2 & 255 & 255) << 24 | (rgba2 >>> 24 & 255 & 255) << 16 | (rgba2 >>> 16 & 255 & 255) << 8 | rgba2 >>> 8 & 255 & 255;
				_mask = argb3;
			} else {
				switch(format) {
				case 1:
					_mask = mask;
					break;
				case 2:
					var bgra1 = mask;
					var this5 = 0;
					var argb4 = this5;
					argb4 = (bgra1 & 255 & 255) << 24 | (bgra1 >>> 8 & 255 & 255) << 16 | (bgra1 >>> 16 & 255 & 255) << 8 | bgra1 >>> 24 & 255 & 255;
					_mask = argb4;
					break;
				default:
					var rgba3 = mask;
					var this6 = 0;
					var argb5 = this6;
					argb5 = (rgba3 & 255 & 255) << 24 | (rgba3 >>> 24 & 255 & 255) << 16 | (rgba3 >>> 16 & 255 & 255) << 8 | rgba3 >>> 8 & 255 & 255;
					_mask = argb5;
				}
			}
			sourceRect.offset(sourceImage.offsetX,sourceImage.offsetY);
			destPoint.offset(this.offsetX,this.offsetY);
			return this.buffer.__srcBitmapData.threshold(sourceImage.buffer.get_src(),sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),operation,threshold,_color,_mask,copySource);
		default:
		}
		return 0;
	},
	__clipRect: function(r) {
		if(r == null) {
			return null;
		}
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) {
				return null;
			}
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) {
				return null;
			}
		}
		if(r.x + r.width >= this.width) {
			r.width -= r.x + r.width - this.width;
			if(r.width <= 0) {
				return null;
			}
		}
		if(r.y + r.height >= this.height) {
			r.height -= r.y + r.height - this.height;
			if(r.height <= 0) {
				return null;
			}
		}
		return r;
	},
	__fromBase64: function(base64,type,onload) {
		var _gthis = this;
		var image = new window.Image ();
		var image_onLoaded = function(event) {
			_gthis.buffer = new (lime_graphics_ImageBuffer().default)(null,image.width,image.height);
			_gthis.buffer.__srcImage = image;
			_gthis.offsetX = 0;
			_gthis.offsetY = 0;
			_gthis.width = _gthis.buffer.width;
			_gthis.height = _gthis.buffer.height;
			if(onload != null) {
				onload(_gthis);
			}
		};
		image.addEventListener("load",image_onLoaded,false);
		image.src = "data:" + type + ";base64," + base64;
	},
	__fromBytes: function(bytes,onload) {
		var type = "";
		if(Image.__isPNG(bytes)) {
			type = "image/png";
		} else if(Image.__isJPG(bytes)) {
			type = "image/jpeg";
		} else if(Image.__isGIF(bytes)) {
			type = "image/gif";
		} else {
			return false;
		}
		this.__fromBase64((lime__$internal_format_Base64().default).encode(bytes),type,onload);
		return true;
	},
	__fromFile: function(path,onload,onerror) {
		var _gthis = this;
		var image = new window.Image ();
		if(!(lime__$internal_backend_html5_HTML5HTTPRequest().default).__isSameOrigin(path)) {
			image.crossOrigin = "Anonymous";
		}
		image.onload = function(_) {
			_gthis.buffer = new (lime_graphics_ImageBuffer().default)(null,image.width,image.height);
			_gthis.buffer.__srcImage = image;
			_gthis.width = image.width;
			_gthis.height = image.height;
			if(onload != null) {
				onload(_gthis);
			}
		};
		image.onerror = function(_1) {
			if(onerror != null) {
				onerror();
			}
		};
		image.src = path;
		var image1 = image.complete;
		return true;
	},
	__fromImageBuffer: function(buffer) {
		this.buffer = buffer;
		if(buffer != null) {
			if(this.width == -1) {
				this.width = buffer.width;
			}
			if(this.height == -1) {
				this.height = buffer.height;
			}
		}
	},
	get_data: function() {
		if(this.buffer.data == null && this.buffer.width > 0 && this.buffer.height > 0) {
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
		}
		return this.buffer.data;
	},
	set_data: function(value) {
		return this.buffer.data = value;
	},
	get_format: function() {
		return this.buffer.format;
	},
	set_format: function(value) {
		if(this.buffer.format != value) {
			if(this.type._hx_index == 1) {
				(lime__$internal_graphics_ImageDataUtil().default).setFormat(this,value);
			}
		}
		return this.buffer.format = value;
	},
	get_powerOfTwo: function() {
		if(this.buffer.width != 0 && (this.buffer.width & ~this.buffer.width + 1) == this.buffer.width) {
			if(this.buffer.height != 0) {
				return (this.buffer.height & ~this.buffer.height + 1) == this.buffer.height;
			} else {
				return false;
			}
		} else {
			return false;
		}
	},
	set_powerOfTwo: function(value) {
		if(value != this.get_powerOfTwo()) {
			var newWidth = 1;
			var newHeight = 1;
			while(newWidth < this.buffer.width) newWidth <<= 1;
			while(newHeight < this.buffer.height) newHeight <<= 1;
			if(newWidth == this.buffer.width && newHeight == this.buffer.height) {
				return value;
			}
			switch(this.type._hx_index) {
			case 0:
				(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
				(lime__$internal_graphics_ImageDataUtil().default).resizeBuffer(this,newWidth,newHeight);
				break;
			case 1:
				(lime__$internal_graphics_ImageDataUtil().default).resizeBuffer(this,newWidth,newHeight);
				break;
			case 2:
				break;
			default:
			}
		}
		return value;
	},
	get_premultiplied: function() {
		return this.buffer.premultiplied;
	},
	set_premultiplied: function(value) {
		if(value && !this.buffer.premultiplied) {
			switch(this.type._hx_index) {
			case 0:case 1:
				(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
				(lime__$internal_graphics_ImageDataUtil().default).multiplyAlpha(this);
				break;
			default:
			}
		} else if(!value && this.buffer.premultiplied) {
			if(this.type._hx_index == 1) {
				(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this);
				(lime__$internal_graphics_ImageDataUtil().default).unmultiplyAlpha(this);
			}
		}
		return value;
	},
	get_rect: function() {
		return new (lime_math_Rectangle().default)(0,0,this.width,this.height);
	},
	get_src: function() {
		if(this.buffer.__srcCanvas == null && (this.buffer.data != null || this.type == (lime_graphics_ImageType().default).DATA)) {
			(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(this);
		}
		return this.buffer.get_src();
	},
	set_src: function(value) {
		return this.buffer.set_src(value);
	},
	get_transparent: function() {
		if(this.buffer == null) {
			return false;
		}
		return this.buffer.transparent;
	},
	set_transparent: function(value) {
		if(this.buffer == null) {
			return false;
		}
		return this.buffer.transparent = value;
	}
};
Image.prototype.__class__ = Image.prototype.constructor = $hxClasses["lime.graphics.Image"] = Image;

// Init

{
	var p = Image.prototype;
	Object.defineProperties(p,{ data : { get : p.get_data, set : p.set_data}, format : { get : p.get_format, set : p.set_format}, powerOfTwo : { get : p.get_powerOfTwo, set : p.set_powerOfTwo}, premultiplied : { get : p.get_premultiplied, set : p.set_premultiplied}, rect : { get : p.get_rect}, src : { get : p.get_src, set : p.set_src}, transparent : { get : p.get_transparent, set : p.set_transparent}});
};

// Statics

Image.fromBase64 = function(base64,type) {
	if(base64 == null) {
		return null;
	}
	var image = new Image();
	image.__fromBase64(base64,type);
	return image;
}
Image.fromBitmapData = function(bitmapData) {
	if(bitmapData == null) {
		return null;
	}
	return bitmapData.image;
}
Image.fromBytes = function(bytes) {
	if(bytes == null) {
		return null;
	}
	var image = new Image();
	if(image.__fromBytes(bytes)) {
		return image;
	} else {
		return null;
	}
}
Image.fromCanvas = function(canvas) {
	if(canvas == null) {
		return null;
	}
	var buffer = new (lime_graphics_ImageBuffer().default)(null,canvas.width,canvas.height);
	buffer.set_src(canvas);
	var image = new Image(buffer);
	image.type = (lime_graphics_ImageType().default).CANVAS;
	return image;
}
Image.fromFile = function(path) {
	if(path == null) {
		return null;
	}
	var image = new Image();
	if(image.__fromFile(path)) {
		return image;
	} else {
		return null;
	}
}
Image.fromImageElement = function(image) {
	if(image == null) {
		return null;
	}
	var buffer = new (lime_graphics_ImageBuffer().default)(null,image.width,image.height);
	buffer.set_src(image);
	var _image = new Image(buffer);
	_image.type = (lime_graphics_ImageType().default).CANVAS;
	return _image;
}
Image.loadFromBase64 = function(base64,type) {
	if(base64 == null || type == null) {
		return (lime_app_Future().default).withValue(null);
	}
	return (lime__$internal_backend_html5_HTML5HTTPRequest().default).loadImage("data:" + type + ";base64," + base64);
}
Image.loadFromBytes = function(bytes) {
	if(bytes == null) {
		return (lime_app_Future().default).withValue(null);
	}
	var type = "";
	if(Image.__isPNG(bytes)) {
		type = "image/png";
	} else if(Image.__isJPG(bytes)) {
		type = "image/jpeg";
	} else if(Image.__isGIF(bytes)) {
		type = "image/gif";
	} else if(Image.__isWebP(bytes)) {
		type = "image/webp";
	} else {
		return (lime_app_Future().default).withValue(null);
	}
	return (lime__$internal_backend_html5_HTML5HTTPRequest().default).loadImageFromBytes(bytes,type);
}
Image.loadFromFile = function(path) {
	if(path == null) {
		return (lime_app_Future().default).withValue(null);
	}
	return (lime__$internal_backend_html5_HTML5HTTPRequest().default).loadImage(path);
}
Image.__isGIF = function(bytes) {
	if(bytes == null || bytes.get_length() < 6) {
		return false;
	}
	var header = bytes.getString(0,6);
	if(header != "GIF87a") {
		return header == "GIF89a";
	} else {
		return true;
	}
}
Image.__isJPG = function(bytes) {
	if(bytes == null || bytes.get_length() < 4) {
		return false;
	}
	if(bytes.get(0) == 255 && bytes.get(1) == 216 && bytes.get(bytes.get_length() - 2) == 255) {
		return bytes.get(bytes.get_length() - 1) == 217;
	} else {
		return false;
	}
}
Image.__isPNG = function(bytes) {
	if(bytes == null || bytes.get_length() < 8) {
		return false;
	}
	if(bytes.get(0) == 137 && bytes.get(1) == 80 && bytes.get(2) == 78 && bytes.get(3) == 71 && bytes.get(4) == 13 && bytes.get(5) == 10 && bytes.get(6) == 26) {
		return bytes.get(7) == 10;
	} else {
		return false;
	}
}
Image.__isWebP = function(bytes) {
	if(bytes == null || bytes.get_length() < 16) {
		return false;
	}
	if(bytes.getString(0,4) == "RIFF") {
		return bytes.getString(8,4) == "WEBP";
	} else {
		return false;
	}
}


// Export

exports.default = Image;