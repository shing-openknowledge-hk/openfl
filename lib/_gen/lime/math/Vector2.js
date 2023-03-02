// Class: lime.math.Vector2

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var Vector2 = function(x,y) {
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

Vector2.__name__ = "lime.math.Vector2";
Vector2.__isInterface__ = false;
Vector2.prototype = {
	add: function(v,result) {
		if(result == null) {
			result = new Vector2();
		}
		result.setTo(v.x + this.x,v.y + this.y);
		return result;
	},
	clone: function() {
		return new Vector2(this.x,this.y);
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
	subtract: function(v,result) {
		if(result == null) {
			result = new Vector2();
		}
		result.setTo(this.x - v.x,this.y - v.y);
		return result;
	},
	__toFlashPoint: function() {
		return null;
	},
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},
	get_lengthSquared: function() {
		return this.x * this.x + this.y * this.y;
	}
};
Vector2.prototype.__class__ = Vector2.prototype.constructor = $hxClasses["lime.math.Vector2"] = Vector2;

// Init



// Statics

Vector2.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
Vector2.interpolate = function(pt1,pt2,f,result) {
	if(result == null) {
		result = new Vector2();
	}
	result.setTo(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
	return result;
}
Vector2.polar = function(len,angle,result) {
	if(result == null) {
		result = new Vector2();
	}
	result.setTo(len * Math.cos(angle),len * Math.sin(angle));
	return result;
}


// Export

exports.default = Vector2;