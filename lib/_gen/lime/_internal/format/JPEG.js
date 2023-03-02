// Class: lime._internal.format.JPEG

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime__$internal_graphics_ImageCanvasUtil() {return require("./../../../lime/_internal/graphics/ImageCanvasUtil");}
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function HxOverrides() {return require("./../../../HxOverrides");}

// Constructor

var JPEG = function(){}

// Meta

JPEG.__name__ = "lime._internal.format.JPEG";
JPEG.__isInterface__ = false;
JPEG.prototype = {
	
};
JPEG.prototype.__class__ = JPEG.prototype.constructor = $hxClasses["lime._internal.format.JPEG"] = JPEG;

// Init



// Statics

JPEG.decodeBytes = function(bytes,decodeData) {
	if(decodeData == null) {
		decodeData = true;
	}
	return null;
}
JPEG.decodeFile = function(path,decodeData) {
	if(decodeData == null) {
		decodeData = true;
	}
	return null;
}
JPEG.encode = function(image,quality) {
	if(image.get_premultiplied() || image.get_format() != 0) {
		image = image.clone();
		image.set_premultiplied(false);
		image.set_format(0);
	}
	(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(image,false);
	if(image.buffer.__srcCanvas != null) {
		var data = image.buffer.__srcCanvas.toDataURL("image/jpeg",quality / 100);
		var buffer = window.atob(data.split(";base64,")[1]);
		var bytes = (haxe_io_Bytes().default).alloc(buffer.length);
		var _g = 0;
		var _g1 = buffer.length;
		while(_g < _g1) {
			var i = _g++;
			bytes.set(i,(HxOverrides().default).cca(buffer,i));
		}
		return bytes;
	}
	return null;
}


// Export

exports.default = JPEG;