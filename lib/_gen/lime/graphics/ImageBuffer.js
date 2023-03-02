// Class: lime.graphics.ImageBuffer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function Std() {return require("./../../Std");}

// Constructor

var ImageBuffer = function(data,width,height,bitsPerPixel,format) {
	if(bitsPerPixel == null) {
		bitsPerPixel = 32;
	}
	if(height == null) {
		height = 0;
	}
	if(width == null) {
		width = 0;
	}
	this.data = data;
	this.width = width;
	this.height = height;
	this.bitsPerPixel = bitsPerPixel;
	this.format = format == null ? 0 : format;
	this.premultiplied = false;
	this.transparent = true;
}

// Meta

ImageBuffer.__name__ = "lime.graphics.ImageBuffer";
ImageBuffer.__isInterface__ = false;
ImageBuffer.prototype = {
	clone: function() {
		var buffer = new ImageBuffer(this.data,this.width,this.height,this.bitsPerPixel);
		if(this.data != null) {
			var elements = this.data.byteLength;
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
			var elements1 = null;
			var array1 = null;
			var view1 = this.data;
			var buffer2 = null;
			var len1 = null;
			var this2;
			if(elements1 != null) {
				this2 = new Uint8Array(elements1);
			} else if(array1 != null) {
				this2 = new Uint8Array(array1);
			} else if(view1 != null) {
				this2 = new Uint8Array(view1);
			} else if(buffer2 != null) {
				if(len1 == null) {
					this2 = new Uint8Array(buffer2,0);
				} else {
					this2 = new Uint8Array(buffer2,0,len1);
				}
			} else {
				this2 = null;
			}
			var copy = this2;
			buffer.data.set(copy);
		} else if(this.__srcImageData != null) {
			buffer.__srcCanvas = window.document.createElement("canvas");
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
			buffer.__srcCanvas.width = this.__srcImageData.width;
			buffer.__srcCanvas.height = this.__srcImageData.height;
			buffer.__srcImageData = buffer.__srcContext.createImageData(this.__srcImageData.width,this.__srcImageData.height);
			var copy1 = new Uint8ClampedArray(this.__srcImageData.data);
			buffer.__srcImageData.data.set(copy1);
		} else if(this.__srcCanvas != null) {
			buffer.__srcCanvas = window.document.createElement("canvas");
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
			buffer.__srcCanvas.width = this.__srcCanvas.width;
			buffer.__srcCanvas.height = this.__srcCanvas.height;
			buffer.__srcContext.drawImage(this.__srcCanvas,0,0);
		} else {
			buffer.__srcImage = this.__srcImage;
		}
		buffer.bitsPerPixel = this.bitsPerPixel;
		buffer.format = this.format;
		buffer.premultiplied = this.premultiplied;
		buffer.transparent = this.transparent;
		return buffer;
	},
	get_src: function() {
		if(this.__srcImage != null) {
			return this.__srcImage;
		}
		return this.__srcCanvas;
	},
	set_src: function(value) {
		if(((value) instanceof Image)) {
			this.__srcImage = value;
		} else if(((value) instanceof HTMLCanvasElement)) {
			this.__srcCanvas = value;
			this.__srcContext = this.__srcCanvas.getContext("2d");
		}
		return value;
	},
	get_stride: function() {
		return this.width * (Std().default).int(this.bitsPerPixel / 8);
	}
};
ImageBuffer.prototype.__class__ = ImageBuffer.prototype.constructor = $hxClasses["lime.graphics.ImageBuffer"] = ImageBuffer;

// Init

{
	var p = ImageBuffer.prototype;
	Object.defineProperties(p,{ src : { get : p.get_src, set : p.set_src}, stride : { get : p.get_stride}});
};

// Statics




// Export

exports.default = ImageBuffer;