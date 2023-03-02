// Class: lime._internal.graphics._ImageDataUtil.ImageDataView

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function lime_math_Rectangle() {return require("./../../../../lime/math/Rectangle");}

// Constructor

var ImageDataView = function(image,rect) {
	this.image = image;
	if(rect == null) {
		this.rect = image.get_rect();
	} else {
		if(rect.x < 0) {
			rect.x = 0;
		}
		if(rect.y < 0) {
			rect.y = 0;
		}
		if(rect.x + rect.width > image.width) {
			rect.width = image.width - rect.x;
		}
		if(rect.y + rect.height > image.height) {
			rect.height = image.height - rect.y;
		}
		if(rect.width < 0) {
			rect.width = 0;
		}
		if(rect.height < 0) {
			rect.height = 0;
		}
		this.rect = rect;
	}
	this.stride = image.buffer.get_stride();
	this.__update();
}

// Meta

ImageDataView.__name__ = "lime._internal.graphics._ImageDataUtil.ImageDataView";
ImageDataView.__isInterface__ = false;
ImageDataView.prototype = {
	clip: function(x,y,width,height) {
		if(this.tempRect == null) {
			this.tempRect = new (lime_math_Rectangle().default)();
		}
		this.tempRect.setTo(x,y,width,height);
		this.rect.intersection(this.tempRect,this.rect);
		this.__update();
	},
	hasRow: function(y) {
		if(y >= 0) {
			return y < this.height;
		} else {
			return false;
		}
	},
	offset: function(x,y) {
		if(x < 0) {
			this.rect.x += x;
			if(this.rect.x < 0) {
				this.rect.x = 0;
			}
		} else {
			this.rect.x += x;
			this.rect.width -= x;
		}
		if(y < 0) {
			this.rect.y += y;
			if(this.rect.y < 0) {
				this.rect.y = 0;
			}
		} else {
			this.rect.y += y;
			this.rect.height -= y;
		}
		this.__update();
	},
	row: function(y) {
		return this.byteOffset + this.stride * y;
	},
	__update: function() {
		this.x = Math.ceil(this.rect.x);
		this.y = Math.ceil(this.rect.y);
		this.width = Math.floor(this.rect.width);
		this.height = Math.floor(this.rect.height);
		this.byteOffset = this.stride * (this.y + this.image.offsetY) + (this.x + this.image.offsetX) * 4;
	}
};
ImageDataView.prototype.__class__ = ImageDataView.prototype.constructor = $hxClasses["lime._internal.graphics._ImageDataUtil.ImageDataView"] = ImageDataView;

// Init



// Statics




// Export

exports.default = ImageDataView;