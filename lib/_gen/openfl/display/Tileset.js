// Class: openfl.display.Tileset

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}
function openfl_display__$Tileset_TileData() {return require("./../../openfl/display/_Tileset/TileData");}
function openfl_geom_Rectangle() {return require("./../../openfl/geom/Rectangle");}

// Constructor

var Tileset = function(bitmapData,rects) {
	this.__bitmapData = bitmapData;
	this.rectData = (openfl__$Vector_Vector_$Impl_$().default)._new();
	this.__data = [];
	if(rects != null) {
		var _g = 0;
		while(_g < rects.length) {
			var rect = rects[_g];
			++_g;
			this.addRect(rect);
		}
	}
}

// Meta

Tileset.__name__ = "openfl.display.Tileset";
Tileset.__isInterface__ = false;
Tileset.prototype = {
	addRect: function(rect) {
		if(rect == null) {
			return -1;
		}
		(openfl__$Vector_Vector_$Impl_$().default).push(this.rectData,rect.x);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.rectData,rect.y);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.rectData,rect.width);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.rectData,rect.height);
		var tileData = new (openfl_display__$Tileset_TileData().default)(rect);
		tileData.__update(this.__bitmapData);
		this.__data.push(tileData);
		return this.__data.length - 1;
	},
	clone: function() {
		var tileset = new Tileset(this.__bitmapData,null);
		var rect = (openfl_geom_Rectangle().default).__pool.get();
		var _g = 0;
		var _g1 = this.__data;
		while(_g < _g1.length) {
			var tileData = _g1[_g];
			++_g;
			rect.setTo(tileData.x,tileData.y,tileData.width,tileData.height);
			tileset.addRect(rect);
		}
		(openfl_geom_Rectangle().default).__pool.release(rect);
		return tileset;
	},
	hasRect: function(rect) {
		var _g = 0;
		var _g1 = this.__data;
		while(_g < _g1.length) {
			var tileData = _g1[_g];
			++_g;
			if(rect.x == tileData.x && rect.y == tileData.y && rect.width == tileData.width && rect.height == tileData.height) {
				return true;
			}
		}
		return false;
	},
	getRect: function(id) {
		if(id < this.__data.length && id >= 0) {
			return new (openfl_geom_Rectangle().default)(this.__data[id].x,this.__data[id].y,this.__data[id].width,this.__data[id].height);
		}
		return null;
	},
	getRectID: function(rect) {
		var tileData;
		var _g = 0;
		var _g1 = this.__data.length;
		while(_g < _g1) {
			var i = _g++;
			tileData = this.__data[i];
			if(rect.x == tileData.x && rect.y == tileData.y && rect.width == tileData.width && rect.height == tileData.height) {
				return i;
			}
		}
		return null;
	},
	get_bitmapData: function() {
		return this.__bitmapData;
	},
	set_bitmapData: function(value) {
		this.__bitmapData = value;
		var _g = 0;
		var _g1 = this.__data;
		while(_g < _g1.length) {
			var data = _g1[_g];
			++_g;
			data.__update(this.__bitmapData);
		}
		return value;
	},
	get_numRects: function() {
		return this.__data.length;
	}
};
Tileset.prototype.__class__ = Tileset.prototype.constructor = $hxClasses["openfl.display.Tileset"] = Tileset;

// Init

Object.defineProperties(Tileset.prototype,{ bitmapData : { get : function () { return this.get_bitmapData (); }, set : function (v) { return this.set_bitmapData (v); }}, numRects : { get : function () { return this.get_numRects (); }}});

// Statics




// Export

exports.default = Tileset;