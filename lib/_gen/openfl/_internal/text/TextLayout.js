// Class: openfl._internal.text.TextLayout

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_text_harfbuzz__$HBBuffer_HBBuffer_$Impl_$() {return require("./../../../lime/text/harfbuzz/_HBBuffer/HBBuffer_Impl_");}
function lime_text_harfbuzz__$HBLanguage_HBLanguage_$Impl_$() {return require("./../../../lime/text/harfbuzz/_HBLanguage/HBLanguage_Impl_");}

// Constructor

var TextLayout = function(text,font,size,direction,script,language) {
	if(language == null) {
		language = "en";
	}
	if(script == null) {
		script = "Zyyy";
	}
	if(direction == null) {
		direction = 4;
	}
	if(size == null) {
		size = 12;
	}
	if(text == null) {
		text = "";
	}
	this.letterSpacing = 0;
	this.set_text(text);
	this.set_font(font);
	this.set_size(size);
	this.__direction = direction;
	this.__script = script;
	this.__language = language;
	this.positions = [];
	this.__dirty = true;
	this.__create(this.__direction,this.__script,this.__language);
}

// Meta

TextLayout.__name__ = "openfl._internal.text.TextLayout";
TextLayout.__isInterface__ = false;
TextLayout.prototype = {
	__create: function(direction,script,language) {
		if(language.length != 4) {
			return;
		}
		this.__hbBuffer = (lime_text_harfbuzz__$HBBuffer_HBBuffer_$Impl_$().default)._new();
		switch(direction) {
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
			break;
		default:
		}
		var this1 = this.__hbBuffer;
		var value = (lime_text_harfbuzz__$HBLanguage_HBLanguage_$Impl_$().default)._new(language);
	},
	__position: function() {
		this.positions = [];
	},
	get_positions: function() {
		if(this.__dirty) {
			this.__dirty = false;
			this.__position();
		}
		return this.positions;
	},
	get_direction: function() {
		return this.__direction;
	},
	set_direction: function(value) {
		if(value == this.__direction) {
			return value;
		}
		this.__direction = value;
		this.__dirty = true;
		return value;
	},
	set_font: function(value) {
		if(value == this.font) {
			return value;
		}
		this.font = value;
		this.__dirty = true;
		return value;
	},
	get_glyphs: function() {
		var glyphs = [];
		var _g = 0;
		var _g1 = this.get_positions();
		while(_g < _g1.length) {
			var position = _g1[_g];
			++_g;
			glyphs.push(position.glyph);
		}
		return glyphs;
	},
	get_language: function() {
		return this.__language;
	},
	set_language: function(value) {
		if(value == this.__language) {
			return value;
		}
		this.__language = value;
		this.__dirty = true;
		return value;
	},
	get_script: function() {
		return this.__script;
	},
	set_script: function(value) {
		if(value == this.__script) {
			return value;
		}
		this.__script = value;
		this.__dirty = true;
		return value;
	},
	set_size: function(value) {
		if(value == this.size) {
			return value;
		}
		this.size = value;
		this.__dirty = true;
		return value;
	},
	set_text: function(value) {
		if(value == this.text) {
			return value;
		}
		this.text = value;
		this.__dirty = true;
		return value;
	}
};
TextLayout.prototype.__class__ = TextLayout.prototype.constructor = $hxClasses["openfl._internal.text.TextLayout"] = TextLayout;

// Init



// Statics


TextLayout.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, fields : { glyphs : { SuppressWarnings : ["checkstyle:Dynamic"]}, __handle : { SuppressWarnings : ["checkstyle:Dynamic"]}, __hbBuffer : { SuppressWarnings : ["checkstyle:Dynamic"]}, __hbFont : { SuppressWarnings : ["checkstyle:Dynamic"]}, get_glyphs : { SuppressWarnings : ["checkstyle:Dynamic"]}}}
TextLayout.FT_LOAD_DEFAULT = 0
TextLayout.FT_LOAD_NO_SCALE = 1
TextLayout.FT_LOAD_NO_HINTING = 2
TextLayout.FT_LOAD_RENDER = 4
TextLayout.FT_LOAD_NO_BITMAP = 8
TextLayout.FT_LOAD_VERTICAL_LAYOUT = 16
TextLayout.FT_LOAD_FORCE_AUTOHINT = 32
TextLayout.FT_LOAD_CROP_BITMAP = 64
TextLayout.FT_LOAD_PEDANTIC = 128
TextLayout.FT_LOAD_IGNORE_GLOBAL_ADVANCE_WIDTH = 256
TextLayout.FT_LOAD_NO_RECURSE = 512
TextLayout.FT_LOAD_IGNORE_TRANSFORM = 1024
TextLayout.FT_LOAD_MONOCHROME = 2048
TextLayout.FT_LOAD_LINEAR_DESIGN = 4096
TextLayout.FT_LOAD_NO_AUTOHINT = 8192
TextLayout.FT_LOAD_COLOR = 16384
TextLayout.FT_LOAD_COMPUTE_METRICS = 32768
TextLayout.FT_LOAD_BITMAP_METRICS_ONLY = 65536
TextLayout.FT_LOAD_TARGET_NORMAL = 0
TextLayout.FT_LOAD_TARGET_LIGHT = 0

// Export

exports.default = TextLayout;