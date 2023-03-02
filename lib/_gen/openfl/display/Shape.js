// Class: openfl.display.Shape

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_DisplayObject() {return require("./../../openfl/display/DisplayObject");}
function openfl_display_Graphics() {return require("./../../openfl/display/Graphics");}

// Constructor

var Shape = function() {
	(openfl_display_DisplayObject().default).call(this);
}

// Meta

Shape.__name__ = "openfl.display.Shape";
Shape.__isInterface__ = false;
Shape.__super__ = (openfl_display_DisplayObject().default);
Shape.prototype = $extend((openfl_display_DisplayObject().default).prototype, {
	get_graphics: function() {
		if(this.__graphics == null) {
			this.__graphics = new (openfl_display_Graphics().default)(this);
		}
		return this.__graphics;
	}
});
Shape.prototype.__class__ = Shape.prototype.constructor = $hxClasses["openfl.display.Shape"] = Shape;

// Init

Object.defineProperty(Shape.prototype,"graphics",{ get : function () { return this.get_graphics (); }});

// Statics




// Export

exports.default = Shape;