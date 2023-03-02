// Class: lime.math.Vector4

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var Vector4 = function(x,y,z,w) {
	if(w == null) {
		w = 0.;
	}
	if(z == null) {
		z = 0.;
	}
	if(y == null) {
		y = 0.;
	}
	if(x == null) {
		x = 0.;
	}
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
}

// Meta

Vector4.__name__ = "lime.math.Vector4";
Vector4.__isInterface__ = false;
Vector4.prototype = {
	add: function(a,result) {
		if(result == null) {
			result = new Vector4();
		}
		result.setTo(this.x + a.x,this.y + a.y,this.z + a.z);
		return result;
	},
	clone: function() {
		return new Vector4(this.x,this.y,this.z,this.w);
	},
	copyFrom: function(sourceVector4) {
		this.x = sourceVector4.x;
		this.y = sourceVector4.y;
		this.z = sourceVector4.z;
	},
	crossProduct: function(a,result) {
		if(result == null) {
			result = new Vector4();
		}
		result.setTo(this.y * a.z - this.z * a.y,this.z * a.x - this.x * a.z,this.x * a.y - this.y * a.x);
		result.w = 1;
		return result;
	},
	decrementBy: function(a) {
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z;
	},
	dotProduct: function(a) {
		return this.x * a.x + this.y * a.y + this.z * a.z;
	},
	equals: function(toCompare,allFour) {
		if(allFour == null) {
			allFour = false;
		}
		if(this.x == toCompare.x && this.y == toCompare.y && this.z == toCompare.z) {
			if(!(!allFour)) {
				return this.w == toCompare.w;
			} else {
				return true;
			}
		} else {
			return false;
		}
	},
	incrementBy: function(a) {
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
	},
	nearEquals: function(toCompare,tolerance,allFour) {
		if(allFour == null) {
			allFour = false;
		}
		if(Math.abs(this.x - toCompare.x) < tolerance && Math.abs(this.y - toCompare.y) < tolerance && Math.abs(this.z - toCompare.z) < tolerance) {
			if(!(!allFour)) {
				return Math.abs(this.w - toCompare.w) < tolerance;
			} else {
				return true;
			}
		} else {
			return false;
		}
	},
	negate: function() {
		this.x *= -1;
		this.y *= -1;
		this.z *= -1;
	},
	normalize: function() {
		var l = this.get_length();
		if(l != 0) {
			this.x /= l;
			this.y /= l;
			this.z /= l;
		}
		return l;
	},
	project: function() {
		this.x /= this.w;
		this.y /= this.w;
		this.z /= this.w;
	},
	scaleBy: function(s) {
		this.x *= s;
		this.y *= s;
		this.z *= s;
	},
	setTo: function(xa,ya,za) {
		this.x = xa;
		this.y = ya;
		this.z = za;
	},
	subtract: function(a,result) {
		if(result == null) {
			result = new Vector4();
		}
		result.setTo(this.x - a.x,this.y - a.y,this.z - a.z);
		return result;
	},
	toString: function() {
		return "Vector4(" + this.x + ", " + this.y + ", " + this.z + ")";
	},
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	},
	get_lengthSquared: function() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
};
Vector4.prototype.__class__ = Vector4.prototype.constructor = $hxClasses["lime.math.Vector4"] = Vector4;

// Init



// Statics

Vector4.angleBetween = function(a,b) {
	var a0 = a.clone();
	a0.normalize();
	var b0 = b.clone();
	b0.normalize();
	return Math.acos(a0.dotProduct(b0));
}
Vector4.distance = function(pt1,pt2) {
	var x = pt2.x - pt1.x;
	var y = pt2.y - pt1.y;
	var z = pt2.z - pt1.z;
	return Math.sqrt(x * x + y * y + z * z);
}
Vector4.distanceSquared = function(pt1,pt2) {
	var x = pt2.x - pt1.x;
	var y = pt2.y - pt1.y;
	var z = pt2.z - pt1.z;
	return x * x + y * y + z * z;
}
Vector4.get_X_AXIS = function() {
	return new Vector4(1,0,0);
}
Vector4.get_Y_AXIS = function() {
	return new Vector4(0,1,0);
}
Vector4.get_Z_AXIS = function() {
	return new Vector4(0,0,1);
}


// Export

exports.default = Vector4;