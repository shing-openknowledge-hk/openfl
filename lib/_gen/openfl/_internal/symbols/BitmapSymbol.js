// Class: openfl._internal.symbols.BitmapSymbol

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function openfl__$internal_symbols_SWFSymbol() {return require("./../../../openfl/_internal/symbols/SWFSymbol");}
function openfl_display_Bitmap() {return require("./../../../openfl/display/Bitmap");}
function openfl_display_BitmapData() {return require("./../../../openfl/display/BitmapData");}

// Constructor

var BitmapSymbol = function() {
	(openfl__$internal_symbols_SWFSymbol().default).call(this);
}

// Meta

BitmapSymbol.__name__ = "openfl._internal.symbols.BitmapSymbol";
BitmapSymbol.__isInterface__ = false;
BitmapSymbol.__super__ = (openfl__$internal_symbols_SWFSymbol().default);
BitmapSymbol.prototype = $extend((openfl__$internal_symbols_SWFSymbol().default).prototype, {
	__createObject: function(swf) {
		return new (openfl_display_Bitmap().default)((openfl_display_BitmapData().default).fromImage(swf.library.getImage(this.path)),"auto",this.smooth != false);
	}
});
BitmapSymbol.prototype.__class__ = BitmapSymbol.prototype.constructor = $hxClasses["openfl._internal.symbols.BitmapSymbol"] = BitmapSymbol;

// Init



// Statics




// Export

exports.default = BitmapSymbol;