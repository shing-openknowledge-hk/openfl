// Class: openfl.display.Tile

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl_geom_Rectangle() {return require("./../../openfl/geom/Rectangle");}
function openfl_geom_Matrix() {return require("./../../openfl/geom/Matrix");}
function openfl_display_Tilemap() {return require("./../../openfl/display/Tilemap");}

// Constructor

var Tile = function(id,x,y,scaleX,scaleY,rotation,originX,originY) {
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
	if(id == null) {
		id = 0;
	}
	this.__id = id;
	this.__matrix = new (openfl_geom_Matrix().default)();
	if(x != 0) {
		this.set_x(x);
	}
	if(y != 0) {
		this.set_y(y);
	}
	if(scaleX != 1) {
		this.set_scaleX(scaleX);
	}
	if(scaleY != 1) {
		this.set_scaleY(scaleY);
	}
	if(rotation != 0) {
		this.set_rotation(rotation);
	}
	this.__dirty = true;
	this.__length = 0;
	this.__originX = originX;
	this.__originY = originY;
	this.__alpha = 1;
	this.__blendMode = null;
	this.__visible = true;
}

// Meta

Tile.__name__ = "openfl.display.Tile";
Tile.__isInterface__ = false;
Tile.prototype = {
	clone: function() {
		var tile = new Tile(this.__id);
		tile.__alpha = this.__alpha;
		tile.__blendMode = this.__blendMode;
		tile.__originX = this.__originX;
		tile.__originY = this.__originY;
		if(this.__rect != null) {
			tile.__rect = this.__rect.clone();
		}
		tile.set_matrix(this.__matrix.clone());
		tile.__shader = this.__shader;
		tile.set_tileset(this.__tileset);
		if(this.__colorTransform != null) {
			tile.__colorTransform = this.__colorTransform.__clone();
		}
		return tile;
	},
	getBounds: function(targetCoordinateSpace) {
		var result = new (openfl_geom_Rectangle().default)();
		this.__findTileRect(result);
		var matrix = (openfl_geom_Matrix().default).__pool.get();
		if(targetCoordinateSpace != null && targetCoordinateSpace != this) {
			matrix.copyFrom(this.__getWorldTransform());
			var targetMatrix = (openfl_geom_Matrix().default).__pool.get();
			targetMatrix.copyFrom(targetCoordinateSpace.__getWorldTransform());
			targetMatrix.invert();
			matrix.concat(targetMatrix);
			(openfl_geom_Matrix().default).__pool.release(targetMatrix);
		} else {
			matrix.identity();
		}
		this.__getBounds(result,matrix);
		(openfl_geom_Matrix().default).__pool.release(matrix);
		return result;
	},
	__getBounds: function(result,matrix) {
		result.__transform(result,matrix);
	},
	hitTestTile: function(obj) {
		if(obj != null && obj.parent != null && this.parent != null) {
			var currentBounds = this.getBounds(this);
			var targetBounds = obj.getBounds(this);
			return currentBounds.intersects(targetBounds);
		}
		return false;
	},
	invalidate: function() {
		this.__setRenderDirty();
	},
	__findTileRect: function(result) {
		if(this.get_tileset() == null) {
			if(this.parent != null) {
				var parentTileset = this.parent.__findTileset();
				if(parentTileset == null) {
					result.setTo(0,0,0,0);
				} else {
					var _g = parentTileset.getRect(this.get_id());
					if(_g == null) {
						result.setTo(0,0,0,0);
					} else {
						var not_null = _g;
						result.copyFrom(not_null);
					}
				}
			} else {
				result.setTo(0,0,0,0);
			}
		} else {
			result.copyFrom(this.get_tileset().getRect(this.get_id()));
		}
		result.x = 0;
		result.y = 0;
	},
	__findTileset: function() {
		if(this.get_tileset() != null) {
			return this.get_tileset();
		}
		if(((this.parent) instanceof (openfl_display_Tilemap().default))) {
			return this.parent.get_tileset();
		}
		if(this.parent == null) {
			return null;
		}
		return this.parent.__findTileset();
	},
	__getWorldTransform: function() {
		var retval = this.get_matrix().clone();
		if(this.parent != null) {
			retval.concat(this.parent.__getWorldTransform());
		}
		return retval;
	},
	__setRenderDirty: function() {
		if(!this.__dirty) {
			this.__dirty = true;
			if(this.parent != null) {
				this.parent.__setRenderDirty();
			}
		}
	},
	get_alpha: function() {
		return this.__alpha;
	},
	set_alpha: function(value) {
		if(value != this.__alpha) {
			this.__alpha = value;
			this.__setRenderDirty();
		}
		return value;
	},
	get_blendMode: function() {
		return this.__blendMode;
	},
	set_blendMode: function(value) {
		if(value != this.__blendMode) {
			this.__blendMode = value;
			this.__setRenderDirty();
		}
		return value;
	},
	get_colorTransform: function() {
		return this.__colorTransform;
	},
	set_colorTransform: function(value) {
		if(value != this.__colorTransform) {
			this.__colorTransform = value;
			this.__setRenderDirty();
		}
		return value;
	},
	get_height: function() {
		var result = (openfl_geom_Rectangle().default).__pool.get();
		this.__findTileRect(result);
		this.__getBounds(result,this.get_matrix());
		var h = result.height;
		(openfl_geom_Rectangle().default).__pool.release(result);
		return h;
	},
	set_height: function(value) {
		var result = (openfl_geom_Rectangle().default).__pool.get();
		this.__findTileRect(result);
		if(result.height != 0) {
			this.set_scaleY(value / result.height);
		}
		(openfl_geom_Rectangle().default).__pool.release(result);
		return value;
	},
	get_id: function() {
		return this.__id;
	},
	set_id: function(value) {
		if(value != this.__id) {
			this.__id = value;
			this.__setRenderDirty();
		}
		return value;
	},
	get_matrix: function() {
		return this.__matrix;
	},
	set_matrix: function(value) {
		if(value != this.__matrix) {
			this.__rotation = null;
			this.__scaleX = null;
			this.__scaleY = null;
			this.__matrix = value;
			this.__setRenderDirty();
		}
		return value;
	},
	get_originX: function() {
		return this.__originX;
	},
	set_originX: function(value) {
		if(value != this.__originX) {
			this.__originX = value;
			this.__setRenderDirty();
		}
		return value;
	},
	get_originY: function() {
		return this.__originY;
	},
	set_originY: function(value) {
		if(value != this.__originY) {
			this.__originY = value;
			this.__setRenderDirty();
		}
		return value;
	},
	get_rect: function() {
		return this.__rect;
	},
	set_rect: function(value) {
		if(value != this.__rect) {
			this.__rect = value;
			this.__setRenderDirty();
		}
		return value;
	},
	get_rotation: function() {
		if(this.__rotation == null) {
			if(this.__matrix.b == 0 && this.__matrix.c == 0) {
				this.__rotation = 0;
				this.__rotationSine = 0;
				this.__rotationCosine = 1;
			} else {
				var radians = Math.atan2(this.__matrix.d,this.__matrix.c) - Math.PI / 2;
				this.__rotation = radians * (180 / Math.PI);
				this.__rotationSine = Math.sin(radians);
				this.__rotationCosine = Math.cos(radians);
			}
		}
		return this.__rotation;
	},
	set_rotation: function(value) {
		if(value != this.__rotation) {
			this.__rotation = value;
			var radians = value * (Math.PI / 180);
			this.__rotationSine = Math.sin(radians);
			this.__rotationCosine = Math.cos(radians);
			var __scaleX = this.get_scaleX();
			var __scaleY = this.get_scaleY();
			this.__matrix.a = this.__rotationCosine * __scaleX;
			this.__matrix.b = this.__rotationSine * __scaleX;
			this.__matrix.c = -this.__rotationSine * __scaleY;
			this.__matrix.d = this.__rotationCosine * __scaleY;
			this.__setRenderDirty();
		}
		return value;
	},
	get_scaleX: function() {
		if(this.__scaleX == null) {
			if(this.get_matrix().b == 0) {
				this.__scaleX = this.__matrix.a;
			} else {
				this.__scaleX = Math.sqrt(this.__matrix.a * this.__matrix.a + this.__matrix.b * this.__matrix.b);
			}
		}
		return this.__scaleX;
	},
	set_scaleX: function(value) {
		if(value != this.__scaleX) {
			this.__scaleX = value;
			if(this.__matrix.b == 0) {
				this.__matrix.a = value;
			} else {
				var rotation = this.get_rotation();
				var a = this.__rotationCosine * value;
				var b = this.__rotationSine * value;
				this.__matrix.a = a;
				this.__matrix.b = b;
			}
			this.__setRenderDirty();
		}
		return value;
	},
	get_scaleY: function() {
		if(this.__scaleY == null) {
			if(this.__matrix.c == 0) {
				this.__scaleY = this.get_matrix().d;
			} else {
				this.__scaleY = Math.sqrt(this.__matrix.c * this.__matrix.c + this.__matrix.d * this.__matrix.d);
			}
		}
		return this.__scaleY;
	},
	set_scaleY: function(value) {
		if(value != this.__scaleY) {
			this.__scaleY = value;
			if(this.__matrix.c == 0) {
				this.__matrix.d = value;
			} else {
				var rotation = this.get_rotation();
				var c = -this.__rotationSine * value;
				var d = this.__rotationCosine * value;
				this.__matrix.c = c;
				this.__matrix.d = d;
			}
			this.__setRenderDirty();
		}
		return value;
	},
	get_shader: function() {
		return this.__shader;
	},
	set_shader: function(value) {
		if(value != this.__shader) {
			this.__shader = value;
			this.__setRenderDirty();
		}
		return value;
	},
	get_tileset: function() {
		return this.__tileset;
	},
	set_tileset: function(value) {
		if(value != this.__tileset) {
			this.__tileset = value;
			this.__setRenderDirty();
		}
		return value;
	},
	get_visible: function() {
		return this.__visible;
	},
	set_visible: function(value) {
		if(value != this.__visible) {
			this.__visible = value;
			this.__setRenderDirty();
		}
		return value;
	},
	get_width: function() {
		var result = (openfl_geom_Rectangle().default).__pool.get();
		this.__findTileRect(result);
		this.__getBounds(result,this.get_matrix());
		var w = result.width;
		(openfl_geom_Rectangle().default).__pool.release(result);
		return w;
	},
	set_width: function(value) {
		var result = (openfl_geom_Rectangle().default).__pool.get();
		this.__findTileRect(result);
		if(result.width != 0) {
			this.set_scaleX(value / result.width);
		}
		(openfl_geom_Rectangle().default).__pool.release(result);
		return value;
	},
	get_x: function() {
		return this.__matrix.tx;
	},
	set_x: function(value) {
		if(value != this.__matrix.tx) {
			this.__matrix.tx = value;
			this.__setRenderDirty();
		}
		return value;
	},
	get_y: function() {
		return this.__matrix.ty;
	},
	set_y: function(value) {
		if(value != this.__matrix.ty) {
			this.__matrix.ty = value;
			this.__setRenderDirty();
		}
		return value;
	}
};
Tile.prototype.__class__ = Tile.prototype.constructor = $hxClasses["openfl.display.Tile"] = Tile;

