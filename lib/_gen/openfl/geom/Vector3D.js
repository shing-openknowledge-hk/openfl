// Class: openfl.geom.Vector3D

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var Vector3D = function(x,y,z,w) {
	if(w == null) {
		w = 0;
	}
	if(z == null) {
		z = 0;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
}

// Meta

Vector3D.__name__ = "openfl.geom.Vector3D";
Vector3D.__isInterface__ = false;
Vector3D.prototype = {
	add: function(a) {
		return new Vector3D(this.x + a.x,this.y + a.y,this.z + a.z);
	},
	clone: function() {
		return new Vector3D(this.x,this.y,this.z,this.w);
	},
	copyFrom: function(sourceVector3D) {
		this.x = sourceVector3D.x;
		this.y = sourceVector3D.y;
		this.z = sourceVector3D.z;
	},
	crossProduct: function(a) {
		return new Vector3D(this.y * a.z - this.z * a.y,this.z * a.x - this.x * a.z,this.x * a.y - this.y * a.x,1);
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
	subtract: function(a) {
		return new Vector3D(this.x - a.x,this.y - a.y,this.z - a.z);
	},
	toString: function() {
		return "Vector3D(" + this.x + ", " + this.y + ", " + this.z + ")";
	},
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	},
	get_lengthSquared: function() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
};
Vector3D.prototype.__class__ = Vector3D.prototype.constructor = $hxClasses["openfl.geom.Vector3D"] = Vector3D;

// Init

{
	Object.defineProperties(Vector3D,{ X_AXIS : { get : function() {
		return Vector3D.get_X_AXIS();
	}}, Y_AXIS : { get : function() {
		return Vector3D.get_Y_AXIS();
	}}, Z_AXIS : { get : function() {
		return Vector3D.get_Z_AXIS();
	}}});
	Object.defineProperties(Vector3D.prototype,{ length : { get : function () { return this.get_length (); }}, lengthSquared : { get : function () { return this.get_lengthSquared (); }}});
};

// Statics

Vector3D.angleBetween = function(a,b) {
	var la = a.get_length();
	var lb = b.get_length();
	var dot = a.dotProduct(b);
	if(la != 0) {
		dot /= la;
	}
	if(lb != 0) {
		dot /= lb;
	}
	return Math.acos(dot);
}
Vector3D.distance = function(pt1,pt2) {
	var x = pt2.x - pt1.x;
	var y = pt2.y - pt1.y;
	var z = pt2.z - pt1.z;
	return Math.sqrt(x * x + y * y + z * z);
}
Vector3D.get_X_AXIS = function() {
	return new Vector3D(1,0,0);
}
Vector3D.get_Y_AXIS = function() {
	return new Vector3D(0,1,0);
}
Vector3D.get_Z_AXIS = function() {
	return new Vector3D(0,0,1);
}


// Export

exports.default = Vector3D;