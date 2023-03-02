// Class: openfl._internal.renderer.flash.FlashTilemap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl_geom_ColorTransform() {return require("./../../../../openfl/geom/ColorTransform");}
function openfl_display_Bitmap() {return require("./../../../../openfl/display/Bitmap");}
function openfl_geom_Point() {return require("./../../../../openfl/geom/Point");}
function openfl_geom_Rectangle() {return require("./../../../../openfl/geom/Rectangle");}

// Constructor

var FlashTilemap = function(){}

// Meta

FlashTilemap.__name__ = "openfl._internal.renderer.flash.FlashTilemap";
FlashTilemap.__isInterface__ = false;
FlashTilemap.prototype = {
	
};
FlashTilemap.prototype.__class__ = FlashTilemap.prototype.constructor = $hxClasses["openfl._internal.renderer.flash.FlashTilemap"] = FlashTilemap;

// Init



// Statics

FlashTilemap.render = function(tilemap) {
}
FlashTilemap.renderTileContainer = function(group,bitmapData,parentTransform,defaultTileset,smooth,alphaEnabled,worldAlpha,colorTransformEnabled,defaultColorTransform,blendModeEnabled,defaultBlendMode,cacheBitmapData) {
}
FlashTilemap.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}
FlashTilemap.alphaColorTransform = new (openfl_geom_ColorTransform().default)()
FlashTilemap.bitmap = new (openfl_display_Bitmap().default)()
FlashTilemap.destPoint = new (openfl_geom_Point().default)()
FlashTilemap.sourceRect = new (openfl_geom_Rectangle().default)()

// Export

exports.default = FlashTilemap;