// Init

Object.defineProperties(Tile.prototype,{ alpha : { get : function () { return this.get_alpha (); }, set : function (v) { return this.set_alpha (v); }}, blendMode : { get : function () { return this.get_blendMode (); }, set : function (v) { return this.set_blendMode (v); }}, colorTransform : { get : function () { return this.get_colorTransform (); }, set : function (v) { return this.set_colorTransform (v); }}, id : { get : function () { return this.get_id (); }, set : function (v) { return this.set_id (v); }}, matrix : { get : function () { return this.get_matrix (); }, set : function (v) { return this.set_matrix (v); }}, originX : { get : function () { return this.get_originX (); }, set : function (v) { return this.set_originX (v); }}, originY : { get : function () { return this.get_originY (); }, set : function (v) { return this.set_originY (v); }}, rect : { get : function () { return this.get_rect (); }, set : function (v) { return this.set_rect (v); }}, rotation : { get : function () { return this.get_rotation (); }, set : function (v) { return this.set_rotation (v); }}, scaleX : { get : function () { return this.get_scaleX (); }, set : function (v) { return this.set_scaleX (v); }}, scaleY : { get : function () { return this.get_scaleY (); }, set : function (v) { return this.set_scaleY (v); }}, shader : { get : function () { return this.get_shader (); }, set : function (v) { return this.set_shader (v); }}, tileset : { get : function () { return this.get_tileset (); }, set : function (v) { return this.set_tileset (v); }}, visible : { get : function () { return this.get_visible (); }, set : function (v) { return this.set_visible (v); }}, x : { get : function () { return this.get_x (); }, set : function (v) { return this.set_x (v); }}, y : { get : function () { return this.get_y (); }, set : function (v) { return this.set_y (v); }}});

// Statics


Tile.__meta__ = { fields : { data : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = Tile;