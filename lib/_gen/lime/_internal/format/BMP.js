// Class: lime._internal.format.BMP

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime__$internal_format_BMPType() {return require("./../../../lime/_internal/format/BMPType");}
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function lime_math_Rectangle() {return require("./../../../lime/math/Rectangle");}

// Constructor

var BMP = function(){}

// Meta

BMP.__name__ = "lime._internal.format.BMP";
BMP.__isInterface__ = false;
BMP.prototype = {
	
};
BMP.prototype.__class__ = BMP.prototype.constructor = $hxClasses["lime._internal.format.BMP"] = BMP;

// Init



// Statics

BMP.encode = function(image,type) {
	if(image.get_premultiplied() || image.get_format() != 0) {
		image = image.clone();
		image.set_premultiplied(false);
		image.set_format(0);
	}
	if(type == null) {
		type = (lime__$internal_format_BMPType().default).RGB;
	}
	var fileHeaderLength = 14;
	var infoHeaderLength = 40;
	var pixelValuesLength = image.width * image.height * 4;
	if(type != null) {
		switch(type._hx_index) {
		case 0:
			pixelValuesLength = (image.width * 3 + image.width * 3 % 4) * image.height;
			break;
		case 1:
			infoHeaderLength = 108;
			break;
		case 2:
			fileHeaderLength = 0;
			pixelValuesLength += image.width * image.height;
			break;
		}
	}
	var data = (haxe_io_Bytes().default).alloc(fileHeaderLength + infoHeaderLength + pixelValuesLength);
	var position = 0;
	if(fileHeaderLength > 0) {
		data.set(position++,66);
		data.set(position++,77);
		data.setInt32(position,data.get_length());
		position += 4;
		data.setUInt16(position,0);
		position += 2;
		data.setUInt16(position,0);
		position += 2;
		data.setInt32(position,fileHeaderLength + infoHeaderLength);
		position += 4;
	}
	data.setInt32(position,infoHeaderLength);
	position += 4;
	data.setInt32(position,image.width);
	position += 4;
	data.setInt32(position,type == (lime__$internal_format_BMPType().default).ICO ? image.height * 2 : image.height);
	position += 4;
	data.setUInt16(position,1);
	position += 2;
	data.setUInt16(position,type == (lime__$internal_format_BMPType().default).RGB ? 24 : 32);
	position += 2;
	data.setInt32(position,type == (lime__$internal_format_BMPType().default).BITFIELD ? 3 : 0);
	position += 4;
	data.setInt32(position,pixelValuesLength);
	position += 4;
	data.setInt32(position,11824);
	position += 4;
	data.setInt32(position,11824);
	position += 4;
	data.setInt32(position,0);
	position += 4;
	data.setInt32(position,0);
	position += 4;
	if(type == (lime__$internal_format_BMPType().default).BITFIELD) {
		data.setInt32(position,16711680);
		position += 4;
		data.setInt32(position,65280);
		position += 4;
		data.setInt32(position,255);
		position += 4;
		data.setInt32(position,-16777216);
		position += 4;
		data.set(position++,32);
		data.set(position++,110);
		data.set(position++,105);
		data.set(position++,87);
		var _g = 0;
		while(_g < 48) {
			var i = _g++;
			data.set(position++,0);
		}
	}
	var pixels = image.getPixels(new (lime_math_Rectangle().default)(0,0,image.width,image.height),1);
	var readPosition = 0;
	var a;
	var r;
	var g;
	var b;
	if(type != null) {
		switch(type._hx_index) {
		case 0:
			var _g1 = 0;
			var _g11 = image.height;
			while(_g1 < _g11) {
				var y = _g1++;
				readPosition = (image.height - 1 - y) * 4 * image.width;
				var _g2 = 0;
				var _g12 = image.width;
				while(_g2 < _g12) {
					var x = _g2++;
					a = pixels.get(readPosition++);
					r = pixels.get(readPosition++);
					g = pixels.get(readPosition++);
					b = pixels.get(readPosition++);
					data.set(position++,b);
					data.set(position++,g);
					data.set(position++,r);
				}
				var _g21 = 0;
				var _g3 = image.width * 3 % 4;
				while(_g21 < _g3) {
					var i1 = _g21++;
					data.set(position++,0);
				}
			}
			break;
		case 1:
			var _g4 = 0;
			var _g13 = image.height;
			while(_g4 < _g13) {
				var y1 = _g4++;
				readPosition = (image.height - 1 - y1) * 4 * image.width;
				var _g5 = 0;
				var _g14 = image.width;
				while(_g5 < _g14) {
					var x1 = _g5++;
					a = pixels.get(readPosition++);
					r = pixels.get(readPosition++);
					g = pixels.get(readPosition++);
					b = pixels.get(readPosition++);
					data.set(position++,b);
					data.set(position++,g);
					data.set(position++,r);
					data.set(position++,a);
				}
			}
			break;
		case 2:
			var andMask = (haxe_io_Bytes().default).alloc(image.width * image.height);
			var maskPosition = 0;
			var _g6 = 0;
			var _g15 = image.height;
			while(_g6 < _g15) {
				var y2 = _g6++;
				readPosition = (image.height - 1 - y2) * 4 * image.width;
				var _g7 = 0;
				var _g16 = image.width;
				while(_g7 < _g16) {
					var x2 = _g7++;
					a = pixels.get(readPosition++);
					r = pixels.get(readPosition++);
					g = pixels.get(readPosition++);
					b = pixels.get(readPosition++);
					data.set(position++,b);
					data.set(position++,g);
					data.set(position++,r);
					data.set(position++,a);
					andMask.set(maskPosition++,0);
				}
			}
			data.blit(position,andMask,0,image.width * image.height);
			break;
		}
	}
	return data;
}


// Export

exports.default = BMP;