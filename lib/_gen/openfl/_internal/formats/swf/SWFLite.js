// Class: openfl._internal.formats.swf.SWFLite

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl__$internal_symbols_SpriteSymbol() {return require("./../../../../openfl/_internal/symbols/SpriteSymbol");}
function js_Boot() {return require("./../../../../js/Boot");}
function openfl__$internal_symbols_BitmapSymbol() {return require("./../../../../openfl/_internal/symbols/BitmapSymbol");}
function openfl_utils_Assets() {return require("./../../../../openfl/utils/Assets");}
function haxe_Serializer() {return require("./../../../../haxe/Serializer");}
function haxe_ds_StringMap() {return require("./../../../../haxe/ds/StringMap");}
function Type() {return require("./../../../../Type");}
function StringTools() {return require("./../../../../StringTools");}
function haxe_Unserializer() {return require("./../../../../haxe/Unserializer");}
function haxe_ds_IntMap() {return require("./../../../../haxe/ds/IntMap");}

// Constructor

var SWFLite = function() {
	this.symbols = new (haxe_ds_IntMap().default)();
	this.symbolsByClassName = new (haxe_ds_StringMap().default)();
}

// Meta

SWFLite.__name__ = "openfl._internal.formats.swf.SWFLite";
SWFLite.__isInterface__ = false;
SWFLite.prototype = {
	createButton: function(className) {
		return null;
	},
	createMovieClip: function(className) {
		if(className == null) {
			className = "";
		}
		if(className == "") {
			return this.root.__createObject(this);
		} else {
			var symbol = this.symbolsByClassName.get(className);
			if(symbol != null) {
				if(((symbol) instanceof (openfl__$internal_symbols_SpriteSymbol().default))) {
					return ((js_Boot().default).__cast(symbol , (openfl__$internal_symbols_SpriteSymbol().default))).__createObject(this);
				}
			}
		}
		return null;
	},
	getBitmapData: function(className) {
		var symbol = this.symbolsByClassName.get(className);
		if(symbol != null) {
			if(((symbol) instanceof (openfl__$internal_symbols_BitmapSymbol().default))) {
				var bitmap = symbol;
				return (openfl_utils_Assets().default).getBitmapData(bitmap.path);
			}
		}
		return null;
	},
	hasSymbol: function(className) {
		return this.symbolsByClassName.exists(className);
	},
	serialize: function() {
		var serializer = new (haxe_Serializer().default)();
		serializer.serialize(this);
		return serializer.toString();
	},
	__init: function() {
		if(this.symbols == null) {
			return;
		}
		if(this.symbolsByClassName == null) {
			this.symbolsByClassName = new (haxe_ds_StringMap().default)();
		}
		var symbol = this.symbols.iterator();
		while(symbol.hasNext()) {
			var symbol1 = symbol.next();
			if(symbol1 == null || symbol1.className == null) {
				continue;
			}
			this.symbolsByClassName.set(symbol1.className,symbol1);
		}
	}
};
SWFLite.prototype.__class__ = SWFLite.prototype.constructor = $hxClasses["openfl._internal.formats.swf.SWFLite"] = SWFLite;

// Init



// Statics

SWFLite.resolveClass = function(name) {
	var value = (Type().default).resolveClass(name);
	if(value == null) {
		value = (Type().default).resolveClass((StringTools().default).replace(name,"openfl._legacy","openfl"));
	}
	if(value == null) {
		value = (Type().default).resolveClass((StringTools().default).replace(name,"openfl._v2","openfl"));
	}
	return value;
}
SWFLite.resolveEnum = function(name) {
	var value = (Type().default).resolveEnum(name);
	if(value == null) {
		value = (Type().default).resolveEnum((StringTools().default).replace(name,"openfl._legacy","openfl"));
	}
	if(value == null) {
		value = (Type().default).resolveEnum((StringTools().default).replace(name,"openfl._v2","openfl"));
	}
	return value;
}
SWFLite.unserialize = function(data) {
	if(data == null) {
		return null;
	}
	var unserializer = new (haxe_Unserializer().default)(data);
	unserializer.setResolver({ resolveClass : SWFLite.resolveClass, resolveEnum : SWFLite.resolveEnum});
	var swfLite = unserializer.unserialize();
	if(swfLite != null) {
		swfLite.__init();
	}
	return swfLite;
}
SWFLite.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, statics : { resolveClass : { SuppressWarnings : ["checkstyle:Dynamic"]}, resolveEnum : { SuppressWarnings : ["checkstyle:Dynamic"]}}}
SWFLite.instances = new (haxe_ds_StringMap().default)()

// Export

exports.default = SWFLite;