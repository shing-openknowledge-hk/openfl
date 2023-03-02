// Class: openfl.display._Tileset.TileData

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function Std() {return require("./../../../Std");}

// Constructor

var TileData = function(rect) {
	if(rect != null) {
		this.x = (Std().default).int(rect.x);
		this.y = (Std().default).int(rect.y);
		this.width = (Std().default).int(rect.width);
		this.height = (Std().default).int(rect.height);
	}
}

// Meta

TileData.__name__ = "openfl.display._Tileset.TileData";
TileData.__isInterface__ = false;
TileData.prototype = {
	__update: function(bitmapData) {
		if(bitmapData != null) {
			var bitmapWidth = bitmapData.width;
			var bitmapHeight = bitmapData.height;
			this.__uvX = this.x / bitmapWidth;
			this.__uvY = this.y / bitmapHeight;
			this.__uvWidth = (this.x + this.width) / bitmapWidth;
			this.__uvHeight = (this.y + this.height) / bitmapHeight;
		}
	}
};
TileData.prototype.__class__ = TileData.prototype.constructor = $hxClasses["openfl.display._Tileset.TileData"] = TileData;

// Init



// Statics


TileData.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = TileData;