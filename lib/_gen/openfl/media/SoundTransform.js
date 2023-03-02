// Class: openfl.media.SoundTransform

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var SoundTransform = function(vol,panning) {
	if(panning == null) {
		panning = 0;
	}
	if(vol == null) {
		vol = 1;
	}
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
}

// Meta

SoundTransform.__name__ = "openfl.media.SoundTransform";
SoundTransform.__isInterface__ = false;
SoundTransform.prototype = {
	clone: function() {
		return new SoundTransform(this.volume,this.pan);
	}
};
SoundTransform.prototype.__class__ = SoundTransform.prototype.constructor = $hxClasses["openfl.media.SoundTransform"] = SoundTransform;

// Init



// Statics


SoundTransform.__meta__ = { fields : { clone : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}

// Export

exports.default = SoundTransform;