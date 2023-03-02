// Class: openfl.display.TileContainer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_ITileContainer() {return require("./../../openfl/display/ITileContainer");}
function openfl_display_Tile() {return require("./../../openfl/display/Tile");}
function HxOverrides() {return require("./../../HxOverrides");}
function openfl_geom_Rectangle() {return require("./../../openfl/geom/Rectangle");}

// Constructor

var TileContainer = function(x,y,scaleX,scaleY,rotation,originX,originY) {
	if(originY == null) {
		originY = 0;
	}
	if(originX == null) {
		originX = 0;
	}
	if(rotation == null) {
		rotation = 0;
	}
	if(scaleY == null) {
		scaleY = 1;
	}
	if(scaleX == null) {
		scaleX = 1;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	(openfl_display_Tile().default).call(this,-1,x,y,scaleX,scaleY,rotation,originX,originY);
	this.__tiles = [];
	this.__length = 0;
}

// Meta

TileContainer.__name__ = "openfl.display.TileContainer";
TileContainer.__isInterface__ = false;
TileContainer.__interfaces__ = [(openfl_display_ITileContainer().default)];
TileContainer.__super__ = (openfl_display_Tile().default);
TileContainer.prototype = $extend((openfl_display_Tile().default).prototype, {
	addTile: function(tile) {
		if(tile == null) {
			return null;
		}
		if(tile.parent == this) {
			(HxOverrides().default).remove(this.__tiles,tile);
			this.__length--;
		}
		this.__tiles[this.get_numTiles()] = tile;
		tile.parent = this;
		this.__length++;
		this.__setRenderDirty();
		return tile;
	},
	addTileAt: function(tile,index) {
		if(tile == null) {
			return null;
		}
		if(tile.parent == this) {
			(HxOverrides().default).remove(this.__tiles,tile);
			this.__length--;
		}
		this.__tiles.splice(index,0,tile);
		tile.parent = this;
		this.__length++;
		this.__setRenderDirty();
		return tile;
	},
	addTiles: function(tiles) {
		var _g = 0;
		while(_g < tiles.length) {
			var tile = tiles[_g];
			++_g;
			this.addTile(tile);
		}
		return tiles;
	},
	clone: function() {
		var group = new TileContainer();
		var _g = 0;
		var _g1 = this.__tiles;
		while(_g < _g1.length) {
			var tile = _g1[_g];
			++_g;
			group.addTile(tile.clone());
		}
		return group;
	},
	contains: function(tile) {
		return this.__tiles.indexOf(tile) > -1;
	},
	getBounds: function(targetCoordinateSpace) {
		var result = new (openfl_geom_Rectangle().default)();
		var rect = null;
		var _g = 0;
		var _g1 = this.__tiles;
		while(_g < _g1.length) {
			var tile = _g1[_g];
			++_g;
			rect = tile.getBounds(targetCoordinateSpace);
			result.__expand(rect.x,rect.y,rect.width,rect.height);
		}
		return result;
	},
	getTileAt: function(index) {
		if(index >= 0 && index < this.get_numTiles()) {
			return this.__tiles[index];
		}
		return null;
	},
	getTileIndex: function(tile) {
		var _g = 0;
		var _g1 = this.__tiles.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.__tiles[i] == tile) {
				return i;
			}
		}
		return -1;
	},
	removeTile: function(tile) {
		if(tile != null && tile.parent == this) {
			tile.parent = null;
			(HxOverrides().default).remove(this.__tiles,tile);
			this.__length--;
			this.__setRenderDirty();
		}
		return tile;
	},
	removeTileAt: function(index) {
		if(index >= 0 && index < this.get_numTiles()) {
			return this.removeTile(this.__tiles[index]);
		}
		return null;
	},
	removeTiles: function(beginIndex,endIndex) {
		if(endIndex == null) {
			endIndex = 2147483647;
		}
		if(beginIndex == null) {
			beginIndex = 0;
		}
		if(beginIndex < 0) {
			beginIndex = 0;
		}
		if(endIndex > this.__tiles.length - 1) {
			endIndex = this.__tiles.length - 1;
		}
		var removed = this.__tiles.splice(beginIndex,endIndex - beginIndex + 1);
		var _g = 0;
		while(_g < removed.length) {
			var tile = removed[_g];
			++_g;
			tile.parent = null;
		}
		this.__length = this.__tiles.length;
		this.__setRenderDirty();
	},
	setTileIndex: function(tile,index) {
		if(index >= 0 && index <= this.get_numTiles() && tile.parent == this) {
			(HxOverrides().default).remove(this.__tiles,tile);
			this.__tiles.splice(index,0,tile);
			this.__setRenderDirty();
		}
	},
	sortTiles: function(compareFunction) {
		this.__tiles.sort(compareFunction);
		this.__setRenderDirty();
	},
	swapTiles: function(tile1,tile2) {
		if(tile1.parent == this && tile2.parent == this) {
			var index1 = this.__tiles.indexOf(tile1);
			var index2 = this.__tiles.indexOf(tile2);
			this.__tiles[index1] = tile2;
			this.__tiles[index2] = tile1;
			this.__setRenderDirty();
		}
	},
	swapTilesAt: function(index1,index2) {
		var swap = this.__tiles[index1];
		this.__tiles[index1] = this.__tiles[index2];
		this.__tiles[index2] = swap;
		swap = null;
		this.__setRenderDirty();
	},
	get_numTiles: function() {
		return this.__length;
	},
	get_height: function() {
		var result = (openfl_geom_Rectangle().default).__pool.get();
		var rect = null;
		var _g = 0;
		var _g1 = this.__tiles;
		while(_g < _g1.length) {
			var tile = _g1[_g];
			++_g;
			rect = tile.getBounds(this);
			result.__expand(rect.x,rect.y,rect.width,rect.height);
		}
		this.__getBounds(result,this.get_matrix());
		var h = result.height;
		(openfl_geom_Rectangle().default).__pool.release(result);
		return h;
	},
	set_height: function(value) {
		var result = (openfl_geom_Rectangle().default).__pool.get();
		var rect = null;
		var _g = 0;
		var _g1 = this.__tiles;
		while(_g < _g1.length) {
			var tile = _g1[_g];
			++_g;
			rect = tile.getBounds(this);
			result.__expand(rect.x,rect.y,rect.width,rect.height);
		}
		if(result.height != 0) {
			this.set_scaleY(value / result.height);
		}
		(openfl_geom_Rectangle().default).__pool.release(result);
		return value;
	},
	get_width: function() {
		var result = (openfl_geom_Rectangle().default).__pool.get();
		var rect = null;
		var _g = 0;
		var _g1 = this.__tiles;
		while(_g < _g1.length) {
			var tile = _g1[_g];
			++_g;
			rect = tile.getBounds(this);
			result.__expand(rect.x,rect.y,rect.width,rect.height);
		}
		this.__getBounds(result,this.get_matrix());
		var w = result.width;
		(openfl_geom_Rectangle().default).__pool.release(result);
		return w;
	},
	set_width: function(value) {
		var result = (openfl_geom_Rectangle().default).__pool.get();
		var rect = null;
		var _g = 0;
		var _g1 = this.__tiles;
		while(_g < _g1.length) {
			var tile = _g1[_g];
			++_g;
			rect = tile.getBounds(this);
			result.__expand(rect.x,rect.y,rect.width,rect.height);
		}
		if(result.width != 0) {
			this.set_scaleX(value / result.width);
		}
		(openfl_geom_Rectangle().default).__pool.release(result);
		return value;
	}
});
TileContainer.prototype.__class__ = TileContainer.prototype.constructor = $hxClasses["openfl.display.TileContainer"] = TileContainer;

// Init

Object.defineProperty(TileContainer.prototype,"numTiles",{ get : function () { return this.get_numTiles (); }});

// Statics




// Export

exports.default = TileContainer;