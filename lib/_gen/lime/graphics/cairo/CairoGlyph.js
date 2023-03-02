// Class: lime.graphics.cairo.CairoGlyph

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var CairoGlyph = function(index,x,y) {
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.index = index;
	this.x = x;
	this.y = y;
}

// Meta

CairoGlyph.__name__ = "lime.graphics.cairo.CairoGlyph";
CairoGlyph.__isInterface__ = false;
CairoGlyph.prototype = {
	
};
CairoGlyph.prototype.__class__ = CairoGlyph.prototype.constructor = $hxClasses["lime.graphics.cairo.CairoGlyph"] = CairoGlyph;

// Init



// Statics




// Export

exports.default = CairoGlyph;