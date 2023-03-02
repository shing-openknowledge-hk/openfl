// Class: lime._internal.format.Base64

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function haxe_crypto_Base64() {return require("./../../../haxe/crypto/Base64");}

// Constructor

var Base64 = function(){}

// Meta

Base64.__name__ = "lime._internal.format.Base64";
Base64.__isInterface__ = false;
Base64.prototype = {
	
};
Base64.prototype.__class__ = Base64.prototype.constructor = $hxClasses["lime._internal.format.Base64"] = Base64;

// Init



// Statics

Base64.decode = function(source) {
	return (haxe_crypto_Base64().default).decode(source);
}
Base64.encode = function(source) {
	var result = [];
	var dictionary = Base64.DICTIONARY;
	var extendedDictionary = Base64.EXTENDED_DICTIONARY;
	var numBytes = source.get_length();
	var numInputTriplets = Math.floor(numBytes / 3);
	var numChunksToWrite = numInputTriplets * 2;
	result.length = Math.ceil(numBytes / 3) * 2;
	var numBytesRead = 0;
	var numChunksWritten = 0;
	var inputTriplet;
	while(numChunksWritten < numChunksToWrite) {
		inputTriplet = source.get(numBytesRead) << 16 | source.get(numBytesRead + 1) << 8 | source.get(numBytesRead + 2);
		result[numChunksWritten] = extendedDictionary[inputTriplet >> 12 & 4095];
		result[numChunksWritten + 1] = extendedDictionary[inputTriplet & 4095];
		numBytesRead += 3;
		numChunksWritten += 2;
	}
	switch(numBytes - numInputTriplets * 3) {
	case 1:
		inputTriplet = source.get(numBytesRead) << 16;
		result[numChunksWritten] = extendedDictionary[inputTriplet >> 12 & 4095];
		result[numChunksWritten + 1] = "==";
		break;
	case 2:
		inputTriplet = source.get(numBytesRead) << 16 | source.get(numBytesRead + 1) << 8;
		result[numChunksWritten] = extendedDictionary[inputTriplet >> 12 & 4095];
		result[numChunksWritten + 1] = dictionary[inputTriplet >> 6 & 63] + "=";
		break;
	default:
	}
	return result.join("");
}
Base64.DICTIONARY = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
Base64.EXTENDED_DICTIONARY = (function($this) {
	var $r;
	var result = [];
	{
		var _g = 0;
		var _g1 = Base64.DICTIONARY;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g11 = Base64.DICTIONARY;
			while(_g2 < _g11.length) {
				var b = _g11[_g2];
				++_g2;
				result.push(a + b);
			}
		}
	}
	$r = result;
	return $r;
}(this))

// Export

exports.default = Base64;