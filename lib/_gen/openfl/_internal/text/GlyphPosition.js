// Class: openfl._internal.text.GlyphPosition

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_math_Vector2() {return require("./../../../lime/math/Vector2");}

// Constructor

var GlyphPosition = function(glyph,advance,offset) {
	this.glyph = glyph;
	this.advance = advance;
	if(offset != null) {
		this.offset = offset;
	} else {
		this.offset = new (lime_math_Vector2().default)();
	}
}

// Meta

GlyphPosition.__name__ = "openfl._internal.text.GlyphPosition";
GlyphPosition.__isInterface__ = false;
GlyphPosition.prototype = {
	
};
GlyphPosition.prototype.__class__ = GlyphPosition.prototype.constructor = $hxClasses["openfl._internal.text.GlyphPosition"] = GlyphPosition;

// Init



// Statics


GlyphPosition.__meta__ = { obj : { SuppressWarnings : [["checkstyle:FieldDocComment","checkstyle:Dynamic"]]}}

// Export

exports.default = GlyphPosition;