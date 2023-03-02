// Class: lime.math.Rectangle

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_math_Vector2() {return require("./../../lime/math/Vector2");}

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

Rectangle.__name__ = "lime.math.Rectangle";
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
		return this.containsVector(point);
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
	containsVector: function(vector) {
		return this.contains(vector.x,vector.y);
	},
	copyFrom: function(sourceRect) {
		this.x = sourceRect.x;
		this.y = sourceRect.y;
		this.width = sourceRect.width;
		this.height = sourceRect.height;
	},
	equals: function(toCompare) {
		if(toCompare != null && this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width) {
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
	inflateVector: function(vector) {
		this.inflate(vector.x,vector.y);
	},
	intersection: function(toIntersect,result) {
		if(result == null) {
			result = new Rectangle();
		}
		var x0 = this.x < toIntersect.x ? toIntersect.x : this.x;
		var x1 = this.get_right() > toIntersect.get_right() ? toIntersect.get_right() : this.get_right();
		if(x1 <= x0) {
			result.setEmpty();
			return result;
		}
		var y0 = this.y < toIntersect.y ? toIntersect.y : this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom() ? toIntersect.get_bottom() : this.get_bottom();
		if(y1 <= y0) {
			result.setEmpty();
			return result;
		}
		result.x = x0;
		result.y = y0;
		result.width = x1 - x0;
		result.height = y1 - y0;
		return result;
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
	offsetVector: function(vector) {
		this.x += vector.x;
		this.y += vector.y;
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
	union: function(toUnion,result) {
		if(result == null) {
			result = new Rectangle();
		}
		if(this.width == 0 || this.height == 0) {
			result.copyFrom(toUnion);
		} else if(toUnion.width == 0 || toUnion.height == 0) {
			result.copyFrom(this);
		} else {
			var x0 = this.x > toUnion.x ? toUnion.x : this.x;
			var x1 = this.get_right() < toUnion.get_right() ? toUnion.get_right() : this.get_right();
			var y0 = this.y > toUnion.y ? toUnion.y : this.y;
			var y1 = this.get_bottom() < toUnion.get_bottom() ? toUnion.get_bottom() : this.get_bottom();
			result.setTo(x0,y0,x1 - x0,y1 - y0);
		}
		return result;
	},
	__toFlashRectangle: function() {
		return null;
	},
	get_bottom: function() {
		return this.y + this.height;
	},
	set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	},
	get_bottomRight: function() {
		return new (lime_math_Vector2().default)(this.x + this.width,this.y + this.height);
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
		return new (lime_math_Vector2().default)(this.width,this.height);
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
		return new (lime_math_Vector2().default)(this.x,this.y);
	},
	set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
};
Rectangle.prototype.__class__ = Rectangle.prototype.constructor = $hxClasses["lime.math.Rectangle"] = Rectangle;

// Init



// Statics




// Export

exports.default = Rectangle;