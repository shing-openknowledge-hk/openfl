// Class: openfl._internal.symbols.SpriteSymbol

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function openfl__$internal_symbols_SWFSymbol() {return require("./../../../openfl/_internal/symbols/SWFSymbol");}
function openfl_display_MovieClip() {return require("./../../../openfl/display/MovieClip");}
function Type() {return require("./../../../Type");}

// Constructor

var SpriteSymbol = function() {
	(openfl__$internal_symbols_SWFSymbol().default).call(this);
	this.frames = [];
}

// Meta

SpriteSymbol.__name__ = "openfl._internal.symbols.SpriteSymbol";
SpriteSymbol.__isInterface__ = false;
SpriteSymbol.__super__ = (openfl__$internal_symbols_SWFSymbol().default);
SpriteSymbol.prototype = $extend((openfl__$internal_symbols_SWFSymbol().default).prototype, {
	__createObject: function(swf) {
		(openfl_display_MovieClip().default).__initSWF = swf;
		(openfl_display_MovieClip().default).__initSymbol = this;
		var symbolType = null;
		if(this.className != null) {
			symbolType = (Type().default).resolveClass(this.className);
			var tmp = symbolType == null;
		}
		if(symbolType == null && this.baseClassName != null) {
			symbolType = (Type().default).resolveClass(this.baseClassName);
			var tmp1 = symbolType == null;
		}
		var movieClip = null;
		if(symbolType != null) {
			movieClip = (Type().default).createInstance(symbolType,[]);
		} else {
			movieClip = new (openfl_display_MovieClip().default)();
		}
		movieClip.set_scale9Grid(this.scale9Grid);
		return movieClip;
	}
});
SpriteSymbol.prototype.__class__ = SpriteSymbol.prototype.constructor = $hxClasses["openfl._internal.symbols.SpriteSymbol"] = SpriteSymbol;

// Init



// Statics




// Export

exports.default = SpriteSymbol;