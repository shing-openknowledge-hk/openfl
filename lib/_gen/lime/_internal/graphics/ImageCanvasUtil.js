// Class: lime._internal.graphics.ImageCanvasUtil

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime__$internal_graphics_ImageDataUtil() {return require("./../../../lime/_internal/graphics/ImageDataUtil");}
function lime_graphics_ImageType() {return require("./../../../lime/graphics/ImageType");}
function lime_math_Vector2() {return require("./../../../lime/math/Vector2");}
function lime_math_Rectangle() {return require("./../../../lime/math/Rectangle");}
function lime_graphics_ImageChannel() {return require("./../../../lime/graphics/ImageChannel");}
function Std() {return require("./../../../Std");}

// Constructor

var ImageCanvasUtil = function(){}

// Meta

ImageCanvasUtil.__name__ = "lime._internal.graphics.ImageCanvasUtil";
ImageCanvasUtil.__isInterface__ = false;
ImageCanvasUtil.prototype = {
	
};
ImageCanvasUtil.prototype.__class__ = ImageCanvasUtil.prototype.constructor = $hxClasses["lime._internal.graphics.ImageCanvasUtil"] = ImageCanvasUtil;

// Init



// Statics

ImageCanvasUtil.colorTransform = function(image,rect,colorMatrix) {
	ImageCanvasUtil.convertToData(image);
	(lime__$internal_graphics_ImageDataUtil().default).colorTransform(image,rect,colorMatrix);
}
ImageCanvasUtil.convertToCanvas = function(image,clear) {
	if(clear == null) {
		clear = false;
	}
	var buffer = image.buffer;
	if(buffer.__srcImage != null) {
		if(buffer.__srcCanvas == null) {
			ImageCanvasUtil.createCanvas(image,buffer.__srcImage.width,buffer.__srcImage.height);
			buffer.__srcContext.drawImage(buffer.__srcImage,0,0);
		}
		buffer.__srcImage = null;
	} else if(buffer.__srcCanvas == null && buffer.data != null) {
		image.set_transparent(true);
		ImageCanvasUtil.createCanvas(image,buffer.width,buffer.height);
		ImageCanvasUtil.createImageData(image);
		buffer.__srcContext.putImageData(buffer.__srcImageData,0,0);
	} else if(image.type == (lime_graphics_ImageType().default).DATA && buffer.__srcImageData != null && image.dirty) {
		buffer.__srcContext.putImageData(buffer.__srcImageData,0,0);
		image.dirty = false;
	}
	if(clear) {
		buffer.data = null;
		buffer.__srcImageData = null;
	} else if(buffer.data == null && buffer.__srcImageData != null) {
		buffer.data = buffer.__srcImageData.data;
	}
	image.type = (lime_graphics_ImageType().default).CANVAS;
}
ImageCanvasUtil.convertToData = function(image,clear) {
	if(clear == null) {
		clear = false;
	}
	var buffer = image.buffer;
	if(buffer.__srcImage != null) {
		ImageCanvasUtil.convertToCanvas(image);
	}
	if(buffer.__srcCanvas != null && buffer.data == null) {
		ImageCanvasUtil.createImageData(image);
		if(image.type == (lime_graphics_ImageType().default).CANVAS) {
			image.dirty = false;
		}
	} else if(image.type == (lime_graphics_ImageType().default).CANVAS && buffer.__srcCanvas != null && image.dirty) {
		if(buffer.__srcImageData == null) {
			ImageCanvasUtil.createImageData(image);
		} else {
			buffer.__srcImageData = buffer.__srcContext.getImageData(0,0,buffer.width,buffer.height);
			var elements = buffer.__srcImageData.data.buffer;
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
			buffer.data = this1;
		}
		image.dirty = false;
	}
	if(clear) {
		image.buffer.__srcCanvas = null;
		image.buffer.__srcContext = null;
	}
	image.type = (lime_graphics_ImageType().default).DATA;
}
ImageCanvasUtil.copyChannel = function(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
	ImageCanvasUtil.convertToData(sourceImage);
	ImageCanvasUtil.convertToData(image);
	(lime__$internal_graphics_ImageDataUtil().default).copyChannel(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
}
ImageCanvasUtil.copyPixels = function(image,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) {
		mergeAlpha = false;
	}
	if(destPoint == null || destPoint.x >= image.width || destPoint.y >= image.height || sourceRect == null || sourceRect.width < 1 || sourceRect.height < 1) {
		return;
	}
	if(alphaImage != null && alphaImage.get_transparent()) {
		if(alphaPoint == null) {
			alphaPoint = new (lime_math_Vector2().default)();
		}
		var tempData = sourceImage.clone();
		tempData.copyChannel(alphaImage,new (lime_math_Rectangle().default)(sourceRect.x + alphaPoint.x,sourceRect.y + alphaPoint.y,sourceRect.width,sourceRect.height),new (lime_math_Vector2().default)(sourceRect.x,sourceRect.y),(lime_graphics_ImageChannel().default).ALPHA,(lime_graphics_ImageChannel().default).ALPHA);
		sourceImage = tempData;
	}
	ImageCanvasUtil.convertToCanvas(image,true);
	if(!mergeAlpha) {
		if(image.get_transparent() && sourceImage.get_transparent()) {
			image.buffer.__srcContext.clearRect(destPoint.x + image.offsetX,destPoint.y + image.offsetY,sourceRect.width + image.offsetX,sourceRect.height + image.offsetY);
		}
	}
	ImageCanvasUtil.convertToCanvas(sourceImage);
	if(sourceImage.buffer.get_src() != null) {
		image.buffer.__srcContext.globalCompositeOperation = "source-over";
		image.buffer.__srcContext.drawImage(sourceImage.buffer.get_src(),(Std().default).int(sourceRect.x + sourceImage.offsetX),(Std().default).int(sourceRect.y + sourceImage.offsetY),(Std().default).int(sourceRect.width),(Std().default).int(sourceRect.height),(Std().default).int(destPoint.x + image.offsetX),(Std().default).int(destPoint.y + image.offsetY),(Std().default).int(sourceRect.width),(Std().default).int(sourceRect.height));
	}
	image.dirty = true;
	image.version++;
}
ImageCanvasUtil.createCanvas = function(image,width,height) {
	var buffer = image.buffer;
	if(buffer.__srcCanvas == null) {
		buffer.__srcCanvas = window.document.createElement("canvas");
		buffer.__srcCanvas.width = width;
		buffer.__srcCanvas.height = height;
		if(!image.get_transparent()) {
			if(!image.get_transparent()) {
				buffer.__srcCanvas.setAttribute("moz-opaque","true");
			}
			buffer.__srcContext = buffer.__srcCanvas.getContext ("2d", { alpha: false });
		} else {
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
		}
	}
}
ImageCanvasUtil.createImageData = function(image) {
	var buffer = image.buffer;
	if(buffer.__srcImageData == null) {
		if(buffer.data == null) {
			buffer.__srcImageData = buffer.__srcContext.getImageData(0,0,buffer.width,buffer.height);
		} else {
			buffer.__srcImageData = buffer.__srcContext.createImageData(buffer.width,buffer.height);
			buffer.__srcImageData.data.set(buffer.data);
		}
		var elements = buffer.__srcImageData.data.buffer;
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
		buffer.data = this1;
	}
}
ImageCanvasUtil.fillRect = function(image,rect,color,format) {
	ImageCanvasUtil.convertToCanvas(image);
	var r;
	var g;
	var b;
	var a;
	if(format == 1) {
		r = color >> 16 & 255;
		g = color >> 8 & 255;
		b = color & 255;
		a = image.get_transparent() ? color >> 24 & 255 : 255;
	} else {
		r = color >> 24 & 255;
		g = color >> 16 & 255;
		b = color >> 8 & 255;
		a = image.get_transparent() ? color & 255 : 255;
	}
	if(rect.x == 0 && rect.y == 0 && rect.width == image.width && rect.height == image.height) {
		if(image.get_transparent() && a == 0) {
			image.buffer.__srcCanvas.width = image.buffer.width;
			return;
		}
	}
	if(a < 255) {
		image.buffer.__srcContext.clearRect(rect.x + image.offsetX,rect.y + image.offsetY,rect.width + image.offsetX,rect.height + image.offsetY);
	}
	if(a > 0) {
		image.buffer.__srcContext.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
		image.buffer.__srcContext.fillRect(rect.x + image.offsetX,rect.y + image.offsetY,rect.width + image.offsetX,rect.height + image.offsetY);
	}
	image.dirty = true;
	image.version++;
}
ImageCanvasUtil.floodFill = function(image,x,y,color,format) {
	ImageCanvasUtil.convertToData(image);
	(lime__$internal_graphics_ImageDataUtil().default).floodFill(image,x,y,color,format);
}
ImageCanvasUtil.getPixel = function(image,x,y,format) {
	ImageCanvasUtil.convertToData(image);
	return (lime__$internal_graphics_ImageDataUtil().default).getPixel(image,x,y,format);
}
ImageCanvasUtil.getPixel32 = function(image,x,y,format) {
	ImageCanvasUtil.convertToData(image);
	return (lime__$internal_graphics_ImageDataUtil().default).getPixel32(image,x,y,format);
}
ImageCanvasUtil.getPixels = function(image,rect,format) {
	ImageCanvasUtil.convertToData(image);
	return (lime__$internal_graphics_ImageDataUtil().default).getPixels(image,rect,format);
}
ImageCanvasUtil.merge = function(image,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier) {
	ImageCanvasUtil.convertToData(sourceImage);
	ImageCanvasUtil.convertToData(image);
	(lime__$internal_graphics_ImageDataUtil().default).merge(image,sourceImage,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier);
}
ImageCanvasUtil.resize = function(image,newWidth,newHeight) {
	var buffer = image.buffer;
	if(buffer.__srcCanvas == null) {
		ImageCanvasUtil.createCanvas(image,newWidth,newHeight);
		buffer.__srcContext.drawImage(buffer.get_src(),0,0,newWidth,newHeight);
	} else {
		ImageCanvasUtil.convertToCanvas(image,true);
		var sourceCanvas = buffer.__srcCanvas;
		buffer.__srcCanvas = null;
		ImageCanvasUtil.createCanvas(image,newWidth,newHeight);
		buffer.__srcContext.drawImage(sourceCanvas,0,0,newWidth,newHeight);
	}
	buffer.__srcImageData = null;
	buffer.data = null;
	image.dirty = true;
	image.version++;
}
ImageCanvasUtil.scroll = function(image,x,y) {
	if(x % image.width == 0 && y % image.height == 0) {
		return;
	}
	var copy = image.clone();
	ImageCanvasUtil.convertToCanvas(image,true);
	image.buffer.__srcContext.clearRect(x,y,image.width,image.height);
	image.buffer.__srcContext.drawImage(copy.get_src(),x,y);
	image.dirty = true;
	image.version++;
}
ImageCanvasUtil.setPixel = function(image,x,y,color,format) {
	ImageCanvasUtil.convertToData(image);
	(lime__$internal_graphics_ImageDataUtil().default).setPixel(image,x,y,color,format);
}
ImageCanvasUtil.setPixel32 = function(image,x,y,color,format) {
	ImageCanvasUtil.convertToData(image);
	(lime__$internal_graphics_ImageDataUtil().default).setPixel32(image,x,y,color,format);
}
ImageCanvasUtil.setPixels = function(image,rect,bytePointer,format,endian) {
	ImageCanvasUtil.convertToData(image);
	(lime__$internal_graphics_ImageDataUtil().default).setPixels(image,rect,bytePointer,format,endian);
}
ImageCanvasUtil.sync = function(image,clear) {
	if(image == null) {
		return;
	}
	if(image.type == (lime_graphics_ImageType().default).CANVAS && (image.buffer.__srcCanvas != null || image.buffer.data != null)) {
		ImageCanvasUtil.convertToCanvas(image,clear);
	} else if(image.type == (lime_graphics_ImageType().default).DATA) {
		ImageCanvasUtil.convertToData(image,clear);
	}
}


// Export

exports.default = ImageCanvasUtil;