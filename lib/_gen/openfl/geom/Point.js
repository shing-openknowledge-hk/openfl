// Class: openfl.geom.Point

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_math_Vector2() {return require("./../../lime/math/Vector2");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}

// Constructor

var Point = function(x,y) {
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.x = x;
	this.y = y;
}

// Meta

Point.__name__ = "openfl.geom.Point";
Point.__isInterface__ = false;
Point.prototype = {
	add: function(v) {
		return new Point(v.x + this.x,v.y + this.y);
	},
	clone: function() {
		return new Point(this.x,this.y);
	},
	copyFrom: function(sourcePoint) {
		this.x = sourcePoint.x;
		this.y = sourcePoint.y;
	},
	equals: function(toCompare) {
		if(toCompare != null && toCompare.x == this.x) {
			return toCompare.y == this.y;
		} else {
			return false;
		}
	},
	normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) {
			return;
		} else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	},
	offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	},
	setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	},
	subtract: function(v) {
		return new Point(this.x - v.x,this.y - v.y);
	},
	toString: function() {
		return "(x=" + this.x + ", y=" + this.y + ")";
	},
	__toLimeVector2: function() {
		if(Point.__limeVector2 == null) {
			Point.__limeVector2 = new (lime_math_Vector2().default)();
		}
		Point.__limeVector2.setTo(this.x,this.y);
		return Point.__limeVector2;
	},
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
};
Point.prototype.__class__ = Point.prototype.constructor = $hxClasses["openfl.geom.Point"] = Point;

// Init

Object.defineProperty(Point.prototype,"length",{ get : function () { return this.get_length (); }});

// Statics

Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
Point.interpolate = function(pt1,pt2,f) {
	return new Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
Point.polar = function(len,angle) {
	return new Point(len * Math.cos(angle),len * Math.sin(angle));
}
Point.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new Point();
},function(p) {
	p.setTo(0,0);
})

// Export

exports.default = Point;