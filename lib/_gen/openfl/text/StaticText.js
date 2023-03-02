// Class: openfl.text.StaticText

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

var StaticText = function() {
	(openfl_display_DisplayObject().default).call(this);
	this.__graphics = new (openfl_display_Graphics().default)(this);
}

// Meta

StaticText.__name__ = "openfl.text.StaticText";
StaticText.__isInterface__ = false;
StaticText.__super__ = (openfl_display_DisplayObject().default);
StaticText.prototype = $extend((openfl_display_DisplayObject().default).prototype, {
	
});
StaticText.prototype.__class__ = StaticText.prototype.constructor = $hxClasses["openfl.text.StaticText"] = StaticText;

// Init



// Statics




// Export

exports.default = StaticText;