// Class: openfl.geom.Rectangle

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_math_Rectangle() {return require("./../../lime/math/Rectangle");}
function openfl_geom_Point() {return require("./../../openfl/geom/Point");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}

// Constructor

var Rectangle = function(x,y,width,height) {
	if(height == null) {
		height = 0;
	}
	if(width == null) {
		width = 0;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

// Meta

Rectangle.__name__ = "openfl.geom.Rectangle";
Rectangle.__isInterface__ = false;
Rectangle.prototype = {
	clone: function() {
		return new Rectangle(this.x,this.y,this.width,this.height);
	},
	contains: function(x,y) {
		if(x >= this.x && y >= this.y && x < this.get_right()) {
			return y < this.get_bottom();
		} else {
			return false;
		}
	},
	containsPoint: function(point) {
		return this.contains(point.x,point.y);
	},
	containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) {
			if(rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right()) {
				return rect.get_bottom() < this.get_bottom();
			} else {
				return false;
			}
		} else if(rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right()) {
			return rect.get_bottom() <= this.get_bottom();
		} else {
			return false;
		}
	},
	copyFrom: function(sourceRect) {
		this.x = sourceRect.x;
		this.y = sourceRect.y;
		this.width = sourceRect.width;
		this.height = sourceRect.height;
	},
	equals: function(toCompare) {
		if(toCompare == this) {
			return true;
		} else if(toCompare != null && this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width) {
			return this.height == toCompare.height;
		} else {
			return false;
		}
	},
	inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	},
	inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	},
	intersection: function(toIntersect) {
		var x0 = this.x < toIntersect.x ? toIntersect.x : this.x;
		var x1 = this.get_right() > toIntersect.get_right() ? toIntersect.get_right() : this.get_right();
		if(x1 <= x0) {
			return new Rectangle();
		}
		var y0 = this.y < toIntersect.y ? toIntersect.y : this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom() ? toIntersect.get_bottom() : this.get_bottom();
		if(y1 <= y0) {
			return new Rectangle();
		}
		return new Rectangle(x0,y0,x1 - x0,y1 - y0);
	},
	intersects: function(toIntersect) {
		var x0 = this.x < toIntersect.x ? toIntersect.x : this.x;
		var x1 = this.get_right() > toIntersect.get_right() ? toIntersect.get_right() : this.get_right();
		if(x1 <= x0) {
			return false;
		}
		var y0 = this.y < toIntersect.y ? toIntersect.y : this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom() ? toIntersect.get_bottom() : this.get_bottom();
		return y1 > y0;
	},
	isEmpty: function() {
		if(!(this.width <= 0)) {
			return this.height <= 0;
		} else {
			return true;
		}
	},
	offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	},
	offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	},
	setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	},
	setTo: function(xa,ya,widtha,heighta) {
		this.x = xa;
		this.y = ya;
		this.width = widtha;
		this.height = heighta;
	},
	toString: function() {
		return "(x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")";
	},
	union: function(toUnion) {
		if(this.width == 0 || this.height == 0) {
			return toUnion.clone();
		} else if(toUnion.width == 0 || toUnion.height == 0) {
			return this.clone();
		}
		var x0 = this.x > toUnion.x ? toUnion.x : this.x;
		var x1 = this.get_right() < toUnion.get_right() ? toUnion.get_right() : this.get_right();
		var y0 = this.y > toUnion.y ? toUnion.y : this.y;
		var y1 = this.get_bottom() < toUnion.get_bottom() ? toUnion.get_bottom() : this.get_bottom();
		return new Rectangle(x0,y0,x1 - x0,y1 - y0);
	},
	__contract: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) {
			return;
		}
		var offsetX = 0.0;
		var offsetY = 0.0;
		var offsetRight = 0.0;
		var offsetBottom = 0.0;
		if(this.x < x) {
			offsetX = x - this.x;
		}
		if(this.y < y) {
			offsetY = y - this.y;
		}
		if(this.get_right() > x + width) {
			offsetRight = x + width - this.get_right();
		}
		if(this.get_bottom() > y + height) {
			offsetBottom = y + height - this.get_bottom();
		}
		this.x += offsetX;
		this.y += offsetY;
		this.width += offsetRight - offsetX;
		this.height += offsetBottom - offsetY;
	},
	__expand: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			return;
		}
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x > x) {
			this.x = x;
			this.width = cacheRight - x;
		}
		if(this.y > y) {
			this.y = y;
			this.height = cacheBottom - y;
		}
		if(cacheRight < x + width) {
			this.width = x + width - this.x;
		}
		if(cacheBottom < y + height) {
			this.height = y + height - this.y;
		}
	},
	__toLimeRectangle: function() {
		if(Rectangle.__limeRectangle == null) {
			Rectangle.__limeRectangle = new (lime_math_Rectangle().default)();
		}
		Rectangle.__limeRectangle.setTo(this.x,this.y,this.width,this.height);
		return Rectangle.__limeRectangle;
	},
	__transform: function(rect,m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = ty0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) {
			tx0 = tx;
		}
		if(ty < ty0) {
			ty0 = ty;
		}
		if(tx > tx1) {
			tx1 = tx;
		}
		if(ty > ty1) {
			ty1 = ty;
		}
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) {
			tx0 = tx;
		}
		if(ty < ty0) {
			ty0 = ty;
		}
		if(tx > tx1) {
			tx1 = tx;
		}
		if(ty > ty1) {
			ty1 = ty;
		}
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) {
			tx0 = tx;
		}
		if(ty < ty0) {
			ty0 = ty;
		}
		if(tx > tx1) {
			tx1 = tx;
		}
		if(ty > ty1) {
			ty1 = ty;
		}
		rect.setTo(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	},
	get_bottom: function() {
		return this.y + this.height;
	},
	set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	},
	get_bottomRight: function() {
		return new (openfl_geom_Point().default)(this.x + this.width,this.y + this.height);
	},
	set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	},
	get_left: function() {
		return this.x;
	},
	set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	},
	get_right: function() {
		return this.x + this.width;
	},
	set_right: function(r) {
		this.width = r - this.x;
		return r;
	},
	get_size: function() {
		return new (openfl_geom_Point().default)(this.width,this.height);
	},
	set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	},
	get_top: function() {
		return this.y;
	},
	set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	},
	get_topLeft: function() {
		return new (openfl_geom_Point().default)(this.x,this.y);
	},
	set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
};
Rectangle.prototype.__class__ = Rectangle.prototype.constructor = $hxClasses["openfl.geom.Rectangle"] = Rectangle;

// Init

Object.defineProperties(Rectangle.prototype,{ bottom : { get : function () { return this.get_bottom (); }, set : function (v) { return this.set_bottom (v); }}, bottomRight : { get : function () { return this.get_bottomRight (); }, set : function (v) { return this.set_bottomRight (v); }}, left : { get : function () { return this.get_left (); }, set : function (v) { return this.set_left (v); }}, right : { get : function () { return this.get_right (); }, set : function (v) { return this.set_right (v); }}, size : { get : function () { return this.get_size (); }, set : function (v) { return this.set_size (v); }}, top : { get : function () { return this.get_top (); }, set : function (v) { return this.set_top (v); }}, topLeft : { get : function () { return this.get_topLeft (); }, set : function (v) { return this.set_topLeft (v); }}});

// Statics


Rectangle.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new Rectangle();
},function(r) {
	r.setTo(0,0,0,0);
})

// Export

exports.default = Rectangle;