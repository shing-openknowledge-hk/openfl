// Class: openfl.text.Font

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function lime_text_Font() {return require("./../../lime/text/Font");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function lime_app_Future() {return require("./../../lime/app/Future");}
function Type() {return require("./../../Type");}
function js_Boot() {return require("./../../js/Boot");}

// Constructor

var Font = function(name) {
	(lime_text_Font().default).call(this,name);
}

// Meta

Font.__name__ = "openfl.text.Font";
Font.__isInterface__ = false;
Font.__super__ = (lime_text_Font().default);
Font.prototype = $extend((lime_text_Font().default).prototype, {
	__fromLimeFont: function(font) {
		this.__copyFrom(font);
	},
	__initialize: function() {
		return this.__initialized;
	},
	get_fontName: function() {
		return this.name;
	},
	set_fontName: function(value) {
		return this.name = value;
	}
});
Font.prototype.__class__ = Font.prototype.constructor = $hxClasses["openfl.text.Font"] = Font;

// Init

Object.defineProperty(Font.prototype,"fontName",{ get : function () { return this.get_fontName (); }, set : function (v) { return this.set_fontName (v); }});

// Statics

Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) {
		enumerateDeviceFonts = false;
	}
	return Font.__registeredFonts;
}
Font.fromBytes = function(bytes) {
	var font = new Font();
	font.__fromBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toBytes(bytes));
	return font;
}
Font.fromFile = function(path) {
	var font = new Font();
	font.__fromFile(path);
	return font;
}
Font.loadFromBytes = function(bytes) {
	return (lime_text_Font().default).loadFromBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toBytes(bytes)).then(function(limeFont) {
		var font = new Font();
		font.__fromLimeFont(limeFont);
		return (lime_app_Future().default).withValue(font);
	});
}
Font.loadFromFile = function(path) {
	return (lime_text_Font().default).loadFromFile(path).then(function(limeFont) {
		var font = new Font();
		font.__fromLimeFont(limeFont);
		return (lime_app_Future().default).withValue(font);
	});
}
Font.loadFromName = function(path) {
	return (lime_text_Font().default).loadFromName(path).then(function(limeFont) {
		var font = new Font();
		font.__fromLimeFont(limeFont);
		return (lime_app_Future().default).withValue(font);
	});
}
Font.registerFont = function(font) {
	var instance = null;
	if((Type().default).getClass(font) == null) {
		instance = (js_Boot().default).__cast((Type().default).createInstance(font,[]) , Font);
	} else {
		instance = (js_Boot().default).__cast(font , Font);
	}
	if(instance != null) {
		Font.__registeredFonts.push(instance);
		Font.__fontByName.set(instance.get_fontName(),instance);
	}
}
Font.__fontByName = new (haxe_ds_StringMap().default)()
Font.__registeredFonts = []

// Export

exports.default = Font;