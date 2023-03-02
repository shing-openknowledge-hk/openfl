// Class: lime.math.Matrix3

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function lime_math_Vector2() {return require("./../../lime/math/Vector2");}
function Std() {return require("./../../Std");}
function lime_math_Rectangle() {return require("./../../lime/math/Rectangle");}

// Constructor

var Matrix3 = function(a,b,c,d,tx,ty) {
	if(ty == null) {
		ty = 0;
	}
	if(tx == null) {
		tx = 0;
	}
	if(d == null) {
		d = 1;
	}
	if(c == null) {
		c = 0;
	}
	if(b == null) {
		b = 0;
	}
	if(a == null) {
		a = 1;
	}
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
}

// Meta

Matrix3.__name__ = "lime.math.Matrix3";
Matrix3.__isInterface__ = false;
Matrix3.prototype = {
	clone: function() {
		return new Matrix3(this.a,this.b,this.c,this.d,this.tx,this.ty);
	},
	concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.ty = this.tx * m.b + this.ty * m.d + m.ty;
		this.tx = tx1;
	},
	copyColumnFrom: function(column,vector4) {
		if(column > 2) {
			throw new (js__$Boot_HaxeError().default)("Column " + column + " out of bounds (2)");
		} else if(column == 0) {
			this.a = vector4.x;
			this.b = vector4.y;
		} else if(column == 1) {
			this.c = vector4.x;
			this.d = vector4.y;
		} else {
			this.tx = vector4.x;
			this.ty = vector4.y;
		}
	},
	copyColumnTo: function(column,vector4) {
		if(column > 2) {
			throw new (js__$Boot_HaxeError().default)("Column " + column + " out of bounds (2)");
		} else if(column == 0) {
			vector4.x = this.a;
			vector4.y = this.b;
			vector4.z = 0;
		} else if(column == 1) {
			vector4.x = this.c;
			vector4.y = this.d;
			vector4.z = 0;
		} else {
			vector4.x = this.tx;
			vector4.y = this.ty;
			vector4.z = 1;
		}
	},
	copyFrom: function(sourceMatrix3) {
		this.a = sourceMatrix3.a;
		this.b = sourceMatrix3.b;
		this.c = sourceMatrix3.c;
		this.d = sourceMatrix3.d;
		this.tx = sourceMatrix3.tx;
		this.ty = sourceMatrix3.ty;
	},
	copyRowFrom: function(row,vector4) {
		if(row > 2) {
			throw new (js__$Boot_HaxeError().default)("Row " + row + " out of bounds (2)");
		} else if(row == 0) {
			this.a = vector4.x;
			this.c = vector4.y;
			this.tx = vector4.z;
		} else if(row == 1) {
			this.b = vector4.x;
			this.d = vector4.y;
			this.ty = vector4.z;
		}
	},
	copyRowTo: function(row,vector4) {
		if(row > 2) {
			throw new (js__$Boot_HaxeError().default)("Row " + row + " out of bounds (2)");
		} else if(row == 0) {
			vector4.x = this.a;
			vector4.y = this.c;
			vector4.z = this.tx;
		} else if(row == 1) {
			vector4.x = this.b;
			vector4.y = this.d;
			vector4.z = this.ty;
		} else {
			vector4.setTo(0,0,1);
		}
	},
	createBox: function(scaleX,scaleY,rotation,tx,ty) {
		if(ty == null) {
			ty = 0;
		}
		if(tx == null) {
			tx = 0;
		}
		if(rotation == null) {
			rotation = 0;
		}
		if(rotation != 0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.a = cos * scaleX;
			this.b = sin * scaleY;
			this.c = -sin * scaleX;
			this.d = cos * scaleY;
		} else {
			this.a = scaleX;
			this.b = 0;
			this.c = 0;
			this.d = scaleY;
		}
		this.tx = tx;
		this.ty = ty;
	},
	createGradientBox: function(width,height,rotation,tx,ty) {
		if(ty == null) {
			ty = 0;
		}
		if(tx == null) {
			tx = 0;
		}
		if(rotation == null) {
			rotation = 0;
		}
		this.a = width / 1638.4;
		this.d = height / 1638.4;
		if(rotation != 0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.tx = tx + width / 2;
		this.ty = ty + height / 2;
	},
	equals: function(matrix3) {
		if(matrix3 != null && this.tx == matrix3.tx && this.ty == matrix3.ty && this.a == matrix3.a && this.b == matrix3.b && this.c == matrix3.c) {
			return this.d == matrix3.d;
		} else {
			return false;
		}
	},
	deltaTransformVector: function(Vector2,result) {
		if(result == null) {
			result = new (lime_math_Vector2().default)();
		}
		result.x = Vector2.x * this.a + Vector2.y * this.c;
		result.y = Vector2.x * this.b + Vector2.y * this.d;
		return result;
	},
	identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;
	},
	invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = tx1;
		}
		return this;
	},
	rotate: function(theta) {
		var cos = Math.cos(theta);
		var sin = Math.sin(theta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.ty = this.tx * sin + this.ty * cos;
		this.tx = tx1;
	},
	scale: function(sx,sy) {
		this.a *= sx;
		this.b *= sy;
		this.c *= sx;
		this.d *= sy;
		this.tx *= sx;
		this.ty *= sy;
	},
	setRotation: function(theta,scale) {
		if(scale == null) {
			scale = 1;
		}
		this.a = Math.cos(theta) * scale;
		this.c = Math.sin(theta) * scale;
		this.b = -this.c;
		this.d = this.a;
	},
	setTo: function(a,b,c,d,tx,ty) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	},
	to3DString: function(roundPixels) {
		if(roundPixels == null) {
			roundPixels = false;
		}
		if(roundPixels) {
			return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + (Std().default).int(this.tx) + ", " + (Std().default).int(this.ty) + ", 0, 1)";
		} else {
			return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)";
		}
	},
	toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	},
	transformRect: function(rect,result) {
		if(result == null) {
			result = new (lime_math_Rectangle().default)();
		}
		var tx0 = this.a * rect.x + this.c * rect.y;
		var tx1 = tx0;
		var ty0 = this.b * rect.x + this.d * rect.y;
		var ty1 = ty0;
		var tx = this.a * (rect.x + rect.width) + this.c * rect.y;
		var ty = this.b * (rect.x + rect.width) + this.d * rect.y;
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
		tx = this.a * (rect.x + rect.width) + this.c * (rect.y + rect.height);
		ty = this.b * (rect.x + rect.width) + this.d * (rect.y + rect.height);
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
		tx = this.a * rect.x + this.c * (rect.y + rect.height);
		ty = this.b * rect.x + this.d * (rect.y + rect.height);
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
		result.setTo(tx0 + tx,ty0 + ty,tx1 - tx0,ty1 - ty0);
		return result;
	},
	transformVector: function(pos,result) {
		if(result == null) {
			result = new (lime_math_Vector2().default)();
		}
		result.x = pos.x * this.a + pos.y * this.c + this.tx;
		result.y = pos.x * this.b + pos.y * this.d + this.ty;
		return result;
	},
	translate: function(dx,dy) {
		this.tx += dx;
		this.ty += dy;
	}
};
Matrix3.prototype.__class__ = Matrix3.prototype.constructor = $hxClasses["lime.math.Matrix3"] = Matrix3;

// Init



// Statics


Matrix3.__identity = new Matrix3()

// Export

exports.default = Matrix3;