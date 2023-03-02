// Class: openfl.text.TextFormat

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var TextFormat = function(font,size,color,bold,italic,underline,url,target,align,leftMargin,rightMargin,indent,leading) {
	this.font = font;
	this.size = size;
	this.color = color;
	this.bold = bold;
	this.italic = italic;
	this.underline = underline;
	this.url = url;
	this.target = target;
	this.align = align;
	this.leftMargin = leftMargin;
	this.rightMargin = rightMargin;
	this.indent = indent;
	this.leading = leading;
}

// Meta

TextFormat.__name__ = "openfl.text.TextFormat";
TextFormat.__isInterface__ = false;
TextFormat.prototype = {
	clone: function() {
		var newFormat = new TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		newFormat.__ascent = this.__ascent;
		newFormat.__descent = this.__descent;
		return newFormat;
	},
	__merge: function(format) {
		if(format.font != null) {
			this.font = format.font;
		}
		if(format.size != null) {
			this.size = format.size;
		}
		if(format.color != null) {
			this.color = format.color;
		}
		if(format.bold != null) {
			this.bold = format.bold;
		}
		if(format.italic != null) {
			this.italic = format.italic;
		}
		if(format.underline != null) {
			this.underline = format.underline;
		}
		if(format.url != null) {
			this.url = format.url;
		}
		if(format.target != null) {
			this.target = format.target;
		}
		if(format.align != null) {
			this.align = format.align;
		}
		if(format.leftMargin != null) {
			this.leftMargin = format.leftMargin;
		}
		if(format.rightMargin != null) {
			this.rightMargin = format.rightMargin;
		}
		if(format.indent != null) {
			this.indent = format.indent;
		}
		if(format.leading != null) {
			this.leading = format.leading;
		}
		if(format.blockIndent != null) {
			this.blockIndent = format.blockIndent;
		}
		if(format.bullet != null) {
			this.bullet = format.bullet;
		}
		if(format.kerning != null) {
			this.kerning = format.kerning;
		}
		if(format.letterSpacing != null) {
			this.letterSpacing = format.letterSpacing;
		}
		if(format.tabStops != null) {
			this.tabStops = format.tabStops;
		}
		if(format.__ascent != null) {
			this.__ascent = format.__ascent;
		}
		if(format.__descent != null) {
			this.__descent = format.__descent;
		}
	}
};
TextFormat.prototype.__class__ = TextFormat.prototype.constructor = $hxClasses["openfl.text.TextFormat"] = TextFormat;

// Init



// Statics


TextFormat.__meta__ = { fields : { clone : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}

// Export

exports.default = TextFormat;