// Class: openfl._internal.symbols.ButtonSymbol

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function openfl__$internal_symbols_SWFSymbol() {return require("./../../../openfl/_internal/symbols/SWFSymbol");}
function openfl_display_SimpleButton() {return require("./../../../openfl/display/SimpleButton");}
function Type() {return require("./../../../Type");}

// Constructor

var ButtonSymbol = function() {
	(openfl__$internal_symbols_SWFSymbol().default).call(this);
}

// Meta

ButtonSymbol.__name__ = "openfl._internal.symbols.ButtonSymbol";
ButtonSymbol.__isInterface__ = false;
ButtonSymbol.__super__ = (openfl__$internal_symbols_SWFSymbol().default);
ButtonSymbol.prototype = $extend((openfl__$internal_symbols_SWFSymbol().default).prototype, {
	__createObject: function(swf) {
		var simpleButton = null;
		(openfl_display_SimpleButton().default).__initSWF = swf;
		(openfl_display_SimpleButton().default).__initSymbol = this;
		if(this.className != null) {
			var symbolType = (Type().default).resolveClass(this.className);
			if(symbolType != null) {
				simpleButton = (Type().default).createInstance(symbolType,[]);
			}
		}
		if(simpleButton == null) {
			simpleButton = new (openfl_display_SimpleButton().default)();
		}
		return simpleButton;
	}
});
ButtonSymbol.prototype.__class__ = ButtonSymbol.prototype.constructor = $hxClasses["openfl._internal.symbols.ButtonSymbol"] = ButtonSymbol;

// Init



// Statics




// Export

exports.default = ButtonSymbol;