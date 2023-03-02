// Class: openfl._internal.symbols.DynamicTextSymbol

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function openfl__$internal_symbols_SWFSymbol() {return require("./../../../openfl/_internal/symbols/SWFSymbol");}
function openfl_text_TextField() {return require("./../../../openfl/text/TextField");}

// Constructor

var DynamicTextSymbol = function() {
	(openfl__$internal_symbols_SWFSymbol().default).call(this);
}

// Meta

DynamicTextSymbol.__name__ = "openfl._internal.symbols.DynamicTextSymbol";
DynamicTextSymbol.__isInterface__ = false;
DynamicTextSymbol.__super__ = (openfl__$internal_symbols_SWFSymbol().default);
DynamicTextSymbol.prototype = $extend((openfl__$internal_symbols_SWFSymbol().default).prototype, {
	__createObject: function(swf) {
		var textField = new (openfl_text_TextField().default)();
		textField.__fromSymbol(swf,this);
		return textField;
	}
});
DynamicTextSymbol.prototype.__class__ = DynamicTextSymbol.prototype.constructor = $hxClasses["openfl._internal.symbols.DynamicTextSymbol"] = DynamicTextSymbol;

// Init



// Statics




// Export

exports.default = DynamicTextSymbol;